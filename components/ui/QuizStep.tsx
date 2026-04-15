import Image from 'next/image';
import type { ReactNode } from 'react';
import type {
  QuizFrequencyIconId,
  QuizOption,
  QuizStepConfig,
} from '@/data/quiz';

const frequencyIcons: Record<QuizFrequencyIconId, ReactNode> = {
  rare: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  weekends: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  ),
  intense: (
    <svg
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
};

interface QuizStepProps {
  step: QuizStepConfig;
  onPick: (optionId: string) => void;
}

function VisualOptions({
  options,
  onPick,
}: {
  options: QuizOption[];
  onPick: (id: string) => void;
}) {
  return (
    <ul className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:gap-3 md:grid-cols-2 lg:grid-cols-4">
      {options.map((opt) => (
        <li key={opt.id}>
          <button
            type="button"
            onClick={() => onPick(opt.id)}
            className="group w-full min-h-[44px] overflow-hidden rounded-xl border border-anthracite/10 bg-cream-warm text-left transition hover:border-ember/45 hover:bg-white hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember active:scale-[0.99]"
            aria-label={opt.label}
          >
            <div className="relative h-20 w-full bg-neutral-100 sm:h-[5.25rem]">
              {opt.imageSrc && opt.imageAlt ? (
                <Image
                  src={opt.imageSrc}
                  alt={opt.imageAlt}
                  fill
                  className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 45vw, 180px"
                  loading="lazy"
                />
              ) : null}
            </div>
            <div className="px-2 py-2 sm:px-2.5 sm:py-2.5">
              <p className="whitespace-pre-line text-center text-[13px] font-semibold leading-tight text-anthracite sm:text-sm">
                {opt.cardTitle ?? opt.label}
              </p>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}

function IconRowOptions({
  options,
  onPick,
}: {
  options: QuizOption[];
  onPick: (id: string) => void;
}) {
  return (
    <ul className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
      {options.map((opt) => (
        <li key={opt.id} className="min-w-0 flex-1">
          <button
            type="button"
            onClick={() => onPick(opt.id)}
            className="flex w-full items-center gap-3 rounded-2xl border border-anthracite/10 bg-cream-warm px-4 py-3.5 text-left transition hover:border-ember/35 hover:bg-white hover:shadow-sm sm:min-h-[108px] sm:flex-col sm:justify-center sm:px-3 sm:py-4"
            aria-label={opt.label}
          >
            {opt.iconId ? (
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-anthracite text-white sm:mx-auto">
                {frequencyIcons[opt.iconId]}
              </span>
            ) : null}
            <span className="text-[14px] font-medium leading-snug text-anthracite sm:text-center sm:text-[13px]">
              {opt.label}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function ListOptions({
  options,
  onPick,
}: {
  options: QuizOption[];
  onPick: (id: string) => void;
}) {
  return (
    <ul className="mt-5 flex flex-col gap-2.5">
      {options.map((opt) => (
        <li key={opt.id}>
          <button
            type="button"
            onClick={() => onPick(opt.id)}
            className="w-full rounded-xl border border-anthracite/10 bg-cream-warm px-4 py-3.5 text-left text-[15px] font-medium text-anthracite transition hover:border-ember/35 hover:bg-white hover:shadow-sm active:scale-[0.99]"
            aria-label={opt.label}
          >
            {opt.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export function QuizStep({ step, onPick }: QuizStepProps) {
  return (
    <div className="animate-slide-up">
      <h3 className="text-lg font-semibold leading-snug text-anthracite md:text-xl">
        {step.question}
      </h3>
      {step.layout === 'visual' ? (
        <VisualOptions options={step.options} onPick={onPick} />
      ) : null}
      {step.layout === 'iconRow' ? (
        <IconRowOptions options={step.options} onPick={onPick} />
      ) : null}
      {step.layout === 'list' ? (
        <ListOptions options={step.options} onPick={onPick} />
      ) : null}
    </div>
  );
}
