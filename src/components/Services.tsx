import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";
import { IconArrow, serviceIconMap } from "./icons";
import { services } from "../data";

export function Services() {
  return (
    <section id="services" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Sticky intro */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="What We Build"
                title={
                  <>
                    A full-service crew for <span className="italic text-flag-red">every</span> phase
                    of construction.
                  </>
                }
                intro="One licensed team handles the whole scope — so your project stays coordinated, on budget, and on schedule."
              />
              <Reveal delay={120}>
                <div className="mt-8 rounded-sm border-l-2 border-flag-red bg-navy-50/70 p-5">
                  <p className="text-sm leading-relaxed text-navy/80">
                    Not sure what you need? We'll scope it on-site and give you a straight answer —
                    no pressure, no obligation.
                  </p>
                  <a
                    href="#process"
                    className="group mt-3 inline-flex items-center gap-2 text-sm font-semibold text-flag-red"
                  >
                    See how we work
                    <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Numbered service list */}
          <div className="lg:col-span-8">
            <ul className="border-t border-navy/10">
              {services.map((s, i) => {
                const Icon = serviceIconMap[s.icon];
                return (
                  <Reveal as="li" key={s.title} delay={(i % 4) * 60} className="group">
                    <div className="grid grid-cols-[auto_auto_1fr] items-center gap-4 border-b border-navy/10 py-5 transition-all duration-300 hover:bg-navy/[0.025] sm:grid-cols-[auto_auto_1fr_auto] sm:gap-6 sm:px-3">
                      <span className="font-display text-sm font-semibold tabular-nums text-flag-red/80">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="grid h-11 w-11 place-items-center rounded-sm bg-navy-50 text-navy transition-colors duration-300 group-hover:bg-flag-red group-hover:text-white">
                        {Icon ? <Icon className="h-5 w-5" /> : null}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-navy sm:text-xl">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink/60">{s.desc}</p>
                      </div>
                      <IconArrow className="hidden h-5 w-5 text-navy/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-flag-red sm:block" />
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
