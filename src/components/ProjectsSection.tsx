"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import type { Project, ProjectFilter } from "@/types";
import { PROJECT_FILTERS } from "@/data/cvData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [active, setActive] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter, projects],
  );

  const open = useCallback((p: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setActive(p);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    triggerRef.current?.focus();
  }, []);

  return (
    <section id="projects" aria-labelledby="projects-title" className="section bg-[#C0C0C0]">
      <div className="container-page">
        <p className="eyebrow text-amber-800 font-bold">Selected work</p>
        <h2 id="projects-title" className="section-title text-slate-900 font-extrabold">
          Projects
        </h2>

        <div role="group" aria-label="Filter projects by category" className="mt-8 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((f) => {
            const selected = f === filter;
            return (
              <button
                key={f}
                id={`filter-${f.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selected
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-800 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} project{visible.length === 1 ? "" : "s"}
        </p>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <li key={p.id}>
              <ProjectCard project={p} onOpen={open} />
            </li>
          ))}
        </ul>
      </div>

      {active && <ProjectModal project={active} onClose={close} />}
    </section>
  );
}
