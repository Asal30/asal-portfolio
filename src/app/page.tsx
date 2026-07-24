import { SiteFooter } from "@/src/components/layout/site-footer";
import { SiteHeader } from "@/src/components/layout/site-header";
import { CinematicHero } from "@/src/components/sections/cinematic-hero";
import { ContactClosing } from "@/src/components/sections/contact-closing";
import { ExpandingIdentity } from "@/src/components/sections/expanding-identity";
import { LeadershipCoordination } from "@/src/components/sections/leadership-coordination";
import { ProfessionalJourney } from "@/src/components/sections/professional-journey";
import { SelectedProjects } from "@/src/components/sections/selected-projects";
import { TechnicalCapabilities } from "@/src/components/sections/technical-capabilities";
import { UxProductPhilosophy } from "@/src/components/sections/ux-product-philosophy";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <CinematicHero />
        <ExpandingIdentity />
        <ProfessionalJourney />
        <LeadershipCoordination />
        <SelectedProjects />
        <UxProductPhilosophy />
        <TechnicalCapabilities />
        <ContactClosing />
      </main>
      <SiteFooter />
    </>
  );
}
