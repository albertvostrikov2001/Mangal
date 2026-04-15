export type QuizStepLayout = 'list' | 'visual' | 'iconRow';

export type QuizFrequencyIconId = 'rare' | 'weekends' | 'intense';

export interface QuizOption {
  id: string;
  /** Полный текст ответа (уходит в Telegram и в историю) */
  label: string;
  /** Подпись на карточке (визуальные шаги); допускается перенос строки */
  cardTitle?: string;
  cardSubtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  iconId?: QuizFrequencyIconId;
}

export interface QuizStepConfig {
  id: string;
  question: string;
  layout: QuizStepLayout;
  options: QuizOption[];
}

export const quizSteps: QuizStepConfig[] = [
  {
    id: 'construction',
    layout: 'visual',
    question: 'Какая конструкция вам подходит?',
    options: [
      {
        id: 'folding',
        label: 'Складной (для выездов и небольших участков)',
        cardTitle: 'Складной',
        imageSrc: '/images/catalog-1.png',
        imageAlt: 'Компактный переносной мангал на колёсах с дровницей',
      },
      {
        id: 'stationary',
        label: 'Стационарный (для дачи или двора)',
        cardTitle: 'Стационарный\nдля дачи',
        imageSrc: '/images/catalog-6.png',
        imageAlt: 'Стационарный мангальный комплекс с казаном и столешницами',
      },
      {
        id: 'wheels',
        label: 'На колёсах (удобно перемещать)',
        cardTitle: 'На колёсах',
        imageSrc: '/images/catalog-3.png',
        imageAlt: 'Мангал-гриль на колёсах с двумя решётками',
      },
      {
        id: 'gift',
        label: 'Беру на подарок',
        cardTitle: 'Беру на подарок',
        imageSrc: '/images/catalog-5.png',
        imageAlt: 'Презентабельный гриль с термометром и боковыми столами',
      },
    ],
  },
  {
    id: 'guests',
    layout: 'list',
    question: 'На сколько человек обычно готовите?',
    options: [
      { id: '1-3', label: '1–3 человека' },
      { id: '4-8', label: '4–8 человек' },
      { id: '8+', label: 'Более 8 человек' },
    ],
  },
  {
    id: 'frequency',
    layout: 'iconRow',
    question: 'Как часто планируете использовать?',
    options: [
      {
        id: 'rare',
        label: 'Редко (пару раз в сезон)',
        iconId: 'rare',
      },
      {
        id: 'weekends',
        label: 'Каждые выходные',
        iconId: 'weekends',
      },
      {
        id: 'intense',
        label: 'Интенсивно (профессионально или для дела)',
        iconId: 'intense',
      },
    ],
  },
  {
    id: 'features',
    layout: 'visual',
    question: 'Нужны дополнительные возможности?',
    options: [
      {
        id: 'classic',
        label: 'Только классический шашлык',
        cardTitle: 'Классика',
        imageSrc: '/images/catalog-2.png',
        imageAlt: 'Классический мангал с пазами под шампуры и боковыми полками',
      },
      {
        id: 'grill',
        label: 'Мангал-гриль (решётка, двойная готовка)',
        cardTitle: 'Мангал-гриль',
        imageSrc: '/images/catalog-3.png',
        imageAlt: 'Мангал с двумя решётками для гриля',
      },
      {
        id: 'combo',
        label: 'Комбо 2в1 с печью под казан',
        cardTitle: 'Комбо 2в1',
        imageSrc: '/images/catalog-4.png',
        imageAlt: 'Офсет-гриль: жар и копчение в одной установке',
      },
      {
        id: 'full',
        label: 'Полный комплекс (всё и сразу)',
        cardTitle: 'Полный комплекс',
        imageSrc: '/images/catalog-6.png',
        imageAlt: 'Мангальная станция с казаном, столами и дровницей',
      },
    ],
  },
  {
    id: 'gift_choice',
    layout: 'list',
    question: 'Какой подарок хотите получить?',
    options: [
      { id: 'skewers', label: 'Набор качественных шампуров' },
      { id: 'grate', label: 'Решётку-гриль' },
      { id: 'tools', label: 'Кочергу и совок' },
      { id: 'spices', label: 'Набор специй и книгу рецептов' },
    ],
  },
];
