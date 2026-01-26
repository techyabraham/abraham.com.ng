import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  type?: "button" | "submit";
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all";

const variantStyles = {
  primary:
    "bg-electric text-slate-950 shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:bg-blue-400",
  secondary:
    "border border-slate-700 bg-slate-900/60 text-slate-100 hover:border-slate-400",
  ghost: "text-slate-300 hover:text-slate-100",
};

export default function Button({
  href,
  variant = "primary",
  children,
  type = "button",
}: ButtonProps) {
  const className = `${baseStyles} ${variantStyles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}
