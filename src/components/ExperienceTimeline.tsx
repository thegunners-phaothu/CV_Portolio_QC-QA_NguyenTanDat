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
    <section id="experience" aria-labelledby="experience-title" className="section relative">
      <div className="container-page">
        <p className="eyebrow">
          <span className="text-teal-400 font-mono">02 //</span>
          Career Archive &middot; {experienceYears} Years
        </p>
        <h2 id="experience-title" className="section-title">
          Selected experience.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <ol className="relative space-y-6 border-l border-teal-500/20 pl-8">
            {experience.map((e, idx) => (
              <li key={e.id} className="relative">
                <Dot />
                <details
                  className="card group p-6 open:border-teal-400/70 open:shadow-[0_0_30px_rgba(45,212,191,0.15)] transition-all duration-300"
                  open={idx === 0}
                >
                  <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs text-teal-400 flex items-center gap-1.5">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />
                          {e.startDate} &mdash; {e.endDate}
                        </p>
                        <h3 className="mt-1 text-lg font-semibold text-white tracking-tight">{e.role}</h3>
                        <p className="text-sm text-slate-400">
                          {e.company} &middot; {e.location}
                        </p>
                      </div>
                      <svg
                        className="mt-1 h-5 w-5 flex-none text-slate-400 transition group-open:rotate-180 group-open:text-teal-400"
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
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  {e.projectIds && e.projectIds.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {e.projectIds.map((id) => {
                        const title = projectTitle(id);
                        return title ? (
                          <a key={id} href="#projects" className="chip hover:bg-teal-500/20 hover:border-teal-400/50">
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
              <div
                key={h.id}
                className="card p-6 hover:border-teal-400/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.12)] transition-all duration-300"
              >
                <h3 className="font-semibold text-white tracking-tight">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{h.description}</p>
              </div>
            ))}

            <div className="card p-6 border-teal-500/20">
              <h3 className="font-semibold text-white tracking-tight flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Education
              </h3>
              {education.map((ed) => (
                <div key={ed.id} className="mt-3">
                  <p className="text-sm font-medium text-slate-200">{ed.degree}</p>
                  <p className="text-sm text-slate-400 font-mono text-xs">
                    {ed.school} &middot; {ed.startYear} &ndash; {ed.endYear}
                  </p>
                </div>
              ))}

              <h3 className="mt-6 font-semibold text-white tracking-tight flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Languages
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
                {languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>

              <h3 className="mt-6 font-semibold text-white tracking-tight flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                Certifications
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-300">
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
      className="absolute -left-[41px] top-7 h-4 w-4 rounded-full border-2 border-teal-400 bg-[#06090e] shadow-[0_0_12px_rgba(45,212,191,0.6)]"
      aria-hidden="true"
    />
  );
}
