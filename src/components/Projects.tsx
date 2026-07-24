import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";
import { IconArrow } from "./icons";
import { projects } from "../data";

export function Projects() {
  return (
    <section id="projects" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Selected Work"
              title={
                <>
                  Projects built with <span className="italic text-flag-red">pride</span> across
                  North Jersey.
                </>
              }
            />
          </div>
          <Reveal delay={120} className="lg:col-span-5 lg:text-right">
            <p className="text-sm leading-relaxed text-ink/60">
              240+ projects delivered across Passaic, Bergen &amp; Essex counties — from kitchens
              and additions to full commercial build-outs.
            </p>
            <a href="#contact" className="btn btn-ghost group mt-4">
              Start your project
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[220px] lg:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 80}
              className={`group relative overflow-hidden rounded-sm ${p.span}`}
            >
              <a href="#contact" className="block h-full">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full min-h-[240px] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 lg:min-h-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-0.5 w-0 bg-flag-red transition-all duration-500 group-hover:w-full" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-flag-red">
                    <span className="h-px w-5 bg-flag-red" />
                    {p.cat}
                  </div>
                  <h3 className="mt-1.5 font-display text-xl font-semibold text-white sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 max-w-md text-sm text-white/0 transition-all duration-300 group-hover:text-white/80">
                    {p.blurb}
                  </p>
                </div>
                <span className="absolute right-4 top-4 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <IconArrow className="h-4 w-4 -rotate-45" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
