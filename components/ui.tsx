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
      'bg-[linear-gradient(180deg,#111827_0%,#0f172a_100%)] text-white border border-[#1f2a44] shadow-[0_14px_30px_rgba(15,23,42,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.28),inset_0_1px_0_rgba(255,255,255,0.10)] hover:bg-[linear-gradient(180deg,#172033_0%,#111827_100%)]',
    secondary:
      'border border-[#d9def8] bg-white text-[#0f172a] shadow-[0_8px_24px_rgba(15,23,42,0.04)] hover:-translate-y-0.5 hover:border-[#c7d2fe] hover:bg-[#f8faff]',
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
