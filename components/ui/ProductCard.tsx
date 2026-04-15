import Image from 'next/image';
import type { CatalogProduct } from '@/data/catalog';
import { catalogSectionContent } from '@/data/content';
import { Button } from './Button';

interface ProductCardProps {
  product: CatalogProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full w-[min(calc(100vw-2rem),320px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-anthracite/8 bg-white shadow-sm transition hover:border-anthracite/15 hover:shadow-md md:w-full md:shrink md:min-h-0">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          fill
          className={`object-cover transition duration-500 group-hover:scale-[1.03] ${product.imageClassName ?? ''}`}
          sizes="(max-width: 768px) 85vw, 33vw"
          loading="lazy"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-semibold text-anthracite shadow-sm backdrop-blur-sm">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3 className="text-lg font-semibold text-anthracite">{product.name}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-anthracite/70">
          {product.shortDescription}
        </p>
        <a href="#quiz" className="mt-4 block">
          <Button variant="primary" fullWidthMobile className="w-full">
            {catalogSectionContent.cardCta}
          </Button>
        </a>
      </div>
    </article>
  );
}
