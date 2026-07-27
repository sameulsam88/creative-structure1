import { useEffect, useState } from "react";
import { navLinks } from "../data";
import { IconPhone, IconMenu, IconClose, IconArrow } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(100, (y / h) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Colored Bar */}
      <div className="grid h-[6px] grid-rows-3">
        <span className="bg-flag-red" />
        <span className="bg-white" />
        <span className="bg-navy" />
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-navy/10 bg-white/90 shadow-[0_14px_34px_-24px_rgba(11,31,77,0.6)] backdrop-blur"
            : "border-transparent bg-white/75 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 sm:px-8">
          
          {/* Logo */}
          <a 
            href="/" 
            aria-label="Home"
            className="relative flex items-center h-10 sm:h-12 md:h-14 lg:h-16 w-auto shrink-0"
          >
            <img
              src="/logo.png"
              alt="Creative Structures NJ LLC"
              className="h-full w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-sm font-medium text-navy/75 transition-colors hover:text-navy"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right Actions & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+18622510557"
              className="hidden items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-flag-red xl:flex"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-50 text-navy">
                <IconPhone className="h-4 w-4" />
              </span>
              (862) 251-0557
            </a>
            
            {/* Request a Quote - Hidden on smaller screens, visible on md and up */}
          
            {/* Hamburger Menu - Only visible on smaller screens */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-md border border-navy/15 text-navy transition-colors hover:bg-navy-50 lg:hidden"
            >
              {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-[2px] w-full bg-navy/5">
          <div
            className="h-full bg-flag-red transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Mobile Menu Collapse */}
        <div
          className={`overflow-hidden border-navy/10 bg-white transition-all duration-300 lg:hidden ${
            open ? "max-h-[480px] border-t opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-5 py-4 sm:px-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-[15px] font-medium text-navy/80 transition-colors hover:bg-navy-50 hover:text-navy"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+18622510557"
              className="mt-1 flex items-center gap-2 px-3 py-2 text-sm font-semibold text-flag-red"
            >
              <IconPhone className="h-4 w-4" /> (862) 251-0557
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-red mt-2 w-full">
              Request a Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}