import Link from 'next/link';
import { siteConfig } from '@/data/config';
import { footerContent } from '@/data/content';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-anthracite/10 bg-cream px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center text-sm text-anthracite/65 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-semibold text-anthracite">{siteConfig.brandName}</p>
          <p className="mt-1 max-w-md text-xs leading-relaxed">
            {footerContent.rights}
          </p>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="font-medium text-anthracite hover:text-ember"
          >
            {siteConfig.phone}
          </a>
          <Link
            href={siteConfig.telegramUrl}
            className="hover:text-ember"
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.telegramBot}
          </Link>
          <p className="text-xs text-anthracite/45">© {year}</p>
        </div>
      </div>
    </footer>
  );
}
