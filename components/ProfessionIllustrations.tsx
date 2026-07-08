import React from "react";
import { ModernProfessionIllustration } from "./ModernProfessionIllustration";

interface IllustrationProps {
  className?: string;
  alt?: string;
}

// 1. Profession Illustrations (25 professions)
export function ProfessionIllustration({ id, className = "w-full h-full", alt = "Profession Illustration" }: { id: string; className?: string; alt?: string }) {
  return <ModernProfessionIllustration id={id} className={className} alt={alt} />;
}

// 2. Category Illustrations (9 wide banners)
export function CategoryIllustration({ id, className = "w-full h-32", alt = "Category Banner" }: { id: string; className?: string; alt?: string }) {
  const normId = id.toLowerCase();
  switch (normId) {
    case "construction":
      return (
        <svg viewBox="0 0 400 120" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-cat-const" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="50%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ca8a04" />
            </linearGradient>
          </defs>
          <rect width="400" height="120" rx="16" fill="url(#bg-cat-const)" />
          {/* Construction scaffold overlay grids */}
          <g stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1">
            <line x1="30" y1="0" x2="30" y2="120" />
            <line x1="80" y1="0" x2="80" y2="120" />
            <line x1="130" y1="0" x2="130" y2="120" />
            <line x1="180" y1="0" x2="180" y2="120" />
            <line x1="0" y1="40" x2="400" y2="40" />
            <line x1="0" y1="80" x2="400" y2="80" />
          </g>
          {/* Tower crane silhouette */}
          <path d="M320,120 L320,20 L370,20 M320,35 L350,20" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeOpacity="0.3" />
          {/* Heavy iron structures */}
          <rect x="40" y="85" width="220" height="15" rx="3" fill="url(#beam-grad)" />
          <path d="M40,85 L80,100 M100,85 L140,100 M160,85 L200,100 M220,85 L260,100" stroke="#78350f" strokeWidth="2" />
          {/* Dynamic Indian labor helmet icons */}
          <g transform="translate(280, 70)">
            <ellipse cx="15" cy="15" rx="12" ry="8" fill="#fbbf24" />
            <rect x="2" y="15" width="26" height="3" rx="0.5" fill="#d97706" />
          </g>
        </svg>
      );

    case "repair":
      return (
        <svg viewBox="0 0 400 120" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-cat-rep" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0c4a6e" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>
          <rect width="400" height="120" rx="16" fill="url(#bg-cat-rep)" />
          {/* Floating blueprint drawings */}
          <path d="M30,95 L140,75 L120,35 L10,55 Z" fill="#0284c7" fillOpacity="0.1" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="30" y1="85" x2="110" y2="69" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.3" />
          {/* Intersecting Tools (wrench & hammer) */}
          <g transform="translate(180, 20)">
            {/* Wrench */}
            <path d="M5,70 L45,10 C48,7 55,7 58,10 L68,20 C71,23 71,30 68,33 L28,93 Z" fill="none" stroke="#38bdf8" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx="58" cy="20" r="8" fill="#020617" stroke="#38bdf8" strokeWidth="3" />
            {/* Hammer */}
            <line x1="10" y1="20" x2="80" y2="80" stroke="#eab308" strokeWidth="5.5" strokeLinecap="round" />
            <rect x="5" y="5" width="28" height="15" rx="2.5" fill="#334155" transform="rotate(15 15 15)" />
          </g>
        </svg>
      );

    case "electrical":
      return (
        <svg viewBox="0 0 400 120" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-cat-elec" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#450a0a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>
          <rect width="400" height="120" rx="16" fill="url(#bg-cat-elec)" />
          {/* Neon energy wave lines */}
          <path d="M10,60 Q100,20 200,80 T390,40" fill="none" stroke="#ef4444" strokeWidth="3" strokeOpacity="0.4" />
          <path d="M10,70 Q90,90 210,30 T390,60" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.3" />
          {/* Sparking lightbulb center */}
          <g transform="translate(180, 30)">
            <circle cx="20" cy="20" r="14" fill="none" stroke="#fef08a" strokeWidth="2.5" strokeOpacity="0.8" />
            <path d="M14,32 L26,32 L23,38 L17,38 Z" fill="#94a3b8" />
            {/* Lightning inside */}
            <polygon points="23,10 14,23 20,23 17,30 26,17 20,17" fill="#fbbf24" />
          </g>
        </svg>
      );

    case "painting":
      return (
        <svg viewBox="0 0 400 120" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-cat-paint" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#042f2e" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>
          <rect width="400" height="120" rx="16" fill="url(#bg-cat-paint)" />
          {/* Multicolored dynamic paint splashes */}
          <path d="M30,30 C60,5 90,45 130,20 C170,45 220,10 270,35 C320,10 350,45 380,25" fill="none" stroke="#2dd4bf" strokeWidth="14" strokeLinecap="round" strokeOpacity="0.4" />
          <path d="M50,45 Q150,15 250,75 T350,45" fill="none" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.4" />
          {/* Hanging bucket pouring colors */}
          <g transform="translate(170, 45)">
            <rect x="20" y="10" width="25" height="22" rx="2" fill="#cbd5e1" />
            <path d="M22,10 Q32.5,-4 43,10" fill="none" stroke="#475569" strokeWidth="2" />
            {/* Swirling color drop */}
            <path d="M32.5,32 Q32.5,50 40,55" fill="none" stroke="#2dd4bf" strokeWidth="4.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "agriculture":
    case "rural":
      return (
        <svg viewBox="0 0 400 120" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-cat-agri" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#064e3b" />
              <stop offset="100%" stopColor="#022c22" />
            </linearGradient>
          </defs>
          <rect width="400" height="120" rx="16" fill="url(#bg-cat-agri)" />
          {/* Green paddy field perspectives */}
          <polygon points="100,120 180,60 220,60 300,120" fill="#10b981" fillOpacity="0.15" />
          <line x1="180" y1="60" x2="100" y2="120" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="220" y1="60" x2="300" y2="120" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Golden sun rays over horizons */}
          <circle cx="200" cy="50" r="18" fill="#fbbf24" fillOpacity="0.1" />
          <circle cx="200" cy="50" r="10" fill="#fbbf24" fillOpacity="0.2" />
          {/* Wheat crop bundles */}
          <g transform="translate(70, 40)">
            <path d="M10,60 Q20,25 35,25" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
            <path d="M25,60 Q15,25 5,25" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
          </g>
        </svg>
      );

    case "general":
    case "general labour":
      return (
        <svg viewBox="0 0 400 120" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-cat-gen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <rect width="400" height="120" rx="16" fill="url(#bg-cat-gen)" />
          {/* Stylized physical workers in team */}
          <g stroke="#cbd5e1" strokeWidth="1.5" fill="none" strokeOpacity="0.15">
            <circle cx="160" cy="50" r="12" />
            <path d="M140,90 C140,70 180,70 180,90" />
            <circle cx="200" cy="45" r="14" stroke="#f59e0b" strokeOpacity="0.4" />
            <path d="M175,90 C175,65 225,65 225,90" stroke="#f59e0b" strokeOpacity="0.4" />
            <circle cx="240" cy="50" r="12" />
            <path d="M220,90 C220,70 260,70 260,90" />
          </g>
          {/* Shovel and pile */}
          <path d="M50,105 Q90,90 130,105" fill="none" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    case "helpers":
    case "helper":
      return (
        <svg viewBox="0 0 400 120" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-cat-help" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <rect width="400" height="120" rx="16" fill="url(#bg-cat-help)" />
          {/* Supporting hand shake / interlocking rings */}
          <g transform="translate(150, 25)">
            <circle cx="30" cy="30" r="22" fill="none" stroke="#a78bfa" strokeWidth="3" strokeOpacity="0.6" />
            <circle cx="60" cy="30" r="22" fill="none" stroke="#f59e0b" strokeWidth="3" strokeOpacity="0.6" />
            <path d="M42,30 L48,30" stroke="#ffffff" strokeWidth="4" />
          </g>
        </svg>
      );

    case "rural jobs":
      return (
        <svg viewBox="0 0 400 120" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-cat-rural" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#022c22" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <rect width="400" height="120" rx="16" fill="url(#bg-cat-rural)" />
          {/* Windmill & rustic village hills */}
          <path d="M10,110 Q120,75 220,110 T390,110" fill="none" stroke="#047857" strokeWidth="4" strokeOpacity="0.4" />
          {/* Windmill */}
          <g transform="translate(80, 45)" stroke="#fbbf24" strokeWidth="1.5" fill="none">
            <line x1="20" y1="50" x2="20" y2="10" />
            <circle cx="20" cy="10" r="1.5" fill="#fbbf24" />
            <line x1="20" y1="10" x2="5" y2="2" />
            <line x1="20" y1="10" x2="35" y2="18" />
            <line x1="20" y1="10" x2="12" y2="25" />
            <line x1="20" y1="10" x2="28" y2="-5" />
          </g>
        </svg>
      );

    case "infrastructure projects":
    case "infrastructure":
      return (
        <svg viewBox="0 0 400 120" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-cat-infra" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0c4a6e" />
              <stop offset="100%" stopColor="#0c0a09" />
            </linearGradient>
          </defs>
          <rect width="400" height="120" rx="16" fill="url(#bg-cat-infra)" />
          {/* Cable stayed bridge spans */}
          <line x1="50" y1="110" x2="350" y2="110" stroke="#64748b" strokeWidth="5.5" />
          <line x1="200" y1="110" x2="200" y2="20" stroke="#cbd5e1" strokeWidth="3" />
          {/* Cable stays */}
          <g stroke="#38bdf8" strokeWidth="1.25" strokeOpacity="0.6">
            <line x1="200" y1="30" x2="120" y2="110" />
            <line x1="200" y1="50" x2="140" y2="110" />
            <line x1="200" y1="70" x2="160" y2="110" />
            <line x1="200" y1="30" x2="280" y2="110" />
            <line x1="200" y1="50" x2="260" y2="110" />
            <line x1="200" y1="70" x2="240" y2="110" />
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 120" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-cat-def" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <rect width="400" height="120" rx="16" fill="url(#bg-cat-def)" />
          <circle cx="200" cy="60" r="30" fill="#f59e0b" fillOpacity="0.1" />
          <path d="M180,60 L220,60" stroke="#cbd5e1" strokeWidth="2" />
        </svg>
      );
  }
}

// 3. Dashboard Illustrations (5 types)
export function DashboardIllustration({ type, className = "w-full h-40", alt = "Dashboard Banner" }: { type: string; className?: string; alt?: string }) {
  const normType = type.toLowerCase();
  switch (normType) {
    case "worker":
      return (
        <svg viewBox="0 0 300 150" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-dash-worker" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#042f2e" />
            </linearGradient>
            <linearGradient id="pass-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          <rect width="300" height="150" rx="16" fill="url(#bg-dash-worker)" stroke="#2dd4bf" strokeWidth="0.5" strokeOpacity="0.3" />
          {/* Large Passport outline illustration */}
          <g transform="translate(30, 25)">
            <rect x="0" y="0" width="70" height="100" rx="6" fill="#0f172a" stroke="url(#pass-grad)" strokeWidth="2.5" />
            {/* Ashok emblem stylized */}
            <circle cx="35" cy="40" r="14" fill="none" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 1" />
            <line x1="35" y1="20" x2="35" y2="60" stroke="#fbbf24" strokeWidth="1.5" />
            <line x1="20" y1="40" x2="50" y2="40" stroke="#fbbf24" strokeWidth="1.5" />
            {/* Indian Flag color ribbons */}
            <rect x="10" y="80" width="50" height="3" fill="#ff9933" />
            <rect x="10" y="83" width="50" height="3" fill="#ffffff" />
            <rect x="10" y="86" width="50" height="3" fill="#128807" />
          </g>
          {/* AI Matching gears / network points */}
          <g transform="translate(160, 40)">
            <circle cx="50" cy="40" r="30" fill="none" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="50" cy="40" r="4" fill="#2dd4bf" />
            <circle cx="25" cy="25" r="3" fill="#2dd4bf" />
            <circle cx="75" cy="55" r="3" fill="#2dd4bf" />
            <circle cx="25" cy="55" r="3" fill="#2dd4bf" />
            <circle cx="75" cy="25" r="3" fill="#2dd4bf" />
            <line x1="25" y1="25" x2="50" y2="40" stroke="#2dd4bf" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="75" y1="55" x2="50" y2="40" stroke="#2dd4bf" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="25" y1="55" x2="50" y2="40" stroke="#2dd4bf" strokeWidth="1.5" strokeOpacity="0.6" />
            <line x1="75" y1="25" x2="50" y2="40" stroke="#2dd4bf" strokeWidth="1.5" strokeOpacity="0.6" />
          </g>
        </svg>
      );

    case "employer":
      return (
        <svg viewBox="0 0 300 150" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-dash-emp" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </linearGradient>
          </defs>
          <rect width="300" height="150" rx="16" fill="url(#bg-dash-emp)" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.3" />
          {/* Hiring / Finding workers concept */}
          <g transform="translate(30, 35)" stroke="#38bdf8" strokeWidth="2" fill="none">
            <circle cx="50" cy="40" r="28" strokeDasharray="6 3" />
            {/* Search Glass */}
            <line x1="70" y1="60" x2="95" y2="85" strokeWidth="4.5" strokeLinecap="round" />
            <circle cx="50" cy="40" r="14" fill="#1e1b4b" />
          </g>
          {/* Verified workers grid with checkmarks */}
          <g transform="translate(160, 30)">
            {/* Card 1 */}
            <rect x="0" y="5" width="100" height="24" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
            <circle cx="15" cy="17" r="6" fill="#10b981" />
            <path d="M12,17 L14,19 L18,15" fill="none" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="30" y1="17" x2="85" y2="17" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
            {/* Card 2 */}
            <rect x="0" y="38" width="100" height="24" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
            <circle cx="15" cy="50" r="6" fill="#10b981" />
            <path d="M12,50 L14,52 L18,48" fill="none" stroke="#ffffff" strokeWidth="1.5" />
            <line x1="30" y1="50" x2="80" y2="50" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
            {/* Card 3 */}
            <rect x="0" y="71" width="100" height="24" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
            <circle cx="15" cy="83" r="6" fill="#64748b" />
            <line x1="30" y1="83" x2="75" y2="83" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "contractor":
      return (
        <svg viewBox="0 0 300 150" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-dash-cont" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#451a03" />
            </linearGradient>
          </defs>
          <rect width="300" height="150" rx="16" fill="url(#bg-dash-cont)" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3" />
          {/* Construction Site Infrastructure */}
          <g stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1.5">
            <line x1="20" y1="0" x2="20" y2="150" />
            <line x1="70" y1="0" x2="70" y2="150" />
            <line x1="120" y1="0" x2="120" y2="150" />
            <line x1="170" y1="0" x2="170" y2="150" />
            <line x1="0" y1="40" x2="300" y2="40" />
            <line x1="0" y1="90" x2="300" y2="90" />
          </g>
          {/* Live site monitoring blueprint */}
          <g transform="translate(30, 30)" stroke="#f59e0b" strokeWidth="1.5" fill="none">
            <polygon points="10,80 60,10 110,80" />
            <line x1="60" y1="10" x2="60" y2="80" strokeDasharray="3 3" />
            <rect x="50" y="40" width="20" height="10" fill="#3f1e05" strokeWidth="1" />
          </g>
          {/* Workforce deployment counter bar chart */}
          <g transform="translate(180, 40)">
            <rect x="10" y="50" width="12" height="40" rx="2" fill="#ea580c" />
            <rect x="30" y="20" width="12" height="70" rx="2" fill="#fbbf24" />
            <rect x="50" y="35" width="12" height="55" rx="2" fill="#f97316" />
            <line x1="0" y1="90" x2="80" y2="90" stroke="#cbd5e1" strokeWidth="2" />
          </g>
        </svg>
      );

    case "admin":
      return (
        <svg viewBox="0 0 300 150" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-dash-admin" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="admin-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#e11d48" />
            </linearGradient>
          </defs>
          <rect width="300" height="150" rx="16" fill="url(#bg-dash-admin)" stroke="#e11d48" strokeWidth="0.5" strokeOpacity="0.3" />
          {/* National control room system nodes */}
          <g transform="translate(40, 25)">
            <rect x="0" y="0" width="220" height="100" rx="8" fill="#020617" stroke="#334155" strokeWidth="1.5" />
            {/* World / India geographic mesh stylized */}
            <path d="M20,50 C40,30 80,70 120,40 T200,60" fill="none" stroke="#e11d48" strokeWidth="1" strokeOpacity="0.3" />
            <circle cx="80" cy="50" r="3" fill="#e11d48" />
            <circle cx="140" cy="45" r="4" fill="url(#admin-glow)" />
            <circle cx="140" cy="45" r="10" fill="none" stroke="#e11d48" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 1" />
            {/* Monitoring server columns */}
            <rect x="25" y="15" width="40" height="15" rx="2" fill="#1e293b" />
            <circle cx="32" cy="22.5" r="2" fill="#10b981" />
            <line x1="42" y1="22.5" x2="60" y2="22.5" stroke="#cbd5e1" strokeWidth="2" />
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 300 150" className={className} aria-label={alt}>
          <rect width="300" height="150" rx="16" fill="#1e293b" />
          <circle cx="150" cy="75" r="20" fill="#cbd5e1" />
        </svg>
      );
  }
}

// 4. National Intelligence Illustrations (6 types)
export function IntelIllustration({ type, className = "w-full h-40", alt = "Intelligence Panel" }: { type: string; className?: string; alt?: string }) {
  const normType = type.toLowerCase();
  switch (normType) {
    case "india_network":
    case "network":
      return (
        <svg viewBox="0 0 300 150" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-intel-net" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#022c22" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <rect width="300" height="150" rx="16" fill="url(#bg-intel-net)" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.3" />
          {/* Nodes spreading out */}
          <g stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.5">
            <line x1="150" y1="75" x2="80" y2="40" />
            <line x1="150" y1="75" x2="220" y2="40" />
            <line x1="150" y1="75" x2="80" y2="110" />
            <line x1="150" y1="75" x2="220" y2="110" />
          </g>
          <circle cx="150" cy="75" r="8" fill="#10b981" />
          <circle cx="150" cy="75" r="18" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="4 2" />
          <circle cx="80" cy="40" r="5" fill="#34d399" />
          <circle cx="220" cy="40" r="5" fill="#34d399" />
          <circle cx="80" cy="110" r="5" fill="#34d399" />
          <circle cx="220" cy="110" r="5" fill="#34d399" />
        </svg>
      );

    case "district":
      return (
        <svg viewBox="0 0 300 150" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-intel-dist" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1c1917" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <rect width="300" height="150" rx="16" fill="url(#bg-intel-dist)" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3" />
          {/* Stylized territorial / regional maps */}
          <g fill="none" stroke="#f59e0b" strokeOpacity="0.2" strokeWidth="1.5">
            <polygon points="40,30 80,20 120,40 100,80 50,70" />
            <polygon points="120,40 170,25 210,50 180,90 100,80" />
            <polygon points="100,80 180,90 150,130 90,120" />
          </g>
          {/* Active hotspot location indicator */}
          <circle cx="130" cy="65" r="5" fill="#f59e0b" />
          <circle cx="130" cy="65" r="14" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="3 3" />
        </svg>
      );

    case "heatmap":
      return (
        <svg viewBox="0 0 300 150" className={className} aria-label={alt}>
          <defs>
            <radialGradient id="heat-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="300" height="150" rx="16" fill="#0f172a" stroke="#ef4444" strokeWidth="0.5" strokeOpacity="0.3" />
          {/* Heat map density clouds */}
          <circle cx="150" cy="75" r="45" fill="url(#heat-glow)" />
          <circle cx="90" cy="50" r="30" fill="url(#heat-glow)" />
          <circle cx="210" cy="100" r="35" fill="url(#heat-glow)" />
          {/* Grid lines */}
          <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="0.5">
            <line x1="50" y1="0" x2="50" y2="150" />
            <line x1="100" y1="0" x2="100" y2="150" />
            <line x1="150" y1="0" x2="150" y2="150" />
            <line x1="200" y1="0" x2="200" y2="150" />
            <line x1="250" y1="0" x2="250" y2="150" />
          </g>
        </svg>
      );

    case "skills":
      return (
        <svg viewBox="0 0 300 150" className={className} aria-label={alt}>
          <rect width="300" height="150" rx="16" fill="#1e1b4b" stroke="#a78bfa" strokeWidth="0.5" strokeOpacity="0.3" />
          {/* Skill Radar / spider web analytics */}
          <polygon points="150,20 220,55 220,110 150,135 80,110 80,55" fill="none" stroke="#a78bfa" strokeOpacity="0.2" strokeWidth="1" />
          <polygon points="150,40 195,65 195,100 150,115 105,100 105,65" fill="none" stroke="#a78bfa" strokeOpacity="0.3" strokeWidth="1" />
          {/* Active Skill Area fill */}
          <polygon points="150,30 210,60 180,105 150,115 115,80 90,55" fill="#c084fc" fillOpacity="0.25" stroke="#a78bfa" strokeWidth="2" />
        </svg>
      );

    case "migration":
      return (
        <svg viewBox="0 0 300 150" className={className} aria-label={alt}>
          <defs>
            <linearGradient id="bg-intel-mig" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#082f49" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <rect width="300" height="150" rx="16" fill="url(#bg-intel-mig)" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.3" />
          {/* Arched migration direction vectors */}
          <path d="M40,110 Q145,15 250,110" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="4 4" />
          <path d="M60,110 Q145,35 230,110" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          {/* Flight arrow heads */}
          <polygon points="250,110 242,102 248,100" fill="#38bdf8" />
          <polygon points="230,110 224,104 229,102" fill="#f59e0b" />
          {/* Origin/Destination dots */}
          <circle cx="40" cy="110" r="4.5" fill="#ef4444" />
          <circle cx="250" cy="110" r="5" fill="#10b981" />
        </svg>
      );

    case "digital_infra":
    case "infrastructure":
      return (
        <svg viewBox="0 0 300 150" className={className} aria-label={alt}>
          <rect width="300" height="150" rx="16" fill="#111827" stroke="#94a3b8" strokeWidth="0.5" strokeOpacity="0.3" />
          {/* Isometric Blockchain blocks or Server racks stacked up */}
          <g transform="translate(100, 20)">
            {/* Block 1 (top) */}
            <polygon points="50,15 90,30 50,45 10,30" fill="#374151" stroke="#4b5563" strokeWidth="1" />
            <polygon points="10,30 50,45 50,60 10,45" fill="#1f2937" stroke="#4b5563" strokeWidth="1" />
            <polygon points="50,45 90,30 90,45 50,60" fill="#111827" stroke="#4b5563" strokeWidth="1" />
            {/* Block 2 (bottom) */}
            <polygon points="50,45 90,60 50,75 10,60" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1" />
            <polygon points="10,60 50,75 50,90 10,75" fill="#1d4ed8" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="1" />
            <polygon points="50,75 90,60 90,75 50,90" fill="#1e3a8a" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="1" />
            {/* Connection beam line */}
            <line x1="50" y1="45" x2="50" y2="55" stroke="#f59e0b" strokeWidth="2.5" />
          </g>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 300 150" className={className} aria-label={alt}>
          <rect width="300" height="150" rx="16" fill="#1e293b" />
          <circle cx="150" cy="75" r="20" fill="#cbd5e1" />
        </svg>
      );
  }
}

// 5. Main Home Page Hero Illustration (wide banner, Indian workers confident)
export function HeroIllustration({ className = "w-full h-full", alt = "LabourAdda Hero Illustration" }: IllustrationProps) {
  return (
    <svg viewBox="0 0 600 350" className={className} aria-label={alt}>
      <defs>
        <radialGradient id="hero-sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ea580c" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#d97706" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="flag-orange" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff9933" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="flag-green" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#128807" />
          <stop offset="100%" stopColor="#0d5205" />
        </linearGradient>
        <linearGradient id="helmet-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="sky-grid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>

      {/* Deep twilight atmospheric sky */}
      <rect width="600" height="350" rx="24" fill="url(#sky-grid)" stroke="#475569" strokeWidth="0.75" />

      {/* Giant glowing Indian sun */}
      <circle cx="300" cy="180" r="160" fill="url(#hero-sun)" />

      {/* Background industrial infrastructure grid / crane */}
      <g stroke="#cbd5e1" strokeWidth="1" strokeOpacity="0.08" fill="none">
        <line x1="50" y1="0" x2="50" y2="350" />
        <line x1="150" y1="0" x2="150" y2="350" />
        <line x1="250" y1="0" x2="250" y2="350" />
        <line x1="350" y1="0" x2="350" y2="350" />
        <line x1="450" y1="0" x2="450" y2="350" />
        <line x1="550" y1="0" x2="550" y2="350" />
        <line x1="0" y1="100" x2="600" y2="100" />
        <line x1="0" y1="200" x2="600" y2="200" />
      </g>
      <path d="M480,350 L480,110 L560,110 M480,130 L520,110 M480,350 L580,350" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeOpacity="0.1" />

      {/* Digital blockchain network coordinates overhead (AI Matching theme) */}
      <g stroke="#38bdf8" strokeWidth="1.25" strokeOpacity="0.2">
        <line x1="200" y1="60" x2="300" y2="100" />
        <line x1="300" y1="100" x2="400" y2="60" />
        <circle cx="200" cy="60" r="3" fill="#38bdf8" />
        <circle cx="300" cy="100" r="4" fill="#fbbf24" />
        <circle cx="400" cy="60" r="3" fill="#38bdf8" />
      </g>

      {/* Foreground Silhouette / stylized bodies of Confident Indian Workers */}
      {/* 1. Left: Agriculture Worker (female) */}
      <g transform="translate(100, 160)">
        {/* Body and headwrap */}
        <path d="M10,190 C10,120 70,120 70,190 Z" fill="url(#flag-orange)" fillOpacity="0.8" />
        <circle cx="40" cy="100" r="15" fill="#fbcfe8" fillOpacity="0.25" stroke="#f472b6" strokeWidth="1.5" />
        {/* Head wrap (saree/ghunghat) */}
        <path d="M22,95 C22,75 58,75 58,95 C58,115 22,115 22,95" fill="#f43f5e" />
        {/* Sickle tool */}
        <path d="M15,150 C5,130 5,110 20,110 C20,115 10,120 15,140" fill="#94a3b8" />
        <rect x="13" y="140" width="4" height="12" rx="1" fill="#7c2d12" />
      </g>

      {/* 2. Right: Site Engineer (holding blueprint) */}
      <g transform="translate(360, 150)">
        <path d="M20,200 C20,130 80,130 80,200 Z" fill="url(#flag-green)" fillOpacity="0.8" />
        <circle cx="50" cy="110" r="16" fill="#bae6fd" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="1.5" />
        {/* Engineer white hard hat */}
        <path d="M34,108 C34,95 66,95 66,108 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        <rect x="30" y="108" width="40" height="2.5" rx="0.5" fill="#cbd5e1" />
        {/* Blueprint roll */}
        <rect x="15" y="150" width="40" height="10" rx="2" fill="#cbd5e1" transform="rotate(-15 35 155)" />
      </g>

      {/* 3. Center: Chief Mason / Contractor (in yellow helmet & safety vest) */}
      <g transform="translate(220, 110)">
        {/* Reflective safety vest and neck */}
        <path d="M20,240 C20,150 110,150 110,240 Z" fill="#1e293b" />
        {/* Safety vest stripes */}
        <path d="M35,190 L50,240 M95,190 L80,240" stroke="#fbbf24" strokeWidth="8" strokeLinecap="round" />
        <path d="M30,210 L100,210" stroke="#fbbf24" strokeWidth="5" />
        <circle cx="65" cy="120" r="22" fill="#fed7aa" fillOpacity="0.25" stroke="#f97316" strokeWidth="2" />
        {/* Yellow hard hat */}
        <path d="M42,115 C42,95 88,95 88,115 Z" fill="url(#helmet-yellow)" />
        <rect x="36" y="115" width="58" height="3.5" rx="1" fill="#ca8a04" />
        <path d="M60,105 L70,105 L65,115" fill="#ca8a04" /> {/* Helmet rib */}
      </g>

      {/* Decorative Brand Tag overlay */}
      <rect x="230" y="20" width="140" height="30" rx="8" fill="#1e293b" fillOpacity="0.9" stroke="#f59e0b" strokeWidth="1" />
      <text x="300" y="39" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="2">
        LABOURADDA v2.0
      </text>
    </svg>
  );
}
