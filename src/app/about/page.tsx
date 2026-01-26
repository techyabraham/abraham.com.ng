import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { aboutPage, socialProfiles } from "@/lib/data";
import { styles } from "@/lib/styles";

export const metadata = {
  title: "About | Abraham Akomolafe",
  description: "How Abraham Akomolafe thinks about products, growth, and systems.",
};

export default function AboutPage() {
  return (
    <div>
      <Section title={aboutPage.intro.title} description={aboutPage.intro.body} />

      <Section title={aboutPage.howIThink.title}>
        <Card className="space-y-4">
          <p className="text-sm leading-7 text-slate-300">
            {aboutPage.howIThink.body}
          </p>
        </Card>
      </Section>

      <Section title={aboutPage.learned.title}>
        <Card className="space-y-3">
          {aboutPage.learned.items.map((item) => (
            <p key={item} className="text-sm text-slate-200">
              {item}
            </p>
          ))}
        </Card>
      </Section>

      <Section title={aboutPage.focus.title}>
        <Card className="space-y-3">
          {aboutPage.focus.items.map((item) => (
            <p key={item} className="text-sm text-slate-200">
              {item}
            </p>
          ))}
        </Card>
      </Section>

      <Section title={aboutPage.values.title}>
        <Card className="space-y-3">
          {aboutPage.values.items.map((item) => (
            <p key={item} className="text-sm text-slate-200">
              {item}
            </p>
          ))}
        </Card>
      </Section>

      <Section title="Profiles">
        <Card className="flex flex-wrap gap-2">
          {socialProfiles.map((profile) => (
            <a
              key={profile.label}
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tag}
            >
              {profile.label}
            </a>
          ))}
        </Card>
      </Section>

      <Section title="Next steps">
        <div className="flex flex-wrap gap-4">
          <Button href="/portfolio" variant="secondary">
            View Portfolio
          </Button>
          <Button href="/consulting" variant="secondary">
            Explore Consulting
          </Button>
          <Button href="/writing" variant="secondary">
            Read Writing
          </Button>
        </div>
      </Section>
    </div>
  );
}
