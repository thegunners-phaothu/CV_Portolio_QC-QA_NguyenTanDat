import type { Education, Experience, ExperienceHighlight, Project } from "@/types";

interface ExperienceTimelineProps {
  experience: Experience[];
  highlights: ExperienceHighlight[];
  experienceYears: number;
  projects: Project[];
  education: Education[];
  languages: string[];
  certifications: string[];
}

export default function ExperienceTimeline({
  experience,
  highlights,
  experienceYears,
  projects,
  education,
  languages,
  certifications,
}: ExperienceTimelineProps) {
  const projectTitle = (id: string) => projects.find((p) => p.id === id)?.title;

  return (
        <section id="experience" aria-labelledby="experience-title" className="section bg-[#C0C0C0]">
      <div className="container-page">
        <p className="eyebrow">{experienceYears} years of experience</p>
        <h2 id="experience-title" className="section-title">
          Professional Experience
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <ol className="relative space-y-6 border-l border-zinc-300 pl-8 dark:border-white/10">
            {experience.map((e, idx) => (
              <li key={e.id} className="relative">
                <Dot />
                <details className="card group p-6 open:border-gold-500/40" open={idx === 0}>
                  <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs text-gold-600 dark:text-gold-400">
                          {e.startDate} — {e.endDate}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">{e.role}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">
                          {e.company} · {e.location}
                        </p>
                      </div>
                      <svg
                        className="mt-1 h-5 w-5 flex-none text-zinc-400 transition group-open:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </summary>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  {e.projectIds && e.projectIds.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.projectIds.map((id) => {
                        const title = projectTitle(id);
                        return title ? (
                          <a key={id} href="#projects" className="chip hover:bg-gold-500/20">
                            {title}
                          </a>
                        ) : null;
                      })}
                    </div>
                  )}
                </details>
              </li>
            ))}
          </ol>

          <div className="space-y-6">
            {highlights.map((h) => (
              <div key={h.id} className="card p-6 hover:border-gold-500/40">
                <h3 className="font-semibold text-zinc-900 dark:text-white">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{h.description}</p>
              </div>
            ))}

            <div className="card p-6">
              <h3 className="font-semibold text-zinc-900 dark:text-white">Education</h3>
              {education.map((ed) => (
                <div key={ed.id} className="mt-3">
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{ed.degree}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {ed.school} · {ed.startYear} – {ed.endYear}
                  </p>
                </div>
              ))}
              <h3 className="mt-5 font-semibold text-zinc-900 dark:text-white">Languages</h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                {languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <h3 className="mt-5 font-semibold text-zinc-900 dark:text-white">Certification</h3>
              <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <span
      className="absolute -left-[41px] top-7 h-4 w-4 rounded-full border-4 border-zinc-50 bg-gradient-to-br from-gold to-silver dark:border-navy-900"
      aria-hidden="true"
    />
  );
}
