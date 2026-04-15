'use client';

import { useCallback, useMemo, useState } from 'react';
import { quizSteps } from '@/data/quiz';
import { quizSectionContent } from '@/data/content';
import type { QuizAnswerLine } from '@/lib/telegram';
import { QuizProgress } from '@/components/ui/QuizProgress';
import { QuizStep } from '@/components/ui/QuizStep';
import { LeadForm } from '@/components/ui/LeadForm';
import { ThankYou } from '@/components/ui/ThankYou';

function buildQuizAnswerLines(
  answers: Record<string, string>,
): QuizAnswerLine[] {
  return quizSteps.map((step) => {
    const oid = answers[step.id];
    const label =
      step.options.find((o) => o.id === oid)?.label ?? oid ?? '—';
    return {
      stepId: step.id,
      question: step.question,
      answer: label,
    };
  });
}

export function QuizSection() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [phase, setPhase] = useState<'quiz' | 'lead' | 'thanks'>('quiz');

  const handlePick = useCallback(
    (optionId: string) => {
      const step = quizSteps[stepIndex];
      setAnswers((prev) => ({ ...prev, [step.id]: optionId }));
      if (stepIndex < quizSteps.length - 1) {
        setStepIndex((i) => i + 1);
      } else {
        setPhase('lead');
      }
    },
    [stepIndex],
  );

  const quizAnswerLines = useMemo(
    () => buildQuizAnswerLines(answers),
    [answers],
  );

  const progressCurrent =
    phase === 'quiz' ? stepIndex + 1 : phase === 'lead' ? 5 : 5;

  return (
    <section
      id="quiz"
      className="scroll-mt-4 bg-cream-warm px-0 py-12 md:scroll-mt-8 md:px-4 md:py-20"
    >
      <div className="mx-auto max-w-2xl md:max-w-3xl">
        <header className="px-4 text-center md:px-0">
          <h2 className="text-2xl font-semibold tracking-tight text-anthracite md:text-3xl">
            {quizSectionContent.title}
          </h2>
        </header>

        <div className="mt-8 min-h-0 border-anthracite/10 bg-white px-4 py-6 shadow-none md:rounded-3xl md:border md:px-8 md:py-8 md:shadow-lg">
          {phase === 'thanks' ? (
            <ThankYou />
          ) : (
            <>
              <QuizProgress current={progressCurrent} total={5} />
              <div className="mt-8">
                {phase === 'quiz' ? (
                  <QuizStep
                    key={stepIndex}
                    step={quizSteps[stepIndex]}
                    onPick={handlePick}
                  />
                ) : (
                  <div className="animate-fade-in space-y-4">
                    <h3 className="text-xl font-semibold text-anthracite md:text-2xl">
                      {quizSectionContent.leadTitle}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-anthracite/75">
                      {quizSectionContent.leadSubtitle}
                    </p>
                    <LeadForm
                      source="quiz"
                      quizAnswers={quizAnswerLines}
                      submitLabel={quizSectionContent.submitLabel}
                      errorMessage={quizSectionContent.errorMessage}
                      disclaimer={quizSectionContent.disclaimer}
                      placeholder={quizSectionContent.phonePlaceholder}
                      onSuccess={() => setPhase('thanks')}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
