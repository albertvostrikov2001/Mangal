import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  fullWidthMobile?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  fullWidthMobile = false,
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-[15px] font-semibold tracking-tight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants: Record<Variant, string> = {
    primary:
      'bg-ember text-white shadow-sm hover:bg-ember-hover focus-visible:outline-ember',
    secondary:
      'border border-anthracite/15 bg-white text-anthracite hover:bg-cream focus-visible:outline-anthracite/40',
    ghost:
      'text-anthracite hover:bg-anthracite/5 focus-visible:outline-anthracite/30',
  };
  const width = fullWidthMobile ? 'w-full sm:w-auto' : '';

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${width} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
