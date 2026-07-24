import Image from "next/image";
import { notFound } from "next/navigation";
import { portfolioContent } from "@/src/data/portfolio-content";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioContent.featuredProjects
    .filter((project) => project.featured)
    .map((project) => ({
      slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolioContent.featuredProjects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Asal Samarasinghe`,
    description: project.positioning,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolioContent.featuredProjects.find(
    (item) => item.slug === slug && item.featured,
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="site-container section-spacing">
      <article className="grid gap-10">
        <header className="max-w-4xl content-stack">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {project.projectType}
          </p>
          <h1 className="text-5xl sm:text-7xl">{project.title}</h1>
          <p className="max-w-3xl text-lg">{project.positioning}</p>
        </header>

        {project.coverImage ? (
          <div className="relative aspect-[16/9] overflow-hidden border border-border bg-surface">
            <Image
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 72rem, 92vw"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="grid gap-8 border-y border-border py-10 md:grid-cols-2">
          <section className="content-stack" aria-labelledby="problem-heading">
            <h2 id="problem-heading" className="text-4xl">
              Problem and context
            </h2>
            <p>{project.problem}</p>
            <p>{project.context}</p>
          </section>

          <section className="content-stack" aria-labelledby="role-heading">
            <h2 id="role-heading" className="text-4xl">
              Role and contribution
            </h2>
            <p>{project.role}</p>
            <ul className="grid gap-2">
              {project.responsibilities.map((responsibility) => (
                <li
                  className="border-l border-border pl-4 text-sm leading-6 text-muted-foreground"
                  key={responsibility}
                >
                  {responsibility}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
