export interface QuizAnswerLine {
  stepId: string;
  question: string;
  answer: string;
}

export interface LeadData {
  phone: string;
  source: string;
  quizAnswers?: QuizAnswerLine[];
  utm: Record<string, string | undefined>;
  referrer?: string;
  timestamp: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function formatLeadMessage(data: LeadData): string {
  const lines: string[] = [];
  lines.push('<b>Новая заявка</b>');
  lines.push('');
  lines.push(`Телефон: <code>${escapeHtml(data.phone)}</code>`);
  lines.push(`Источник: <code>${escapeHtml(data.source)}</code>`);
  lines.push(`Время: <code>${escapeHtml(data.timestamp)}</code>`);

  if (data.referrer) {
    lines.push(`Referrer: ${escapeHtml(data.referrer)}`);
  }

  const utmEntries = Object.entries(data.utm).filter(
    ([, v]) => v !== undefined && v !== '',
  );
  if (utmEntries.length > 0) {
    lines.push('');
    lines.push('<b>UTM / метки</b>');
    for (const [k, v] of utmEntries) {
      lines.push(`${escapeHtml(k)}: ${escapeHtml(String(v))}`);
    }
  }

  if (data.quizAnswers && data.quizAnswers.length > 0) {
    lines.push('');
    lines.push('<b>Ответы квиза</b>');
    for (const row of data.quizAnswers) {
      lines.push(
        `• ${escapeHtml(row.question)} → <i>${escapeHtml(row.answer)}</i>`,
      );
    }
  }

  return lines.join('\n');
}

export async function sendLeadToTelegram(data: LeadData): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error('Telegram: missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    return false;
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const text = formatLeadMessage(data);

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: true,
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    console.error('Telegram API error:', res.status, errText);
    return false;
  }

  const json = (await res.json()) as { ok?: boolean };
  return Boolean(json.ok);
}
