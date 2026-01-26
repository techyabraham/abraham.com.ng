import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { consultingEngagements, consultingServices } from "@/lib/data";

export const metadata = {
  title: "Consulting | Abraham Akomolafe",
  description: "Product, growth, and go-to-market consulting engagements.",
};

export default function ConsultingPage() {
  return (
    <div>
      <Section
        eyebrow="Consulting"
        title="Senior-level product and growth consulting."
        description="Engage a strategic partner to align product direction, sharpen positioning, and accelerate execution."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {consultingServices.map((item) => (
            <Card key={item.title} className="space-y-4">
              <h3 className="font-display text-xl text-slate-100">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-slate-300">{item.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Engagement Model"
        title="Choose the collaboration style that fits your runway."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {consultingEngagements.map((item) => (
            <Card key={item.title} className="space-y-4">
              <h3 className="font-display text-xl text-slate-100">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-slate-300">{item.body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/contact">Start a consulting call</Button>
        </div>
      </Section>
    </div>
  );
}
