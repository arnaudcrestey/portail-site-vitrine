'use client';

import { useEffect, useRef, useState } from 'react';

type AnimatedMetricNumberProps = {
  value: number;
  duration?: number;
};

export function AnimatedMetricNumber({
  value,
  duration = 1100,
}: AnimatedMetricNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start: number | null = null;
    let frame = 0;

    const animate = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, value, duration]);

  return <span ref={ref}>{displayValue.toLocaleString('fr-FR')}</span>;
}
