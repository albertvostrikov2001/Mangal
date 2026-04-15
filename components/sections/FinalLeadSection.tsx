'use client';

import { useState } from 'react';
import { finalLeadContent } from '@/data/content';
import { quizSectionContent } from '@/data/content';
import { LeadForm } from '@/components/ui/LeadForm';

export function FinalLeadSection() {
  const [done, setDone] = useState(false);

  return (
    <section
      id="final-lead"
      className="scroll-mt-6 bg-anthracite px-4 py-16 text-white md:scroll-mt-8 md:py-20"
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {finalLeadContent.title}
        </h2>
        <p className="mt-3 text-pretty text-[15px] leading-relaxed text-white/75">
          {finalLeadContent.subtitle}
        </p>
        <div className="mt-8 rounded-2xl bg-white p-5 text-anthracite shadow-xl md:p-8">
          {done ? (
            <div className="py-4 text-center">
              <div
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 text-ember"
                aria-hidden
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-anthracite">
                {finalLeadContent.successTitle}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-anthracite/75">
                {finalLeadContent.successBody}
              </p>
            </div>
          ) : (
            <LeadForm
              source="final_form"
              submitLabel={finalLeadContent.submitLabel}
              errorMessage={finalLeadContent.errorMessage}
              placeholder={quizSectionContent.phonePlaceholder}
              onSuccess={() => setDone(true)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
