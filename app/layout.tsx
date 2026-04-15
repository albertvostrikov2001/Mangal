import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/config';

const inter = Inter({
  subsets: ['latin', 'cyrillic-ext'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${siteConfig.brandName} — мангалы от производителя`,
  description:
    'Стальные мангалы напрямую от производителя: скидка, гарантия 5 лет, доставка по Беларуси. Подбор за 1 минуту.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="min-h-dvh bg-cream font-sans text-anthracite antialiased">
        {children}
      </body>
    </html>
  );
}
