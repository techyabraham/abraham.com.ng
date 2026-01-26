import type { ReactNode } from "react";
import { styles } from "@/lib/styles";

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
    <div
      className={`${baseClass} ${styles.card} rounded-2xl p-6 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
