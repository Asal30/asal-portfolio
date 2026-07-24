"use client";

import { useId, useState } from "react";
import Link from "next/link";
import {
  Accessibility,
  Box,
  Braces,
  Cable,
  Component,
  Container,
  Database,
  FlaskConical,
  Gauge,
  GitBranch,
  GitFork,
  GitPullRequest,
  Globe,
  ListChecks,
  MessagesSquare,
  MousePointer2,
  Network,
  Paintbrush,
  Palette,
  PanelsTopLeft,
  Route,
  Search,
  Send,
  Server,
  ServerCog,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { type Transition, motion, useReducedMotion } from "motion/react";
import { portfolioContent } from "@/src/data/portfolio-content";
import type {
  TechnicalCapability,
  TechnicalCapabilityGroup,
} from "@/src/types/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Accessibility,
  Box,
  Braces,
  Cable,
  Component,
  Container,
  Database,
  FlaskConical,
  Gauge,
  GitBranch,
  GitFork,
  GitPullRequest,
  Globe,
  ListChecks,
  MessagesSquare,
  MousePointer2,
  Network,
  Paintbrush,
  Palette,
  PanelsTopLeft,
  Route,
  Search,
  Send,
  Server,
  ServerCog,
  Smartphone,
  Workflow,
};

const revealTransition: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

function CapabilityIcon({ capability }: { capability: TechnicalCapability }) {
  const Icon = capability.iconName ? iconMap[capability.iconName] : undefined;

  if (!Icon) {
    return null;
  }

  return (
    <span className="flex size-10 shrink-0 items-center justify-center border border-border text-accent">
      <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
    </span>
  );
}

function CapabilityList({
  group,
  isActive,
}: {
  group: TechnicalCapabilityGroup;
  isActive: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className={`grid gap-6 border-t border-border py-8 ${
        isActive ? "lg:block" : "lg:hidden"
      }`}
      aria-labelledby={`capability-${group.title}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={revealTransition}
    >
      <div className="mb-8 grid gap-4 lg:grid-cols-[0.42fr_1fr] lg:gap-10">
        <h3 id={`capability-${group.title}`} className="text-4xl sm:text-5xl">
          {group.title}
        </h3>
        <p className="max-w-2xl">{group.outcome}</p>
      </div>

      <div className="grid gap-4">
        {group.capabilities.map((capability) => (
          <article
            className="grid gap-4 border border-border bg-surface/35 p-5 sm:grid-cols-[auto_1fr] sm:gap-5"
            key={capability.name}
          >
            <CapabilityIcon capability={capability} />
            <div className="grid gap-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="font-serif text-2xl leading-tight text-foreground">
                  {capability.name}
                </h4>
                {capability.experienceLabel ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {capability.experienceLabel}
                  </p>
                ) : null}
              </div>
              <p className="max-w-3xl text-sm">{capability.shortDescription}</p>
              {capability.relatedProjects.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {capability.relatedProjects.map((project) => (
                    <Link
                      className="border border-border px-3 py-2 text-xs font-semibold text-muted-foreground hover:border-accent hover:text-accent"
                      href={`/projects/${project.slug}`}
                      key={project.slug}
                    >
                      Evidence: {project.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export function TechnicalCapabilities() {
  const { technicalCapabilityGroups } = portfolioContent;
  const [activeTitle, setActiveTitle] = useState(
    technicalCapabilityGroups[0]?.title ?? "",
  );
  const tabPrefix = useId();
  const activeGroup =
    technicalCapabilityGroups.find((group) => group.title === activeTitle) ??
    technicalCapabilityGroups[0];

  if (!activeGroup) {
    return null;
  }

  return (
    <section
      id="capabilities"
      className="site-container section-spacing"
      aria-labelledby="capabilities-heading"
    >
      <div className="grid gap-12 lg:grid-cols-[0.36fr_1fr] lg:gap-16">
        <div className="content-stack lg:sticky lg:top-10 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Technical capabilities
          </p>
          <h2 id="capabilities-heading" className="text-5xl sm:text-6xl">
            Skills organized by what they help build.
          </h2>
          <p className="max-w-md">
            No percentages, no inflated proficiency claims. This section groups
            confirmed tools and practices around practical contribution.
          </p>
        </div>

        <div className="grid gap-8">
          <div
            className="grid gap-2 sm:grid-cols-2"
            role="tablist"
            aria-label="Capability categories"
          >
            {technicalCapabilityGroups.map((group) => {
              const isActive = group.title === activeGroup.title;
              const panelId = `${tabPrefix}-${group.title.replaceAll(" ", "-")}`;

              return (
                <button
                  className={`min-h-12 border px-4 py-3 text-left text-sm font-semibold ${
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-muted-foreground hover:border-accent hover:text-foreground"
                  }`}
                  id={`${panelId}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${panelId}-panel`}
                  key={group.title}
                  onClick={() => setActiveTitle(group.title)}
                >
                  {group.title}
                </button>
              );
            })}
          </div>

          <div className="lg:hidden">
            {technicalCapabilityGroups.map((group) => (
              <CapabilityList
                group={group}
                isActive
                key={group.title}
              />
            ))}
          </div>

          <div className="hidden lg:block">
            {technicalCapabilityGroups.map((group) => {
              const panelId = `${tabPrefix}-${group.title.replaceAll(" ", "-")}`;

              return (
                <div
                  id={`${panelId}-panel`}
                  role="tabpanel"
                  aria-labelledby={`${panelId}-tab`}
                  key={group.title}
                >
                  <CapabilityList
                    group={group}
                    isActive={group.title === activeGroup.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
