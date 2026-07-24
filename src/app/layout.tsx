import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { portfolioContent } from "@/src/data/portfolio-content";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asal Samarasinghe | Portfolio",
  description: "The personal portfolio of Asal Samarasinghe.",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioContent.personal.name,
  email: portfolioContent.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
