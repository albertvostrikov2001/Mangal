import Image from 'next/image';
import { qualityContent } from '@/data/content';

export function QualitySection() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-anthracite md:text-4xl md:leading-tight">
            {qualityContent.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-anthracite/70 md:text-lg">
            {qualityContent.subhead}
          </p>
        </div>

        <ul className="mx-auto mt-12 flex max-w-4xl flex-col gap-8 border-y border-anthracite/10 py-10 md:flex-row md:items-start md:justify-between md:gap-6 md:py-12">
          {qualityContent.metrics.map((m) => (
            <li
              key={m.value}
              className="flex-1 text-center md:max-w-[13rem] md:text-left"
            >
              <p className="text-3xl font-semibold tabular-nums tracking-tight text-anthracite md:text-4xl">
                {m.value}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-anthracite/65 md:text-sm">
                {m.caption}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 overflow-hidden rounded-2xl bg-anthracite/5 ring-1 ring-anthracite/10 lg:order-1">
            <div className="relative aspect-[4/3] w-full sm:aspect-[5/4]">
              <Image
                src={qualityContent.imageSrc}
                alt={qualityContent.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
          <ul className="order-1 space-y-8 lg:order-2 lg:pt-2">
            {qualityContent.pillars.map((p, i) => (
              <li
                key={p.id}
                className="border-l-2 border-ember/35 pl-5 md:pl-6"
              >
                <span className="text-xs font-semibold tabular-nums text-anthracite/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-anthracite">
                  {p.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-anthracite/72">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
