"use client";

import Image from "next/image";
import { type Transition, motion, useReducedMotion } from "motion/react";
import { portfolioContent } from "@/src/data/portfolio-content";
import type { FeaturedProject } from "@/src/types/portfolio";

const revealTransition: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

function hasAvailableUrl(url: string | undefined) {
  return Boolean(url && !url.includes("[CONTENT REQUIRED]"));
}

function getVerifiedList(values: string[]) {
  return values.filter((value) => value !== "[CONTENT REQUIRED]");
}

function ProjectImage({
  project,
  priority,
  reduceMotion,
}: {
  project: FeaturedProject;
  priority: boolean;
  reduceMotion: boolean | null;
}) {
  if (!project.coverImage) {
    return (
      <div className="flex aspect-[16/11] items-end border border-border bg-surface p-6 md:aspect-[4/5]">
        <p className="max-w-64 text-sm text-muted">
          Project image space reserved for {project.title}.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="relative aspect-[16/11] overflow-hidden border border-border bg-surface md:aspect-[4/5]"
      whileHover={reduceMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.25 }}
    >
      <Image
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 42vw, (min-width: 768px) 45vw, 92vw"
        className="object-cover"
      />
    </motion.div>
  );
}

function ProjectActions({ project }: { project: FeaturedProject }) {
  const caseStudyHref = `/projects/${project.slug}`;

  return (
    <div className="flex flex-col gap-3 pt-2 sm:flex-row">
      <a
        className="inline-flex min-h-11 items-center justify-center border border-accent bg-accent px-5 text-sm font-semibold text-accent-foreground hover:bg-transparent hover:text-accent"
        href={caseStudyHref}
      >
        View case study
      </a>
      {hasAvailableUrl(project.liveUrl) ? (
        <a
          className="inline-flex min-h-11 items-center justify-center border border-border px-5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
        >
          View live project
        </a>
      ) : null}
      {hasAvailableUrl(project.githubUrl) ? (
        <a
          className="inline-flex min-h-11 items-center justify-center border border-border px-5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          View source
        </a>
      ) : null}
    </div>
  );
}

function ProjectPreview({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const projectNumber = String(index + 1).padStart(2, "0");
  const isEven = index % 2 === 0;

  return (
    <motion.article
      className="grid gap-8 border-t border-border py-12 md:grid-cols-2 md:items-center md:gap-12 lg:py-16"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        ...revealTransition,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.08, 0.24),
      }}
    >
      <div className={isEven ? "md:order-1" : "md:order-2"}>
        <ProjectImage
          project={project}
          priority={index === 0}
          reduceMotion={shouldReduceMotion}
        />
      </div>

      <div className={`content-stack ${isEven ? "md:order-2" : "md:order-1"}`}>
        <div className="flex items-start justify-between gap-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Project {projectNumber}
          </p>
          <p className="text-right text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {project.projectType}
          </p>
        </div>

        <div className="grid gap-4">
          <h3 className="text-5xl tracking-normal sm:text-6xl">
            {project.title}
          </h3>
          <p className="max-w-2xl text-lg text-foreground">
            {project.positioning}
          </p>
        </div>

        <dl className="grid gap-5 border-y border-border py-6">
          <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Problem
            </dt>
            <dd className="text-sm leading-6 text-muted-foreground">
              {project.problem}
            </dd>
          </div>
          <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Role
            </dt>
            <dd className="text-sm leading-6 text-muted-foreground">
              {project.role}
            </dd>
          </div>
          <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Contribution
            </dt>
            <dd className="text-sm leading-6 text-muted-foreground">
              {getVerifiedList(project.responsibilities).slice(0, 3).join(" · ")}
            </dd>
          </div>
        </dl>

        <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {getVerifiedList(project.technologies).slice(0, 6).map((technology) => (
            <li
              className="border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>

        <ProjectActions project={project} />
      </div>
    </motion.article>
  );
}

export function SelectedProjects() {
  const featuredProjects = portfolioContent.featuredProjects.filter(
    (project) => project.featured,
  );

  return (
    <section
      id="work"
      className="site-container section-spacing"
      aria-labelledby="projects-heading"
    >
      <div className="mb-12 max-w-4xl content-stack">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          Selected projects
        </p>
        <h2 id="projects-heading" className="text-5xl sm:text-6xl">
          Case-study previews with technical and product context.
        </h2>
        <p className="max-w-2xl">
          A focused set of work that shows how Asal approaches implementation,
          interface decisions, ownership and delivery context.
        </p>
      </div>

      <div>
        {featuredProjects.map((project, index) => (
          <ProjectPreview
            project={project}
            index={index}
            key={project.slug}
          />
        ))}
      </div>
    </section>
  );
}
