import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";
import { Stat } from "./Stat";
import { StarSolid } from "./icons";
import { stats, aboutImage, aboutImage2 } from "../data";

const bullets = [
  "Licensed & fully insured",
  "Upfront, detailed pricing",
  "On-time, on-budget focus",
  "Clean & respectful crews",
  "Quality materials & proper permits",
  "Workmanship you can trust",
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-grid-dark" />
      <StarSolid className="pointer-events-none absolute -right-10 top-10 h-72 w-72 text-white/[0.03]" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-flag-red/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Image collage */}
        <Reveal className="relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-flag-red" />
          <div className="relative overflow-hidden rounded-sm shadow-2xl ring-1 ring-white/15">
            <img
              src={aboutImage}
              alt="Carpenters framing on a New Jersey job site"
              className="h-[420px] w-full object-cover sm:h-[520px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent" />
          </div>
          <div className="absolute left-4 top-4 rounded-sm bg-flag-red px-3 py-2 text-center shadow-lg">
            <div className="font-display text-2xl font-bold leading-none">15+</div>
            <div className="mt-0.5 text-[0.6rem] uppercase tracking-[0.15em]">Years</div>
          </div>
          <div className="animate-floaty absolute -bottom-6 -right-4 hidden w-44 overflow-hidden rounded-sm shadow-xl ring-4 ring-navy sm:block">
            <img
              src={aboutImage2}
              alt="Construction worker using a drill on site"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="Who We Are"
            title={
              <>
                New Jersey builders who treat your project like{" "}
                <span className="italic text-flag-red">our own.</span>
              </>
            }
            intro="Creative Structures NJ LLC is a family-rooted construction company based in North Haledon. We pair old-school craftsmanship with modern project management — clear estimates, tidy job sites, and work we're proud to put our name on."
          />

          <Reveal delay={120}>
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-navy-100">
                  <StarSolid className="mt-1 h-4 w-4 shrink-0 text-flag-red" />
                  <span className="text-[15px]">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <Stat
                  key={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  label={s.label}
                  tone="dark"
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
