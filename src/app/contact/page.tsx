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
  );
}
