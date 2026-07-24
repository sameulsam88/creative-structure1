import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui";
import {
  IconArrow,
  IconPhone,
  IconMail,
  IconPin,
  IconClock,
  IconShield,
  IconCheck,
  StarSolid,
} from "./icons";
import { contact, serviceOptions } from "../data";

const inputClass =
  "w-full rounded-sm border border-navy/15 bg-paper px-4 py-3 text-[15px] text-navy outline-none transition placeholder:text-ink/40 focus:border-flag-red focus:bg-white focus:ring-2 focus:ring-flag-red/20";
const labelClass = "mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-navy/70";

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4 rounded-sm border border-navy/10 bg-white p-4 shadow-sm">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-navy-50 text-navy">
        {icon}
      </span>
      <div>
        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/50">
          {title}
        </div>
        <div className="mt-0.5 text-[15px] text-navy">{children}</div>
      </div>
    </li>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* CTA band */}
      <section
        className="relative overflow-hidden bg-flag-red py-16 text-white sm:py-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.07) 0 2px, transparent 2px 16px)",
        }}
      >
        <StarSolid className="pointer-events-none absolute -left-6 top-6 h-40 w-40 text-white/10" />
        <StarSolid className="pointer-events-none absolute right-10 bottom-4 h-24 w-24 text-white/10" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              <StarSolid className="h-3.5 w-3.5" />
              Free, no-obligation estimates
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Let's build something that lasts.
            </h2>
            <p className="mt-4 max-w-xl text-white/85">
              Tell us about your project and we'll get back to you within one business day.
            </p>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a href={contact.phoneHref} className="btn btn-white">
              <IconPhone className="h-4 w-4" />
              {contact.phone}
            </a>
            <a href="#contact-form" className="btn btn-dark-ghost">
              Request a Quote
            </a>
          </Reveal>
        </div>
      </section>

      {/* Contact + form */}
      <section id="contact" className="relative bg-paper py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Get In Touch"
              title={
                <>
                  Request your <span className="italic text-flag-red">free</span> estimate.
                </>
              }
              intro="Reach out by phone, email, or the form. A real person reads every message — and we respond fast."
            />
            <Reveal delay={120}>
              <ul className="mt-8 space-y-4">
                <InfoRow icon={<IconPin className="h-5 w-5" />} title="Visit / Mail">
                  {contact.address}
                  <br />
                  {contact.city}
                </InfoRow>
                <InfoRow icon={<IconPhone className="h-5 w-5" />} title="Call Us">
                  <a href={contact.phoneHref} className="font-semibold hover:text-flag-red">
                    {contact.phone}
                  </a>
                </InfoRow>
                <InfoRow icon={<IconMail className="h-5 w-5" />} title="Email">
                  <a href={`mailto:${contact.email}`} className="hover:text-flag-red">
                    {contact.email}
                  </a>
                </InfoRow>
                <InfoRow icon={<IconClock className="h-5 w-5" />} title="Business Hours">
                  <ul className="mt-1 space-y-0.5 text-sm text-ink/70">
                    {contact.hours.map((h) => (
                      <li key={h.d} className="flex justify-between gap-4">
                        <span>{h.d}</span>
                        <span className="font-medium text-navy">{h.h}</span>
                      </li>
                    ))}
                  </ul>
                </InfoRow>
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 flex items-center gap-3 rounded-sm border border-navy/10 bg-navy p-4 text-white">
                <IconShield className="h-6 w-6 shrink-0 text-flag-red" />
                <div>
                  <div className="font-semibold">Licensed &amp; Insured</div>
                  <div className="text-sm text-navy-200">New Jersey · Satisfaction guaranteed</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div
                id="contact-form"
                className="rounded-sm border border-navy/10 bg-white p-6 shadow-[0_30px_70px_-50px_rgba(11,31,77,0.5)] sm:p-8"
              >
                {submitted ? (
                  <div className="flex flex-col items-center py-14 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-navy text-white">
                      <IconCheck className="h-8 w-8 text-flag-red" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-navy sm:text-3xl">
                      Thank you — message received.
                    </h3>
                    <p className="mt-3 max-w-md text-ink/70">
                      We'll review your project and call you within one business day to schedule a
                      free on-site estimate.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn btn-ghost mt-6"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelClass} htmlFor="name">
                        Full Name *
                      </label>
                      <input id="name" name="name" required placeholder="Jane Doe" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="phone">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(862) 000-0000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="service">
                        Service Needed *
                      </label>
                      <select id="service" name="service" required defaultValue="" className={inputClass}>
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className={labelClass} htmlFor="message">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project, timeline, and location…"
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                    <div className="flex flex-col items-start gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                      <button type="submit" className="btn btn-red group w-full sm:w-auto">
                        Send Request
                        <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <p className="text-xs text-ink/50">
                        We respect your privacy. No spam, ever.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
