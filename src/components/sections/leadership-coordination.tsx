"use client";

import { type Transition, motion, useReducedMotion } from "motion/react";
import { portfolioContent } from "@/src/data/portfolio-content";
import type {
  LeadershipResponsibility,
  LeadershipWorkflowStep,
} from "@/src/types/portfolio";

const columns = ["Backlog", "Planned", "In progress", "Review", "Completed"] as const;

const revealTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

function getResponsibilitiesForStatus(
  responsibilities: LeadershipResponsibility[],
  status: string,
) {
  return responsibilities.filter((item) => item.status === status);
}

function getStepsForStatus(steps: LeadershipWorkflowStep[], status: string) {
  return steps.filter((step) => step.status === status);
}

export function LeadershipCoordination() {
  const shouldReduceMotion = useReducedMotion();
  const { leadershipResponsibilities, leadershipWorkflow } = portfolioContent;

  return (
    <section
      id="leadership"
      className="site-container section-spacing"
      aria-labelledby="leadership-heading"
    >
      <div className="grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
        <div className="content-stack lg:sticky lg:top-10 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Leadership and team coordination
          </p>
          <h2 id="leadership-heading" className="text-5xl sm:text-6xl">
            Turning requirements into shared delivery.
          </h2>
          <p className="max-w-md">
            This workflow shows the practical coordination work behind
            implementation: clarifying stories, discussing estimates, assigning
            ownership, tracking progress and keeping communication visible.
          </p>
        </div>

        <div className="grid gap-8">
          <ol className="grid gap-4 md:hidden" aria-label="Leadership workflow">
            {leadershipWorkflow.map((step, index) => (
              <motion.li
                className="border-l border-border pl-5"
                data-leadership-step={step.title}
                key={step.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  ...revealTransition,
                  delay: shouldReduceMotion ? 0 : index * 0.05,
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")} · {step.status}
                </p>
                <h3 className="mt-2 text-3xl">{step.title}</h3>
                <p className="mt-2 text-sm">{step.description}</p>
                <ul className="mt-4 grid gap-2">
                  {step.responsibilities.map((responsibility) => (
                    <li
                      className="text-sm leading-6 text-muted-foreground"
                      key={responsibility}
                    >
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>

          <div
            className="hidden overflow-hidden border border-border bg-surface/45 md:block"
            aria-label="Delivery workflow board"
          >
            <div className="grid grid-cols-5 border-b border-border text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              {columns.map((column) => (
                <div className="border-r border-border px-4 py-4 last:border-r-0" key={column}>
                  {column}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-5">
              {columns.map((column, columnIndex) => {
                const cards = getResponsibilitiesForStatus(
                  leadershipResponsibilities,
                  column,
                );
                const steps = getStepsForStatus(leadershipWorkflow, column);

                return (
                  <div
                    className="min-h-96 border-r border-border p-4 last:border-r-0"
                    data-workflow-column={column}
                    key={column}
                  >
                    <div className="grid gap-3">
                      {steps.map((step) => (
                        <motion.div
                          className="border border-border bg-background p-4"
                          data-workflow-step={step.title}
                          key={step.title}
                          initial={
                            shouldReduceMotion ? false : { opacity: 0, y: 16 }
                          }
                          whileInView={
                            shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                          }
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : { y: -3, borderColor: "var(--accent)" }
                          }
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{
                            ...revealTransition,
                            delay: shouldReduceMotion
                              ? 0
                              : columnIndex * 0.05,
                          }}
                        >
                          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                            Process
                          </p>
                          <h3 className="mt-2 text-2xl">{step.title}</h3>
                          <p className="mt-2 text-sm leading-6">
                            {step.description}
                          </p>
                        </motion.div>
                      ))}

                      {cards.map((card, cardIndex) => (
                        <motion.article
                          className="group border border-border bg-surface-raised p-4"
                          data-story-card={card.title}
                          key={card.title}
                          initial={
                            shouldReduceMotion ? false : { opacity: 0, y: 16 }
                          }
                          whileInView={
                            shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                          }
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : { y: -3, borderColor: "var(--accent)" }
                          }
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{
                            ...revealTransition,
                            delay: shouldReduceMotion
                              ? 0
                              : columnIndex * 0.05 + cardIndex * 0.04,
                          }}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted">
                              Story
                            </p>
                            <span className="border border-border px-2 py-1 text-[0.68rem] font-semibold text-muted-foreground">
                              Estimate discussed
                            </span>
                          </div>
                          <h3 className="mt-3 text-2xl">{card.title}</h3>
                          <p className="mt-3 text-sm leading-6">
                            {card.responsibility}
                          </p>
                          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                            Status: {card.status}
                          </p>
                        </motion.article>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-3 border-y border-border py-6 sm:grid-cols-3">
            <p className="text-sm text-muted-foreground">
              Visible labels identify every workflow state.
            </p>
            <p className="text-sm text-muted-foreground">
              Responsibilities remain readable without dragging or animation.
            </p>
            <p className="text-sm text-muted-foreground">
              Data attributes prepare each step for a later scroll sequence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
