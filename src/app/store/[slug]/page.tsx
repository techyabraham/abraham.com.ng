import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/Card";
import { publications } from "@/lib/data";
import { styles } from "@/lib/styles";
import { notFound } from "next/navigation";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolvedParams = await params;
  const item = publications.find((entry) => entry.slug === resolvedParams.slug);
  if (!item) {
    return { title: "Store Item | Abraham Akomolafe" };
  }
  return {
    title: `${item.title} | Store`,
    description: item.summary,
  };
}

export default async function StoreItemPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolvedParams = await params;
  const item = publications.find((entry) => entry.slug === resolvedParams.slug);

  if (!item) {
    notFound();
  }

  return (
    <div>
      <Section eyebrow="Store" title={item.title} description={item.subtitle}>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className={`${styles.imageFrame} min-h-[22rem]`}>
            {item.cover ? (
              <Image
                src={item.cover}
                alt={item.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-white/60">
                No cover available
              </div>
            )}
          </div>
          <Card className="space-y-4">
            <div className="space-y-4 text-sm leading-7 text-slate-300">
              {(item.description ?? item.summary)
                .split("\n\n")
                .map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/books" className={styles.secondaryButton}>
                Back to Store
              </Link>
              <Link
                href={item.purchaseLink ?? "/contact"}
                className={styles.primaryButton}
                target={item.purchaseLink ? "_blank" : undefined}
                rel={item.purchaseLink ? "noopener noreferrer" : undefined}
              >
                Get Access
              </Link>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
