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
  const isTechEra = project.company.toLowerCase().includes("techera");
  // Both TechEra projects show "01/2025 – Present", DigiTech shows specified duration
  const displayDuration = isTechEra ? "01/2025 – Present" : project.duration;

  const hasVerifiedDetails =
    (project.technologies?.length ?? 0) > 0 ||
    (project.keyModules?.length ?? 0) > 0 ||
    (project.responsibilities?.length ?? 0) > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#06090e]/80 p-0 backdrop-blur-md sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-2xl border border-teal-500/30 bg-[#0b1219] p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] sm:rounded-2xl sm:p-8 text-slate-200"
      >
        <button
          ref={closeRef}
          id="project-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg border border-teal-500/20 text-slate-400 hover:border-teal-400 hover:bg-white/5 hover:text-white transition-all"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <span className="chip">{project.category}</span>
          <span className="font-mono text-xs text-teal-400">{project.company}</span>
          {project.client && (
            <span className="rounded border border-teal-500/20 bg-teal-500/5 px-2 py-0.5 font-mono text-[11px] text-slate-300">
              Client: {project.client}
            </span>
          )}
        </div>

        <p className="mt-2 font-mono text-xs text-slate-400">
          Duration: <span className="text-teal-300">{displayDuration}</span>
        </p>

        <h2 id={titleId} className="mt-3 pr-10 text-2xl font-bold text-white tracking-tight">
          {project.title}
        </h2>

        <p className="mt-4 leading-relaxed text-slate-300">
          {project.description || project.summary}
        </p>

        {project.keyModules && project.keyModules.length > 0 && (
          <DetailList title="Key Modules" items={project.keyModules} />
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-6">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-lg border border-teal-500/25 bg-teal-500/10 px-3 py-1 font-mono text-xs text-teal-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.responsibilities && project.responsibilities.length > 0 && (
          <DetailList title="QA Responsibilities" items={project.responsibilities} />
        )}

        {!hasVerifiedDetails && (
          <div className="mt-6 rounded-xl border border-dashed border-teal-500/30 p-4 bg-teal-500/5">
            <p className="text-sm font-medium text-slate-200">Details available on request.</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-teal-400">
              General QA capabilities (not project-specific)
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {genericQaCapabilities.map((c) => (
                <li key={c} className="rounded-full border border-teal-500/20 bg-teal-500/10 px-3 py-1 font-mono text-xs text-teal-300">
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
      <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-400">{title}</h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-300">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}
