import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import StatsStrip from "@/components/StatsStrip";
import { styles } from "@/lib/styles";
import {
  featuredWriting,
  labProjects,
  contactDirect,
  contactMethods,
  paths,
  projects,
  publications,
  recentWritings,
  recentTalks,
  speakingAvailability,
  speakingStats,
  speakingTopics,
  stackColumns,
  stats,
} from "@/lib/data";

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

export default function Home() {
  return (
    <div>
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Personal Operating System
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl">
              Abraham Akomolafe builds product systems, growth engines, and
              market narratives that scale.
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              Product & software developer. Marketing and growth consultant.
              Author, speaker, and founder building multi-product platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Work With Me</Button>
              <Button href="/portfolio" variant="secondary">
                View Portfolio
              </Button>
            </div>
          </div>
          <div className={`${styles.imageFrame} relative`}>
            <div className="hero-glow" aria-hidden="true" />
            <div className="hero-glow-mask" aria-hidden="true" />
            <Image
              src="/images/abraham.jpg"
              alt="Abraham Akomolafe portrait"
              width={540}
              height={620}
              priority
              className="hero-image h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mt-12">
          <StatsStrip stats={stats} />
        </div>
      </section>

      <Section
        eyebrow="Choose Your Path"
        title="Pick the lane that matches your ambition."
        description="Every engagement is built around clarity, velocity, and measurable outcomes."
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {paths.slice(0, 4).map((item) => {
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
        <div className="mt-8 flex justify-center">
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </Section>

      <Section
        eyebrow="The Abraham Stack"
        title="A senior builder’s operating cadence."
        description="Thinking, building, and scaling in a single loop."
        align="center"
        className="relative"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {stackColumns.map((column) => {
            const colorMap = {
              blue: "text-blue-400",
              purple: "text-violet-400",
              amber: "text-amber-400",
            };
            const dotMap = {
              blue: "bg-blue-400",
              purple: "bg-violet-400",
              amber: "bg-amber-400",
            };
            return (
              <Card key={column.title} className="space-y-6">
                <p
                  className={`text-sm font-semibold tracking-[0.3em] ${
                    colorMap[column.theme as keyof typeof colorMap]
                  }`}
                >
                  {column.title}
                </p>
                <ul className="space-y-3 text-sm text-slate-300">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          dotMap[column.theme as keyof typeof dotMap]
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Featured Work"
        title="A portfolio built for scale."
        description="Selected case studies that show the depth across product, growth, and systems design."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10">
          <Button href="/portfolio" variant="secondary">
            View Full Portfolio
          </Button>
        </div>
      </Section>

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
              <Link
                href={featuredWriting.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300"
              >
                Read Full Article →
              </Link>
            </div>
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-amber-500/20 blur-3xl" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {recentWritings.map((article) => (
              <Card key={article.title} className="flex h-full flex-col gap-4">
                <span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-400">
                  {article.category}
                </span>
                <h4 className="font-display text-lg text-slate-100">
                  {article.title}
                </h4>
                <p className="text-sm leading-6 text-slate-300">
                  {article.summary}
                </p>
                <div className="mt-auto flex items-center gap-4 text-xs text-slate-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <Link
                  href={article.href}
                  className="text-sm font-semibold text-slate-100"
                >
                  Read more →
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/60 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-slate-500"
            >
              Read All Writing →
            </Link>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Books & Publications"
        title="Deep knowledge distilled into practical frameworks for builders and leaders."
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {publications.map((book) => {
            const themeMap = {
              amber: "book-card-amber",
              blue: "book-card-blue",
              purple: "book-card-purple",
            };
            return (
              <div key={book.title} className="space-y-6">
                <div
                  className={`relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-2xl px-8 py-10 shadow-2xl ${themeMap[book.theme as keyof typeof themeMap]}`}
                >
                  <div className="pointer-events-none absolute inset-0 opacity-20 book-dots" />
                  <div className="relative space-y-2 text-slate-100">
                    <h3 className="font-display text-2xl font-semibold">
                      {book.title}
                    </h3>
                    <p className="text-sm text-slate-100/80">
                      {book.subtitle}
                    </p>
                  </div>
                  <div className="relative text-xs text-slate-100/80">
                    Abraham Akomolafe
                  </div>
                </div>
                <p className="text-sm text-slate-400">{book.summary}</p>
                <div className="flex items-center gap-3">
                  <Link
                    href={book.href}
                    className="flex-1 rounded-full border border-slate-800 bg-slate-950/60 px-4 py-2 text-center text-xs font-semibold text-slate-100 hover:border-slate-500"
                  >
                    Read Sample
                  </Link>
                  <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-electric text-slate-950"
                    aria-label="Download"
                  >
                    ↓
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">
          Available in digital and print formats • Free chapters for subscribers
        </p>
      </Section>

      <Section
        eyebrow="Speaking & Media"
        title="Sharing insights on product development, technology leadership, and building in Africa."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className={`${styles.imageFrame} border-slate-800/70 bg-slate-950/40`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <Image
                  src="/images/speaking.svg"
                  alt="Abraham Akomolafe speaking on stage"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3 border-t border-slate-900/70 p-4">
                {speakingStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-800/60 bg-slate-950/60 p-4 text-center"
                  >
                    <p className="text-lg font-semibold text-slate-100">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl text-slate-100">
                Speaking Topics
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-slate-300">
                {speakingTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
              <h4 className="font-display text-lg text-slate-100">
                Available For
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {speakingAvailability.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Button href="/contact" variant="primary">
              Invite Me to Speak
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-xl text-slate-100">Recent Talks</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {recentTalks.map((talk) => (
              <Card key={talk.title} className="space-y-4">
                <div>
                  <h4 className="font-display text-lg text-slate-100">
                    {talk.title}
                  </h4>
                  <p className="text-xs text-slate-500">{talk.event}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                  {talk.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-800 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Innovation Lab"
        title="The Lab"
        description="Current projects in development – exploring new ideas and building the future"
        align="center"
      >
        <div className="space-y-6">
          {labProjects.map((project, index) => {
            const themeMap = {
              green: "bg-emerald-500/90",
              blue: "bg-blue-500/90",
              amber: "bg-amber-500/90",
            };
            return (
              <div key={project.name} className="flex gap-6 items-start">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${themeMap[project.theme as keyof typeof themeMap]}`}
                  >
                    <span className="text-sm font-semibold text-slate-950">
                      {index + 1}
                    </span>
                  </div>
                  {index < labProjects.length - 1 ? (
                    <div className="h-24 w-px bg-gradient-to-b from-slate-700 to-transparent" />
                  ) : null}
                </div>
                <div className="flex-1 rounded-2xl border border-slate-800/70 bg-slate-950/50 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl text-slate-100">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-300">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-right text-xs text-slate-400">
                      <span className="inline-flex rounded-full border border-slate-800 px-3 py-1 text-slate-100">
                        {project.status}
                      </span>
                      <p className="mt-2">Phase: {project.phase}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>Development Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-slate-900">
                      <div
                        className={`h-2 rounded-full ${themeMap[project.theme as keyof typeof themeMap]}`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-8 text-center">
          <h3 className="font-display text-2xl text-slate-100">
            Have an idea for collaboration?
          </h3>
          <p className="mt-3 text-sm text-slate-300">
            I'm always exploring new opportunities to build impactful products
            with ambitious founders and teams
          </p>
          <div className="mt-6">
            <Button href="/contact">Let's Build Together</Button>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Work With Me"
        title="Let's build something exceptional together"
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {contactMethods.map((method) => {
            const themeMap = {
              blue: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
              purple: "from-violet-500/20 to-violet-600/10 border-violet-500/30",
            };
            return (
              <Card
                key={method.title}
                variant="plain"
                className={`rounded-2xl border bg-gradient-to-br p-6 ${themeMap[method.theme as keyof typeof themeMap]}`}
              >
                <h3 className="font-display text-xl text-slate-100">
                  {method.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  {method.description}
                </p>
                <Button href="/contact" variant="secondary">
                  {method.cta}
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/60 p-6 text-center">
          <h3 className="font-display text-xl text-slate-100">
            Or reach out directly
          </h3>
        <div className="mt-4 flex flex-col items-center gap-3 text-sm text-slate-300 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${contactDirect.email}`}
            className="rounded-full border border-slate-800 px-4 py-2"
          >
            {contactDirect.email}
          </a>
          <a
            href={contactDirect.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-emerald-300"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.5 1.33 5.03L2 22l5.09-1.33A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm5.84 14.5c-.25.7-1.46 1.33-2.01 1.41-.5.08-1.12.12-1.8-.12-.42-.13-.96-.31-1.66-.62-2.91-1.27-4.8-4.24-4.94-4.44-.15-.2-1.17-1.56-1.17-2.98 0-1.41.74-2.1 1-2.38.25-.28.55-.35.74-.35h.53c.17 0 .4-.06.62.47.24.55.8 1.9.87 2.04.06.14.1.3.02.48-.08.17-.12.3-.24.46-.12.15-.25.35-.36.47-.12.12-.24.25-.1.5.15.25.66 1.08 1.42 1.75.98.87 1.8 1.15 2.06 1.28.26.14.42.12.57-.07.15-.2.65-.75.82-1.01.18-.26.35-.21.58-.13.24.08 1.5.7 1.75.83.26.13.43.2.49.32.06.11.06.68-.2 1.38Z" />
            </svg>
            {contactDirect.whatsapp}
          </a>
        </div>
          <p className="mt-4 text-xs text-slate-500">
            {contactDirect.responseTime}
          </p>
        </div>
      </Section>
    </div>
  );
}
