import { publicUrl } from '@/lib/publicPath';

/** Локальные фото каталога: /public/images/catalog-1.png … catalog-6.png */
export interface CatalogProduct {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  imageSrc: string;
  imageAlt: string;
  /** Доп. классы для кадрирования (Tailwind), например object-position */
  imageClassName?: string;
  badge?: string;
}

export const catalogProducts: CatalogProduct[] = [
  {
    id: 'street-comfort',
    name: 'Садовый Комфорт',
    slug: 'street-comfort',
    shortDescription:
      'Мобильная гриль-станция с колёсами и нижней дровницей: удобно катать по площадке, решётку поднимаете по слотам ветрозащиты — и жарите ровно, без суеты.',
    imageSrc: publicUrl('/images/catalog-1.png'),
    imageAlt:
      'Чёрный мангал-гриль на колёсах с полкой для дров и регулируемой решёткой',
    imageClassName:
      'object-cover object-[center_45%] sm:object-center scale-[1.02]',
    badge: 'На колёсах',
  },
  {
    id: 'forge-deluxe',
    name: 'Ковка Делюкс',
    slug: 'forge-deluxe',
    shortDescription:
      'Выразительная модель с коваными ножками и узором на борту: боковые полки, держатель для шампуров и дровница — красиво у дома и практично на каждой посиделке.',
    imageSrc: publicUrl('/images/catalog-2.png'),
    imageAlt:
      'Мангал с кованым основанием, боковыми столиками и полкой для дров',
    imageClassName: 'object-cover object-center scale-[1.08] sm:scale-100',
    badge: 'С полками',
  },
  {
    id: 'twin-grate',
    name: 'Двойной жар',
    slug: 'twin-grate',
    shortDescription:
      'Две зоны на решётках с регулировкой высоты — удобно совмещать стейки и шашлык. Колёса и боковая ручка помогают быстро сдвинуть установку в тень или к столу.',
    imageSrc: publicUrl('/images/catalog-3.png'),
    imageAlt: 'Мангал на колёсах с двумя хромированными решётками-гриль',
    imageClassName: 'object-cover object-[center_42%]',
    badge: 'Мангал-гриль',
  },
  {
    id: 'offset-pro',
    name: 'Офсет Про',
    slug: 'offset-pro',
    shortDescription:
      'Формат Texas-style: основная камера и боковая топка для дымного жара. Открываете крышку — видно запас по объёму; колёса и нижняя полка упрощают хранение углей и дров.',
    imageSrc: publicUrl('/images/catalog-4.png'),
    imageAlt: 'Чёрный офсет-гриль с открытыми крышками и полкой спереди',
    imageClassName: 'object-cover object-[center_35%] sm:object-center',
    badge: 'Копчение + жар',
  },
  {
    id: 'barrel-master',
    name: 'Барбекю Мастер',
    slug: 'barrel-master',
    shortDescription:
      'Закрытая крышка, термометр и регулировка жаровни — спокойнее держать температуру. Боковые столы с крючками и усиленные колёса: удобно работать и переставлять по участку.',
    imageSrc: publicUrl('/images/catalog-5.png'),
    imageAlt:
      'Бочкообразный гриль с термометром на крышке и боковыми столиками',
    imageClassName: 'object-cover object-center',
    badge: 'Под контролем жара',
  },
  {
    id: 'dacha-panorama',
    name: 'Дача Панорама',
    slug: 'dacha-panorama',
    shortDescription:
      'Станция «всё рядом»: классический жаровой короб, держатель казана, деревянные столешницы и дровница внизу. Для семьи, где любят и шашлык, и блюда в большом котле.',
    imageSrc: publicUrl('/images/catalog-6.png'),
    imageAlt:
      'Мангальный комплекс с казаном, деревянными боковыми столами и коваными элементами',
    imageClassName: 'object-cover object-[center_38%] sm:object-[center_45%]',
    badge: 'Мангал + казан',
  },
];
