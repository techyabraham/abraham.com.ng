import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import {
  recentTalks,
  speakingAvailability,
  speakingStats,
  speakingTopics,
} from "@/lib/data";
import { styles } from "@/lib/styles";

export const metadata = {
  title: "Speaking | Abraham Akomolafe",
  description: "Speaking engagements and workshops by Abraham Akomolafe.",
};

export default function SpeakingPage() {
  return (
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
  );
}
