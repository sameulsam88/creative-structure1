import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";
import { IconPhone } from "./icons";
import { towns, contact } from "../data";

export function ServiceArea() {
  return (
    <section className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Stylized NJ map */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative rounded-sm border border-navy/10 bg-paper p-8 sm:p-10">
            <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
            <div className="relative mx-auto aspect-[200/320] w-full max-w-[300px]">
              <svg viewBox="0 0 200 320" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <path
                  d="M70 10 L120 18 L118 40 L140 60 L150 95 L140 130 L150 165 L138 200 L120 235 L100 270 L92 300 L78 305 L70 280 L60 250 L66 210 L52 175 L58 140 L48 105 L60 70 L58 40 Z"
                  fill="rgba(11,31,77,0.08)"
                  stroke="rgba(11,31,77,0.35)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              {/* North Haledon pin (north of state) */}
              <span className="absolute" style={{ left: "46%", top: "13%" }}>
                <span className="ping-ring absolute inset-0 rounded-full bg-flag-red" />
                <span className="relative block h-3.5 w-3.5 rounded-full bg-flag-red ring-4 ring-flag-red/30" />
              </span>
              <span
                className="absolute whitespace-nowrap rounded-sm bg-navy px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white shadow"
                style={{ left: "54%", top: "11%" }}
              >
                North Haledon
              </span>
            </div>
            <p className="relative mt-4 text-center text-xs uppercase tracking-[0.18em] text-ink/50">
              Stylized service area · North Jersey &amp; beyond
            </p>
          </div>
        </Reveal>

        {/* Towns */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Service Area"
            title={
              <>
                Proudly serving <span className="italic text-flag-red">North Jersey</span> &amp; the
                surrounding counties.
              </>
            }
            intro="Based in North Haledon, we work throughout Passaic, Bergen, Essex, and Morris counties — and we'll travel farther for the right project."
          />
          <Reveal delay={120}>
            <div className="mt-7 flex flex-wrap gap-2">
              {towns.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-navy/15 bg-paper px-3.5 py-1.5 text-sm font-medium text-navy/80 transition-colors hover:border-flag-red hover:text-flag-red"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-sm text-ink/60">
              Don't see your town? If you're in New Jersey, give us a call — we likely cover it.
            </p>
            <a href={contact.phoneHref} className="btn btn-red group mt-4">
              <IconPhone className="h-4 w-4" />
              {contact.phone}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
