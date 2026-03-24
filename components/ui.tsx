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
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate sm:text-xl">{description}</p>
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
      'bg-[#0f172a] text-white shadow-[0_14px_34px_rgba(15,23,42,0.18)] hover:-translate-y-0.5 hover:bg-[#1e293b]',
    secondary:
      'border border-[#d9def8] bg-white text-[#0f172a] shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 hover:border-[#c7d2fe] hover:bg-[#f8faff]',
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
  return <div className={`glass-panel rounded-[28px] ${className}`}>{children}</div>;
}
