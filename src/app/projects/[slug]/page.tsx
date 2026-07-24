import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { SiteHeader } from "@/src/components/layout/site-header";
import { ProjectCaseStudy } from "@/src/components/projects/project-case-study";
import { portfolioContent } from "@/src/data/portfolio-content";
import type { FeaturedProject } from "@/src/types/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const contentRequired = "[CONTENT REQUIRED]";

function hasVerifiedText(value: string | undefined) {
  return Boolean(value && value.trim() !== "" && value !== contentRequired);
}

function getProjectsWithValidSlugs() {
  return portfolioContent.featuredProjects.filter((project) =>
    hasVerifiedText(project.slug),
  );
}

function getProjectBySlug(slug: string) {
  return getProjectsWithValidSlugs().find((project) => project.slug === slug);
}

function getNextProject(project: FeaturedProject) {
  const projects = getProjectsWithValidSlugs();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);

  if (currentIndex === -1 || projects.length <= 1) {
    return null;
  }

  return projects[(currentIndex + 1) % projects.length] ?? null;
}

export function generateStaticParams() {
  return getProjectsWithValidSlugs().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = `${project.title} | Asal Samarasinghe`;
  const description = hasVerifiedText(project.positioning)
    ? project.positioning
    : project.title;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: project.coverImage
        ? [
            {
              url: project.coverImage.src,
              alt: project.coverImage.alt,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <ProjectCaseStudy
        project={project}
        nextProject={getNextProject(project)}
        showDevelopmentPlaceholders={process.env.NODE_ENV === "development"}
      />
      <SiteFooter />
    </>
  );
}
