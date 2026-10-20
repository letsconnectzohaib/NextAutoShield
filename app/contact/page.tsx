import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { pageMetadata } from "@/lib/page-metadata";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = pageMetadata(
  "Contact Us",
  "Talk with a Next Auto Shield advisor about a quote, coverage options, policy questions, or claims support.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main id="main-content" className="inner-page">
      <section className="inner-page-heading"><div className="container"><p className="eyebrow"><span aria-hidden="true" />We’re here to help</p><h1>Let’s talk about what’s next.</h1><p>Have a question about coverage or need help with a next step? A real person is ready to help make things clearer.</p></div></section>
      <section className="section section--contact">
        <div className="container contact-layout">
          <div className="contact-details">
            <SectionHeading eyebrow="Get in touch" title="A little help goes a long way." description="Reach out during business hours and we’ll help you find the right next step." />
            <div className="contact-detail-list">
              <a className="contact-detail" href={`tel:${SITE.phoneHref}`}><span className="contact-detail__icon"><Phone size={18} aria-hidden="true" /></span><span><small>Call our team</small><strong>{SITE.phoneDisplay}</strong><em>{SITE.hours}</em></span></a>
              <a className="contact-detail" href={`mailto:${SITE.email}`}><span className="contact-detail__icon"><Mail size={18} aria-hidden="true" /></span><span><small>Email us</small><strong>{SITE.email}</strong><em>We’ll point you in the right direction</em></span></a>
              <div className="contact-detail"><span className="contact-detail__icon"><MapPin size={18} aria-hidden="true" /></span><span><small>Our office</small><strong>{SITE.addressDisplay}</strong><em>Dallas, Texas</em></span></div>
            </div>
            <p className="contact-smallprint">For immediate questions about a policy or claim, use the contact information shown on your policy documents.</p>
          </div>
          <div className="form-panel"><div className="form-panel__heading"><p className="eyebrow"><span aria-hidden="true" />Send a message</p><h2>How can we help?</h2><p>Share a little context and we’ll help you find the right place to start.</p></div><ContactForm /></div>
        </div>
      </section>
    </main>
  );
}
