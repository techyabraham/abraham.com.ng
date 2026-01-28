import Link from "next/link";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { paths } from "@/lib/data";

const pathThemes = {
  blue: {
    card: "path-card path-card-blue",
    icon: "border-blue-500/30 bg-blue-500/10 text-blue-300",
  },
  purple: {
    card: "path-card path-card-purple",
    icon: "border-violet-500/30 bg-violet-500/10 text-violet-300",
  },
  amber: {
    card: "path-card path-card-amber",
    icon: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  },
  green: {
    card: "path-card path-card-green",
    icon: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  },
};

const pathIcons = {
  rocket: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 19c2.5-1 5-3.5 6-6l7-7c-3.5 0-7 1.5-9 3.5S5 14 5 18v1Z" />
      <path d="M9 15l2 2" />
    </svg>
  ),
  code: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m12 7-2 10" />
    </svg>
  ),
  pen: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  ),
  mic: (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Z" />
      <path d="M19 11a7 7 0 0 1-14 0" />
      <path d="M12 19v3" />
    </svg>
  ),
};

export const metadata = {
  title: "Services | Abraham Akomolafe",
  description: "Services and engagement areas for product, growth, and platform delivery.",
};

export default function ServicesPage() {
  return (
    <Section
      eyebrow="Services"
      title="Select the lane that matches your need."
      description="Focused capabilities for building, optimizing, and scaling digital products."
      align="center"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {paths.map((item) => {
          const theme = pathThemes[item.theme as keyof typeof pathThemes];
          return (
            <Card
              key={item.title}
              variant="plain"
              className={`flex h-full flex-col gap-4 rounded-2xl p-8 ${theme.card}`}
            >
              <span
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${theme.icon}`}
              >
                {pathIcons[item.icon as keyof typeof pathIcons]}
              </span>
              <h3 className="font-display text-xl text-slate-100">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-slate-300">{item.body}</p>
              <Link
                href={item.href}
                className="mt-auto text-sm font-semibold text-slate-100"
              >
                Explore →
              </Link>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
