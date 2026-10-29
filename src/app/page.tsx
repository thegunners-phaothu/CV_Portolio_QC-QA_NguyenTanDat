import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { cvData } from "@/data/cvData";
import { absoluteUrl } from "@/lib/site";

function buildPersonJsonLd(): string {
  const { profile, skills, education } = cvData;
  const knowsAbout = skills.flatMap((s) => [s.name, ...(s.tools ?? [])]);
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    url: absoluteUrl("/"),
    knowsAbout,
  };
  if (profile.linkedInUrl) data.sameAs = [profile.linkedInUrl];
  if (profile.photo) data.image = absoluteUrl(profile.photo.src);
  if (education.length > 0)
    data.alumniOf = education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school }));
  // Escape characters that could terminate the script tag or break parsing.
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: buildPersonJsonLd() }} />
      <Navbar cvPath={cvData.cvPath} name={cvData.profile.name} />
      <main id="main">
        <HeroSection profile={cvData.profile} cvPath={cvData.cvPath} />
        <SkillsSection skills={cvData.skills} />
        <ExperienceTimeline
          experience={cvData.experience}
          highlights={cvData.experienceHighlights}
          experienceYears={cvData.profile.experienceYears}
          projects={cvData.projects}
          education={cvData.education}
          languages={cvData.languages}
          certifications={cvData.certifications}
        />
        <ProjectsSection projects={cvData.projects} />
        <ContactSection profile={cvData.profile} />
      </main>
      <Footer profile={cvData.profile} />
    </>
  );
}
