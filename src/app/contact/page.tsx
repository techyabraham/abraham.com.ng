import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { contactDirect, contactMethods } from "@/lib/data";

export const metadata = {
  title: "Contact | Abraham Akomolafe",
  description: "Start a project or speaking engagement with Abraham Akomolafe.",
};

export default function ContactPage() {
  return (
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
          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-emerald-300">
            {contactDirect.whatsapp}
          </span>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          {contactDirect.responseTime}
        </p>
      </div>
    </Section>
  );
}
