"use client";

import { type Transition, motion, useReducedMotion } from "motion/react";

const identityStatements = [
  "I write code.",
  "I shape experiences.",
  "I coordinate people.",
  "I turn ideas into products.",
] as const;

const revealTransition: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

export function ExpandingIdentity() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="site-container section-spacing"
      aria-labelledby="identity-heading"
    >
      <div className="grid gap-10 border-y border-border py-14 sm:py-16 lg:grid-cols-[0.38fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p
            id="identity-heading"
            className="text-xs font-semibold uppercase tracking-[0.24em] text-accent"
          >
            Beyond implementation
          </p>
        </div>

        <div className="grid gap-5 sm:gap-6">
          {identityStatements.map((statement, index) => (
            <motion.p
              key={statement}
              className="font-serif text-4xl leading-[0.98] text-foreground sm:text-6xl lg:text-7xl"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                ...revealTransition,
                delay: shouldReduceMotion ? 0 : index * 0.08,
              }}
            >
              {statement}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
