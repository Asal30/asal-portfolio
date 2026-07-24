import { navigationItems } from "@/src/data/navigation";

const siteName = "Asal Samarasinghe";

export function SiteHeader() {
  return (
    <header className="w-full py-6" aria-label="Site header">
      <div className="site-container flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm font-medium tracking-[0.08em] uppercase text-muted-foreground">
          {siteName}
        </span>
        <nav aria-label="Primary navigation">
          {navigationItems.length > 0 ? (
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="text-sm text-muted-foreground hover:text-foreground"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
