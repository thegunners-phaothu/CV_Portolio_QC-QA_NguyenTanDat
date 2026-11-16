"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#about", num: "01", label: "About" },
  { href: "#skills", num: "02", label: "Skills" },
  { href: "#experience", num: "03", label: "Experience" },
  { href: "#projects", num: "04", label: "Projects" },
  { href: "#under-pressure", num: "05", label: "Under Pressure" },
  { href: "#contact", num: "06", label: "Contact" },
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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#06090e]/90 backdrop-blur-md border-b border-teal-500/20 shadow-[0_4px_25px_rgba(0,0,0,0.6)]"
          : "bg-[#06090e]/70 backdrop-blur-sm border-b border-teal-500/10"
      }`}
    >
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between">
        <a href="#about" className="flex items-center gap-3 group">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-teal-500/40 bg-teal-500/10 text-xs font-mono font-bold text-teal-300 shadow-[0_0_12px_rgba(45,212,191,0.25)] group-hover:border-teal-400 group-hover:bg-teal-500/20 transition-all">
            {initials}
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-white tracking-tight group-hover:text-teal-300 transition-colors">
              {name}
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-teal-400/80 -mt-0.5">
              QA / QC Tester
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition"
              >
                <span className="font-mono text-[10px] text-teal-400/70 group-hover:text-teal-300">
                  {l.num}
                </span>
                <span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            id="nav-download-cv"
            href={cvPath}
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-teal-400 px-3.5 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-teal-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] active:scale-95"
          >
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume PDF
          </a>
          <button
            id="mobile-menu-toggle"
            type="button"
            className="grid h-9 w-9 place-items-center rounded-xl border border-teal-500/20 bg-[#0b1219] text-slate-300 md:hidden hover:border-teal-400 hover:text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-teal-500/20 bg-[#06090e]/95 backdrop-blur-md md:hidden">
          <ul className="container-page flex flex-col py-3 space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-teal-500/10 hover:text-teal-300"
                >
                  <span className="font-mono text-xs text-teal-400">{l.num}</span>
                  <span>{l.label}</span>
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={cvPath} download className="btn-primary w-full justify-center">
                Download CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
