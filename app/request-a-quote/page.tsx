import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Phone, ShieldCheck } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { pageMetadata } from "@/lib/page-metadata";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata(
  "Request a Quote",
  "Start an auto insurance quote with Next Auto Shield. Share a few basic details and explore clear, no-obligation coverage options.",
  "/request-a-quote",
);

export default function QuotePage() {
  return (
    <main id="main-content" className="inner-page quote-page">
      <div className="container quote-page__back"><Link href="/"><ArrowLeft size={15} aria-hidden="true" /> Back to home</Link></div>
      <section className="quote-page__intro"><div className="container"><p className="eyebrow"><span aria-hidden="true" />A clearer quote starts here</p><h1>Let’s find coverage that <em>fits.</em></h1><p>Share a few basics and get ready to explore straightforward options—with guidance if you need it.</p></div></section>
      <section className="section section--quote-form">
        <div className="container quote-layout">
          <div className="form-panel quote-form-panel"><div className="form-panel__heading"><p className="eyebrow"><span aria-hidden="true" />Your information</p><h2>Start with the essentials.</h2><p>Fields marked with <b aria-hidden="true">*</b> are required. You can review your options before deciding.</p></div><QuoteForm /></div>
          <aside className="quote-sidebar">
            <div className="quote-side-card quote-side-card--highlight"><span className="quote-side-card__icon"><ShieldCheck size={22} aria-hidden="true" /></span><h2>What to expect</h2><ul>{["No obligation to buy", "Clear coverage explanations", "Help from licensed advisors"].map((item) => <li key={item}><Check size={14} aria-hidden="true" />{item}</li>)}</ul></div>
            <div className="quote-side-card"><p className="eyebrow"><span aria-hidden="true" />Prefer to talk?</p><h2>We’re one call away.</h2><p>{SITE.hours}</p><a href={`tel:${SITE.phoneHref}`} className="quote-side-phone"><Phone size={15} aria-hidden="true" />{SITE.phoneDisplay}</a></div>
            <p id="coverage-disclosure" className="quote-sidebar__disclaimer">A quote request does not create a policy or bind coverage. Coverage, terms, pricing, and availability vary by state, insurer, and individual circumstances.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
