export function DeviceIcon({ type }: { type: 'scan' | 'flow' | 'spark' | 'mail' }) {
  const common = 'h-5 w-5 text-primary';

  switch (type) {
    case 'scan':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="6.5" />
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 3.5v2.2" />
          <path d="M12 18.3v2.2" />
          <path d="M3.5 12h2.2" />
          <path d="M18.3 12h2.2" />
        </svg>
      );

    case 'flow':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <circle cx="6" cy="7" r="1.7" />
          <circle cx="18" cy="12" r="1.7" />
          <circle cx="6" cy="17" r="1.7" />
          <path d="M7.7 7h5.2c1.8 0 3.1 1.2 3.1 3v0" />
          <path d="M16 12c0 1.8-1.3 3-3.1 3H7.7" />
        </svg>
      );

    case 'spark':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <path d="M12 4.5 13.8 9l4.7 1.8-4.7 1.8L12 17l-1.8-4.4L5.5 10.8 10.2 9 12 4.5Z" />
          <path d="M18.5 4.5v2.2" />
          <path d="M17.4 5.6h2.2" />
        </svg>
      );

    case 'mail':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <rect x="4" y="6" width="16" height="12" rx="3" />
          <path d="m6.5 8.5 4.8 3.8a1.2 1.2 0 0 0 1.4 0l4.8-3.8" />
          <path d="M6.5 16.5 10 13.8" />
          <path d="M17.5 16.5 14 13.8" />
        </svg>
      );
  }
}
