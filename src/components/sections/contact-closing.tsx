"use client";

import { type Transition, motion, useReducedMotion } from "motion/react";
import { portfolioContent } from "@/src/data/portfolio-content";

const contentRequired = "[CONTENT REQUIRED]";

const revealTransition: Transition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

function hasValue(value: string | undefined): value is string {
  return Boolean(
    value &&
      value.trim() !== "" &&
      value !== contentRequired &&
      !value.startsWith("YOUR_"),
  );
}

function isValidUrl(value: string | undefined) {
  if (!hasValue(value)) {
    return false;
  }

  return value.startsWith("https://") || value.startsWith("/");
}

function isValidEmail(value: string | undefined) {
  return hasValue(value) && value.includes("@");
}

export function ContactClosing() {
  const shouldReduceMotion = useReducedMotion();
  const { contact, personal, socialLinks } = portfolioContent;
  const emailHref = isValidEmail(contact.email)
    ? `mailto:${contact.email}`
    : undefined;
  const validSocialLinks = socialLinks.filter((link) => isValidUrl(link.href));
  const hasResume = isValidUrl(contact.resumePath);

  return (
    <section
      id="contact"
      className="site-container section-spacing"
      aria-labelledby="contact-heading"
    >
      <motion.div
        className="grid gap-10 border-y border-border py-16 sm:py-20 lg:grid-cols-[1fr_0.36fr] lg:gap-16"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={revealTransition}
      >
        <div className="max-w-5xl content-stack">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Contact
          </p>
          <h2 id="contact-heading" className="text-5xl sm:text-7xl lg:text-8xl">
            {contact.closingMessage}
          </h2>
          {hasValue(contact.availability) ? (
            <p className="max-w-2xl text-lg">{contact.availability}</p>
          ) : null}
        </div>

        <div className="flex flex-col justify-end gap-6">
          {emailHref ? (
            <a
              className="inline-flex min-h-12 items-center justify-center border border-accent bg-accent px-6 text-sm font-semibold text-accent-foreground hover:bg-transparent hover:text-accent"
              href={emailHref}
            >
              Send an email
            </a>
          ) : null}

          <div className="grid gap-3">
            {validSocialLinks.map((link) => (
              <a
                className="inline-flex min-h-11 items-center justify-between border border-border px-4 text-sm font-semibold text-muted-foreground hover:border-accent hover:text-accent"
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noreferrer"
              >
                <span>{link.label}</span>
                <span aria-hidden="true">Open</span>
              </a>
            ))}
            {hasResume ? (
              <a
                className="inline-flex min-h-11 items-center justify-between border border-border px-4 text-sm font-semibold text-muted-foreground hover:border-accent hover:text-accent"
                href={contact.resumePath}
                download
              >
                <span>Download resume</span>
                <span aria-hidden="true">PDF</span>
              </a>
            ) : null}
          </div>

          <p className="text-sm text-muted">
            Designed and built by {personal.name}.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
