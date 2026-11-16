import Image from "next/image";
import type { Profile } from "@/types";

interface HeroSectionProps {
  profile: Profile;
  cvPath: string;
}

export default function HeroSection({ profile, cvPath }: HeroSectionProps) {
  const initials = profile.name
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((p) => p[0])
    .join("");

  return (
    <section id="about" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="container-page relative grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-amber-400 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-teal-400 animate-pulse" aria-hidden="true" />
            AN INTERACTIVE QUALITY ENGINEERING EXHIBITION &mdash; BY {profile.name}
          </p>

          <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            {profile.name}
            <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-300">
              {profile.role}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
            {profile.summary}
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
            <svg
              className="h-4 w-4 text-teal-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {profile.location}
          </p>

          {/* 3 Tech Architecture Slabs matching reference design */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-teal-500/20 bg-[#0b1219]/90 p-3.5 backdrop-blur-sm shadow-sm hover:border-teal-400/40 transition">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                <svg className="h-3 w-3 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                STRUCTURE
              </p>
              <p className="mt-1 text-xs font-semibold text-white">{profile.experienceYears}+ Years QA/QC</p>
            </div>
            <div className="rounded-xl border border-teal-500/20 bg-[#0b1219]/90 p-3.5 backdrop-blur-sm shadow-sm hover:border-teal-400/40 transition">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                <svg className="h-3 w-3 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                APPROACH
              </p>
              <p className="mt-1 text-xs font-semibold text-white">API &amp; SQL Precision</p>
            </div>
            <div className="rounded-xl border border-teal-500/20 bg-[#0b1219]/90 p-3.5 backdrop-blur-sm shadow-sm hover:border-teal-400/40 transition">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
                <svg className="h-3 w-3 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 14 14" />
                </svg>
                ROLE
              </p>
              <p className="mt-1 text-xs font-semibold text-white">Software QA Engineer</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              id="hero-contact"
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] active:scale-95"
            >
              Explore My Work
              <span aria-hidden="true">&darr;</span>
            </a>
            <a
              id="hero-download-cv"
              href={cvPath}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#0b1219]/80 px-5 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-teal-400 hover:text-teal-300 active:scale-95"
            >
              <svg
                className="h-4 w-4 text-teal-400"
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
              Download CV (PDF)
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="card p-8 border-teal-500/20 bg-[#0b1219]/85 backdrop-blur-md shadow-2xl">
            {profile.photo ? (
              <div className="relative mx-auto w-40 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 p-1 shadow-[0_0_25px_rgba(45,212,191,0.25)]">
                <Image
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                  width={profile.photo.width}
                  height={profile.photo.height}
                  priority
                  sizes="160px"
                  className="aspect-square h-auto w-full rounded-full object-cover object-top"
                />
              </div>
            ) : (
              <div
                className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-4xl font-extrabold text-slate-950 shadow-[0_0_25px_rgba(45,212,191,0.25)]"
                role="img"
                aria-label={`${profile.name} initials avatar`}
              >
                {initials}
              </div>
            )}
            <h2 className="mt-6 text-center text-xs font-mono font-semibold uppercase tracking-widest text-teal-400">
              Key Strengths
            </h2>
            <ul className="mt-4 space-y-3">
              {profile.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-slate-300">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-none text-teal-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
