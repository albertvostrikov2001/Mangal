import { reviewsContent } from '@/data/content';

export function ReviewsSection() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-anthracite md:text-3xl">
            {reviewsContent.title}
          </h2>
          <p className="mt-3 text-pretty text-[15px] text-anthracite/70 md:text-base">
            {reviewsContent.subtitle}
          </p>
        </header>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:snap-none md:grid-cols-2 lg:grid-cols-3">
          {reviewsContent.reviews.map((r) => (
            <article
              key={r.id}
              className={`min-w-[min(calc(100vw-2rem),340px)] shrink-0 snap-center rounded-2xl border p-4 shadow-sm md:min-w-0 ${
                r.variant === 'telegram'
                  ? 'border-sky-200/80 bg-sky-50/50'
                  : 'border-emerald-200/80 bg-emerald-50/40'
              }`}
            >
              <div className="flex items-center justify-between gap-2 border-b border-anthracite/10 pb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${
                      r.variant === 'telegram' ? 'bg-sky-500' : 'bg-emerald-600'
                    }`}
                  >
                    {r.author[0]}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-anthracite">
                      {r.author}
                    </p>
                    <p className="text-[11px] text-anthracite/50">
                      {r.variant === 'telegram' ? 'Telegram' : 'WhatsApp'}
                    </p>
                  </div>
                </div>
                <time className="text-xs text-anthracite/45">{r.time}</time>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-anthracite/85">
                {r.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
