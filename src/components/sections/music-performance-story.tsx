"use client";

import Image from "next/image";
import { type Transition, motion, useReducedMotion } from "motion/react";
import { portfolioContent } from "@/src/data/portfolio-content";

const contentRequired = "[CONTENT REQUIRED]";

const imageReveal: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

function hasContent(value: string | undefined): value is string {
  return Boolean(value && value.trim() !== "" && value !== contentRequired);
}

function isExternalUrl(value: string | undefined) {
  return hasContent(value) && value.startsWith("https://");
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-56 items-end border border-border bg-surface p-5">
      <p className="max-w-52 text-sm text-muted">
        {label} image is marked [CONTENT REQUIRED].
      </p>
    </div>
  );
}

export function MusicPerformanceStory() {
  const shouldReduceMotion = useReducedMotion();
  const { musicJourney } = portfolioContent;
  const hasMainImage =
    hasContent(musicJourney.mainImage.src) && hasContent(musicJourney.mainImage.alt);
  const secondaryImages = musicJourney.secondaryImages.slice(0, 3);
  const hasInstagramUrl = isExternalUrl(musicJourney.instagramUrl);

  return (
    <section
      id="music"
      className="site-container section-spacing"
      aria-labelledby="music-heading"
    >
      <div className="mb-10 grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Beyond engineering
          </p>
          <h2 id="music-heading" className="mt-5 text-5xl sm:text-6xl">
            Music, performance and the discipline of being present.
          </h2>
        </div>

        <div className="content-stack max-w-3xl lg:pt-10">
          <p className="text-lg text-foreground">{musicJourney.story}</p>
          <p>{musicJourney.summary}</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {musicJourney.highlights.map((highlight) => (
              <li
                className="border-l border-border pl-4 text-sm leading-6 text-muted-foreground"
                key={highlight}
              >
                {highlight}
              </li>
            ))}
          </ul>
          {hasInstagramUrl ? (
            <a
              className="inline-flex min-h-12 w-fit items-center justify-center border border-accent bg-accent px-6 text-sm font-semibold text-accent-foreground hover:bg-transparent hover:text-accent"
              href={musicJourney.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Explore the music journey.
            </a>
          ) : (
            <p className="w-fit border border-border px-4 py-3 text-sm font-semibold text-muted">
              Explore the music journey. Instagram URL is marked [CONTENT REQUIRED].
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.34fr)]">
        <motion.div
          className="relative min-h-[26rem] overflow-hidden border border-border bg-surface sm:min-h-[34rem] lg:min-h-[42rem]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={imageReveal}
        >
          {hasMainImage ? (
            <Image
              src={musicJourney.mainImage.src}
              alt={musicJourney.mainImage.alt}
              fill
              sizes="(min-width: 1024px) 62vw, 92vw"
              className="object-cover"
            />
          ) : (
            <ImagePlaceholder label="Main stage performance" />
          )}
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {secondaryImages.map((image, index) => {
            const hasImage = hasContent(image.src) && hasContent(image.alt);

            return (
              <motion.div
                className="relative min-h-56 overflow-hidden bg-surface sm:min-h-64 lg:min-h-0"
                key={`${image.src}-${index}`}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  ...imageReveal,
                  delay: shouldReduceMotion ? 0 : Math.min(index * 0.08, 0.16),
                }}
              >
                {hasImage ? (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 26vw, (min-width: 640px) 44vw, 92vw"
                    className="border border-border object-cover"
                  />
                ) : (
                  <ImagePlaceholder label={`Secondary stage ${index + 1}`} />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
