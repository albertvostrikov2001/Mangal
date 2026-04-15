/**
 * Единственное внешнее фото, оставленное для блока «Качество» (не входит в ТЗ на замену).
 */
export const KK_ORIGIN = 'https://kazan-karavan.by' as const;

export function kkUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${KK_ORIGIN}${normalized}`;
}

/** Крупный план из каталога — блок QualitySection */
export const kkQualityProduct = kkUrl(
  '/webp/elementfile/imagesaver/structure/standart/gr3ptj9gz82jpuetzlon_1693810626.webp',
);
