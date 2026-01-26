import Link from "next/link";
import type { ReactNode } from "react";
import { styles } from "@/lib/styles";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  type?: "button" | "submit";
};

export default function Button({
  href,
  variant = "primary",
  children,
  type = "button",
}: ButtonProps) {
  const className =
    variant === "secondary" ? styles.secondaryButton : styles.primaryButton;

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
