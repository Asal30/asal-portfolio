"use client";

import Image from "next/image";
import { type Transition, motion, useReducedMotion } from "motion/react";

type HeroPortrait = {
  src: string;
  alt: string;
};

const heroPortrait: HeroPortrait | null = {
  src: "/images/profile/asal-hero-portrait.webp",
  alt: "Portrait of Asal Samarasinghe",
};

const entrance = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const heroTransition: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

const portraitTransition: Transition = {
  duration: 0.9,
  delay: 0.12,
  ease: [0.22, 1, 0.36, 1],
};

export function CinematicHero() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        animate: "visible",
        variants: entrance,
        transition: heroTransition,
      };

  return (
    <section
      className="site-container grid min-h-[calc(100svh-10rem)] items-center gap-12 py-16 md:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.7fr)] md:gap-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <motion.div className="content-stack max-w-4xl" {...motionProps}>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          Asal Samarasinghe
        </p>
        <h1
          id="hero-heading"
          className="max-w-5xl text-5xl tracking-normal sm:text-6xl md:text-7xl lg:text-8xl"
        >
          I build digital experiences and lead ideas into reality.
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          Software Engineer · Product Thinker · Team Coordinator
        </p>
        <div className="flex flex-col gap-3 pt-4 sm:flex-row">
          <a
            className="inline-flex min-h-12 items-center justify-center border border-accent bg-accent px-6 text-sm font-semibold text-accent-foreground hover:bg-transparent hover:text-accent"
            href="#journey"
          >
            Explore my journey
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center border border-border px-6 text-sm font-semibold text-foreground hover:border-accent hover:text-accent"
            href="#work"
          >
            View selected work
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border border-border bg-surface md:max-w-none"
        aria-label="Hero portrait"
        {...(shouldReduceMotion
          ? {}
          : {
              initial: { opacity: 0, scale: 0.98 },
              animate: { opacity: 1, scale: 1 },
              transition: portraitTransition,
            })}
      >
        {heroPortrait ? (
          <Image
            src={heroPortrait.src}
            alt={heroPortrait.alt}
            fill
            priority
            sizes="(min-width: 1024px) 34vw, (min-width: 768px) 38vw, 86vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-end p-6">
            <p className="max-w-52 text-sm text-muted">
              Portrait image space reserved.
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
