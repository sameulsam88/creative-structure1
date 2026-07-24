import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";
import { IconArrow } from "./icons";
import { steps } from "../data";

export function Process() {
  return (
    <section id="process" className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="How We Work"
              title={
                <>
                  A clear path from <span className="italic text-flag-red">first call</span> to final
                  nail.
                </>
              }
              intro="No guesswork and no runaround. Every project moves through the same proven five steps, with you informed at each one."
            />
          </div>
          <Reveal delay={120} className="lg:col-span-5 lg:text-right">
            <p className="text-sm leading-relaxed text-ink/60">
              Most estimates are scheduled within 48 hours and returned as a clear, line-item
              proposal you can actually compare.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 80} className="group relative">
              <div className="relative h-full rounded-sm border border-navy/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-flag-red/30 hover:shadow-[0_24px_50px_-30px_rgba(11,31,77,0.5)]">
                <div className="flex items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-navy font-display text-lg font-semibold text-white ring-1 ring-navy transition-colors duration-300 group-hover:bg-flag-red group-hover:ring-flag-red">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <IconArrow className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-flag-red/40 lg:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
