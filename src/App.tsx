import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { ServiceArea } from "./components/ServiceArea";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { IconArrowUp, IconPhone, IconArrow } from "./components/icons";

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-flag-red text-white shadow-lg transition-all duration-300 hover:bg-navy ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <IconArrowUp className="h-5 w-5" />
    </button>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy/10 bg-white shadow-[0_-10px_30px_-20px_rgba(11,31,77,0.5)] lg:hidden">
      <a
        href="tel:+18622510557"
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-navy"
      >
        <IconPhone className="h-4 w-4" />
        Call
      </a>
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 bg-flag-red py-3.5 text-sm font-semibold uppercase tracking-[0.06em] text-white"
      >
        Get Quote
        <IconArrow className="h-4 w-4" />
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Process />
        <Projects />
        <Testimonials />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <MobileBar />
    </div>
  );
}
