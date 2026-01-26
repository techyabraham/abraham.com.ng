 "use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { styles } from "@/lib/styles";

type Stat = {
  label: string;
  value: string;
};

type StatsStripProps = {
  stats: Stat[];
};

export default function StatsStrip({ stats }: StatsStripProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  const parsedStats = useMemo(
    () =>
      stats.map((stat) => {
        const numeric = Number(stat.value.replace(/[^\d.]/g, ""));
        const suffix = stat.value.replace(/[\d.]/g, "");
        return { ...stat, numeric, suffix };
      }),
    [stats]
  );

  useEffect(() => {
    if (!containerRef.current || hasPlayed) {
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setHasPlayed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setHasPlayed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <div
      ref={containerRef}
      className={`${styles.card} grid gap-4 border border-slate-900/70 bg-slate-950/60 p-6 backdrop-blur sm:grid-cols-2 lg:grid-cols-4`}
    >
      {parsedStats.map((stat) => (
        <StatCounter
          key={stat.label}
          label={stat.label}
          value={stat.numeric}
          suffix={stat.suffix}
          play={hasPlayed}
        />
      ))}
    </div>
  );
}

type StatCounterProps = {
  label: string;
  value: number;
  suffix: string;
  play: boolean;
};

function StatCounter({ label, value, suffix, play }: StatCounterProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!play) {
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [play, value]);

  return (
    <div className="space-y-2">
      <p className={styles.statNumber}>
        {display}
        {suffix}
      </p>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
}
