import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";
import { StarSolid, IconQuote } from "./icons";
import { testimonials } from "../data";

function Stars() {
  return (
    <div className="flex gap-0.5 text-flag-red">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarSolid key={i} className="h-4 w-4" />
      ))}
    </div>
  );
}

function Avatar() {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy text-white">
      <StarSolid className="h-4 w-4 text-flag-red" />
    </span>
  );
}

export function Testimonials() {
  const [featured, ...rest] = testimonials;
  return (
    <section className="relative bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Client Words"
            title={
              <>
                Trusted by homeowners &amp; businesses{" "}
                <span className="italic text-flag-red">across NJ.</span>
              </>
            }
            intro="We measure our work by the calls we get after the job is done — the referrals, the repeat projects, and the neighbors who ask for our number."
          />
          <Reveal delay={120}>
            <div className="mt-8 flex items-center gap-4 rounded-sm border border-navy/10 bg-white p-5 shadow-sm">
              <div className="font-display text-5xl font-semibold leading-none text-navy">5.0</div>
              <div>
                <Stars />
                <div className="mt-1 text-sm text-ink/60">Based on local homeowner reviews</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <figure className="relative rounded-sm border border-navy/10 bg-white p-7 shadow-[0_30px_60px_-40px_rgba(11,31,77,0.4)] sm:p-9">
              <IconQuote className="h-10 w-10 text-flag-red/25" />
              <blockquote className="mt-4 font-display text-xl leading-relaxed text-navy sm:text-2xl">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <div className="mt-6">
                <Stars />
              </div>
              <figcaption className="mt-5 flex items-center gap-3">
                <Avatar />
                <div>
                  <div className="font-semibold text-navy">{featured.name}</div>
                  <div className="text-sm text-ink/60">
                    {featured.role} · {featured.town}
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {rest.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-sm border border-navy/10 bg-white p-6 shadow-sm">
                  <Stars />
                  <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/75">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <Avatar />
                    <div>
                      <div className="text-sm font-semibold text-navy">{t.name}</div>
                      <div className="text-xs text-ink/60">
                        {t.role} · {t.town}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
