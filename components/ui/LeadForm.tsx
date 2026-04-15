'use client';

import { useState, type FormEvent } from 'react';
import type { QuizAnswerLine } from '@/lib/telegram';
import { useUTM } from '@/lib/utm';
import {
  formatBelarusPhone,
  isValidBelarusPhone,
  toE164Belarus,
} from '@/lib/phone';
import { siteConfig } from '@/data/config';
import { Button } from './Button';

export interface LeadFormProps {
  source: 'quiz' | 'final_form';
  quizAnswers?: QuizAnswerLine[];
  submitLabel: string;
  errorMessage: string;
  disclaimer?: string;
  placeholder?: string;
  onSuccess?: () => void;
}

const leadApiUrl = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/api/lead`;

export function LeadForm({
  source,
  quizAnswers,
  submitLabel,
  errorMessage,
  disclaimer,
  placeholder = '+375 (__) ___-__-__',
  onSuccess,
}: LeadFormProps) {
  const utm = useUTM();
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [staticHostFallback, setStaticHostFallback] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValidBelarusPhone(phone)) {
      setError(true);
      setStaticHostFallback(false);
      return;
    }
    setLoading(true);
    setError(false);
    setStaticHostFallback(false);
    const payload = {
      phone: toE164Belarus(phone),
      source,
      quizAnswers,
      utm: {
        utm_source: utm.utm_source,
        utm_medium: utm.utm_medium,
        utm_campaign: utm.utm_campaign,
        utm_content: utm.utm_content,
        utm_term: utm.utm_term,
      },
      referrer: utm.referrer,
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch(leadApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.status === 404 || res.status === 405) {
        setStaticHostFallback(true);
        setError(true);
        return;
      }

      let data: { success?: boolean } = {};
      try {
        data = (await res.json()) as { success?: boolean };
      } catch {
        setStaticHostFallback(true);
        setError(true);
        return;
      }

      if (!res.ok || !data.success) {
        setError(true);
        return;
      }
      onSuccess?.();
    } catch {
      setStaticHostFallback(true);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-left">
        <span className="mb-1.5 block text-sm font-medium text-anthracite/70">
          Телефон
        </span>
        <input
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder={placeholder}
          value={phone}
          onChange={(e) => {
            setError(false);
            setStaticHostFallback(false);
            setPhone(formatBelarusPhone(e.target.value));
          }}
          className="w-full rounded-xl border border-anthracite/12 bg-white px-4 py-3.5 text-[15px] text-anthracite outline-none ring-ember/0 transition placeholder:text-anthracite/35 focus:border-ember/40 focus:ring-4 focus:ring-ember/15"
        />
      </label>

      {error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-left text-sm text-red-800">
          {staticHostFallback ? (
            <>
              Онлайн-отправка заявки на этой версии сайта недоступна (статический
              хостинг без сервера). Позвоните нам:{' '}
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="font-semibold underline decoration-red-800/30 underline-offset-2"
              >
                {siteConfig.phone}
              </a>
              .
            </>
          ) : (
            <>
              {errorMessage}{' '}
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="font-semibold underline decoration-red-800/30 underline-offset-2"
              >
                {siteConfig.phone}
              </a>
            </>
          )}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        fullWidthMobile
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Отправка…' : submitLabel}
      </Button>

      {disclaimer ? (
        <p className="text-center text-xs leading-relaxed text-anthracite/45">
          {disclaimer}
        </p>
      ) : null}
    </form>
  );
}
