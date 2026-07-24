import { Reveal } from "./Reveal";
import { IconArrow, IconPhone, IconShield, StarSolid } from "./icons";
import { heroImage, contact } from "../data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-paper">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-navy/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-flag-red/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          {/* Left — copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-navy/10 bg-white px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-navy shadow-sm">
                <StarSolid className="h-3 w-3 text-flag-red" />
                Licensed &amp; Insured · North Haledon, NJ
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[2.7rem] leading-[1.02] tracking-[-0.015em] text-navy sm:text-6xl lg:text-[4.05rem]">
                Honest craftsmanship,{" "}
                <span className="italic text-flag-red">built to last</span> across New&nbsp;Jersey.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                From new homes and additions to commercial build-outs and remodeling, Creative
                Structures NJ delivers precise, code-perfect construction with one accountable team —
                from first sketch to final walkthrough.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#contact" className="btn btn-red group">
                  Request a Free Estimate
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href={contact.phoneHref} className="btn btn-ghost">
                  <IconPhone className="h-4 w-4" />
                  {contact.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-ink/70">
                <div className="flex items-center gap-2">
                  <IconShield className="h-5 w-5 text-navy" />
                  Licensed &amp; Insured
                </div>
                <span className="hidden h-5 w-px bg-navy/15 sm:block" />
                <div className="flex items-center gap-2">
                  <span className="flex text-flag-red">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <StarSolid key={i} className="h-4 w-4" />
                    ))}
                  </span>
                  5.0 Average Rating
                </div>
                <span className="hidden h-5 w-px bg-navy/15 sm:block" />
                <div className="flex items-center gap-2 font-medium text-navy">
                  Residential &amp; Commercial
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — framed image */}
          <div className="lg:col-span-6">
            <Reveal delay={160} className="relative">
              <div className="absolute -right-4 -top-4 hidden h-28 w-28 rounded-sm bg-navy sm:block" />
              <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-b-2 border-l-2 border-flag-red sm:block" />

              <div className="relative overflow-hidden rounded-sm shadow-[0_40px_80px_-40px_rgba(11,31,77,0.55)] ring-1 ring-navy/10">
                <img
                  src={heroImage}
                  alt="Residential wood framing under construction in New Jersey"
                  className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[520px]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent" />
                <div className="absolute right-4 top-4 rounded-sm bg-navy/90 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                  Est. New Jersey
                </div>
              </div>

              <div className="animate-floaty absolute -bottom-6 left-4 flex items-center gap-3 rounded-sm border border-navy/10 bg-white/95 p-3.5 pr-5 shadow-xl backdrop-blur sm:left-6">
                <span className="grid h-10 w-10 place-items-center rounded-sm bg-flag-red text-white">
                  <StarSolid className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display text-lg font-semibold leading-none text-navy">
                    Built in NJ
                  </div>
                  <div className="mt-1 text-xs text-ink/60">Proudly serving Passaic County</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
