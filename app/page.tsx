import { SiteFooter } from "@/src/components/layout/site-footer";
import { SiteHeader } from "@/src/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Asal Samarasinghe
        </h1>
        <p className="mt-4 text-lg text-foreground/70">
          Portfolio experience in progress.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
