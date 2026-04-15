import { whyUsContent } from '@/data/content';

export function WhyUsSection() {
  return (
    <section className="relative overflow-hidden bg-cream px-4 py-16 md:py-24">
      <div
        className="pointer-events-none absolute -right-16 top-24 hidden text-[11rem] font-bold leading-none text-anthracite/[0.04] select-none md:block"
        aria-hidden
      >
        BY
      </div>
      <div className="relative mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-anthracite md:text-3xl lg:text-[2rem] lg:leading-snug">
            {whyUsContent.title}
          </h2>
          <p className="mt-5 text-pretty text-[17px] font-medium leading-relaxed text-anthracite/80 md:text-lg">
            {whyUsContent.intro}
          </p>
        </header>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:gap-6 lg:items-stretch">
          <article className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-anthracite p-8 text-white shadow-xl lg:col-span-7 lg:min-h-[340px] lg:p-10">
            <div
              className="pointer-events-none absolute -right-4 top-6 text-[7rem] font-bold leading-none text-white/[0.07] sm:text-[9rem]"
              aria-hidden
            >
              {whyUsContent.heroCard.watermark}
            </div>
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember-muted">
                {whyUsContent.heroCard.eyebrow}
              </p>
              <h3 className="mt-4 text-xl font-semibold leading-snug md:text-2xl">
                {whyUsContent.heroCard.title}
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/78">
                {whyUsContent.heroCard.body}
              </p>
            </div>
            <p className="relative mt-8 border-t border-white/15 pt-5 text-sm font-medium text-white/60 md:mt-10">
              {whyUsContent.heroCard.footnote}
            </p>
          </article>

          <div className="flex flex-col gap-5 lg:col-span-5">
            {whyUsContent.stackCards.map((card) => (
              <article
                key={card.id}
                className={`relative flex flex-1 flex-col rounded-2xl border p-6 shadow-sm transition hover:border-anthracite/20 hover:shadow-md md:p-7 ${
                  card.id === 'manufacturer'
                    ? 'border-anthracite/12 bg-white'
                    : 'border-anthracite/10 bg-white/90'
                }`}
              >
                {card.id === 'service' ? (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-ember/12 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ember">
                    {card.badge}
                  </span>
                ) : null}
                {card.id === 'manufacturer' ? (
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-14 min-w-[3.5rem] flex-col items-center justify-center rounded-2xl bg-anthracite text-center text-white shadow-inner">
                      <span className="text-2xl font-bold leading-none tabular-nums">
                        {card.metric}
                      </span>
                    </div>
                    <p className="whitespace-pre-line text-xs font-semibold uppercase leading-snug tracking-wide text-anthracite/45">
                      {card.metricCaption}
                    </p>
                  </div>
                ) : null}
                <h3 className="text-lg font-semibold leading-snug text-anthracite">
                  {card.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-anthracite/72">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
