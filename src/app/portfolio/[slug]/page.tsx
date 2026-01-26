import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
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

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyLayout project={project} />;
}
