import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { StarSolid } from "./icons";

export function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-flag-red">
      <span className="h-px w-8 bg-flag-red" />
      {children}
      {center && <span className="h-px w-8 bg-flag-red" />}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <div className={center ? "flex justify-center" : ""}>
          <Eyebrow center={center}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`mt-4 font-display text-[2rem] leading-[1.06] tracking-[-0.01em] sm:text-4xl lg:text-[2.85rem] ${
          tone === "dark" ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === "dark" ? "text-navy-200" : "text-ink/70"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function StarDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-14 bg-current opacity-30" />
      <StarSolid className="h-3.5 w-3.5" />
      <span className="h-px w-14 bg-current opacity-30" />
    </div>
  );
}
