import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project, trigger: HTMLButtonElement) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
        <article className="card group flex h-full flex-col p-6 bg-white border border-slate-300 shadow-md hover:shadow-xl text-slate-900">
      <div className="flex items-start justify-between gap-3">
        <span className="chip">{project.category}</span>
        {project.company && (
          <span className="text-xs font-medium text-slate-700 dark:text-slate-400">{project.company}</span>
        )}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.summary}</p>
      <button
        id={`project-open-${project.id}`}
        type="button"
        onClick={(e) => onOpen(project, e.currentTarget)}
        className="mt-6 inline-flex items-center gap-1 self-start text-amber-700 dark:text-amber-600 hover:text-amber-800"
        aria-haspopup="dialog"
      >
        View details<span className="sr-only"> about {project.title}</span>
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}
