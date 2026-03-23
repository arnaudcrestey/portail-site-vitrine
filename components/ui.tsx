import Link from 'next/link';
import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2 className="mt-5 text-balance text-[2rem] font-semibold tracking-[-0.04em] sm:text-[2.5rem] lg:text-[3.25rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-[44rem] text-lg leading-8 text-slate sm:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}: ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) {
  const variants = {
    primary:
      'bg-ink text-white shadow-[0_16px_38px_rgba(25,33,50,0.14)] hover:-translate-y-0.5 hover:bg-ink/92',
    secondary:
      'border border-white/80 bg-white/92 text-ink shadow-[0_10px_30px_rgba(54,77,128,0.08)] hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white',
    ghost:
      'text-ink hover:text-primary',
  } as const;

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 ease-premium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Surface({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`glass-panel rounded-[28px] ${className}`}>{children}</div>
  );
}
