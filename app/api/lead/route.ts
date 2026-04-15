import { NextResponse } from 'next/server';
import type { LeadData, QuizAnswerLine } from '@/lib/telegram';
import { sendLeadToTelegram } from '@/lib/telegram';

export const runtime = 'nodejs';

interface LeadRequestBody {
  phone: string;
  source: string;
  quizAnswers?: QuizAnswerLine[];
  utm?: Record<string, string | undefined>;
  referrer?: string;
  timestamp?: string;
}

export async function POST(request: Request) {
  let body: LeadRequestBody;
  try {
    body = (await request.json()) as LeadRequestBody;
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const source = typeof body.source === 'string' ? body.source.trim() : '';

  if (!phone || !source) {
    return NextResponse.json({ success: false }, { status: 400 });
  }

  const payload: LeadData = {
    phone,
    source,
    quizAnswers: Array.isArray(body.quizAnswers) ? body.quizAnswers : undefined,
    utm: body.utm && typeof body.utm === 'object' ? body.utm : {},
    referrer: typeof body.referrer === 'string' ? body.referrer : undefined,
    timestamp:
      typeof body.timestamp === 'string'
        ? body.timestamp
        : new Date().toISOString(),
  };

  const ok = await sendLeadToTelegram(payload);
  return NextResponse.json({ success: ok }, { status: ok ? 200 : 502 });
}
