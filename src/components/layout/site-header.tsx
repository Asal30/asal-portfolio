import { navigationItems } from "@/src/data/navigation";

const siteName = "Asal Samarasinghe";

export function SiteHeader() {
  return (
    <header className="w-full px-6 py-6" aria-label="Site header">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
        <span className="text-sm font-medium tracking-wide">{siteName}</span>
        <nav aria-label="Primary navigation">
          {navigationItems.length > 0 ? (
            <ul className="flex items-center gap-6">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="text-sm text-foreground/70 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
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
