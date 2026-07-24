import { StarSolid } from "./icons";
import { navLinks, services, contact } from "../data";

export function Footer() {
  return (
   <footer className="relative bg-navy-900 pb-16 text-navy-100 lg:pb-0">
  <div className="grid h-[6px] grid-rows-3">
    <span className="bg-flag-red" />
    <span className="bg-white" />
    <span className="bg-navy" />
  </div>

  <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-12">
    
    {/* First Column (Left Side) - Added Logo Here */}
    <div className="lg:col-span-4">
      <a href="/" className="mb-6 block inline-block">
        <img
          src="/logo.png"
          alt="Creative Structures NJ LLC"
          className="h-12 sm:h-16 w-auto object-contain"
        />
      </a>
      <p className="max-w-xs text-sm leading-relaxed text-navy-200">
        A family-rooted New Jersey construction company delivering residential and commercial
        work with precision, pride, and American craftsmanship.
      </p>
      <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy-200">
        <span className="flex text-flag-red">
          {[0, 1, 2, 3, 4].map((i) => (
            <StarSolid key={i} className="h-3.5 w-3.5" />
          ))}
        </span>
        Proudly built in the USA
      </div>
    </div>

    <div className="lg:col-span-2">
      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Company</h4>
      <span className="mt-3 block h-px w-8 bg-flag-red" />
      <ul className="mt-4 space-y-2.5 text-sm">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-navy-200 transition-colors hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="lg:col-span-3">
      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Services</h4>
      <span className="mt-3 block h-px w-8 bg-flag-red" />
      <ul className="mt-4 space-y-2.5 text-sm">
        {services.slice(0, 7).map((s) => (
          <li key={s.title}>
            <a href="#services" className="text-navy-200 transition-colors hover:text-white">
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="lg:col-span-3">
      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Contact</h4>
      <span className="mt-3 block h-px w-8 bg-flag-red" />
      <ul className="mt-4 space-y-3 text-sm text-navy-200">
        <li>
          {contact.address}
          <br />
          {contact.city}
        </li>
        <li>
          <a href={contact.phoneHref} className="transition-colors hover:text-white">
            {contact.phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
            {contact.email}
          </a>
        </li>
        <li className="text-navy-200/80">Mon–Fri 7am–6pm · Sat 8am–3pm</li>
      </ul>
    </div>
  </div>

  <div className="border-t border-white/10">
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-navy-200 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>© {new Date().getFullYear()} Creative Structures NJ LLC. All rights reserved.</p>
      <p>
        29 West Overlook Avenue, North Haledon, NJ 07508 ·{" "}
        <a href={contact.phoneHref} className="hover:text-white">
          (862) 251-0557
        </a>
      </p>
    </div>
  </div>
</footer>
  );
}
