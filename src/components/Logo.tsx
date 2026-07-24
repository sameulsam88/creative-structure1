type LogoProps = { tone?: "dark" | "light"; className?: string };

export function Logo({ tone = "dark", className = "" }: LogoProps) {
  const mark = tone === "light" ? "#ffffff" : "#0b1f4d";
  const star = tone === "light" ? "#0b1f4d" : "#ffffff";
  const red = "#d6262c";
  return (
    <a
      href="#home"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Creative Structures NJ LLC — home"
    >
      <svg
        width="46"
        height="46"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <path d="M36 12 A16 16 0 1 0 36 36" stroke={mark} strokeWidth="7" strokeLinecap="round" />
        <path
          d="M30 15 C23 11 14 15 18 21 C21 25 29 25 29 30 C29 35 21 38 14 34"
          stroke={red}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <rect x="8" y="19" width="10" height="10" rx="2.5" fill={mark} />
        <polygon
          points="13,20.7 13.82,22.87 16.14,22.98 14.33,24.43 14.94,26.67 13,25.4 11.06,26.67 11.67,24.43 9.86,22.98 12.18,22.87"
          fill={star}
        />
      </svg>
      <span className="h-9 w-px shrink-0" style={{ background: mark, opacity: 0.25 }} />
      <span className="leading-none">
        <span
          className="block font-sans text-[22px] font-extrabold tracking-[0.01em] sm:text-[24px]"
          style={{ color: mark }}
        >
          CREATIVE
        </span>
        <span className="mt-1 block text-[12px] tracking-[0.16em] sm:text-[13px]">
          <span style={{ color: mark }}>Structures </span>
          <span style={{ color: red }}>NJ LLC</span>
        </span>
      </span>
    </a>
  );
}
