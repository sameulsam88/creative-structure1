import { useEffect, useRef, useState } from "react";

export function Stat({
  value,
  suffix = "",
  prefix = "",
  label,
  tone = "light",
  duration = 1700,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  tone?: "light" | "dark";
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.round(eased * value));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        }),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  const numColor = tone === "dark" ? "text-white" : "text-navy";
  const labColor = tone === "dark" ? "text-navy-200" : "text-ink/60";
  const rule = tone === "dark" ? "bg-white/20" : "bg-navy/15";

  return (
    <div ref={ref}>
      <div className={`font-display text-4xl font-semibold leading-none sm:text-5xl ${numColor}`}>
        {prefix}
        {n}
        {suffix}
      </div>
      <div className={`mt-3 h-px w-8 ${rule}`} />
      <div className={`mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] ${labColor}`}>
        {label}
      </div>
    </div>
  );
}
