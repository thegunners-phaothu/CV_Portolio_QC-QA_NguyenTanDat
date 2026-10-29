import type { Skill, SkillCategory } from "@/types";

const ICONS: Record<SkillCategory, string> = {
  Testing: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
  "API & Database": "M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14",
  Performance: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  "Tools & Process": "M4 4v6h6M20 20v-6h-6M5.6 15A8 8 0 0 0 19 17M18.4 9A8 8 0 0 0 5 7",
};

export default function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <div className="container-page">
        <p className="eyebrow">Toolkit</p>
        <h2 id="skills-title" className="section-title">
          Skills &amp; Tools
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <li key={skill.id} className="card group p-6 hover:-tranzinc-y-1 hover:border-gold-500/50">
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold/15 to-silver/15 text-gold-600 transition group-hover:from-gold/30 group-hover:to-silver/30 dark:text-gold-300">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={ICONS[skill.category]} />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">{skill.name}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{skill.category}</p>
                </div>
              </div>
              {skill.tools && skill.tools.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${skill.name} tools`}>
                  {skill.tools.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
