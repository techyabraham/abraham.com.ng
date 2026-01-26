import { styles } from "@/lib/styles";

type Stat = {
  label: string;
  value: string;
};

type StatsStripProps = {
  stats: Stat[];
};

export default function StatsStrip({ stats }: StatsStripProps) {
  return (
    <div
      className={`${styles.card} grid gap-4 border border-slate-900/70 bg-slate-950/60 p-6 backdrop-blur sm:grid-cols-2 lg:grid-cols-4`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-2">
          <p className={styles.statNumber}>{stat.value}</p>
          <p className={styles.statLabel}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
