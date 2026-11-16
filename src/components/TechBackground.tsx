export default function TechBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#06090e]"
      aria-hidden="true"
    >
      {/* Primary blueprint square grid */}
      <div className="tech-grid absolute inset-0" />

      {/* Major blueprint grid (every 4 cells = 224px) */}
      <div className="tech-grid-major absolute inset-0" />

      {/* Subtle intersection coordinate dots */}
      <div className="tech-grid-dots absolute inset-0 opacity-40" />

      {/* Ambient lighting glows matching the reference design */}
      {/* 1. Top center cyan glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[650px] w-[1100px] rounded-full bg-teal-500/10 blur-[140px]" />

      {/* 2. Top right subtle isometric accent glow */}
      <div className="absolute top-[10%] right-[-5%] h-[550px] w-[650px] rounded-full bg-cyan-500/8 blur-[130px]" />

      {/* 3. Mid-left subtle ambient glow */}
      <div className="absolute top-[40%] left-[-10%] h-[600px] w-[650px] rounded-full bg-teal-500/6 blur-[150px]" />

      {/* 4. Bottom-right subtle accent glow */}
      <div className="absolute top-[70%] right-[10%] h-[600px] w-[700px] rounded-full bg-emerald-500/5 blur-[160px]" />

      {/* 5. Vignette mask to focus content and fade grid at edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(6,9,14,0.75)_100%)]" />
    </div>
  );
}

