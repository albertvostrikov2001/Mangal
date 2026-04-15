import Link from 'next/link';
import { thankYouContent } from '@/data/content';
import { Button } from './Button';

export function ThankYou() {
  return (
    <div className="animate-fade-in space-y-5 text-center">
      <div
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ember/10 text-ember"
        aria-hidden
      >
        <svg
          className="h-7 w-7"
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
      <h3 className="text-xl font-semibold text-anthracite md:text-2xl">
        {thankYouContent.title}
      </h3>
      <div className="space-y-3 text-left text-[15px] leading-relaxed text-anthracite/80">
        {thankYouContent.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <Link href={thankYouContent.ctaTelegramUrl} className="block sm:inline-block">
        <Button variant="secondary" fullWidthMobile className="w-full sm:min-w-[240px]">
          {thankYouContent.ctaTelegram}
        </Button>
      </Link>
    </div>
  );
}
