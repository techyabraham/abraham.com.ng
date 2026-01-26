import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolvedParams = await params;
  const project = projects.find((item) => item.slug === resolvedParams.slug);
  if (!project) {
    return {
      title: "Case Study | Abraham Akomolafe",
    };
  }
  return {
    title: `${project.name} | Abraham Akomolafe`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolvedParams = await params;
  const project = projects.find((item) => item.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyLayout project={project} />;
}
