import Section from "@/components/Section";
import { featuredWriting, recentWritings } from "@/lib/data";

export const metadata = {
  title: "Writing | Abraham Akomolafe",
  description: "Essays and frameworks on product, growth, and founder systems.",
};

export default function WritingPage() {
  return (
    <Section
      eyebrow="Writing & Thought Leadership"
      title="Essays on product strategy, growth systems, and building technology that matters."
    >
      <div className="space-y-10">
        <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-amber-700/5 p-8">
          <div className="pointer-events-none absolute inset-0 opacity-20 dot-pattern" />
          <div className="relative space-y-5">
            <span className="inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
              Featured
            </span>
            <h3 className="font-display text-2xl text-slate-100 md:text-3xl">
              {featuredWriting.title}
            </h3>
            <p className="max-w-3xl text-sm leading-6 text-slate-300">
              {featuredWriting.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span>{featuredWriting.date}</span>
              <span>{featuredWriting.readTime}</span>
              <span className="rounded-full border border-slate-800 px-3 py-1 text-slate-300">
                {featuredWriting.category}
              </span>
            </div>
            <a
              href={featuredWriting.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300"
            >
              Read Full Article →
            </a>
          </div>
          <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {recentWritings.map((article) => (
            <div key={article.title} className="glass-card rounded-2xl p-6">
              <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-400">
                {article.category}
              </span>
              <h4 className="mt-4 font-display text-lg text-slate-100">
                {article.title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {article.summary}
              </p>
              <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <a
                href={article.href}
                className="mt-4 inline-flex text-sm font-semibold text-slate-100"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
