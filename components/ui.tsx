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
    'bg-[#2563eb] text-white border border-[#1d4ed8] shadow-[0_14px_30px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 hover:bg-[#1d4ed8]',
  secondary:
    'border border-[#c7d2fe] bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] text-[#1e3a8a] shadow-[0_10px_24px_rgba(59,99,243,0.10),inset_0_1px_0_rgba(255,255,255,0.85)] hover:-translate-y-0.5 hover:border-[#aebfff] hover:bg-[linear-gradient(180deg,#ffffff_0%,#e8f0ff_100%)] hover:shadow-[0_14px_30px_rgba(59,99,243,0.14)]',
  ghost:
    'text-ink hover:text-primary',
} as const;

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.01em] transition duration-300 ease-premium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
export function Surface({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`glass-panel rounded-[28px] ${className}`}>{children}</div>;
}
