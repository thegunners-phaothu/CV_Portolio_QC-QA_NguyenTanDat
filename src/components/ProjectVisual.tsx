"use client";

interface ProjectVisualProps {
  projectId: string;
  viewMode: "artwork" | "system";
}

export default function ProjectVisual({ projectId, viewMode }: ProjectVisualProps) {
  if (viewMode === "system") {
    return <SystemDiagram projectId={projectId} />;
  }
  return <ArtworkGraphic projectId={projectId} />;
}

/* =========================================================================
   1. ARTWORK GRAPHICS — Isometric / Blueprint Engineering Illustrations
   Inspired by the style used at khatran1012.github.io/khatran.github.io
   ========================================================================= */
function ArtworkGraphic({ projectId }: { projectId: string }) {
  switch (projectId) {
    case "travel-face-control":
      return <TurnstileFaceControlArtwork />;
    case "mini-dms-ticket":
      return <TicketInventoryArtwork />;
    case "dms-phase-1-2":
      return <DistributionNetworkArtwork />;
    case "ecommerce-platform":
      return <EcommerceLogisticsArtwork />;
    case "iman-warranty":
      return <WarrantyRepairArtwork />;
    case "feng-shui-pwa":
    default:
      return <PwaMobileArtwork />;
  }
}

/* ─── Shared SVG Defs ───────────────────────────────────────────────────── */
function SharedDefs() {
  return (
    <defs>
      <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="50%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
      <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
      <linearGradient id="tealFade" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgba(45,212,191,0.55)" />
        <stop offset="100%" stopColor="rgba(45,212,191,0)" />
      </linearGradient>
      <linearGradient id="panelTop" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#132030" />
        <stop offset="100%" stopColor="#080e18" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
}

/* ─── 1. Travel Management + Facial Recognition Gateway ─────────────────── */
function TurnstileFaceControlArtwork() {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#060d14] via-[#08101a] to-[#050810] p-4">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_65%,rgba(45,212,191,0.2),transparent_60%)]" />
      {/* Perspective floor grid */}
      <div
        className="absolute bottom-0 inset-x-0 h-28"
        style={{
          background: "repeating-linear-gradient(90deg,rgba(45,212,191,0.07) 0px,rgba(45,212,191,0.07) 1px,transparent 1px,transparent 36px), repeating-linear-gradient(0deg,rgba(45,212,191,0.04) 0px,rgba(45,212,191,0.04) 1px,transparent 1px,transparent 18px)",
          transform: "perspective(400px) rotateX(55deg)",
          transformOrigin: "bottom",
        }}
      />

      <svg className="relative z-10 w-full max-w-[440px] h-auto" viewBox="0 0 480 290" fill="none">
        <SharedDefs />

        {/* === LEFT TURNSTILE === */}
        <g>
          {/* Pedestal base */}
          <path d="M75 238 L175 238 L165 252 L65 252 Z" fill="#080e18" stroke="#1e293b" strokeWidth="1.5" />
          {/* Body */}
          <path d="M80 95 L170 95 L175 238 L75 238 Z" fill="url(#metalGrad)" stroke="#2a3f52" strokeWidth="1.5" />
          {/* Top cap */}
          <path d="M84 78 L166 78 L170 95 L80 95 Z" fill="#152033" stroke="#3a5470" strokeWidth="1.5" />
          {/* Side face */}
          <path d="M170 95 L180 95 L185 238 L175 238 Z" fill="#080e18" stroke="#1e293b" strokeWidth="1" />

          {/* Neon edge strips */}
          <line x1="82" y1="100" x2="82" y2="230" stroke="url(#tealGrad)" strokeWidth="2.5" filter="url(#glow)" className="animate-pulse" />
          <line x1="168" y1="100" x2="168" y2="230" stroke="url(#tealGrad)" strokeWidth="2.5" filter="url(#glow)" className="animate-pulse" />

          {/* QR Scanner Panel */}
          <rect x="104" y="82" width="52" height="12" rx="3" fill="#06111c" stroke="#2dd4bf" strokeWidth="1.5" />
          <rect x="110" y="85" width="40" height="6" rx="2" fill="#0a1d2c" />
          <line x1="113" y1="88" x2="146" y2="88" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="3 2" />

          {/* Camera Pole */}
          <line x1="125" y1="78" x2="125" y2="42" stroke="#2a3f55" strokeWidth="5" strokeLinecap="round" />
          {/* Camera Housing */}
          <rect x="112" y="24" width="26" height="22" rx="5" fill="#060d14" stroke="#2dd4bf" strokeWidth="1.5" />
          <circle cx="125" cy="35" r="6" fill="#030912" stroke="#2dd4bf" strokeWidth="1.5" />
          <circle cx="125" cy="35" r="2.5" fill="#2dd4bf" className="animate-ping" style={{ animationDuration: "2s" }} />
          {/* Scan Beam */}
          <polygon points="125,44 72,170 178,170" fill="url(#tealFade)" opacity="0.5" />

          {/* Gate Arm — left */}
          <path d="M174 120 L228 148 L228 192 L174 164 Z" fill="rgba(45,212,191,0.18)" stroke="#2dd4bf" strokeWidth="1.5" />
          <line x1="174" y1="132" x2="224" y2="155" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
          <line x1="174" y1="152" x2="224" y2="175" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </g>

        {/* === RIGHT TURNSTILE === */}
        <g>
          <path d="M305 238 L405 238 L415 252 L315 252 Z" fill="#080e18" stroke="#1e293b" strokeWidth="1.5" />
          <path d="M310 95 L400 95 L405 238 L305 238 Z" fill="url(#metalGrad)" stroke="#2a3f52" strokeWidth="1.5" />
          <path d="M314 78 L396 78 L400 95 L310 95 Z" fill="#152033" stroke="#3a5470" strokeWidth="1.5" />
          <path d="M300 95 L310 95 L305 238 L295 238 Z" fill="#080e18" stroke="#1e293b" strokeWidth="1" />

          <line x1="312" y1="100" x2="312" y2="230" stroke="url(#tealGrad)" strokeWidth="2.5" filter="url(#glow)" />
          <line x1="398" y1="100" x2="398" y2="230" stroke="url(#tealGrad)" strokeWidth="2.5" filter="url(#glow)" />

          <rect x="324" y="82" width="52" height="12" rx="3" fill="#06111c" stroke="#2dd4bf" strokeWidth="1.5" />
          <rect x="330" y="85" width="40" height="6" rx="2" fill="#0a1d2c" />
          <line x1="333" y1="88" x2="366" y2="88" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="3 2" />

          <line x1="355" y1="78" x2="355" y2="42" stroke="#2a3f55" strokeWidth="5" strokeLinecap="round" />
          <rect x="342" y="24" width="26" height="22" rx="5" fill="#060d14" stroke="#2dd4bf" strokeWidth="1.5" />
          <circle cx="355" cy="35" r="6" fill="#030912" stroke="#2dd4bf" strokeWidth="1.5" />
          <circle cx="355" cy="35" r="2.5" fill="#2dd4bf" className="animate-ping" style={{ animationDuration: "2.5s" }} />
          <polygon points="355,44 302,170 408,170" fill="url(#tealFade)" opacity="0.5" />

          {/* Gate Arm — right */}
          <path d="M306 120 L252 148 L252 192 L306 164 Z" fill="rgba(45,212,191,0.18)" stroke="#2dd4bf" strokeWidth="1.5" />
          <line x1="306" y1="132" x2="256" y2="155" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        </g>

        {/* Center portal status ring */}
        <circle cx="240" cy="118" r="18" fill="#07101a" stroke="#2dd4bf" strokeWidth="2" filter="url(#glow)" />
        <path d="M233 118 L238 123 L247 112" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* HUD Overlays */}
        <g className="animate-pulse">
          <rect x="18" y="38" width="88" height="26" rx="5" fill="#060d16" stroke="#2dd4bf" strokeWidth="1" opacity="0.9" />
          <text x="26" y="52" fill="#2dd4bf" fontSize="9" fontFamily="monospace" fontWeight="bold">FACE · 99.8%</text>
          <text x="26" y="62" fill="#64748b" fontSize="8" fontFamily="monospace">GRANTED</text>
        </g>
        <g className="animate-pulse" style={{ animationDelay: "0.7s" }}>
          <rect x="374" y="38" width="88" height="26" rx="5" fill="#060d16" stroke="#06b6d4" strokeWidth="1" opacity="0.9" />
          <text x="382" y="52" fill="#06b6d4" fontSize="9" fontFamily="monospace" fontWeight="bold">QR · VALID</text>
          <text x="382" y="62" fill="#64748b" fontSize="8" fontFamily="monospace">OTA PORTAL</text>
        </g>

        {/* Floating label bottom */}
        <rect x="158" y="262" width="164" height="20" rx="4" fill="#060d16" stroke="#2dd4bf" strokeWidth="1" opacity="0.7" />
        <text x="240" y="276" fill="#2dd4bf" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">ACCESS CONTROL GATEWAY</text>
      </svg>
    </div>
  );
}

/* ─── 2. Mini DMS Ticket System Integration (TechEra) ────────────────────── */
function TicketInventoryArtwork() {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#060d14] to-[#050810] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(6,182,212,0.2),transparent_60%)]" />

      <svg className="relative z-10 w-full max-w-[440px] h-auto" viewBox="0 0 480 290" fill="none">
        <SharedDefs />

        {/* === ISOMETRIC CORE VAULT === */}
        {/* Top face */}
        <polygon points="240,48 340,100 240,152 140,100" fill="#0d1e2e" stroke="#06b6d4" strokeWidth="2" />
        {/* Left face */}
        <polygon points="140,100 240,152 240,210 140,158" fill="#060e1a" stroke="#1e3a4a" strokeWidth="1.5" />
        {/* Right face */}
        <polygon points="340,100 240,152 240,210 340,158" fill="#08121e" stroke="#1e3a4a" strokeWidth="1.5" />

        {/* Inner top logo */}
        <text x="240" y="108" fill="#06b6d4" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CORE INVENTORY</text>
        <line x1="190" y1="115" x2="290" y2="115" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
        <text x="240" y="128" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle">TechEra Platform</text>

        {/* Floating ticket layer above */}
        <polygon points="240,20 320,58 240,96 160,58" fill="rgba(6,182,212,0.15)" stroke="#06b6d4" strokeWidth="1.5" className="animate-pulse" />
        <text x="240" y="62" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">TICKET VAULT</text>

        {/* === SUNWORLD NODE === */}
        <circle cx="72" cy="88" r="34" fill="#080f1a" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="72" cy="88" r="28" fill="#0a1220" stroke="#f59e0b" strokeWidth="0.5" />
        <text x="72" y="84" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SUN</text>
        <text x="72" y="96" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">WORLD</text>
        {/* Connection line + animated dot */}
        <path d="M106 100 Q 155 105 195 105" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 3" />
        <circle cx="150" cy="103" r="3" fill="#f59e0b" className="animate-ping" style={{ animationDuration: "1.5s" }} />

        {/* === VINWONDERS NODE === */}
        <circle cx="408" cy="88" r="34" fill="#080f1a" stroke="#06b6d4" strokeWidth="2" />
        <circle cx="408" cy="88" r="28" fill="#0a1220" stroke="#06b6d4" strokeWidth="0.5" />
        <text x="408" y="84" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">VIN</text>
        <text x="408" y="96" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">WONDERS</text>
        <path d="M374 100 Q 325 105 285 105" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="5 3" />
        <circle cx="330" cy="103" r="3" fill="#06b6d4" className="animate-ping" style={{ animationDuration: "1.8s" }} />

        {/* Bottom hub: SePay + MISA + Viettel */}
        <rect x="152" y="226" width="176" height="44" rx="8" fill="#060e18" stroke="#2dd4bf" strokeWidth="1.5" />
        <text x="240" y="245" fill="#2dd4bf" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SEPAY BANKHUB · QR</text>
        <text x="240" y="260" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">MISA · VIETTEL E-INVOICE</text>
        <line x1="240" y1="210" x2="240" y2="226" stroke="#2dd4bf" strokeWidth="1.5" />

        {/* Distributor badges */}
        <g>
          <rect x="52" y="178" width="110" height="24" rx="5" fill="#060d16" stroke="#f59e0b" strokeWidth="1" />
          <text x="107" y="194" fill="#fbbf24" fontSize="9" fontFamily="monospace" textAnchor="middle">MASTER AGENT</text>
        </g>
        <g>
          <rect x="318" y="178" width="110" height="24" rx="5" fill="#060d16" stroke="#06b6d4" strokeWidth="1" />
          <text x="373" y="194" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle">MASTER AGENT</text>
        </g>
        <line x1="162" y1="190" x2="180" y2="175" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="318" y1="190" x2="300" y2="175" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    </div>
  );
}

/* ─── 3. DMS Distribution Management System ──────────────────────────────── */
function DistributionNetworkArtwork() {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#060d14] to-[#050810] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(16,185,129,0.18),transparent_65%)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "linear-gradient(rgba(16,185,129,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(16,185,129,0.06) 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <svg className="relative z-10 w-full max-w-[440px] h-auto" viewBox="0 0 480 290" fill="none">
        <SharedDefs />

        {/* === CENTRAL DMS HUB (isometric box) === */}
        <polygon points="240,50 320,90 240,130 160,90" fill="#0d1e18" stroke="#10b981" strokeWidth="2" />
        <polygon points="160,90 240,130 240,185 160,145" fill="#070f0d" stroke="#064e3b" strokeWidth="1.5" />
        <polygon points="320,90 240,130 240,185 320,145" fill="#091311" stroke="#064e3b" strokeWidth="1.5" />
        <text x="240" y="94" fill="#10b981" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CENTRAL DMS</text>
        <text x="240" y="108" fill="#34d399" fontSize="8" fontFamily="monospace" textAnchor="middle">THP · CP FMCG</text>

        {/* === DISTRIBUTOR NODES === */}
        {/* Node A (top-left) */}
        <circle cx="90" cy="68" r="26" fill="#08110e" stroke="#3b82f6" strokeWidth="1.8" />
        <text x="90" y="66" fill="#60a5fa" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DIST</text>
        <text x="90" y="77" fill="#60a5fa" fontSize="8" fontFamily="monospace" textAnchor="middle">ZONE A</text>
        <line x1="115" y1="78" x2="165" y2="88" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="140" cy="83" r="3" fill="#3b82f6" className="animate-ping" style={{ animationDuration: "1.4s" }} />

        {/* Node B (top-right) */}
        <circle cx="390" cy="68" r="26" fill="#08110e" stroke="#3b82f6" strokeWidth="1.8" />
        <text x="390" y="66" fill="#60a5fa" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DIST</text>
        <text x="390" y="77" fill="#60a5fa" fontSize="8" fontFamily="monospace" textAnchor="middle">ZONE B</text>
        <line x1="365" y1="78" x2="315" y2="88" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="340" cy="83" r="3" fill="#3b82f6" className="animate-ping" style={{ animationDuration: "1.9s" }} />

        {/* Node C (left-mid) */}
        <circle cx="62" cy="168" r="22" fill="#08110e" stroke="#10b981" strokeWidth="1.5" />
        <text x="62" y="166" fill="#34d399" fontSize="8" fontFamily="monospace" textAnchor="middle">BEAT</text>
        <text x="62" y="176" fill="#34d399" fontSize="8" fontFamily="monospace" textAnchor="middle">PLAN</text>
        <line x1="84" y1="162" x2="158" y2="140" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Node D (right-mid) */}
        <circle cx="418" cy="168" r="22" fill="#08110e" stroke="#10b981" strokeWidth="1.5" />
        <text x="418" y="166" fill="#34d399" fontSize="8" fontFamily="monospace" textAnchor="middle">FIELD</text>
        <text x="418" y="176" fill="#34d399" fontSize="8" fontFamily="monospace" textAnchor="middle">FORCE</text>
        <line x1="396" y1="162" x2="322" y2="140" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Bottom: Mobile Sync + Reporting */}
        <rect x="152" y="218" width="176" height="48" rx="8" fill="#060e0c" stroke="#10b981" strokeWidth="1.5" />
        <text x="240" y="236" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">MOBILE FIELD SYNC</text>
        <text x="240" y="249" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Baseline · Promo · Inventory</text>
        <text x="240" y="260" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Redmine · Digiwork · PostgreSQL</text>
        <line x1="240" y1="185" x2="240" y2="218" stroke="#10b981" strokeWidth="1.5" />

        {/* Promotion badge */}
        <rect x="190" y="136" width="100" height="18" rx="4" fill="rgba(16,185,129,0.12)" stroke="#10b981" strokeWidth="1" />
        <text x="240" y="149" fill="#6ee7b7" fontSize="8" fontFamily="monospace" textAnchor="middle">PROMO &amp; BASELINE</text>
      </svg>
    </div>
  );
}

/* ─── 4. E-Commerce Platform (DigiTech Solutions) ────────────────────────── */
function EcommerceLogisticsArtwork() {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#060d14] to-[#050810] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(244,63,94,0.15),transparent_65%)]" />

      <svg className="relative z-10 w-full max-w-[440px] h-auto" viewBox="0 0 480 290" fill="none">
        <SharedDefs />

        {/* === STOREFRONT TERMINAL (isometric left) === */}
        <polygon points="130,60 220,100 130,140 40,100" fill="#1a0c10" stroke="#f43f5e" strokeWidth="1.8" />
        <polygon points="40,100 130,140 130,200 40,160" fill="#0e0508" stroke="#7f1d1d" strokeWidth="1.5" />
        <polygon points="220,100 130,140 130,200 220,160" fill="#110608" stroke="#7f1d1d" strokeWidth="1.5" />
        <text x="130" y="104" fill="#f43f5e" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">STOREFRONT</text>
        <text x="130" y="116" fill="#fb7185" fontSize="8" fontFamily="monospace" textAnchor="middle">WIN WIN JSC</text>

        {/* Flash Sale badge */}
        <rect x="82" y="64" width="96" height="16" rx="4" fill="rgba(244,63,94,0.2)" stroke="#f43f5e" strokeWidth="1" />
        <text x="130" y="75" fill="#fda4af" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">⚡ FLASH SALE</text>

        {/* === KIOTVIET SYNC (isometric right) === */}
        <polygon points="350,60 440,100 350,140 260,100" fill="#0a1420" stroke="#38bdf8" strokeWidth="1.8" />
        <polygon points="260,100 350,140 350,200 260,160" fill="#060c18" stroke="#075985" strokeWidth="1.5" />
        <polygon points="440,100 350,140 350,200 440,160" fill="#07101e" stroke="#075985" strokeWidth="1.5" />
        <text x="350" y="104" fill="#38bdf8" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">KIOTVIET</text>
        <text x="350" y="116" fill="#7dd3fc" fontSize="8" fontFamily="monospace" textAnchor="middle">REAL-TIME SYNC</text>

        {/* Connection bridge */}
        <path d="M222 120 Q 240 105 258 120" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5 3" />
        <path d="M222 130 Q 240 145 258 130" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 3" />
        <circle cx="240" cy="113" r="4" fill="#f43f5e" className="animate-ping" style={{ animationDuration: "1.3s" }} />
        <circle cx="240" cy="137" r="4" fill="#38bdf8" className="animate-ping" style={{ animationDuration: "1.7s" }} />

        {/* === PAYMENT & LOGISTICS BOTTOM === */}
        {/* VNPay */}
        <rect x="40" y="222" width="100" height="40" rx="7" fill="#08100c" stroke="#10b981" strokeWidth="1.5" />
        <text x="90" y="239" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">VNPAY</text>
        <text x="90" y="252" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Payment GW</text>

        {/* Carriers */}
        <rect x="190" y="222" width="100" height="40" rx="7" fill="#08100c" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="240" y="239" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">GHN · GHTK</text>
        <text x="240" y="252" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">AHAMOVE</text>

        {/* ZNS + Email */}
        <rect x="340" y="222" width="100" height="40" rx="7" fill="#08100c" stroke="#a855f7" strokeWidth="1.5" />
        <text x="390" y="239" fill="#a855f7" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">ZNS</text>
        <text x="390" y="252" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Email Invoice</text>

        {/* Connecting lines */}
        <line x1="90" y1="200" x2="90" y2="222" stroke="#10b981" strokeWidth="1.5" />
        <line x1="240" y1="200" x2="240" y2="222" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="390" y1="200" x2="390" y2="222" stroke="#a855f7" strokeWidth="1.5" />
        <line x1="130" y1="200" x2="90" y2="200" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="350" y1="200" x2="390" y2="200" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
        <line x1="130" y1="200" x2="350" y2="200" stroke="#475569" strokeWidth="1" strokeDasharray="3 2" />
      </svg>
    </div>
  );
}

/* ─── 5. IMAN Warranty & Repair Management ───────────────────────────────── */
function WarrantyRepairArtwork() {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#060d14] to-[#050810] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(168,85,247,0.15),transparent_65%)]" />

      <svg className="relative z-10 w-full max-w-[440px] h-auto" viewBox="0 0 480 290" fill="none">
        <SharedDefs />

        {/* === DIAGNOSTIC STATION (center isometric box) === */}
        <polygon points="240,38 360,92 240,146 120,92" fill="#150c24" stroke="#a855f7" strokeWidth="2" />
        <polygon points="120,92 240,146 240,208 120,154" fill="#0a0814" stroke="#5b21b6" strokeWidth="1.5" />
        <polygon points="360,92 240,146 240,208 360,154" fill="#0d0a18" stroke="#5b21b6" strokeWidth="1.5" />

        {/* Top screen content */}
        <text x="240" y="90" fill="#d8b4fe" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">IMAN PLATFORM</text>
        <text x="240" y="104" fill="#a855f7" fontSize="8" fontFamily="monospace" textAnchor="middle">WARRANTY DIAGNOSTIC</text>
        <line x1="185" y1="110" x2="295" y2="110" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="3 2" opacity="0.5" />
        <text x="240" y="122" fill="#4ade80" fontSize="8" fontFamily="monospace" textAnchor="middle">ZNS ACTIVATE · SUCCESS</text>
        <text x="240" y="133" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">TECHNICIAN: ASSIGNED</text>

        {/* Serial Number KiotViet badge (top layer) */}
        <polygon points="240,10 310,42 240,74 170,42" fill="rgba(168,85,247,0.12)" stroke="#a855f7" strokeWidth="1" className="animate-pulse" />
        <text x="240" y="46" fill="#c084fc" fontSize="8" fontFamily="monospace" textAnchor="middle">SERIAL TRACKING</text>

        {/* === LEFT NODE: Logico === */}
        <circle cx="68" cy="108" r="30" fill="#0c0816" stroke="#a855f7" strokeWidth="1.8" />
        <text x="68" y="106" fill="#d8b4fe" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LOGICO</text>
        <text x="68" y="118" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">Client</text>
        <line x1="98" y1="104" x2="122" y2="96" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* === RIGHT NODE: Việt Thương === */}
        <circle cx="412" cy="108" r="30" fill="#0c0816" stroke="#06b6d4" strokeWidth="1.8" />
        <text x="412" y="106" fill="#7dd3fc" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">VIET</text>
        <text x="412" y="118" fill="#7dd3fc" fontSize="8" fontFamily="monospace" textAnchor="middle">THUONG</text>
        <line x1="382" y1="104" x2="358" y2="96" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* === BOTTOM: Mobile App + SQL Audit === */}
        {/* Tech Mobile App */}
        <rect x="88" y="232" width="118" height="44" rx="8" fill="#0a0814" stroke="#a855f7" strokeWidth="1.5" />
        <text x="147" y="251" fill="#d8b4fe" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">TECH APP</text>
        <text x="147" y="264" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Media Uploads</text>

        {/* SQL Audit */}
        <rect x="274" y="232" width="118" height="44" rx="8" fill="#0a0814" stroke="#2dd4bf" strokeWidth="1.5" />
        <text x="333" y="251" fill="#2dd4bf" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SQL AUDIT</text>
        <text x="333" y="264" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Permission System</text>

        <line x1="147" y1="208" x2="147" y2="232" stroke="#a855f7" strokeWidth="1.5" />
        <line x1="333" y1="208" x2="333" y2="232" stroke="#2dd4bf" strokeWidth="1.5" />

        {/* KiotViet badge */}
        <rect x="180" y="155" width="120" height="18" rx="4" fill="rgba(168,85,247,0.1)" stroke="#7c3aed" strokeWidth="1" />
        <text x="240" y="168" fill="#c084fc" fontSize="8" fontFamily="monospace" textAnchor="middle">KiotViet · Serial Track</text>
      </svg>
    </div>
  );
}

/* ─── 6. Feng Shui PWA & Mobile App ─────────────────────────────────────── */
function PwaMobileArtwork() {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#060d14] to-[#050810] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(234,179,8,0.15),transparent_65%)]" />

      <svg className="relative z-10 w-full max-w-[440px] h-auto" viewBox="0 0 480 290" fill="none">
        <SharedDefs />

        {/* === DESKTOP MONITOR (left) === */}
        <rect x="28" y="72" width="150" height="110" rx="8" fill="#0c1016" stroke="#eab308" strokeWidth="1.8" />
        <rect x="36" y="80" width="134" height="86" rx="4" fill="#060a10" stroke="#713f12" strokeWidth="1" />
        {/* Compass rose on desktop */}
        <circle cx="103" cy="123" r="28" fill="#0e0d02" stroke="#eab308" strokeWidth="1.5" />
        <line x1="103" y1="95" x2="103" y2="151" stroke="#eab308" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="75" y1="123" x2="131" y2="123" stroke="#eab308" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="103" cy="123" r="10" fill="#1a1500" stroke="#facc15" strokeWidth="1.5" />
        <polygon points="103,110 107,118 99,118" fill="#eab308" />
        {/* Monitor stand */}
        <rect x="93" y="182" width="20" height="14" rx="2" fill="#0c1016" stroke="#44403c" strokeWidth="1" />
        <rect x="80" y="196" width="46" height="6" rx="2" fill="#0c1016" stroke="#44403c" strokeWidth="1" />

        {/* === TABLET (center) === */}
        <rect x="198" y="52" width="84" height="120" rx="10" fill="#0c1016" stroke="#eab308" strokeWidth="2" />
        <rect x="206" y="62" width="68" height="90" rx="5" fill="#060a10" stroke="#713f12" strokeWidth="1" />
        <circle cx="240" cy="107" r="24" fill="#0e0d02" stroke="#facc15" strokeWidth="1.5" />
        <line x1="240" y1="83" x2="240" y2="131" stroke="#facc15" strokeWidth="0.8" strokeDasharray="2 2" />
        <line x1="216" y1="107" x2="264" y2="107" stroke="#facc15" strokeWidth="0.8" strokeDasharray="2 2" />
        <circle cx="240" cy="107" r="6" fill="#eab308" className="animate-ping" style={{ animationDuration: "3s" }} />
        <circle cx="240" cy="107" r="3" fill="#fef08a" />
        {/* Ba gua symbols around */}
        <text x="240" y="90" fill="#eab308" fontSize="8" textAnchor="middle">☰</text>
        <text x="257" y="112" fill="#eab308" fontSize="8" textAnchor="middle">☱</text>
        <text x="240" y="130" fill="#eab308" fontSize="8" textAnchor="middle">☲</text>
        <text x="223" y="112" fill="#eab308" fontSize="8" textAnchor="middle">☳</text>
        {/* Home button */}
        <circle cx="240" cy="163" r="5" fill="#0e1420" stroke="#eab308" strokeWidth="1.2" />

        {/* === MOBILE PHONE (right) === */}
        <rect x="302" y="82" width="60" height="106" rx="10" fill="#0c1016" stroke="#eab308" strokeWidth="2" />
        <rect x="308" y="90" width="48" height="82" rx="4" fill="#060a10" stroke="#713f12" strokeWidth="1" />
        <circle cx="332" cy="131" r="22" fill="#0e0d02" stroke="#eab308" strokeWidth="1.2" />
        <circle cx="332" cy="131" r="14" fill="#120f02" stroke="#facc15" strokeWidth="1" />
        <circle cx="332" cy="131" r="6" fill="#1a1500" stroke="#eab308" strokeWidth="1" />
        <circle cx="332" cy="131" r="2" fill="#eab308" />
        <text x="332" y="182" fill="#94a3b8" fontSize="7" fontFamily="monospace" textAnchor="middle">PWA</text>
        <circle cx="332" cy="186" r="4" fill="#0e1420" stroke="#eab308" strokeWidth="1.2" />

        {/* === BOTTOM: JMeter + VNPay metrics === */}
        <rect x="28" y="224" width="130" height="46" rx="7" fill="#060d16" stroke="#eab308" strokeWidth="1.5" />
        <text x="93" y="240" fill="#fef08a" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">JMETER TEST</text>
        <text x="93" y="253" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">500–1,000 VUs</text>
        <text x="93" y="264" fill="#4ade80" fontSize="8" fontFamily="monospace" textAnchor="middle">P95 &lt; 450ms ✓</text>

        <rect x="322" y="224" width="130" height="46" rx="7" fill="#060d16" stroke="#10b981" strokeWidth="1.5" />
        <text x="387" y="240" fill="#34d399" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">VNPAY COIN</text>
        <text x="387" y="253" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">Recharge Gateway</text>
        <text x="387" y="264" fill="#4ade80" fontSize="8" fontFamily="monospace" textAnchor="middle">0 Payment Fail ✓</text>

        {/* Cross-device label */}
        <rect x="175" y="228" width="130" height="18" rx="4" fill="rgba(234,179,8,0.1)" stroke="#eab308" strokeWidth="1" />
        <text x="240" y="241" fill="#fbbf24" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">HONG KY FENG SHUI</text>

        {/* Connecting decorative lines */}
        <line x1="178" y1="130" x2="198" y2="110" stroke="#eab308" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
        <line x1="282" y1="110" x2="302" y2="126" stroke="#eab308" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
      </svg>
    </div>
  );
}

/* =========================================================================
   2. SYSTEM ARCHITECTURE DIAGRAMS — Pipeline Topology
   ========================================================================= */
function SystemDiagram({ projectId }: { projectId: string }) {
  const configs: Record<string, { serviceA: string; serviceB: string; storage: string; metrics: string; colorA: string; colorB: string }> = {
    "travel-face-control": {
      serviceA: "OTA/TA PORTALS · POS TERMINAL",
      serviceB: "GATEWAY · FACE RECOGNITION · QR",
      storage: "ACCESS CONTROL · MISA E-INVOICE",
      metrics: "LATENCY < 45ms · ACCURACY 99.8%",
      colorA: "#2dd4bf",
      colorB: "#06b6d4",
    },
    "mini-dms-ticket": {
      serviceA: "SUNWORLD & VINWONDERS APIS",
      serviceB: "TECHERA CORE INVENTORY · ALLOCATOR",
      storage: "MASTER AGENT · SEPAY BANKHUB · MISA",
      metrics: "SYNC INTERVAL 15s · AUTO-FAILOVER",
      colorA: "#f59e0b",
      colorB: "#06b6d4",
    },
    "dms-phase-1-2": {
      serviceA: "FIELD SALES MOBILE · BEAT PLANNER",
      serviceB: "ORDER ENGINE · BASELINE · PROMO",
      storage: "POSTGRESQL · REDMINE · DIGIWORK",
      metrics: "300 AGENTS · OFFLINE-SYNC READY",
      colorA: "#10b981",
      colorB: "#3b82f6",
    },
    "ecommerce-platform": {
      serviceA: "FLASH SALE STOREFRONT · KIOTVIET SYNC",
      serviceB: "VNPAY CALLBACK · GHN · GHTK · AHAMOVE",
      storage: "MYSQL · ZNS NOTIFICATIONS · EMAIL",
      metrics: "2,500 VUs · 340 RPS · 0.00% ERROR",
      colorA: "#f43f5e",
      colorB: "#38bdf8",
    },
    "iman-warranty": {
      serviceA: "ZALO ZNS AUTO WARRANTY ACTIVATION",
      serviceB: "TECHNICIAN MOBILE · REPAIR DISPATCH",
      storage: "SQL AUDIT · KIOTVIET SERIAL TRACK",
      metrics: "SLA 100% · PERMISSION SYSTEM · RBAC",
      colorA: "#a855f7",
      colorB: "#2dd4bf",
    },
    "feng-shui-pwa": {
      serviceA: "PWA CLIENT · ASTROLOGY GOLANG API",
      serviceB: "COIN RECHARGE · VNPAY · REFERRAL",
      storage: "MYSQL · JMETER BENCHMARK · CMS",
      metrics: "1,000 VUs · P95 450ms · 99.9% UPTIME",
      colorA: "#eab308",
      colorB: "#10b981",
    },
  };

  const c = configs[projectId] ?? configs["travel-face-control"];

  return (
    <div className="relative w-full h-full min-h-[280px] flex flex-col items-center justify-center p-6 bg-[#07090f] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,212,191,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,212,191,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="relative z-10 w-full max-w-md space-y-3">
        {/* Node A */}
        <div
          className="rounded-xl border bg-[#0b1219]/90 p-3.5 flex items-center justify-between"
          style={{ borderColor: `${c.colorA}40` }}
        >
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full animate-ping flex-none" style={{ backgroundColor: c.colorA }} />
            <span className="font-mono text-xs font-semibold text-white tracking-wide">{c.serviceA}</span>
          </div>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded border" style={{ color: c.colorA, borderColor: `${c.colorA}40`, backgroundColor: `${c.colorA}15` }}>
            INGESTION
          </span>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="w-px h-5 animate-pulse" style={{ background: `linear-gradient(to bottom, ${c.colorA}, ${c.colorB})` }} />
            <span className="text-[10px]" style={{ color: c.colorB }}>↓</span>
          </div>
        </div>

        {/* Node B (core) */}
        <div
          className="rounded-xl border bg-[#0c1622]/95 p-4 flex items-center justify-between"
          style={{ borderColor: `${c.colorB}50` }}
        >
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full flex-none" style={{ backgroundColor: c.colorB }} />
            <div>
              <p className="font-mono text-xs font-bold text-white tracking-wide">{c.serviceB}</p>
              <p className="font-mono text-[10px] mt-0.5" style={{ color: c.colorB }}>{c.metrics}</p>
            </div>
          </div>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded border" style={{ color: c.colorB, borderColor: `${c.colorB}40`, backgroundColor: `${c.colorB}15` }}>
            CORE
          </span>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <div className="w-px h-5 animate-pulse" style={{ background: `linear-gradient(to bottom, ${c.colorB}, ${c.colorA})` }} />
            <span className="text-[10px]" style={{ color: c.colorA }}>↓</span>
          </div>
        </div>

        {/* Node C */}
        <div
          className="rounded-xl border bg-[#0b1219]/90 p-3.5 flex items-center justify-between"
          style={{ borderColor: `${c.colorA}35` }}
        >
          <div className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full flex-none bg-emerald-400" />
            <span className="font-mono text-xs font-semibold text-white tracking-wide">{c.storage}</span>
          </div>
          <span className="font-mono text-[10px] text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30 bg-emerald-500/10">
            DURABLE STATE
          </span>
        </div>
      </div>
    </div>
  );
}
