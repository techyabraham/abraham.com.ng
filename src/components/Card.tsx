import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: "glass" | "plain";
};

export default function Card({
  children,
  className = "",
  variant = "glass",
}: CardProps) {
  const baseClass = variant === "glass" ? "glass-card" : "";

  return (
    <div className={`${baseClass} rounded-2xl p-6 ${className}`.trim()}>
      {children}
    </div>
  );
}
