import Image from 'next/image';
import { heroContent } from '@/data/content';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-anthracite-dark">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_100%_20%,rgba(234,88,12,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-12 pt-24 md:gap-10 md:pb-16 md:pt-20 lg:flex-row lg:items-center lg:gap-12 lg:pb-20 lg:pt-16">
        <div className="order-2 flex min-w-0 flex-1 flex-col justify-center lg:order-1 lg:max-w-xl lg:pr-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Производство · Беларусь
          </p>
          <h1 className="text-balance text-[1.65rem] font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl md:leading-[1.15]">
            {heroContent.headline}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-white/85 md:text-lg">
            {heroContent.subheadline}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {heroContent.trustBullets.map((b) => (
              <li
                key={b.id}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/15 backdrop-blur-sm sm:text-sm"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                  aria-hidden
                />
                {b.text}
              </li>
            ))}
          </ul>
          <a href="#quiz" className="mt-8 block md:mt-10">
            <Button
              variant="primary"
              fullWidthMobile
              className="w-full min-h-[52px] text-base shadow-lg shadow-black/20 md:w-auto md:px-10"
            >
              {heroContent.ctaLabel}
            </Button>
          </a>
        </div>

        <div className="order-1 w-full shrink-0 lg:order-2 lg:max-w-[520px] lg:flex-1">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-neutral-100 shadow-2xl shadow-black/25 ring-1 ring-white/10 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full sm:aspect-[5/6] md:aspect-[5/6] lg:aspect-[4/5]">
              <Image
                src={heroContent.imageSrc}
                alt={heroContent.imageAlt}
                fill
                priority
                className="object-contain object-[center_42%] sm:object-[center_40%] md:object-center"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
