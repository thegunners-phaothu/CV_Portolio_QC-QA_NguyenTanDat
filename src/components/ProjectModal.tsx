"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/types";
import { genericQaCapabilities } from "@/data/cvData";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const nodes = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const titleId = `modal-title-${project.id}`;
  const hasVerifiedDetails =
    (project.techStack?.length ?? 0) > 0 ||
    (project.responsibilities?.length ?? 0) > 0 ||
    (project.achievements?.length ?? 0) > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy-950/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-zinc-200 bg-white p-6 shadow-2xl sm:rounded-2xl sm:p-8 dark:border-white/10 dark:bg-navy-800"
      >
        <button
          ref={closeRef}
          id="project-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <span className="chip">{project.category}</span>
        <h2 id={titleId} className="mt-4 pr-10 text-2xl font-bold text-zinc-900 dark:text-white">
          {project.title}
        </h2>
        {project.company && <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{project.company}</p>}
        <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-300">{project.summary}</p>

        {project.techStack && project.techStack.length > 0 && (
          <DetailList title="Technology stack" items={project.techStack} />
        )}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <DetailList title="QA responsibilities" items={project.responsibilities} />
        )}
        {project.achievements && project.achievements.length > 0 && (
          <DetailList title="Achievements" items={project.achievements} />
        )}

        {!hasVerifiedDetails && (
          <div className="mt-6 rounded-xl border border-dashed border-zinc-300 p-4 dark:border-white/15">
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Details available on request.</p>
            <p className="mt-3 text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              General QA capabilities (not project-specific)
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {genericQaCapabilities.map((c) => (
                <li key={c} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-white/5 dark:text-zinc-300">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        <a href="#contact" onClick={onClose} className="btn-primary mt-6">
          Ask about this project
        </a>
      </div>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{title}</h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
