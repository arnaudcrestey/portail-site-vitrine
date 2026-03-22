import { ButtonLink } from '@/components/ui';

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-layout section-spacing">
        <div className="glass-panel relative overflow-hidden rounded-[32px] px-6 py-14 sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute inset-0 bg-hero-radial opacity-90" />
          <div className="relative max-w-4xl">
            <span className="section-eyebrow">{eyebrow}</span>
            <h1 className="mt-6 text-balance text-4xl font-semibold sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate sm:text-xl">{description}</p>
            {primaryCta || secondaryCta ? (
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                {primaryCta ? <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink> : null}
                {secondaryCta ? (
                  <ButtonLink href={secondaryCta.href} variant="secondary">
                    {secondaryCta.label}
                  </ButtonLink>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
