'use client';

import Image from 'next/image';
import { useState } from 'react';

export function SmartImage({
  src,
  alt,
  fallbackTitle,
  fallbackLabel,
  className = '',
  sizes = '100vw',
  priority = false,
}: {
  src: string;
  alt: string;
  fallbackTitle: string;
  fallbackLabel: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex h-full min-h-56 w-full flex-col justify-end overflow-hidden rounded-[28px] border border-dashed border-primary/20 bg-gradient-to-br from-white via-mist to-accent/70 p-6 ${className}`}
      >
        <span className="mb-3 inline-flex w-fit rounded-full border border-primary/12 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          Placeholder
        </span>
        <div className="max-w-xs space-y-2">
          <p className="text-lg font-semibold text-ink">{fallbackTitle}</p>
          <p className="text-sm leading-6 text-slate">{fallbackLabel}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      onError={() => setHasError(true)}
    />
  );
}
