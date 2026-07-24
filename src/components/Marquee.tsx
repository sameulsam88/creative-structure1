import { StarSolid } from "./icons";

const items = [
  "Residential Construction",
  "Commercial Construction",
  "Renovations & Remodeling",
  "Framing & Carpentry",
  "Drywall & Finishing",
  "Flooring Installation",
  "Interior & Exterior Painting",
  "Concrete & Masonry",
  "Doors & Windows",
  "Construction Management",
];

export function Marquee() {
  return (
    <section
      aria-hidden="true"
      className="marquee relative overflow-hidden border-y border-navy-800 bg-navy py-4 text-white"
    >
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {items.map((t) => (
              <span key={t + k} className="flex items-center">
                <span className="px-6 font-display text-lg italic tracking-tight text-white/90">
                  {t}
                </span>
                <StarSolid className="h-3 w-3 text-flag-red" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
