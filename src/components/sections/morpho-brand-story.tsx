"use client";

import Image from "next/image";
import { type Transition, motion, useReducedMotion } from "motion/react";
import { portfolioContent } from "@/src/data/portfolio-content";

const contentRequired = "[CONTENT REQUIRED]";

const revealTransition: Transition = {
  duration: 0.65,
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
    <div className="flex h-full min-h-64 items-end border border-border bg-surface p-5">
      <p className="max-w-56 text-sm text-muted">
        {label} is marked [CONTENT REQUIRED].
      </p>
    </div>
  );
}

export function MorphoBrandStory() {
  const shouldReduceMotion = useReducedMotion();
  const { morphoBrand } = portfolioContent;
  const hasMainImage =
    hasContent(morphoBrand.mainImage.src) && hasContent(morphoBrand.mainImage.alt);
  const hasInstagramUrl = isExternalUrl(morphoBrand.instagramUrl);

  return (
    <section
      id="morpho"
      className="site-container section-spacing"
      aria-labelledby="morpho-heading"
    >
      <div className="grid gap-12 border-t border-border pt-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
        <motion.div
          className="grid gap-4 lg:sticky lg:top-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={revealTransition}
        >
          <div className="relative min-h-[34rem] overflow-hidden border border-border bg-surface sm:min-h-[42rem]">
            {hasMainImage ? (
              <motion.div
                className="absolute inset-0"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
                transition={{ duration: 0.35 }}
              >
                <Image
                  src={morphoBrand.mainImage.src}
                  alt={morphoBrand.mainImage.alt}
                  fill
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="object-cover"
                />
              </motion.div>
            ) : (
              <ImagePlaceholder label="Main Morpho image" />
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {morphoBrand.secondaryImages.slice(0, 3).map((image, index) => {
              const hasImage = hasContent(image.src) && hasContent(image.alt);

              return (
                <motion.figure
                  className="grid gap-3"
                  key={`${image.caption}-${index}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    ...revealTransition,
                    delay: shouldReduceMotion ? 0 : Math.min(index * 0.08, 0.16),
                  }}
                >
                  <div className="relative min-h-64 overflow-hidden bg-surface">
                    {hasImage ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 44vw, 92vw"
                        className="border border-border object-cover"
                      />
                    ) : (
                      <ImagePlaceholder label={image.caption} />
                    )}
                  </div>
                  <figcaption className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {image.caption}
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        </motion.div>

        <div className="content-stack lg:pt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            {morphoBrand.category}
          </p>
          <div>
            <h2 id="morpho-heading" className="text-6xl sm:text-7xl lg:text-8xl">
              {morphoBrand.name}
            </h2>
            <p className="mt-4 font-serif text-3xl leading-tight text-accent sm:text-4xl">
              {morphoBrand.slogan}
            </p>
          </div>
          <p className="max-w-3xl text-lg text-foreground">{morphoBrand.story}</p>
          <p className="max-w-3xl">{morphoBrand.summary}</p>

          <div className="grid gap-x-8 gap-y-6 border-y border-border py-8 sm:grid-cols-2">
            {morphoBrand.ownershipAreas.map((area) => (
              <article className="grid gap-2" key={area.title}>
                <h3 className="font-serif text-2xl leading-tight text-foreground">
                  {area.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {area.description}
                </p>
              </article>
            ))}
          </div>

          {hasInstagramUrl ? (
            <a
              className="inline-flex min-h-12 w-fit items-center justify-center border border-accent bg-accent px-6 text-sm font-semibold text-accent-foreground hover:bg-transparent hover:text-accent"
              href={morphoBrand.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit Morpho.
            </a>
          ) : (
            <p className="w-fit border border-border px-4 py-3 text-sm font-semibold text-muted">
              Visit Morpho. Instagram URL is marked [CONTENT REQUIRED].
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
