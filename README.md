# МангалПро — лендинг-каталог

Современный mobile-first лендинг с нативным квизом для лидогенерации (Next.js App Router, TypeScript, Tailwind CSS).

## Запуск

```bash
npm install
npm run dev
```

Локально сайт открывается с учётом `basePath` из `next.config.ts` (репозиторий **Mangal**):

[http://localhost:3000/Mangal/](http://localhost:3000/Mangal/)

## Публикация на GitHub Pages

Продакшен-сборка: статический экспорт (`output: 'export'`), деплой через GitHub Actions.

**Живой сайт:** [https://albertvostrikov2001.github.io/Mangal/](https://albertvostrikov2001.github.io/Mangal/)

После первого пуша в `main` откройте репозиторий на GitHub → **Settings** → **Pages** → **Build and deployment** → **Source** → выберите **GitHub Actions** (не «Deploy from branch»). Дальше каждый пуш в `main` пересобирает и выкладывает сайт из артефакта `out/`.

В корне `public/` добавлен файл **`.nojekyll`**, чтобы GitHub Pages не прогонял сайт через Jekyll и не отбрасывал каталог `_next`.

### Форма заявок на статике

На GitHub Pages **нет серверных API**: роут `app/api/lead/route.ts` в статической выкладке не выполняется. Файл остаётся в проекте для будущего деплоя на Vercel, VPS или другой хостинг с Node.js. Для полной отправки лидов в Telegram нужен такой хостинг и переменные `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` на сервере.

На статической версии при недоступном API форма показывает запасной текст с телефоном из `data/config.ts`.

## Переменные окружения

Скопируйте `.env.local.example` в `.env.local` и заполните:

| Переменная | Назначение |
|------------|------------|
| `TELEGRAM_BOT_TOKEN` | Токен бота из [@BotFather](https://t.me/BotFather) |
| `TELEGRAM_CHAT_ID` | ID чата (пользователь или группа), куда слать заявки |
| `NEXT_PUBLIC_SITE_URL` | Публичный URL сайта (для будущих интеграций) |

Без токена и chat ID API-роут `/api/lead` вернёт ошибку отправки в Telegram.

### Как получить `TELEGRAM_CHAT_ID`

1. Создайте бота и получите токен.
2. Напишите боту любое сообщение.
3. Откройте `https://api.telegram.org/bot<TOKEN>/getUpdates` и найдите `chat.id`, либо используйте @userinfobot.

## Конфигурация контента

- **`data/config.ts`** — телефон, Telegram, бренд, формулировки скидки и гарантии.
- **`data/content.ts`** — тексты секций, hero, квиза, отзывов, футера.
- **`data/catalog.ts`** — карточки каталога (изображения, описания).
- **`data/quiz.ts`** — шаги и варианты ответов квиза.

Структура рассчитана на последующее подключение CMS: данные собраны в одном месте, компоненты только импортируют их.

## UTM

При загрузке страницы хук `useUTM()` (`lib/utm.ts`) читает UTM из URL, объединяет с сохранёнными в `sessionStorage` значениями и передаёт их в теле заявки на `/api/lead` вместе с `referrer`.

## Сборка

Статический экспорт (результат в папке `out/`, пригоден для GitHub Pages):

```bash
npm run build
```

Локальный просмотр экспорта (опционально):

```bash
npx serve out
```

Команда `npm start` после экспорта не используется для Pages; она нужна только для режима `next start` на сервере с Node.
