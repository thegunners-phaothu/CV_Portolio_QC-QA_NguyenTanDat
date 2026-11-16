import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project, trigger: HTMLButtonElement) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const isTechEra = project.company.toLowerCase().includes("techera");
  // Both TechEra projects show "01/2025 – Present", DigiTech shows specified duration
  const displayDuration = isTechEra ? "01/2025 – Present" : project.duration;

  return (
    <article className="card group flex h-full flex-col p-6 hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] transition-all duration-300">
      {/* Category, Company, Client Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="chip">{project.category}</span>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono font-medium text-teal-400/90">{project.company}</span>
          {project.client && (
            <span className="rounded border border-teal-500/20 bg-teal-500/5 px-2 py-0.5 font-mono text-[10px] text-slate-300">
              Client: {project.client}
            </span>
          )}
        </div>
      </div>

      {/* Duration */}
      <p className="mt-2 font-mono text-xs text-slate-400">
        {displayDuration}
      </p>

      {/* Title */}
      <h3 className="mt-3 text-lg font-semibold text-white tracking-tight group-hover:text-teal-300 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
        {project.description || project.summary}
      </p>

      {/* Key Modules */}
      {project.keyModules && project.keyModules.length > 0 && (
        <div className="mt-4 border-t border-teal-500/10 pt-3">
          <p className="font-mono text-[11px] uppercase tracking-wider text-teal-400/80 mb-1.5">Key Modules</p>
          <ul className="flex flex-wrap gap-1.5">
            {project.keyModules.slice(0, 3).map((mod) => (
              <li
                key={mod}
                className="rounded-md border border-slate-700/60 bg-[#0e1724] px-2 py-0.5 text-[11px] text-slate-300"
              >
                {mod}
              </li>
            ))}
            {project.keyModules.length > 3 && (
              <li className="text-[11px] font-mono text-slate-400 self-center">
                +{project.keyModules.length - 3} more
              </li>
            )}
          </ul>
        </div>
      )}

      {/* Technologies Badges */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-teal-500/20 bg-teal-500/10 px-2 py-0.5 font-mono text-[11px] text-teal-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* View details button */}
      <button
        id={`project-open-${project.id}`}
        type="button"
        onClick={(e) => onOpen(project, e.currentTarget)}
        className="mt-6 inline-flex items-center gap-1.5 self-start font-mono text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
        aria-haspopup="dialog"
      >
        <span>View details</span>
        <span aria-hidden="true">&rarr;</span>
      </button>
    </article>
  );
}
