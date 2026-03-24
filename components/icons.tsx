export function DeviceIcon({ type }: { type: 'scan' | 'flow' | 'spark' | 'mail' }) {
  const common = 'h-[22px] w-[22px] text-primary';

  switch (type) {
    case 'scan':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="4.75" />
          <path d="M14.5 14.5 18 18" />
          <path d="M11 4.5v1.5" />
          <path d="M11 16v1.5" />
          <path d="M4.5 11H6" />
          <path d="M16 11h1.5" />
        </svg>
      );

    case 'flow':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <circle cx="6.5" cy="6.5" r="1.75" />
          <circle cx="17.5" cy="12" r="1.75" />
          <circle cx="6.5" cy="17.5" r="1.75" />
          <path d="M8.25 6.5h4.5c2.1 0 3.25 1.2 3.25 3" />
          <path d="M16 12c0 1.8-1.15 3-3.25 3h-4.5" />
        </svg>
      );

    case 'spark':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <path d="M12 4.25 13.65 8.35 17.75 10 13.65 11.65 12 15.75 10.35 11.65 6.25 10 10.35 8.35 12 4.25Z" />
          <path d="M18.25 4.75v1.5" />
          <path d="M17.5 5.5H19" />
          <path d="M17.75 16.75v1.1" />
          <path d="M17.2 17.3h1.1" />
        </svg>
      );

    case 'mail':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={common}
          aria-hidden="true"
        >
          <rect x="4.25" y="6.25" width="15.5" height="11.5" rx="2.75" />
          <path d="m6.75 8.5 4.48 3.46a1.25 1.25 0 0 0 1.54 0l4.48-3.46" />
          <path d="M7 15.75 10.1 13.3" />
          <path d="M17 15.75 13.9 13.3" />
        </svg>
      );
  }
}
