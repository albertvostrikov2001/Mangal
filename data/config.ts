/**
 * Контент и публичные контакты. Секреты Telegram — только в `process.env` на сервере
 * (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`), см. `lib/telegram.ts` и `.env.local.example`.
 */
export const siteConfig = {
  phone: '+375 XX XXX-XX-XX',
  phoneTel: '+375291234567',
  telegramBot: '@mangatpro_bot',
  telegramUrl: 'https://t.me/mangatpro_bot',
  brandName: 'МангалПро',
  discount: '100 BYN',
  guarantee: '5 лет',
  deliveryText: 'Бесплатная доставка по Беларуси',
  steelRange: 'Сталь 3–4 мм',
} as const;
