import { JourneyItem } from "@/src/components/sections/journey-item";
import { portfolioContent } from "@/src/data/portfolio-content";

export function ProfessionalJourney() {
  const { journeyMilestones } = portfolioContent;

  return (
    <section
      id="journey"
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
