import { useEffect, useState } from "react";
import { scrollToSection } from "../lib/scroll";
import ThemeToggle from "./ThemeToggle";
import { PROFILE } from "../data/resume";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Experience", id: "experience" },
  { label: "Work", id: "work" },
  { label: "Skills", id: "skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);

      // Active-section detection.
      const offset = window.scrollY + window.innerHeight * 0.4;
      let current = "home";
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= offset) current = link.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          aria-label="Home"
          className="group relative grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 hover:scale-110"
        >
          <span className="accent-gradient absolute inset-0 rounded-full transition-transform duration-500 group-hover:[transform:rotate(180deg)]" />
          <span className="absolute inset-[2px] grid place-items-center rounded-full bg-bg">
            <span className="font-display text-[13px] italic text-text-primary">
              {PROFILE.initials}
            </span>
          </span>
        </button>

        {/* Divider */}
        <div className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {/* Nav links */}
        <div className="flex items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors duration-200 sm:px-4 sm:py-2 sm:text-sm ${
                active === link.id
                  ? "bg-stroke/50 text-text-primary"
                  : "text-muted hover:bg-stroke/50 hover:text-text-primary"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {/* Say hi button */}
        <a
          href={`mailto:${PROFILE.email}`}
          className="group relative inline-flex items-center rounded-full"
        >
          <span className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ inset: "-2px" }} />
          <span className="relative inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-xs text-text-primary backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
            Say hi
            <span aria-hidden className="text-[0.85em]">↗</span>
          </span>
        </a>

        {/* Divider */}
        <div className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
