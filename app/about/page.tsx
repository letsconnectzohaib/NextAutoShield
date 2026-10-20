import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ROUTES } from "@/lib/site-config";
import { pricingPrinciples } from "@/lib/site-content";
import { pageMetadata } from "@/lib/page-metadata";
import { SectionHeading } from "@/components/section-heading";
import { AdvisorPhoto } from "@/components/advisor-photo";

export const metadata: Metadata = pageMetadata(
  "About Us",
  "Learn how Next Auto Shield makes auto insurance easier to understand with practical coverage choices and licensed advisor support.",
  "/about",
);

export default function AboutPage() {
  return (
    <main id="main-content" className="inner-page">
      <section className="inner-hero">
        <div className="container inner-hero__layout">
          <div className="inner-hero__copy">
            <p className="eyebrow"><span aria-hidden="true" />A little about us</p>
            <h1>Insurance should meet you where <em>you are.</em></h1>
            <p>We built Next Auto Shield around what drivers ask for most: clear choices, practical prices, and a real person to help make sense of it all.</p>
            <Link className="button" href={ROUTES.quote}>Explore a quote <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="inner-hero__visual">
            <AdvisorPhoto alt="A customer and advisor talking through auto insurance options" className="inner-hero__image" loading="eager" />
            <div className="inner-hero__image-note"><span><Check size={15} aria-hidden="true" /></span><span><strong>Simple, human guidance</strong><small>From first question to next step</small></span></div>
          </div>
        </div>
      </section>
      <section className="section section--story">
        <div className="container story-layout">
          <div className="story-aside"><span className="story-aside__number">01</span><span className="story-aside__rule" /><span>Our approach</span></div>
          <div className="story-copy">
            <SectionHeading eyebrow="The Next Auto Shield difference" title="Good coverage starts with a good conversation." />
            <p>Auto insurance can feel like a maze of unfamiliar terms and too many choices. We focus on making the next step easier: talk through what matters, explain the trade-offs, and help you choose a direction that feels right.</p>
            <p>There’s no one-size-fits-all answer. Your location, vehicle, driving history, and the coverage you select all play a part. Our role is to make those details easier to understand—not to pressure you into a policy that doesn’t fit.</p>
          </div>
        </div>
      </section>
      <section className="section section--principles">
        <div className="container">
          <SectionHeading eyebrow="What we believe" title="Clarity is part of the coverage." description="The experience should feel thoughtful before, during, and after you choose a policy." />
          <div className="principles-grid">
            {pricingPrinciples.map(({ Icon, title, description }, index) => (
              <article className="principle-card" key={title}><span className="principle-card__index">0{index + 1}</span><span className="icon-tile"><Icon size={20} aria-hidden="true" /></span><h2>{title}</h2><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--about-cta">
        <div className="container about-cta-card"><div><p className="eyebrow eyebrow--light"><span aria-hidden="true" />The road starts here</p><h2>Let’s find a clearer way forward.</h2><p>Start with a few details or talk to an advisor about what matters to you.</p></div><div className="about-cta-card__actions"><Link href={ROUTES.quote} className="button button--light">Get a free quote <ArrowRight size={16} aria-hidden="true" /></Link><Link href={ROUTES.contact} className="text-link text-link--light">Talk to our team</Link></div></div>
      </section>
    </main>
  );
}
