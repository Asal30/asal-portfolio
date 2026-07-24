"use client";

import Image from "next/image";
import Link from "next/link";
import { type Transition, motion, useReducedMotion } from "motion/react";
import type { FeaturedProject } from "@/src/types/portfolio";

type ProjectCaseStudyProps = {
  project: FeaturedProject;
  nextProject: FeaturedProject | null;
  showDevelopmentPlaceholders: boolean;
};

type ArticleSectionProps = {
  title: string;
  children: React.ReactNode;
  showPlaceholder: boolean;
};

const contentRequired = "[CONTENT REQUIRED]";

const pageTransition: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

function hasVerifiedText(value: string | undefined) {
  return Boolean(value && value.trim() !== "" && value !== contentRequired);
}

function getVerifiedList(values: string[]) {
  return values.filter((value) => hasVerifiedText(value));
}

function ArticleSection({
  title,
  children,
  showPlaceholder,
}: ArticleSectionProps) {
  if (showPlaceholder) {
    return (
      <section className="border-l border-border pl-5">
        <h2 className="text-4xl">{title}</h2>
        <p className="mt-4 text-sm text-muted">
          Development placeholder: verified case-study content is still needed.
        </p>
      </section>
    );
  }

  return (
    <section className="content-stack border-l border-border pl-5">
      <h2 className="text-4xl">{title}</h2>
      {children}
    </section>
  );
}

function TextSection({
  title,
  value,
  showDevelopmentPlaceholders,
}: {
  title: string;
  value: string;
  showDevelopmentPlaceholders: boolean;
}) {
  const hasContent = hasVerifiedText(value);

  if (!hasContent && !showDevelopmentPlaceholders) {
    return null;
  }

  return (
    <ArticleSection
      title={title}
      showPlaceholder={!hasContent && showDevelopmentPlaceholders}
    >
      <p>{value}</p>
    </ArticleSection>
  );
}

function ListSection({
  title,
  values,
  showDevelopmentPlaceholders,
}: {
  title: string;
  values: string[];
  showDevelopmentPlaceholders: boolean;
}) {
  const verifiedValues = getVerifiedList(values);

  if (verifiedValues.length === 0 && !showDevelopmentPlaceholders) {
    return null;
  }

  return (
    <ArticleSection
      title={title}
      showPlaceholder={
        verifiedValues.length === 0 && showDevelopmentPlaceholders
      }
    >
      <ul className="grid gap-3">
        {verifiedValues.map((value) => (
          <li
            className="border-l border-border pl-4 text-sm leading-6 text-muted-foreground"
            key={value}
          >
            {value}
          </li>
        ))}
      </ul>
    </ArticleSection>
  );
}

function ProjectLinks({ project }: { project: FeaturedProject }) {
  const links = [
    { label: "View live project", href: project.liveUrl },
    { label: "View source", href: project.githubUrl },
  ].filter((link): link is { label: string; href: string } =>
    hasVerifiedText(link.href),
  );

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {links.map((link) => (
        <a
          className="inline-flex min-h-11 items-center justify-center border border-border px-5 text-sm font-semibold hover:border-accent hover:text-accent"
          href={link.href}
          key={link.href}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export function ProjectCaseStudy({
  project,
  nextProject,
  showDevelopmentPlaceholders,
}: ProjectCaseStudyProps) {
  const shouldReduceMotion = useReducedMotion();
  const verifiedTechnologies = getVerifiedList(project.technologies);

  return (
    <motion.article
      className="site-container section-spacing"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={pageTransition}
    >
      <header className="grid gap-8 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
        <div className="max-w-5xl content-stack">
          <Link
            className="w-fit text-sm font-semibold text-accent underline"
            href="/#work"
          >
            Back to all projects
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {project.projectType}
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl">
            {project.title}
          </h1>
          {hasVerifiedText(project.positioning) ? (
            <p className="max-w-3xl text-lg text-foreground">
              {project.positioning}
            </p>
          ) : null}
        </div>

        <dl className="grid gap-4 border-y border-border py-6">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Type
            </dt>
            <dd className="mt-1 text-sm text-muted-foreground">
              {project.projectType}
            </dd>
          </div>
          {hasVerifiedText(project.timeframe) ? (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Timeframe
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                {project.timeframe}
              </dd>
            </div>
          ) : null}
          {hasVerifiedText(project.role) ? (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Role
              </dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                {project.role}
              </dd>
            </div>
          ) : null}
        </dl>
      </header>

      {project.coverImage ? (
        <motion.div
          className="relative mt-12 aspect-[16/10] overflow-hidden border border-border bg-surface"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ ...pageTransition, delay: 0.12 }}
        >
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 72rem, 92vw"
            className="object-cover"
          />
        </motion.div>
      ) : null}

      <div className="mt-16 grid gap-12 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-10 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Case study
          </p>
          <p className="mt-5 max-w-sm">
            A reusable article structure for project problem, decisions,
            implementation, outcomes and learning.
          </p>
          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </aside>

        <div className="grid gap-12">
          <TextSection
            title="Problem or challenge"
            value={project.problem}
            showDevelopmentPlaceholders={showDevelopmentPlaceholders}
          />
          <TextSection
            title="Context"
            value={project.context}
            showDevelopmentPlaceholders={showDevelopmentPlaceholders}
          />
          <ListSection
            title="Constraints"
            values={project.constraints}
            showDevelopmentPlaceholders={showDevelopmentPlaceholders}
          />
          <TextSection
            title="Asal's role"
            value={project.role}
            showDevelopmentPlaceholders={showDevelopmentPlaceholders}
          />
          <ListSection
            title="Responsibilities"
            values={project.responsibilities}
            showDevelopmentPlaceholders={showDevelopmentPlaceholders}
          />
          <ListSection
            title="Technical approach"
            values={project.technicalDecisions}
            showDevelopmentPlaceholders={showDevelopmentPlaceholders}
          />
          <ListSection
            title="UX or product decisions"
            values={project.productDecisions}
            showDevelopmentPlaceholders={showDevelopmentPlaceholders}
          />
          <ListSection
            title="Key implementation details"
            values={project.implementationDetails}
            showDevelopmentPlaceholders={showDevelopmentPlaceholders}
          />
          <TextSection
            title="Outcome"
            value={project.outcome}
            showDevelopmentPlaceholders={showDevelopmentPlaceholders}
          />
          <ListSection
            title="Challenges"
            values={project.challenges}
            showDevelopmentPlaceholders={showDevelopmentPlaceholders}
          />
          <TextSection
            title="Lessons learned"
            value={project.lessonsLearned}
            showDevelopmentPlaceholders={showDevelopmentPlaceholders}
          />

          {verifiedTechnologies.length > 0 ? (
            <section className="content-stack border-y border-border py-8">
              <h2 className="text-4xl">Technology stack</h2>
              <ul className="flex flex-wrap gap-2">
                {verifiedTechnologies.map((technology) => (
                  <li
                    className="border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.galleryImages.length > 0 ? (
            <section className="content-stack">
              <h2 className="text-4xl">Supporting image gallery</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.galleryImages.map((image) => (
                  <div
                    className="relative aspect-[4/3] overflow-hidden border border-border bg-surface"
                    key={image.src}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 34rem, 92vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>

      <nav
        className="mt-20 grid gap-4 border-t border-border pt-8 sm:grid-cols-2"
        aria-label="Project navigation"
      >
        <Link
          className="inline-flex min-h-12 items-center justify-center border border-border px-5 text-sm font-semibold hover:border-accent hover:text-accent"
          href="/#work"
        >
          Back to all projects
        </Link>
        {nextProject ? (
          <Link
            className="inline-flex min-h-12 items-center justify-center border border-accent bg-accent px-5 text-sm font-semibold text-accent-foreground hover:bg-transparent hover:text-accent"
            href={`/projects/${nextProject.slug}`}
          >
            Next project: {nextProject.title}
          </Link>
        ) : null}
      </nav>
    </motion.article>
  );
}
