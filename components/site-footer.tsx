import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone, ShieldCheck, Clock } from "lucide-react";
import { Brand } from "@/components/brand";
import { ROUTES, SITE } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <section className="site-footer__top-banner" aria-labelledby="footer-cta-title">
          <div className="site-footer__banner-mark" aria-hidden="true"><ShieldCheck size={24} /></div>
          <div className="site-footer__banner-content">
            <span className="footer-badge">A better way to feel protected</span>
            <h2 id="footer-cta-title">Let’s make your next move a confident one.</h2>
            <p>Get clear options and support from a real person—without pressure to buy.</p>
          </div>
          <div className="site-footer__banner-actions">
            <Link href={ROUTES.quote} className="button button--light">
              Explore quote options <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href={ROUTES.contact} className="footer-advisor-link">
              Talk to an advisor <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <div className="site-footer__grid">
          <div className="site-footer__col site-footer__brand-col">
            <Brand light />
            <p className="footer-brand-desc">
              Straightforward auto coverage, explained in plain language, with licensed people ready to help you make a choice that feels right.
            </p>
            <div className="footer-trust-note"><span><ShieldCheck size={16} aria-hidden="true" /></span> Clear answers. Confident drivers.</div>
          </div>

          <div className="site-footer__col">
            <h3>Explore</h3>
            <ul className="footer-links-list">
              <li><Link href={ROUTES.home}>Home</Link></li>
              <li><Link href="/#coverage">Coverage options</Link></li>
              <li><Link href="/#how-it-works">How it works</Link></li>
              <li><Link href={ROUTES.about}>About us</Link></li>
              <li><Link href="/#faq">FAQs</Link></li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h3>Coverage</h3>
            <ul className="footer-links-list">
              <li><Link href={ROUTES.quote}>Liability protection</Link></li>
              <li><Link href={ROUTES.quote}>Collision coverage</Link></li>
              <li><Link href={ROUTES.quote}>Comprehensive care</Link></li>
              <li><Link href={ROUTES.quote}>Roadside assistance</Link></li>
              <li><Link href={ROUTES.quote}>Uninsured motorist</Link></li>
            </ul>
          </div>

          <div className="site-footer__col site-footer__contact-col">
            <h3>We’re here to help</h3>
            <a href={`tel:${SITE.phoneHref}`} className="footer-contact-link">
              <span className="footer-icon-wrap"><Phone size={16} aria-hidden="true" /></span>
              <span><small>Call an advisor</small><strong>{SITE.phoneDisplay}</strong></span>
            </a>
            <a href={`mailto:${SITE.email}`} className="footer-contact-link">
              <span className="footer-icon-wrap"><Mail size={16} aria-hidden="true" /></span>
              <span><small>Email support</small><strong>{SITE.email}</strong></span>
            </a>
            <div className="footer-contact-link footer-contact-link--static">
              <span className="footer-icon-wrap"><MapPin size={16} aria-hidden="true" /></span>
              <span><small>Office</small><strong>{SITE.addressDisplay}</strong></span>
            </div>
            <div className="footer-hours-badge"><Clock size={14} aria-hidden="true" /><span>{SITE.hours}</span></div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Next Auto Shield, Inc. All rights reserved.</span>
          <p className="site-footer__legal-notice">Coverage and availability vary by state and driving profile. Quotes are estimates and do not bind coverage until policy approval.</p>
          <div className="site-footer__legal-links">
            <Link href={ROUTES.contact}>Privacy</Link>
            <Link href={ROUTES.contact}>Terms</Link>
            <Link href={ROUTES.contact}>Licensing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
