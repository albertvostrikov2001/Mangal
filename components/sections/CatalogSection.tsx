import { catalogProducts } from '@/data/catalog';
import { catalogSectionContent } from '@/data/content';
import { ProductCard } from '@/components/ui/ProductCard';

export function CatalogSection() {
  return (
    <section
      id="catalog"
      className="scroll-mt-6 bg-cream-warm px-4 py-16 md:scroll-mt-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-anthracite md:text-3xl">
            {catalogSectionContent.title}
          </h2>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-anthracite/70 md:text-base">
            {catalogSectionContent.subtitle}
          </p>
        </header>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:snap-none md:grid-cols-2 md:items-stretch md:gap-6 md:overflow-visible lg:grid-cols-3">
          {catalogProducts.map((p) => (
            <div
              key={p.id}
              className="flex h-full snap-center shrink-0 md:shrink"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
