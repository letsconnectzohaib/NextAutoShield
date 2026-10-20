import type { Metadata } from "next";
import { AdvisorSection } from "@/components/advisor-section";
import { BenefitGrid } from "@/components/benefit-grid";
import { CoverageGrid } from "@/components/coverage-grid";
import { FaqList } from "@/components/faq-list";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { QuoteCallout } from "@/components/quote-callout";
import { Testimonials } from "@/components/testimonials";
import { pageMetadata } from "@/lib/page-metadata";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata(
  "Auto Insurance Made Clear",
  "Explore flexible auto insurance, understandable coverage options, and real support from Next Auto Shield. Request a no-obligation quote.",
  "/",
);

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: SITE.name,
  url: SITE.origin,
  telephone: SITE.phoneHref,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    ...SITE.address,
  },
  openingHours: "Mo-Fr 08:00-20:00",
};

export default function HomePage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <Hero />
      <BenefitGrid />
      <CoverageGrid />
      <AdvisorSection />
      <HowItWorks />
      <Testimonials />
      <FaqList />
      <QuoteCallout />
    </main>
  );
}
