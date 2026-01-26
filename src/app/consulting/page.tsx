import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import {
  consultingAudience,
  consultingCta,
  consultingHero,
  consultingIntro,
  consultingPrinciples,
  consultingSystems,
} from "@/lib/data";

export const metadata = {
  title: "Consulting & Growth Systems — Abraham Akomolafe",
  description:
    "Product strategy, digital systems, and growth consulting for founders and businesses building scalable platforms. Helping ideas become products and products reach the right audience.",
  openGraph: {
    title: "How I Help Businesses Build, Grow, and Scale",
    description:
      "Strategic consulting across product development, marketing systems, SEO, and platform architecture — designed for long-term growth.",
  },
};

export default function ConsultingPage() {
  return (
    <div>
      <Section
        eyebrow="Consulting"
        title={consultingHero.title}
        description={consultingHero.subtext}
        align="left"
      >
        <div className="max-w-4xl text-sm leading-7 text-slate-300">
          {consultingIntro}
        </div>
      </Section>

      <Section
        eyebrow="Core Systems"
        title="Core Systems I Design & Deploy"
      >
        <div className="hidden space-y-10 md:block">
          {consultingSystems.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="font-display text-xl text-slate-100">
                {group.category}
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <Card key={item.title} className="space-y-3">
                    <h4 className="font-display text-lg text-slate-100">
                      {item.title}
                    </h4>
                    <p className="text-sm leading-6 text-slate-300">
                      {item.body}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4 md:hidden">
          {consultingSystems.map((group) => (
            <details
              key={group.category}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
            >
              <summary className="cursor-pointer list-none font-display text-lg text-slate-100">
                {group.category}
              </summary>
              <div className="mt-4 space-y-4">
                {group.items.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-semibold text-slate-100">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </Section>

      <Section title="How I Work">
        <Card className="space-y-3">
          {consultingPrinciples.map((item) => (
            <p key={item} className="text-sm text-slate-200">
              {item}
            </p>
          ))}
          <p className="text-sm text-slate-300">
            The goal is not activity — the goal is momentum that compounds.
          </p>
        </Card>
      </Section>

      <Section title="Who This Is For">
        <Card className="space-y-3">
          {consultingAudience.map((item) => (
            <p key={item} className="text-sm text-slate-200">
              {item}
            </p>
          ))}
          <p className="text-sm text-slate-300">
            If you’re serious about building something that lasts, this is where
            we begin.
          </p>
        </Card>
      </Section>

      <Section title={consultingCta.title}>
        <div className="max-w-3xl space-y-6">
          <p className="text-sm leading-7 text-slate-300">{consultingCta.body}</p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact">{consultingCta.primary}</Button>
            <Button href="/contact" variant="secondary">
              {consultingCta.secondary}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
