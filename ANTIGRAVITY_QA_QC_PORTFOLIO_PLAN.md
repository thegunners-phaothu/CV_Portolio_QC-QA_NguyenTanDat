# QA/QC Tester Portfolio — Antigravity Implementation Plan

> **Purpose:** Build a polished, responsive, production-oriented portfolio for Nguyen Tan Dat (QA/QC Tester, 4 years of experience) using Next.js App Router, TypeScript, and Tailwind CSS.
>
> **Execution mode:** Antigravity should inspect the existing repository, implement the project in phases, run available checks, and report actual results. Treat this file as the implementation contract for the entire task.

---

## 0. Global Rules — Mandatory

### Role
Act as a Senior Full-Stack Developer, Next.js Architect, UI/UX Engineer, and QA/QC Engineer.

### Technology and architecture
- Use Next.js App Router, TypeScript with `strict: true`, and Tailwind CSS.
- Inspect the existing repository before editing. Preserve useful existing work and avoid replacing files with incompatible versions.
- If no project exists, initialize a clean project using compatible stable dependencies.
- Respect the existing package manager and lockfile. Do not switch package managers without a clear reason.
- Use Server Components by default. Add `"use client"` only to components that need client-side state, hooks, browser APIs, or event handlers.
- Keep dependencies minimal. Use Framer Motion only if it adds meaningful value; CSS transitions are acceptable for subtle effects.
- Use reusable, strongly typed components and semantic HTML.
- Do not use pseudocode, omit required sections, or leave requested components incomplete.

### Single source of truth
- All profile, skills, experience, and project content must be maintained in `src/data/cvData.ts`.
- Define shared interfaces/types in `src/types/`.
- Presentation components must receive content through props or import appropriate data from the centralized data module. Do not duplicate CV content in JSX.
- Keep type definitions, component props, category values, metadata, and structured data consistent across all phases.

### Content accuracy
Use only information provided in this file. Do not invent:
- Employers or employment dates.
- Project metrics, outcomes, or achievements not provided.
- Unverified technical stacks for individual projects.
- LinkedIn/social URLs, certifications, or other personal information.

When information is missing, use a clearly named `TODO` placeholder or omit the optional field. Do not display `TODO` text to portfolio visitors; document missing information in the implementation report and use a sensible presentation fallback.

### Quality and accessibility
- Responsive from mobile to desktop.
- Accessible semantic markup, labels, keyboard navigation, visible focus indicators, and appropriate ARIA attributes.
- Respect `prefers-reduced-motion`.
- Ensure readable contrast in dark and light themes.
- Never claim a command, test, build, or Lighthouse audit succeeded unless it was actually executed and its result inspected.
- Do not guarantee a 100/100 Lighthouse score. Optimize and report measured results honestly.

---

## 1. Profile and CV Content

### Profile
- **Name:** Nguyen Tan Dat
- **Role:** QA/QC Tester
- **Experience:** 4 years
- **Email:** datn0990@gmail.com
- **Phone:** +84 392 631 620
- **Location:** Ho Chi Minh City, Vietnam

### Skills
- Manual Testing
- API Testing: Postman, Swagger, Apidog
- SQL: PostgreSQL, MySQL
- Performance Testing: JMeter
- Defect Tracking: Redmine, Digiwork
- Agile/Scrum

### Key highlights
- Project transfer and UAT handover.
- Client requirement analysis.
- Solution proposal.
- Issue identification/escalation and system optimization.

Present these as responsibilities or strengths, not quantified achievements. Do not fabricate impact metrics.

### Projects
Include these projects in the centralized dataset:
1. Mini DMS Ticket System Integration (TechEra)
2. Travel Management System & Face Control Gateway
3. DMS Phase 1 & 2 (DigiTech)
4. Feng Shui PWA/Mobile
5. E-commerce Platform
6. IMAN Warranty System

The only confirmed project/company associations are:
- Mini DMS Ticket System Integration — TechEra
- DMS Phase 1 & 2 — DigiTech

Do not assign employers to the other projects without confirmation.

### Project categories
Use a shared TypeScript union type with exactly these categories:
- `Ticketing & DMS`
- `E-Commerce & Logistics`
- `Mobile & PWA`

Include `All` only as a UI filter option, not as a project category. Choose one primary category per project:
- Mini DMS Ticket System Integration — `Ticketing & DMS`
- DMS Phase 1 & 2 — `Ticketing & DMS`
- Travel Management System & Face Control Gateway — choose a reasonable category based on the project, and document that it is an inferred classification rather than a verified project fact.
- Feng Shui PWA/Mobile — `Mobile & PWA`
- E-commerce Platform — `E-Commerce & Logistics`
- IMAN Warranty System — choose a reasonable category based on the project, and document that it is an inferred classification rather than a verified project fact.

### Project data integrity
No project-specific technology stack, detailed QA responsibilities, or measurable achievements have been supplied. Represent missing project-specific details with optional fields or TODOs in the data source. In the UI, show only verified information and generic QA capabilities where appropriate; do not present generic capabilities as confirmed project-specific work.

---

## 2. Required Project Structure

Create or adapt the following structure. Additional files are allowed when necessary.

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    robots.ts
    sitemap.ts
  components/
    Navbar.tsx
    HeroSection.tsx
    SkillsSection.tsx
    ExperienceTimeline.tsx
    ProjectsSection.tsx
    ProjectCard.tsx
    ProjectModal.tsx
    ContactSection.tsx
    Footer.tsx
    ThemeProvider.tsx        # if needed by the chosen theme solution
  data/
    cvData.ts
  types/
    index.ts
public/
  Nguyen_Tan_Dat_QA_QC_CV.pdf
  og-image.png
  favicon.ico                # or an appropriate favicon asset
```

Also create or adapt configuration files as needed, including `package.json`, TypeScript, Tailwind, PostCSS, ESLint, and Next.js configuration. Follow the installed versions and conventions rather than blindly copying version-specific configuration.

### Shared types
Define and export strongly typed models for at least:
- `Profile`
- `Skill`
- `Experience`
- `Project`
- `ProjectCategory`

Suggested model fields:
- `Profile`: name, role, experienceYears, email, phone, location, summary, highlights, optional LinkedIn URL.
- `Skill`: id, name, category, optional tools.
- `Experience`: id, company, role, startDate, endDate, highlights.
- `Project`: id, title, category, summary, optional company, optional techStack, optional responsibilities, optional achievements.

Use optional fields for unverified details. Do not invent employment history to populate the timeline. If no verified employer/date history is available, render a clearly designed “Experience Highlights” or “Professional Experience” section based on supplied facts rather than fabricating a chronological timeline.

---

## 3. Phase 1 — Foundation, Types, and Centralized Data

### Tasks
1. Inspect the repository and identify its framework version, package manager, and current implementation.
2. Set up or adapt the Next.js App Router project with TypeScript strict mode and Tailwind CSS.
3. Create `src/types/index.ts` with shared types.
4. Create `src/data/cvData.ts` as the single source of truth.
5. Create a base `src/app/layout.tsx` and `src/app/page.tsx`.
6. Add global styles and a clean root layout.
7. Configure a sans-serif font using `next/font`. Prefer a local font if one is already available; if using `next/font/google`, confirm the build environment can fetch the font during build.
8. Ensure the page renders the profile data from `cvData.ts`, not duplicated inline content.

### Phase 1 acceptance criteria
- The app starts using the repository's documented development command.
- TypeScript types are exported and reused consistently.
- No fabricated profile facts or project details are present.
- The initial page is responsive and renders without obvious console errors.
- Run available lint/type checks and a production build if the environment permits.

### Phase 1 report
List:
- Files created or modified.
- Dependencies added or changed.
- Commands actually executed and their results.
- Missing information or assets.
- Any issues that must be resolved before Phase 2.

---

## 4. Phase 2 — UI Components, Interactions, and Theme

### Visual direction
- Modern tech portfolio.
- Dark mode by default.
- Deep slate/navy background around `#0f172a`.
- Cyan and emerald accent colors.
- Clean sans-serif typography.
- Subtle transitions and hover states; avoid excessive animation.
- Responsive layouts with readable content widths and consistent spacing.

### Components to implement

#### `Navbar.tsx`
- Sticky navigation.
- Links to existing section anchors: `#about`, `#skills`, `#experience`, `#projects`, `#contact`.
- Smooth scrolling where supported, while respecting reduced-motion preferences.
- Dark/light theme toggle.
- Download CV CTA pointing to `/Nguyen_Tan_Dat_QA_QC_CV.pdf`.
- If the PDF is not supplied, document the missing asset; do not create a fake CV or claim the link was verified.
- Mobile navigation must be keyboard accessible and usable at small widths.

#### `HeroSection.tsx`
- Show the verified name, role, experience, location, and contact CTA.
- Present a concise introduction suitable for a QA/QC Tester with 4 years of experience.
- Do not claim a Senior title unless the user confirms it.
- Do not invent a portrait. If no real profile image is supplied, use a designed initials/avatar treatment instead of a fabricated personal photo.

#### `SkillsSection.tsx`
- Render skills dynamically from `cvData.ts`.
- Group skills in a readable way.
- Do not show technologies that are not in the supplied profile.

#### `ExperienceTimeline.tsx`
- Use a clean vertical timeline or experience-highlights layout.
- Expand/collapse details if useful.
- Do not invent company history, dates, or job titles. If no verified employment records are provided, show supplied professional highlights without pretending they are dated employment entries.

#### `ProjectsSection.tsx` and `ProjectCard.tsx`
- Responsive project grid.
- Working category filters: `All`, `Ticketing & DMS`, `E-Commerce & Logistics`, `Mobile & PWA`.
- Filter results must match the selected category.
- Each card displays the verified project title, category, and available summary.
- Use stable project IDs as React keys.
- Keep all project content data-driven.

#### `ProjectModal.tsx`
- Display project summary and any verified technology stack, QA responsibilities, and achievements.
- If fields are missing, omit them or show a neutral “Details available on request” fallback; do not invent specifics.
- Close using a visible close button and Escape key.
- Support keyboard navigation, focus management, focus restoration to the trigger, and background scroll locking.
- Use an accessible dialog pattern, including an accessible name and appropriate ARIA attributes.
- Prevent clicks inside the dialog from unintentionally closing it.
- Ensure it works on mobile and does not overflow the viewport.

#### `ContactSection.tsx`
- Show verified email, phone, and location.
- Use appropriate `mailto:` and `tel:` links.
- Do not invent social profile links.

#### `Footer.tsx`
- Minimal footer with accurate profile information and copyright text.
- Do not hardcode duplicate CV details if they can be sourced from `cvData.ts`.

#### Theme
- Support dark and light modes.
- Persist the selected theme if using a client-side theme solution.
- Avoid unnecessary flash of the wrong theme on page load.
- Use a stable theme strategy appropriate for the selected dependencies.
- Respect `prefers-reduced-motion`.

### Phase 2 acceptance criteria
- All navigation links point to real sections.
- Project filters work for every category.
- Modal opens and closes correctly with mouse and keyboard.
- Theme toggle works and preserves the preference according to the chosen solution.
- CV CTA points to the specified path.
- Layout is usable at mobile, tablet, and desktop sizes.
- Focus states, contrast, semantic elements, and reduced-motion support are implemented.
- Run available lint/type checks and a production build if the environment permits.

### Phase 2 report
List:
- Files created or modified.
- Dependencies added or changed.
- Features implemented.
- Commands actually executed and their results.
- Manual checks performed.
- Remaining UI issues or missing assets.

---

## 5. Phase 3 — Technical SEO, Structured Data, and Production Readiness

### Metadata
Implement the Next.js Metadata API in `src/app/layout.tsx` or a suitable route file.

Required title:
`Nguyen Tan Dat | QA/QC Tester & Software Quality Engineer`

Required description:
`Portfolio of Nguyen Tan Dat - QA/QC Tester with 4 years of experience in API testing, SQL validation, end-to-end workflows, and system optimization for DMS, E-commerce, and Ticketing systems.`

Configure:
- `metadataBase`
- Title and description
- Open Graph: title, description, URL, site name, image, `locale: en_US`, `type: website`
- Twitter card metadata
- Canonical URL through `alternates.canonical`
- Appropriate favicon metadata if assets exist

Do not describe the person as “Senior” unless this title is verified. Keep metadata consistent with visible page content.

### Site URL configuration
- Read the production URL from `NEXT_PUBLIC_SITE_URL`.
- Validate that it is an absolute URL.
- Do not invent a domain.
- If the variable is missing in production, fail clearly or document the required configuration rather than generating a fake canonical URL.
- Use the same canonical base URL consistently in metadata, JSON-LD, and sitemap.
- Never include localhost or staging URLs in production sitemap output.

### JSON-LD
- Add a Schema.org `Person` JSON-LD script with verified properties such as `name`, `jobTitle`, `email`, `telephone`, `address`, `url`, `sameAs`, and `knowsAbout`.
- Only include `sameAs` when a real social/profile URL is provided.
- Only include verified values; omit unavailable optional properties.
- Use safe JSON serialization before injecting JSON-LD. Prevent unsafe script termination/injection, including escaping `<` where appropriate.
- Ensure the structured data agrees with visible page content.

### Robots and sitemap
Create:
- `src/app/robots.ts`
- `src/app/sitemap.ts`

Requirements:
- Use Next.js Metadata Route conventions compatible with the installed version.
- Use the configured production URL.
- Include the public homepage in the sitemap.
- Do not add nonexistent routes or private/staging URLs.
- Set robots directives appropriate for a public portfolio.

### Images and fonts
- Use `next/image` for actual image assets where appropriate.
- Provide explicit dimensions or a supported responsive sizing strategy to avoid layout shift.
- Use priority loading only for a genuinely critical above-the-fold image.
- Do not create a fake portrait.
- Provide an OG image at `public/og-image.png`, or report that it must be supplied/generated before deployment.
- Use `next/font` appropriately and avoid unnecessary external runtime font requests.

### Performance and production checks
- Minimize unnecessary client components and JavaScript.
- Avoid layout shifts, oversized images, and unnecessary third-party scripts.
- Check metadata, canonical URL, robots, sitemap, and JSON-LD output.
- Run the available commands, adapting them to the repository's package manager:
  - TypeScript check, e.g. `npx tsc --noEmit` if configured.
  - Lint, e.g. `npm run lint` if configured.
  - Production build, e.g. `npm run build`.
- Fix implementation-related errors where possible.
- Do not report Lighthouse scores unless an actual Lighthouse audit was run. If possible, run Lighthouse against the production build and report the measured results and environment.

### Phase 3 acceptance criteria
- Production build succeeds, or any failure is documented with exact relevant output.
- TypeScript and lint checks are reported accurately.
- Metadata is generated from real configuration and verified CV data.
- JSON-LD is valid and safely serialized.
- Sitemap and robots endpoints use the correct production URL.
- Missing assets and deployment variables are documented.
- No fabricated personal, employer, project, or achievement data is introduced.

### Phase 3 report
List:
1. Files created or modified.
2. Dependencies added or changed.
3. Commands executed and exact outcomes.
4. SEO configuration and endpoints verified.
5. Lighthouse results, only if actually measured.
6. Remaining TODOs, missing assets, and deployment instructions.

---

## 6. Cross-Step Implementation Contract

- Treat all phases as one continuous repository task.
- Before each phase, inspect the current files and preserve prior work.
- Keep shared types, exported names, component props, and imports consistent.
- If an interface changes, update every affected usage.
- Do not overwrite working code with a fresh incompatible implementation.
- Add all necessary imports, exports, styles, and dependencies.
- Avoid `any`; use strict types.
- Keep the project buildable at each milestone when practical.
- Do not claim code was executed or verified if it was not.
- Use TODOs for unverified information and report them at the end of each phase.
- If a required decision or fact is missing, make the safest reversible choice, document the assumption, and do not fabricate factual content.

## 7. Final End-to-End Verification

Before declaring the project complete, verify as much as the environment supports:

- [ ] App starts with the documented development command.
- [ ] TypeScript check passes.
- [ ] Lint passes, if configured.
- [ ] Production build passes.
- [ ] All navigation anchors resolve.
- [ ] Project filters work for all four filter options.
- [ ] Modal works with mouse and keyboard, including Escape and focus restoration.
- [ ] Theme switching works and does not cause avoidable theme flashes.
- [ ] Mobile/tablet/desktop layouts are usable.
- [ ] Reduced-motion preference is respected.
- [ ] CV download path exists and serves the intended PDF.
- [ ] Open Graph image exists and has the intended dimensions.
- [ ] Canonical URL uses the configured production domain.
- [ ] JSON-LD is valid and contains no invented information.
- [ ] Robots and sitemap output are correct.
- [ ] No broken links, obvious console errors, or missing assets remain.

### Final response format
When finished, provide:
1. A concise summary of the implemented portfolio.
2. A list of files created or changed.
3. Dependencies added or changed.
4. Commands run and actual results.
5. Manual checks performed and their outcomes.
6. Remaining TODOs and user-supplied assets needed.
7. Exact local development and production build commands.
8. Any limitations that prevented full verification.

**Start now:** Inspect the repository, determine the current state, then implement the phases in order. Do not stop after producing a plan; make the changes in the workspace if tools and permissions allow.
