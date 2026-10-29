"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

interface NavbarProps {
  name: string;
  cvPath: string;
}

export default function Navbar({ name, cvPath }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((p) => p[0])
    .join("");

  return (
    <header
      className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-300 shadow-sm"
    >
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between">
        <a href="#about" className="flex items-center gap-2 font-bold text-slate-900">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-amber-500 to-slate-200 text-sm text-slate-900">
            {initials}
          </span>
          <span className="hidden sm:inline">{name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a id="nav-download-cv" href={cvPath} download className="btn-primary hidden sm:inline-flex">
            Download CV
          </a>
          <button
            id="mobile-menu-toggle"
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-300 md:hidden dark:border-white/15"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-300 bg-white/80 md:hidden dark:border-slate-600 dark:bg-slate-900">
          <ul className="container-page flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={cvPath} download className="btn-primary w-full justify-center">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
