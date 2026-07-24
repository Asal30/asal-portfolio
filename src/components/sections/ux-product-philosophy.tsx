"use client";

import { useState } from "react";
import Link from "next/link";
import { type Transition, motion, useReducedMotion } from "motion/react";
import { portfolioContent } from "@/src/data/portfolio-content";
import type { UxPrinciple } from "@/src/types/portfolio";

const contentRequired = "[CONTENT REQUIRED]";

const revealTransition: Transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

function hasVerifiedText(value: string | undefined) {
  return Boolean(value && value !== contentRequired);
}

function PrincipleItem({
  principle,
  index,
}: {
  principle: UxPrinciple;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const principleNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className="grid gap-5 border-t border-border py-8 md:grid-cols-[5rem_1fr] md:gap-8"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        ...revealTransition,
        delay: shouldReduceMotion ? 0 : index * 0.08,
      }}
    >
      <p className="font-serif text-5xl leading-none text-accent">
        {principleNumber}
      </p>
      <div className="content-stack">
        <h3 className="text-4xl sm:text-5xl">{principle.title}</h3>
        <p className="max-w-2xl">{principle.shortExplanation}</p>
        {hasVerifiedText(principle.practicalExample) ? (
          <p className="max-w-2xl border-l border-border pl-4 text-sm">
            {principle.practicalExample}
          </p>
        ) : (
          <p className="max-w-2xl border-l border-border pl-4 text-sm text-muted">
            Practical example needed from Asal.
          </p>
        )}
        {principle.projectReference ? (
          <Link
            className="w-fit text-sm font-semibold text-accent underline"
            href={`/projects/${principle.projectReference.slug}`}
          >
            Related project: {principle.projectReference.label}
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}

function InterfaceDemonstration() {
  const [state, setState] = useState<"before" | "after">("after");
  const shouldReduceMotion = useReducedMotion();
  const activeItems =
    state === "before"
      ? ["Unclear dashboard", "Data", "Go", "Notes mixed into action area"]
      : ["Project health overview", "Recent delivery signals", "Review next task", "Notes separated from primary action"];

  return (
    <div className="border border-border bg-surface/55 p-5 sm:p-6">
      <div className="flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Design demonstration
          </p>
          <p className="mt-2 text-sm text-muted">
            Fictional before-and-after interface example.
          </p>
        </div>
        <div className="grid grid-cols-2 border border-border" role="group" aria-label="Interface demonstration state">
          <button
            className={`min-h-11 px-4 text-sm font-semibold ${
              state === "before"
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            type="button"
            aria-pressed={state === "before"}
            onClick={() => setState("before")}
          >
            Working
          </button>
          <button
            className={`min-h-11 border-l border-border px-4 text-sm font-semibold ${
              state === "after"
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            type="button"
            aria-pressed={state === "after"}
            onClick={() => setState("after")}
          >
            Thoughtful
          </button>
        </div>
      </div>

      <motion.div
        className="mt-6 grid gap-4"
        key={state}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="border border-border bg-background p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {state === "before" ? "Technically working" : "Thoughtfully designed"}
          </p>
          <h3 className="mt-3 text-3xl">{activeItems[0]}</h3>
          <p className="mt-3 text-sm">{activeItems[1]}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="grid gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted" htmlFor="demo-note">
                Coordination note
              </label>
              <input
                className="min-h-11 border border-border bg-surface px-3 text-sm text-foreground"
                id="demo-note"
                readOnly
                value={activeItems[3]}
              />
            </div>
            <button
              className="min-h-11 border border-accent bg-accent px-5 text-sm font-semibold text-accent-foreground"
              type="button"
            >
              {activeItems[2]}
            </button>
          </div>
        </div>

        <ul className="grid gap-2 sm:grid-cols-2">
          {(state === "before"
            ? ["Poor hierarchy", "Confusing labels", "Crowded layout", "Weak action emphasis"]
            : ["Clear hierarchy", "Better labels", "Improved spacing", "Clear primary action"]
          ).map((item) => (
            <li className="border-l border-border pl-4 text-sm text-muted-foreground" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export function UxProductPhilosophy() {
  const { uxPrinciples } = portfolioContent;

  return (
    <section
      id="philosophy"
      className="site-container section-spacing"
      aria-labelledby="ux-heading"
    >
      <div className="grid gap-12 lg:grid-cols-[0.48fr_0.52fr] lg:gap-16">
        <div className="content-stack lg:sticky lg:top-10 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            UX and product philosophy
          </p>
          <h2 id="ux-heading" className="text-5xl sm:text-6xl lg:text-7xl">
            Good software is not only correct. It should feel clear,
            intentional and human.
          </h2>
          <p className="max-w-md">
            The same engineering decision can either make a product easier to
            understand or harder to trust. This section frames how Asal thinks
            about clarity, motion and technology choices.
          </p>
        </div>

        <div className="grid gap-10">
          <div>
            {uxPrinciples.map((principle, index) => (
              <PrincipleItem
                index={index}
                key={principle.title}
                principle={principle}
              />
            ))}
          </div>
          <InterfaceDemonstration />
        </div>
      </div>
    </section>
  );
}
