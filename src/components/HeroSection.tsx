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
    <section id="about" aria-labelledby="hero-title" className="relative overflow-hidden bg-[#C0C0C0]">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500/20 to-slate-200/20 blur-3xl" aria-hidden="true" />

      <div className="container-page relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="chip mb-6">
            <span className="mr-2 h-2 w-2 rounded-full bg-yellow-400" aria-hidden="true" />
            {profile.experienceYears} years in software quality
          </p>
          <h1 id="hero-title" className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            {profile.name}
            <span className="mt-2 block text-amber-600">
              {profile.role}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700">{profile.summary}</p>
          <p className="mt-4 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            {profile.location}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a id="hero-contact" href="#contact" className="btn-primary">
              Get in touch
            </a>
            <a id="hero-download-cv" href={cvPath} download className="btn-ghost">
              Download CV
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="card p-8">
            {profile.photo ? (
                              <div className="relative mx-auto w-40 rounded-full bg-gradient-to-br from-amber-500 to-slate-200 p-1 shadow-xl">
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
                className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-amber-500 to-slate-200 text-4xl font-extrabold text-slate-900 shadow-xl"
                role="img"
                aria-label={`${profile.name} initials avatar`}
              >
                {initials}
              </div>
            )}
            <h2 className="mt-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Key strengths
            </h2>
            <ul className="mt-4 space-y-3">
              {profile.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <svg className="mt-0.5 h-4 w-4 flex-none text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
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
