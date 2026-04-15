const BY_DIGITS = 9;

export function digitsOnly(s: string): string {
  return s.replace(/\D/g, '');
}

/** Нормализует ввод в отображаемый +375 (__) ___-__-__ */
export function formatBelarusPhone(input: string): string {
  let d = digitsOnly(input);
  if (d.startsWith('375')) {
    d = d.slice(3);
  }
  d = d.slice(0, BY_DIGITS);

  let out = '+375';
  if (d.length === 0) {
    return out;
  }
  out += ` (${d.slice(0, 2)}`;
  if (d.length >= 2) {
    out += ')';
  }
  if (d.length > 2) {
    out += ` ${d.slice(2, 5)}`;
  }
  if (d.length > 5) {
    out += `-${d.slice(5, 7)}`;
  }
  if (d.length > 7) {
    out += `-${d.slice(7, 9)}`;
  }
  return out;
}

/** +375XXXXXXXXX для отправки */
export function toE164Belarus(display: string): string {
  const d = digitsOnly(display);
  if (d.length === BY_DIGITS) {
    return `+375${d}`;
  }
  if (d.startsWith('375') && d.length === 3 + BY_DIGITS) {
    return `+${d}`;
  }
  return display.trim();
}

export function isValidBelarusPhone(display: string): boolean {
  const d = digitsOnly(display);
  return (
    d.length === BY_DIGITS ||
    (d.startsWith('375') && d.length === 3 + BY_DIGITS)
  );
}
