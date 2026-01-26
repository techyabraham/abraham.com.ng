import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function Section({
  eyebrow,
  title,
  description,
  children,
  align = "left",
  className = "",
}: SectionProps) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <section className={`py-16 sm:py-20 ${className}`.trim()}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className={`flex flex-col ${alignment} max-w-3xl`}>
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-slate-300">
              {description}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
