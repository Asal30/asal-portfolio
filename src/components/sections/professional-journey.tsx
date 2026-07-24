"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { JourneyItem } from "@/src/components/sections/journey-item";
import { portfolioContent } from "@/src/data/portfolio-content";
import type { JourneyMilestone } from "@/src/types/portfolio";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const contentRequired = "[CONTENT REQUIRED]";

function hasVerifiedText(value: string) {
  return value !== contentRequired;
}

function sanitizeMilestone(milestone: JourneyMilestone): JourneyMilestone {
  return {
    ...milestone,
    period: hasVerifiedText(milestone.period) ? milestone.period : "",
    keyResponsibilities:
      milestone.keyResponsibilities.filter(hasVerifiedText),
    technologies: milestone.technologies.filter(hasVerifiedText),
  };
}

export function ProfessionalJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const journeyMilestones =
    portfolioContent.journeyMilestones.map(sanitizeMilestone);

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      if (reduceMotion || !isDesktop) {
        return;
      }

      const journeyItems = gsap.utils.toArray<HTMLElement>(
        section.querySelectorAll("[data-journey-item]"),
      );
      const progressLine = section.querySelector<HTMLElement>(
        "[data-journey-progress]",
      );

      if (progressLine) {
        gsap.fromTo(
          progressLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              end: "bottom 70%",
              scrub: true,
            },
          },
        );
      }

      journeyItems.forEach((item) => {
        const number = item.querySelector<HTMLElement>("[data-journey-number]");
        const copy = item.querySelector<HTMLElement>("[data-journey-copy]");

        gsap.set(item, { opacity: 0.42 });
        gsap.set(copy, { y: 18 });
        gsap.set(number, { scale: 0.92 });

        ScrollTrigger.create({
          trigger: item,
          start: "top 72%",
          end: "bottom 42%",
          onEnter: () => {
            gsap.to(item, { opacity: 1, duration: 0.35, ease: "power2.out" });
            gsap.to(copy, { y: 0, duration: 0.45, ease: "power3.out" });
            gsap.to(number, { scale: 1, duration: 0.45, ease: "power3.out" });
          },
          onEnterBack: () => {
            gsap.to(item, { opacity: 1, duration: 0.35, ease: "power2.out" });
            gsap.to(copy, { y: 0, duration: 0.45, ease: "power3.out" });
            gsap.to(number, { scale: 1, duration: 0.45, ease: "power3.out" });
          },
          onLeave: () => {
            gsap.to(item, { opacity: 0.55, duration: 0.3, ease: "power2.out" });
            gsap.to(number, {
              scale: 0.94,
              duration: 0.3,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(item, { opacity: 0.42, duration: 0.3, ease: "power2.out" });
            gsap.to(copy, { y: 18, duration: 0.3, ease: "power2.out" });
            gsap.to(number, {
              scale: 0.92,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="site-container section-spacing"
      aria-labelledby="journey-heading"
    >
      <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-10 lg:h-fit">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Professional journey
          </p>
          <h2 id="journey-heading" className="text-5xl sm:text-6xl">
            A path through code, coordination and creative work.
          </h2>
          <p className="mt-6 max-w-sm">
            A story of moving from student and learner into software
            engineering, team coordination and entrepreneurial contribution.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-0 top-0 hidden h-full w-px bg-border md:block"
            aria-hidden="true"
          />
          <div
            className="absolute left-0 top-0 hidden h-full w-px origin-top bg-accent md:block"
            aria-hidden="true"
            data-journey-progress
          />
          <div className="md:pl-10">
            {journeyMilestones.map((milestone, index) => (
              <JourneyItem
                key={`${milestone.title}-${milestone.period}`}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
