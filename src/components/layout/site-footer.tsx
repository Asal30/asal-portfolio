import { portfolioContent } from "@/src/data/portfolio-content";

const footerLinks = [
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
] as const;

const contentRequired = "[CONTENT REQUIRED]";

function isValidUrl(value: string) {
  return (
    value !== contentRequired &&
    !value.startsWith("YOUR_") &&
    (value.startsWith("https://") || value.startsWith("/"))
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { personal, socialLinks } = portfolioContent;
  const validSocialLinks = socialLinks.filter((link) => isValidUrl(link.href));

  return (
    <footer className="w-full pb-8">
      <div className="site-container grid gap-8 border-t border-border pt-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {personal.name}
          </p>
          <p className="mt-2 text-sm text-muted">
            Designed and built by {personal.name}.
          </p>
          <p className="mt-2 text-sm text-muted">© {year}</p>
        </div>

        <nav
          className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <a
              className="text-sm font-semibold text-muted-foreground hover:text-accent"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
          {validSocialLinks.map((link) => (
            <a
              className="text-sm font-semibold text-muted-foreground hover:text-accent"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
