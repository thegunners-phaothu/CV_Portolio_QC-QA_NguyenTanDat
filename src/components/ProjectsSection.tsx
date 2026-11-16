"use client";

import { useState } from "react";
import type { Project, ProjectCategory } from "@/types";
import { PROJECT_CATEGORIES } from "@/data/cvData";
import ProjectVisual from "./ProjectVisual";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  // Currently selected project ID (default to first project)
  const [selectedId, setSelectedId] = useState<string>(projects[0]?.id ?? "mini-dms-ticket");
  // Hovered preview ID (temporarily overrides display while hovering)
  const [previewId, setPreviewId] = useState<string | null>(null);
  // Company filter tab: "All" | "TechEra" | "DigiTech Solutions"
  const [companyFilter, setCompanyFilter] = useState<string>("All");
  // Category filter: "All" | ProjectCategory
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  // Visual mode: "artwork" | "system"
  const [viewMode, setViewMode] = useState<"artwork" | "system">("artwork");
  // Detail mode: when a project is clicked for full detail view (Frame 00:16 in video)
  const [detailProject, setDetailProject] = useState<Project | null>(null);

  // Determine active project to display in preview panel
  const activeId = previewId ?? selectedId;
  const displayedProject = projects.find((p) => p.id === activeId) ?? projects[0];

  // Distinct company list for filter pills
  const companies = ["All", "TechEra", "DigiTech Solutions"];
  const categories = ["All", ...PROJECT_CATEGORIES];

  // Filter projects by company and category
  const filteredProjects = projects.filter((p) => {
    const matchesCompany =
      companyFilter === "All" || p.company?.toLowerCase().includes(companyFilter.toLowerCase());
    const matchesCategory =
      categoryFilter === "All" || p.category === (categoryFilter as ProjectCategory);
    return matchesCompany && matchesCategory;
  });

  // Calculate 1-based index for project numbering
  const projectIndex = projects.findIndex((p) => p.id === displayedProject.id) + 1;
  const isPreviewing = previewId !== null && previewId !== selectedId;

  // Metadata helper for company dates and role
  const getProjectDisplay = (p: Project) => {
    const isTechEra = p.company?.toLowerCase().includes("techera");
    const isCurrent = p.duration?.toLowerCase().includes("present");
    return {
      companyName: p.company,
      period: p.duration,
      isCurrent,
      role: isTechEra ? "QC/QA TESTER" : "QC ENGINEER / MANUAL TESTER",
      subtitle: p.category.toUpperCase(),
    };
  };

  return (
    <section id="projects" aria-labelledby="projects-title" className="section relative">
      <div className="container-page">
        {/* =========================================================================
            VIEW 1: FULL DETAIL VIEW (Frame 00:16 in video when 'View detail' is clicked)
            ========================================================================= */}
        {detailProject ? (
          <div className="animate-in fade-in duration-300">
            {/* Top Navigation Bar in Detail View */}
            <div className="flex items-center justify-between border-b border-teal-500/20 pb-5 mb-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-teal-400 font-semibold tracking-widest uppercase">
                  ARCHIVE / PROJECT 0{projects.findIndex((p) => p.id === detailProject.id) + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                <span className="font-mono text-xs text-white font-medium">
                  {detailProject.company}
                </span>
                {detailProject.client && (
                  <span className="rounded-full border border-teal-500/25 bg-teal-500/10 px-2.5 py-0.5 font-mono text-[11px] text-teal-300">
                    Client: {detailProject.client}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setDetailProject(null)}
                className="inline-flex items-center gap-2 rounded-xl border border-teal-500/30 bg-[#0b1219]/90 px-4 py-2 text-xs font-mono font-medium text-teal-300 hover:border-teal-400 hover:bg-teal-500/10 hover:text-white transition-all"
              >
                <span>&larr;</span>
                <span>Back to archive</span>
              </button>
            </div>

            {/* Split 2-Column Detail Layout */}
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1.35fr] items-start">
              {/* Left Column: Visual Artwork & System Switcher */}
              <div className="space-y-4">
                <div className="card overflow-hidden border-teal-500/30 bg-[#080d14]/90 p-0 shadow-2xl relative">
                  {/* Top Switcher inside artwork card */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-lg border border-teal-500/25 bg-[#06090e]/80 p-1 backdrop-blur-md">
                    <button
                      type="button"
                      onClick={() => setViewMode("artwork")}
                      className={`rounded px-2.5 py-1 font-mono text-[11px] font-medium transition ${
                        viewMode === "artwork"
                          ? "bg-teal-400 text-slate-950 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Artwork
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("system")}
                      className={`rounded px-2.5 py-1 font-mono text-[11px] font-medium transition ${
                        viewMode === "system"
                          ? "bg-teal-400 text-slate-950 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      System view
                    </button>
                  </div>

                  <ProjectVisual projectId={detailProject.id} viewMode={viewMode} />

                  {/* Artwork footer tag */}
                  <div className="flex items-center justify-between border-t border-teal-500/15 bg-[#06090e]/70 px-4 py-2.5 font-mono text-[11px]">
                    <span className="text-teal-400">
                      SYSTEM 0{projects.findIndex((p) => p.id === detailProject.id) + 1} &middot; {detailProject.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-teal-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                      LIVE SIGNALS
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-teal-500/20 bg-[#0b1219]/60 p-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-teal-400/80 mb-2">Category &amp; Domain</p>
                  <p className="chip">{detailProject.category}</p>
                </div>
              </div>

              {/* Right Column: In-depth Technical & QA Responsibilities */}
              <div className="space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2 font-mono text-xs text-teal-400">
                    <span>{getProjectDisplay(detailProject).period}</span>
                    {getProjectDisplay(detailProject).isCurrent && (
                      <span className="rounded-full bg-teal-500/20 px-2 py-0.5 text-[10px] text-teal-300 border border-teal-500/30">
                        Current
                      </span>
                    )}
                    {detailProject.client && (
                      <span className="text-slate-400">
                        &middot; Client: <strong className="text-slate-200">{detailProject.client}</strong>
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {detailProject.company}
                  </h1>
                  <h2 className="mt-1 text-xl font-semibold text-teal-300">
                    {detailProject.title}
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mt-1">
                    {getProjectDisplay(detailProject).role}
                  </p>
                </div>

                <p className="text-slate-300 leading-relaxed text-base">
                  {detailProject.description || detailProject.summary}
                </p>

                {/* Key Modules */}
                {detailProject.keyModules && detailProject.keyModules.length > 0 && (
                  <div className="rounded-xl border border-teal-500/20 bg-[#0b1219]/60 p-5 space-y-3">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                      Key Modules
                    </h3>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {detailProject.keyModules.map((mod) => (
                        <li key={mod} className="flex items-start gap-2 text-sm text-slate-300">
                          <svg className="h-4 w-4 flex-none text-teal-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* The work behind the exhibit / QA Responsibilities */}
                {detailProject.responsibilities && detailProject.responsibilities.length > 0 && (
                  <div className="rounded-2xl border border-teal-500/20 bg-[#0b1219]/80 p-6 backdrop-blur-sm space-y-4">
                    <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
                      <svg className="h-4 w-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                      The work behind the exhibit &middot; QA Responsibilities
                    </h3>
                    <ul className="space-y-3 pl-2">
                      {detailProject.responsibilities.map((r, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                          <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-teal-400" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies Badges */}
                {detailProject.technologies && detailProject.technologies.length > 0 && (
                  <div>
                    <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-400/80 mb-3">
                      Verified Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {detailProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-teal-500/25 bg-teal-500/10 px-3 py-1 font-mono text-xs text-teal-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => setDetailProject(null)}
                    className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.35)] active:scale-95"
                  >
                    <span>&larr;</span>
                    Back to all projects
                  </button>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#0b1219]/80 px-5 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-teal-400 hover:text-teal-300"
                  >
                    Inquire about this project &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* =========================================================================
             VIEW 2: SPLIT PREVIEW LAYOUT (Exact reproduction of Project.mp4 video)
             ========================================================================= */
          <>
            {/* Section Eyebrow & Title */}
            <p className="eyebrow">
              <span className="text-teal-400 font-mono">03 //</span>
              Selected Work &middot; Enterprise Systems
            </p>
            <h2 id="projects-title" className="section-title">
              Selected experience.
            </h2>

            {/* Filtering Controls: Company & Category */}
            <div className="mt-8 space-y-3">
              {/* Company Filter Tabs */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="font-mono text-xs text-slate-400 mr-2 uppercase tracking-wider">Company:</span>
                {companies.map((c) => {
                  const count =
                    c === "All"
                      ? projects.length
                      : projects.filter((p) => p.company?.toLowerCase().includes(c.toLowerCase())).length;
                  const active = companyFilter === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCompanyFilter(c)}
                      className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all ${
                        active
                          ? "bg-teal-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(45,212,191,0.3)]"
                          : "border border-teal-500/20 bg-[#0b1219]/80 text-slate-300 hover:border-teal-400/40 hover:text-teal-300"
                      }`}
                    >
                      {c} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2 items-center pt-1">
                <span className="font-mono text-xs text-slate-400 mr-2 uppercase tracking-wider">Category:</span>
                {categories.map((cat) => {
                  const count =
                    cat === "All"
                      ? projects.length
                      : projects.filter((p) => p.category === cat).length;
                  const active = categoryFilter === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategoryFilter(cat)}
                      className={`rounded-full px-3 py-1 font-mono text-[11px] transition-all ${
                        active
                          ? "bg-teal-400 text-slate-950 font-bold"
                          : "border border-teal-500/20 bg-[#0b1219]/60 text-slate-400 hover:border-teal-400/40 hover:text-teal-300"
                      }`}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Interactive Grid (Left List + Right Preview Panel) */}
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1.35fr] items-start">
              {/* LEFT COLUMN: List of Projects Grouped by Company */}
              <div
                className="space-y-3"
                onMouseLeave={() => setPreviewId(null)}
              >
                <div className="flex items-center justify-between pb-2 font-mono text-xs text-slate-400 border-b border-teal-500/15">
                  <span>01 / Hover to preview &middot; Click to select</span>
                  <span className="text-teal-400">{filteredProjects.length} items</span>
                </div>

                <div className="space-y-3">
                  {filteredProjects.map((project) => {
                    const isSelected = project.id === selectedId;
                    const isHovered = project.id === previewId;
                    const display = getProjectDisplay(project);

                    return (
                      <div
                        key={project.id}
                        onMouseEnter={() => setPreviewId(project.id)}
                        onClick={() => setSelectedId(project.id)}
                        className={`group relative cursor-pointer rounded-2xl border p-5 transition-all duration-200 ${
                          isSelected
                            ? "border-teal-400/80 bg-[#0c1622]/95 shadow-[0_0_30px_rgba(45,212,191,0.15)] ring-1 ring-teal-400/30"
                            : isHovered
                            ? "border-teal-500/50 bg-[#0b131d]/90 shadow-md"
                            : "border-teal-500/15 bg-[#0b1219]/70 hover:border-teal-500/40 hover:bg-[#0b1219]/90"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <span
                              className={`mt-1 h-2.5 w-2.5 flex-none rounded-full transition-all ${
                                isSelected
                                  ? "bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]"
                                  : "bg-teal-500/40 group-hover:bg-teal-400"
                              }`}
                            />
                            <div>
                              {/* Company Name & Optional Client */}
                              <div className="flex flex-wrap items-center gap-2">
                                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                                  {project.company}
                                </h3>
                                {project.client && (
                                  <span className="rounded border border-teal-500/20 bg-teal-500/5 px-2 py-0.5 font-mono text-[10px] text-teal-300">
                                    Client: {project.client}
                                  </span>
                                )}
                              </div>

                              {/* Dates and Current indicator */}
                              <p className="mt-0.5 font-mono text-xs text-slate-400">
                                {display.period} {display.isCurrent && <span className="text-teal-400 font-semibold">&bull; Current</span>}
                              </p>

                              {/* Project Title and Role */}
                              <p className="mt-1.5 font-mono text-xs text-teal-400/90 font-medium">
                                {display.role} &middot; <span className="text-slate-300 font-normal">{project.title}</span>
                              </p>

                              {/* Category Badge */}
                              <span className="mt-2 inline-block rounded border border-teal-500/20 bg-teal-500/5 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                                {project.category}
                              </span>
                            </div>
                          </div>

                          {/* Right Badge Indicator */}
                          <div className="flex-none">
                            {isSelected ? (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/60 bg-teal-500/10 px-3 py-1 font-mono text-xs font-semibold text-teal-300 shadow-[0_0_10px_rgba(45,212,191,0.2)]">
                                <svg className="h-3.5 w-3.5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                                Selected
                              </span>
                            ) : isHovered ? (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/40 bg-teal-500/5 px-3 py-1 font-mono text-xs text-teal-400">
                                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                                Preview
                              </span>
                            ) : (
                              <span className="text-slate-500 group-hover:text-teal-400 transition-colors font-mono text-sm">
                                &rarr;
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT COLUMN: Interactive Preview Exhibition Panel */}
              <div className="sticky top-24">
                <div className="card overflow-hidden border-teal-500/25 bg-[#0b1219]/90 shadow-2xl backdrop-blur-md">
                  {/* Preview Top Header Bar */}
                  <div className="flex items-center justify-between border-b border-teal-500/15 bg-[#06090e]/70 px-5 py-3">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${isPreviewing ? "bg-cyan-400" : "bg-teal-400 animate-pulse"}`} />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-teal-400">
                        {isPreviewing ? "PREVIEW" : "SELECTED"} / 0{projectIndex}
                      </span>
                    </div>

                    {/* View Switcher: Artwork vs System View */}
                    <div className="flex items-center gap-1.5 rounded-lg border border-teal-500/20 bg-[#06090e] p-1">
                      <button
                        type="button"
                        onClick={() => setViewMode("artwork")}
                        className={`rounded px-2.5 py-1 font-mono text-xs font-medium transition ${
                          viewMode === "artwork"
                            ? "bg-teal-400 text-slate-950 font-bold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Artwork
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode("system")}
                        className={`rounded px-2.5 py-1 font-mono text-xs font-medium transition ${
                          viewMode === "system"
                            ? "bg-teal-400 text-slate-950 font-bold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        System view
                      </button>
                    </div>
                  </div>

                  {/* Artwork / System View Display */}
                  <div className="relative border-b border-teal-500/15">
                    <ProjectVisual projectId={displayedProject.id} viewMode={viewMode} />

                    {/* Overlay badge in bottom-right of visual */}
                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 rounded-full border border-teal-500/30 bg-[#06090e]/80 px-3 py-1 font-mono text-[10px] text-teal-300 backdrop-blur-sm shadow-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
                      <span>{viewMode === "artwork" ? "ARTWORK &bull; LIVE SIGNALS" : "SYSTEM ARCHITECTURE"}</span>
                    </div>
                  </div>

                  {/* Project Info & Description */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-teal-400/90 mb-1">
                        <span>{displayedProject.company}</span>
                        <span>&bull;</span>
                        <span className="text-slate-400">{displayedProject.category}</span>
                        {displayedProject.client && (
                          <>
                            <span>&bull;</span>
                            <span className="text-teal-300 font-semibold">Client: {displayedProject.client}</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-2xl font-extrabold text-white tracking-tight">
                        {displayedProject.title}
                      </h3>
                      <p className="font-mono text-xs text-slate-400 mt-1">
                        Duration: <span className="text-teal-300 font-semibold">{getProjectDisplay(displayedProject).period}</span>
                      </p>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-300">
                      {displayedProject.description || displayedProject.summary}
                    </p>

                    {/* Key Modules */}
                    {displayedProject.keyModules && displayedProject.keyModules.length > 0 && (
                      <div className="border-t border-teal-500/10 pt-3">
                        <p className="font-mono text-[11px] uppercase tracking-wider text-teal-400/80 mb-2">Key Modules</p>
                        <div className="flex flex-wrap gap-1.5">
                          {displayedProject.keyModules.map((mod) => (
                            <span
                              key={mod}
                              className="rounded border border-slate-700/60 bg-[#0e1724] px-2 py-0.5 font-mono text-[11px] text-slate-300"
                            >
                              {mod}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    {displayedProject.technologies && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {displayedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-teal-500/25 bg-teal-500/10 px-3 py-1 font-mono text-xs text-teal-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Bottom Action Bar */}
                    <div className="pt-4 flex items-center justify-between border-t border-teal-500/15">
                      <button
                        type="button"
                        onClick={() => setDetailProject(displayedProject)}
                        className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 transition hover:bg-teal-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.35)] active:scale-95"
                      >
                        <span>View detail</span>
                        <span aria-hidden="true">&rarr;</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setViewMode(viewMode === "artwork" ? "system" : "artwork");
                        }}
                        className="font-mono text-xs text-slate-400 hover:text-teal-300 transition-colors flex items-center gap-1"
                      >
                        <span>Toggle {viewMode === "artwork" ? "System View" : "Artwork"}</span>
                        <span>&nearr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
