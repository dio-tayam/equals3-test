export function StarIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 1.5l2.59 5.86 6.36.62-4.81 4.27 1.42 6.25L10 15.27l-5.56 3.23 1.42-6.25-4.81-4.27 6.36-.62L10 1.5z" />
    </svg>
  );
}

export function PinIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M10 18s6-5.5 6-10.2A6 6 0 0 0 4 7.8C4 12.5 10 18 10 18Z" />
      <circle cx="10" cy="7.8" r="2" />
    </svg>
  );
}

export function SearchIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <circle cx="9" cy="9" r="6.5" />
      <path d="M18 18l-4-4" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function XIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
    >
      <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className = "size-3" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
    >
      <path d="M3 10h14M11 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UsersIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <circle cx="7" cy="6.5" r="2.5" />
      <path d="M2.5 17c0-3 2-5 4.5-5s4.5 2 4.5 5" strokeLinecap="round" />
      <circle cx="14.5" cy="7" r="2" />
      <path d="M13 12.2c2 .2 3.5 2 3.5 4.8" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 2l1.6 4.9L16.5 8.4l-4.9 1.6L10 15l-1.6-5L3.5 8.4l4.9-1.5L10 2z" />
    </svg>
  );
}
