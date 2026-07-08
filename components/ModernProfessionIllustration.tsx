import React from "react";

export function ModernProfessionIllustration({ id, className = "w-full h-full", alt = "Profession Illustration" }: { id: string; className?: string; alt?: string }) {
  const normId = id.toLowerCase();
  
  // 1. Determine Category, Theme colors, Posture and Tools based on normId
  let bgGradient = "#291a0a";
  let themeColor = "#f59e0b"; // default amber
  let posture: "kneel" | "crouch" | "reach" | "stand" | "drive" | "harvest" | "guard" = "stand";
  let helmetColor = "#f59e0b"; // default yellow/amber hard hat
  let showVest = true;
  let bgElements: React.ReactNode = null;
  let toolElements: React.ReactNode = null;

  switch (normId) {
    case "mason":
    case "p1":
    case "masonry":
      bgGradient = "#291a0a";
      themeColor = "#f59e0b";
      posture = "kneel";
      bgElements = (
        <g stroke="#f59e0b" strokeOpacity="0.12" strokeWidth="1" fill="none">
          <line x1="5" y1="80" x2="95" y2="80" />
          <line x1="5" y1="70" x2="95" y2="70" />
          <line x1="20" y1="80" x2="20" y2="70" />
          <line x1="50" y1="80" x2="50" y2="70" />
          <line x1="35" y1="70" x2="35" y2="60" />
          <line x1="10" y1="10" x2="10" y2="90" strokeWidth="0.5" />
          <line x1="90" y1="10" x2="90" y2="90" strokeWidth="0.5" />
        </g>
      );
      toolElements = (
        <g>
          {/* Red bricks stack */}
          <rect x="42" y="55" width="18" height="7" rx="1" fill="#b45309" stroke="#78350f" strokeWidth="0.5" />
          {/* Steel Trowel */}
          <path d="M30,55 L42,42 L36,36 Z" fill="url(#steel-grad)" stroke="#475569" strokeWidth="0.5" />
          <path d="M38,40 Q42,45 44,48" stroke="#78350f" strokeWidth="1.5" fill="none" />
        </g>
      );
      break;

    case "plumber":
    case "p5":
    case "plumbing":
      bgGradient = "#082f49";
      themeColor = "#0284c7";
      posture = "crouch";
      helmetColor = "#0ea5e9"; // Blue helmet
      bgElements = (
        <g stroke="#0ea5e9" strokeOpacity="0.2" strokeWidth="3.5" fill="none" strokeLinecap="round">
          <path d="M10,25 L45,25 C48,25 50,27 50,30 L50,85" />
          <circle cx="45" cy="25" r="3" fill="#0ea5e9" />
          <circle cx="58" cy="35" r="1.5" fill="#38bdf8" stroke="none" />
          <circle cx="62" cy="42" r="1" fill="#7dd3fc" stroke="none" />
        </g>
      );
      toolElements = (
        <g transform="rotate(15 45 45)">
          <rect x="35" y="38" width="22" height="4" rx="1" fill="#ef4444" />
          <path d="M28,34 L36,34 L36,44 L28,44 Z" fill="#475569" />
          <path d="M25,31 C20,33 20,39 25,41 L32,41" fill="none" stroke="#ef4444" strokeWidth="2.5" />
        </g>
      );
      break;

    case "painter":
    case "p3":
    case "painting":
      bgGradient = "#042f2e";
      themeColor = "#0d9488";
      posture = "reach";
      helmetColor = "#ffffff"; // White cap
      bgElements = (
        <g>
          <path d="M15,75 Q35,15 75,45 T85,15" fill="none" stroke="url(#paint-grad-teal)" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.3" />
        </g>
      );
      toolElements = (
        <g transform="translate(30, 15)">
          <rect x="20" y="20" width="16" height="5" rx="1" fill="#f4f4f5" stroke="#0d9488" strokeWidth="0.5" />
          <path d="M36,22.5 L40,22.5 L40,35 L34,35" fill="none" stroke="#64748b" strokeWidth="1.5" />
          <path d="M28,24 C28,27 29,27 29,24 Z" fill="#2dd4bf" />
        </g>
      );
      break;

    case "electrician":
    case "p4":
    case "electrical":
      bgGradient = "#450a0a";
      themeColor = "#ef4444";
      posture = "stand";
      bgElements = (
        <g stroke="#fef08a" strokeOpacity="0.12" strokeWidth="1" fill="none">
          <path d="M15,15 L40,15 L50,25 L50,50" />
          <path d="M85,85 L60,85 L50,75 L50,50" />
        </g>
      );
      toolElements = (
        <g>
          <polygon points="55,20 38,45 48,45 43,70 60,42 50,42" fill="#facc15" filter="drop-shadow(0px 0px 4px rgba(234, 179, 8, 0.6))" />
          <path d="M22,65 L28,52 L34,65" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      );
      break;

    case "carpenter":
    case "p2":
    case "woodwork":
      bgGradient = "#2d1500";
      themeColor = "#d97706";
      posture = "kneel";
      helmetColor = "#78350f";
      bgElements = (
        <g stroke="#7c2d12" strokeWidth="1" strokeOpacity="0.2" fill="none">
          <path d="M5,80 L95,20 M15,90 L95,30" />
        </g>
      );
      toolElements = (
        <g transform="translate(10, 5) rotate(5 40 40)">
          <rect x="20" y="45" width="50" height="8" rx="0.5" fill="#78350f" stroke="#451a03" strokeWidth="0.5" />
          <path d="M25,48 L55,38 L53,34 L25,43 Z" fill="url(#steel-grad)" />
          <path d="M20,38 C18,38 17,40 17,42 L17,48 C17,50 18,52 20,52 Z" fill="#b45309" />
        </g>
      );
      break;

    case "welder":
    case "welding":
    case "p16":
    case "p25":
      bgGradient = "#1e1b4b";
      themeColor = "#6366f1";
      posture = "crouch";
      helmetColor = "#1e293b"; // Dark visor
      bgElements = (
        <g stroke="#818cf8" strokeOpacity="0.12" strokeWidth="0.5" fill="none">
          <circle cx="50" cy="50" r="30" />
        </g>
      );
      toolElements = (
        <g>
          <circle cx="50" cy="65" r="4" fill="#ffffff" />
          <g stroke="#38bdf8" strokeWidth="1" strokeLinecap="round">
            <line x1="50" y1="65" x2="32" y2="55" />
            <line x1="50" y1="65" x2="28" y2="70" />
            <line x1="50" y1="65" x2="42" y2="82" />
            <line x1="50" y1="65" x2="65" y2="78" />
            <line x1="50" y1="65" x2="68" y2="60" />
          </g>
          <line x1="50" y1="65" x2="25" y2="80" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
        </g>
      );
      break;

    case "fabricator":
    case "fabrication":
    case "p13":
      bgGradient = "#3c1518";
      themeColor = "#f43f5e";
      posture = "stand";
      bgElements = (
        <g stroke="#f43f5e" strokeOpacity="0.15" strokeWidth="1.5" fill="none">
          <rect x="15" y="15" width="70" height="70" rx="4" />
        </g>
      );
      toolElements = (
        <g transform="translate(30, 20) rotate(20 25 25)">
          <rect x="15" y="20" width="18" height="6" rx="1" fill="#334155" />
          <circle cx="15" cy="23" r="5" fill="#f43f5e" />
          <line x1="10" y1="23" x2="2" y2="30" stroke="#fbbf24" strokeWidth="1.5" />
          <line x1="10" y1="23" x2="5" y2="15" stroke="#fbbf24" strokeWidth="1.5" />
        </g>
      );
      break;

    case "steel fixer":
    case "steelfixer":
    case "p11":
    case "bar bender":
    case "barbender":
    case "p12":
      bgGradient = "#1e293b";
      themeColor = "#94a3b8";
      posture = "kneel";
      bgElements = (
        <g stroke="#475569" strokeWidth="3" strokeLinecap="round" fill="none" strokeOpacity="0.25">
          <line x1="20" y1="10" x2="20" y2="90" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="80" y1="10" x2="80" y2="90" />
          <line x1="10" y1="30" x2="90" y2="30" />
          <line x1="10" y1="60" x2="90" y2="60" />
        </g>
      );
      toolElements = (
        <g>
          <circle cx="50" cy="60" r="3" fill="none" stroke="#ea580c" strokeWidth="1.5" />
          <path d="M42,52 L50,42 L58,52" fill="none" stroke="#f4f4f5" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      );
      break;

    case "tile worker":
    case "tile":
    case "p9":
      bgGradient = "#1e293b";
      themeColor = "#0d9488";
      posture = "kneel";
      bgElements = (
        <g stroke="#cbd5e1" strokeWidth="1.2" strokeOpacity="0.15" fill="none">
          <rect x="15" y="15" width="30" height="30" />
          <rect x="48" y="15" width="30" height="30" />
          <rect x="15" y="48" width="30" height="30" />
          <rect x="48" y="48" width="30" height="30" />
        </g>
      );
      toolElements = (
        <g transform="translate(15, -5)">
          <rect x="52" y="30" width="10" height="15" rx="1.5" fill="#334155" />
          <line x1="42" y1="37" x2="55" y2="37" stroke="#d97706" strokeWidth="2" />
        </g>
      );
      break;

    case "pop worker":
    case "pop":
    case "p10":
      bgGradient = "#2e1065";
      themeColor = "#818cf8";
      posture = "reach";
      helmetColor = "#cbd5e1";
      bgElements = (
        <g stroke="#e0e7ff" strokeWidth="2" strokeOpacity="0.15" fill="none">
          <path d="M10,15 C40,15 40,30 80,30" />
          <path d="M10,25 C40,25 40,40 80,40" />
        </g>
      );
      toolElements = (
        <g transform="translate(30, 20)">
          <path d="M10,20 L25,20 L30,32 L5,32 Z" fill="#e2e8f0" stroke="#475569" strokeWidth="0.5" />
          <rect x="12" y="32" width="10" height="8" rx="0.5" fill="#ea580c" />
        </g>
      );
      break;

    case "hvac technician":
    case "hvac":
    case "p18":
    case "p17":
      bgGradient = "#064e3b";
      themeColor = "#059669";
      posture = "stand";
      bgElements = (
        <g>
          <path d="M25,65 Q35,70 45,65 T65,65" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round" />
          <path d="M25,75 Q35,80 45,75 T65,75" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round" />
        </g>
      );
      toolElements = (
        <g transform="translate(25, 10)">
          <rect x="10" y="15" width="40" height="18" rx="2" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
          <line x1="14" y1="26" x2="46" y2="26" stroke="#cbd5e1" strokeWidth="1.5" />
        </g>
      );
      break;

    case "solar technician":
    case "solar":
    case "p19":
      bgGradient = "#082f49";
      themeColor = "#0ea5e9";
      posture = "crouch";
      bgElements = (
        <g>
          <circle cx="80" cy="20" r="8" fill="#fef08a" fillOpacity="0.15" />
          <line x1="80" y1="20" x2="68" y2="32" stroke="#eab308" strokeWidth="0.5" strokeOpacity="0.5" />
          <line x1="80" y1="20" x2="80" y2="36" stroke="#eab308" strokeWidth="0.5" strokeOpacity="0.5" />
        </g>
      );
      toolElements = (
        <g transform="translate(15, 35) rotate(-10 25 25)">
          <rect x="5" y="10" width="30" height="18" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="15" y1="10" x2="15" y2="28" stroke="#38bdf8" strokeWidth="1" />
          <line x1="25" y1="10" x2="25" y2="28" stroke="#38bdf8" strokeWidth="1" />
          <line x1="5" y1="19" x2="35" y2="19" stroke="#38bdf8" strokeWidth="1" />
        </g>
      );
      break;

    case "agricultural worker":
    case "agri worker":
    case "p7":
    case "farming":
      bgGradient = "#064e3b";
      themeColor = "#10b981";
      posture = "harvest";
      showVest = false; // traditional style
      bgElements = (
        <g>
          <circle cx="50" cy="65" r="25" fill="#f59e0b" fillOpacity="0.08" />
          <path d="M5,80 Q25,75 50,80 T95,80" fill="none" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.2" />
        </g>
      );
      toolElements = (
        <g>
          <path d="M68,80 Q72,50 82,45" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
          <circle cx="82" cy="45" r="2" fill="#fbbf24" />
          <circle cx="79" cy="48" r="1.5" fill="#d97706" />
          <path d="M52,65 C52,52 65,50 65,58" fill="none" stroke="url(#steel-grad)" strokeWidth="2.5" />
          <rect x="50" y="65" width="4" height="10" rx="1" fill="#78350f" />
        </g>
      );
      break;

    case "security guard":
    case "security":
    case "p23":
      bgGradient = "#0f172a";
      themeColor = "#3b82f6";
      posture = "guard";
      showVest = false; // uniform
      bgElements = (
        <g>
          <rect x="70" y="25" width="20" height="55" fill="none" stroke="#334155" strokeWidth="1.2" />
          <polygon points="25,62 5,85 45,85 30,62" fill="#fef08a" fillOpacity="0.2" />
        </g>
      );
      toolElements = (
        <g>
          <rect x="24" y="58" width="8" height="3" rx="0.5" fill="#475569" transform="rotate(-30 28 60)" />
          <polygon points="50,42 52,47 57,47 53,50 55,55 50,52 45,55 47,50 43,47 48,47" fill="#eab308" />
        </g>
      );
      break;

    case "driver":
    case "p22":
    case "p15":
      bgGradient = "#0f172a";
      themeColor = "#64748b";
      posture = "drive";
      showVest = false;
      bgElements = (
        <g stroke="#475569" strokeWidth="1.5" fill="none" strokeOpacity="0.25">
          <polygon points="50,45 15,85 85,85" />
          <line x1="50" y1="45" x2="50" y2="85" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />
        </g>
      );
      toolElements = (
        <g transform="translate(25, 25)">
          <circle cx="25" cy="25" r="18" fill="none" stroke="url(#steel-grad)" strokeWidth="3.5" />
          <circle cx="25" cy="25" r="4" fill="#334155" />
          <line x1="25" y1="25" x2="25" y2="43" stroke="#334155" strokeWidth="2" />
          <line x1="25" y1="25" x2="10" y2="20" stroke="#334155" strokeWidth="2" />
          <line x1="25" y1="25" x2="40" y2="20" stroke="#334155" strokeWidth="2" />
        </g>
      );
      break;

    default: // Custom fallback / General Labour / Helper
      bgGradient = "#1e293b";
      themeColor = "#f59e0b";
      posture = "stand";
      bgElements = (
        <g stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.15" fill="none">
          <circle cx="50" cy="50" r="35" />
        </g>
      );
      toolElements = (
        <g>
          <ellipse cx="50" cy="65" rx="14" ry="4" fill="#475569" stroke="#334155" strokeWidth="0.5" />
          <path d="M36,65 C36,73 64,73 64,65 Z" fill="#475569" stroke="#334155" strokeWidth="0.5" />
          <line x1="32" y1="75" x2="46" y2="55" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
          <path d="M44,55 L50,50 L46,46 Z" fill="url(#steel-grad)" />
        </g>
      );
      break;
  }

  // 2. Define our gorgeous, reusable, layered human pose vectors!
  let workerSilhouette: React.ReactNode = null;
  const helmetBrace = (
    <g fill={helmetColor}>
      <path d="M43,18 C43,10 57,10 57,18 Z" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.5))" />
      <rect x="40" y="17" width="20" height="2" rx="0.5" fill={helmetColor === "#ffffff" ? "#e2e8f0" : "#ca8a04"} />
    </g>
  );

  const reflectiveVest = showVest ? (
    <g>
      <path d="M38,32 L62,32 L65,58 L35,58 Z" fill="#f97316" />
      <rect x="42" y="32" width="3" height="26" fill="#fbbf24" />
      <rect x="55" y="32" width="3" height="26" fill="#fbbf24" />
      <rect x="36" y="44" width="28" height="3" fill="#cbd5e1" />
    </g>
  ) : null;

  if (posture === "kneel") {
    workerSilhouette = (
      <g transform="translate(0, 15)">
        <path d="M25,70 C30,55 35,50 48,62 L30,75 Z" fill="#1e293b" />
        <path d="M48,62 C52,65 65,70 75,70" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" />
        <path d="M38,32 C42,28 58,28 62,32 L58,62 L42,62 Z" fill="#334155" />
        {reflectiveVest}
        <circle cx="50" cy="22" r="7" fill="#fbcfe8" fillOpacity="0.15" stroke="#fbcfe8" strokeWidth="0.5" />
        {helmetBrace}
        <path d="M40,35 L30,52" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M60,35 L48,55" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
      </g>
    );
  } else if (posture === "crouch") {
    workerSilhouette = (
      <g transform="translate(0, 15)">
        <path d="M25,70 L40,55 L55,70" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M36,36 C40,30 52,28 58,34 L52,60 L38,55 Z" fill="#334155" />
        {reflectiveVest}
        <circle cx="47" cy="22" r="7" fill="#fbcfe8" fillOpacity="0.15" stroke="#fbcfe8" strokeWidth="0.5" />
        <g transform="translate(-3, 0)">{helmetBrace}</g>
        <path d="M38,38 L32,55" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M54,38 L45,55" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
      </g>
    );
  } else if (posture === "reach") {
    workerSilhouette = (
      <g transform="translate(0, 5)">
        <line x1="42" y1="62" x2="42" y2="85" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
        <line x1="58" y1="62" x2="58" y2="85" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
        <path d="M38,32 C42,28 58,28 62,32 L60,65 L40,65 Z" fill="#334155" />
        {reflectiveVest}
        <circle cx="50" cy="22" r="7" fill="#fbcfe8" fillOpacity="0.15" stroke="#fbcfe8" strokeWidth="0.5" />
        {helmetBrace}
        <path d="M40,35 L42,12" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M60,35 L50,18" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
      </g>
    );
  } else if (posture === "harvest") {
    workerSilhouette = (
      <g transform="translate(0, 18)">
        <path d="M30,65 L50,52 L70,65" stroke="#27272a" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M35,35 C40,30 50,30 55,35 L52,58 L38,58 Z" fill="#52525b" />
        <circle cx="45" cy="22" r="6" fill="#fbcfe8" fillOpacity="0.15" stroke="#fbcfe8" strokeWidth="0.5" />
        <ellipse cx="45" cy="16" rx="9" ry="4" fill="#ffffff" stroke="#e4e4e7" strokeWidth="0.5" />
        <path d="M38,38 L52,52" stroke="#52525b" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M52,38 L65,55" stroke="#52525b" strokeWidth="4.5" strokeLinecap="round" />
      </g>
    );
  } else if (posture === "guard") {
    workerSilhouette = (
      <g transform="translate(0, 10)">
        <line x1="44" y1="65" x2="44" y2="85" stroke="#1e1b4b" strokeWidth="5.5" strokeLinecap="round" />
        <line x1="56" y1="65" x2="56" y2="85" stroke="#1e1b4b" strokeWidth="5.5" strokeLinecap="round" />
        <path d="M38,30 C42,26 58,26 62,30 L60,65 L40,65 Z" fill="#1e1b4b" />
        <path d="M39,30 L61,60" stroke="#b91c1c" strokeWidth="3" />
        <circle cx="50" cy="18" r="6.5" fill="#fbcfe8" fillOpacity="0.15" stroke="#fbcfe8" strokeWidth="0.5" />
        <ellipse cx="50" cy="12" rx="9" ry="3" fill="#1e1b4b" />
        <rect x="42" y="13" width="16" height="2" fill="#eab308" />
        <path d="M38,32 L34,60" stroke="#1e1b4b" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M62,32 L55,50" stroke="#1e1b4b" strokeWidth="4.5" strokeLinecap="round" />
      </g>
    );
  } else if (posture === "drive") {
    workerSilhouette = (
      <g transform="translate(0, 20)">
        <path d="M35,30 C40,24 55,24 60,30 L55,68 L38,68 Z" fill="#334155" />
        <line x1="36" y1="30" x2="53" y2="68" stroke="#000000" strokeWidth="2.5" strokeOpacity="0.8" />
        <circle cx="48" cy="18" r="6.5" fill="#fbcfe8" fillOpacity="0.15" stroke="#fbcfe8" strokeWidth="0.5" />
        <path d="M42,12 C45,12 51,12 54,12" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        <path d="M35,36 L30,48" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M58,36 L48,48" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
      </g>
    );
  } else { // "stand"
    workerSilhouette = (
      <g transform="translate(0, 10)">
        <line x1="44" y1="62" x2="44" y2="85" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
        <line x1="56" y1="62" x2="56" y2="85" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
        <path d="M38,30 C42,26 58,26 62,30 L60,65 L40,65 Z" fill="#334155" />
        {reflectiveVest}
        <circle cx="50" cy="18" r="7" fill="#fbcfe8" fillOpacity="0.15" stroke="#fbcfe8" strokeWidth="0.5" />
        {helmetBrace}
        <path d="M38,32 L28,52" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M62,32 L52,52" stroke="#334155" strokeWidth="4.5" strokeLinecap="round" />
      </g>
    );
  }

  return (
    <svg viewBox="0 0 100 100" className={className} aria-label={alt}>
      <defs>
        <radialGradient id={`bg-grad-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={bgGradient} />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>
        <linearGradient id="steel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="paint-grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#0d9488" />
        </linearGradient>
      </defs>
      
      <rect width="100" height="100" rx="16" fill={`url(#bg-grad-${id})`} stroke={themeColor} strokeWidth="0.5" strokeOpacity="0.25" />
      {bgElements}
      {workerSilhouette}
      {toolElements}
    </svg>
  );
}
