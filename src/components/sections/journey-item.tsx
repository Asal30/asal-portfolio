"use client";

import Image from "next/image";
import { type Transition, motion, useReducedMotion } from "motion/react";
import type { JourneyMilestone } from "@/src/types/portfolio";

type JourneyItemProps = {
  milestone: JourneyMilestone;
  index: number;
};

const itemTransition: Transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

export function JourneyItem({ milestone, index }: JourneyItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const itemNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className="relative grid gap-6 border-t border-border py-10 md:grid-cols-[5rem_minmax(0,1fr)] md:gap-10 md:py-14"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        ...itemTransition,
        delay: shouldReduceMotion ? 0 : Math.min(index * 0.06, 0.24),
      }}
    >
      <div className="flex items-start gap-4 md:block">
        <span className="font-serif text-5xl leading-none text-accent md:text-6xl">
          {itemNumber}
        </span>
        <span className="mt-2 block h-px flex-1 bg-border md:hidden" />
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,0.42fr)] lg:gap-12">
        <div className="content-stack">
          <div className="grid gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              {milestone.period}
            </p>
            <h3 className="text-4xl tracking-normal sm:text-5xl">
              {milestone.title}
            </h3>
            <div className="grid gap-1 text-sm text-muted-foreground sm:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
              <p className="text-foreground">{milestone.role}</p>
              <p>{milestone.context}</p>
            </div>
          </div>

          <p className="max-w-3xl text-base sm:text-lg">
            {milestone.shortDescription}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Responsibilities
              </p>
              <ul className="grid gap-2">
                {milestone.keyResponsibilities.map((responsibility) => (
                  <li
                    className="border-l border-border pl-4 text-sm leading-6 text-muted-foreground"
                    key={responsibility}
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Capabilities
              </p>
              <ul className="flex flex-wrap gap-2">
                {milestone.technologies.map((technology) => (
                  <li
                    className="border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
                    key={technology}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {milestone.externalLink ? (
            <a
              className="w-fit text-sm font-semibold text-accent underline"
              href={milestone.externalLink.href}
              target="_blank"
              rel="noreferrer"
            >
              {milestone.externalLink.label}
            </a>
          ) : null}
        </div>

        {milestone.image ? (
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface lg:mt-2">
            <Image
              src={milestone.image.src}
              alt={milestone.image.alt}
              fill
              sizes="(min-width: 1024px) 24vw, (min-width: 768px) 34vw, 90vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className="hidden border-l border-border pl-6 lg:block"
            aria-hidden="true"
          >
            <p className="font-serif text-7xl leading-none text-surface-raised">
              {itemNumber}
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
}
