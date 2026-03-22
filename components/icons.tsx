export function DeviceIcon({ type }: { type: 'scan' | 'flow' | 'spark' | 'mail' }) {
  const common = 'h-5 w-5 text-primary';

  switch (type) {
    case 'scan':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={common} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <path d="M8 12h8" />
          <path d="M12 8v8" />
        </svg>
      );
    case 'flow':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={common} aria-hidden="true">
          <path d="M7 7h10" />
          <path d="M7 12h6" />
          <path d="M7 17h10" />
          <circle cx="16.5" cy="12" r="2.5" />
        </svg>
      );
    case 'spark':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={common} aria-hidden="true">
          <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
        </svg>
      );
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className={common} aria-hidden="true">
          <rect x="3.75" y="5.5" width="16.5" height="13" rx="3" />
          <path d="m6.5 8.5 5.5 4 5.5-4" />
        </svg>
      );
  }
}
