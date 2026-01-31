export const styles = {
  page: "bg-[#0B0F14] text-white antialiased",

  section: "relative border-t border-white/5",

  card:
    "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl " +
    "shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition duration-300 ease-out " +
    "hover:-translate-y-1 hover:border-white/15 hover:bg-white/7",

  cardHighlight:
    "pointer-events-none absolute inset-0 rounded-2xl " +
    "bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_60%)] opacity-70",

  sectionTitle: "text-2xl md:text-3xl font-semibold tracking-tight",

  accentLineBlue:
    "mt-3 h-px w-16 bg-gradient-to-r from-cyan-400/80 via-blue-500/80 to-transparent",

  gradientTextBlue:
    "bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent",

  primaryButton:
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold " +
    "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-[#061018] " +
    "shadow-[0_12px_28px_rgba(59,130,246,0.25)] transition duration-300 ease-out " +
    "hover:brightness-110 hover:shadow-[0_14px_34px_rgba(34,211,238,0.22)]",

  secondaryButton:
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold " +
    "border border-white/15 bg-white/5 text-white backdrop-blur-xl " +
    "transition duration-300 ease-out hover:bg-white/8 hover:border-white/25",

  statNumber:
    "text-3xl md:text-4xl font-bold tracking-tight " +
    "bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent",

  statLabel: "mt-1 text-xs md:text-sm text-white/60",

  tag:
    "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur",

  imageFrame:
    "relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden " +
    "shadow-[0_18px_45px_rgba(0,0,0,0.45)]",

  homeAboutSection: "w-full bg-[#FAFAF9] text-[#1F2937]",
  homeAboutInner: "mx-auto w-full max-w-6xl px-6 py-16 md:py-24",
  homeAboutGrid: "grid gap-10 md:grid-cols-[0.9fr_1.1fr]",
  homeAboutEyebrow: "text-xs uppercase tracking-[0.3em] text-[#6B7280]",
  homeAboutName:
    "mt-4 text-5xl md:text-7xl font-medium tracking-wide text-[#111827] leading-tight",
  homeAboutText: "text-sm md:text-base leading-7 text-[#374151]",
  homeAboutStack: "space-y-5",
  homeAboutMicro: "mt-6 text-sm text-[#4B5563]",
  homeAboutBeliefs: "mt-6 space-y-2 text-sm text-[#111827]",
  homeAboutCta: "mt-6",
  homeAboutButton:
    "inline-flex items-center justify-center rounded-xl border border-[#111827]/30 px-5 py-3 " +
    "text-sm font-semibold text-[#111827] transition duration-300 ease-out " +
    "hover:-translate-y-0.5 hover:bg-[#111827]/5",
};
