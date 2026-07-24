import { SiteFooter } from "@/src/components/layout/site-footer";
import { SiteHeader } from "@/src/components/layout/site-header";
import { CinematicHero } from "@/src/components/sections/cinematic-hero";
import { ExpandingIdentity } from "@/src/components/sections/expanding-identity";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <CinematicHero />
        <ExpandingIdentity />
      </main>
      <SiteFooter />
    </>
  );
}
