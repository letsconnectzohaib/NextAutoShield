import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck, HeartHandshake, Clock } from "lucide-react";
import { Brand } from "@/components/brand";
import { ROUTES, SITE } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top-banner">
          <div className="site-footer__banner-content">
            <span className="footer-badge">
              <ShieldCheck size={16} aria-hidden="true" /> Licensed &amp; Trusted Protection
            </span>
            <h3>Ready to experience auto insurance built around you?</h3>
            <p>Get a transparent, customized quote in under 3 minutes or speak directly with a dedicated advisor.</p>
          </div>
          <div className="site-footer__banner-actions">
            <Link href={ROUTES.quote} className="button button--light">
              Get your free quote <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <Link href={ROUTES.contact} className="button button--outline-light">
              Talk to an advisor
            </Link>
          </div>
        </div>

        <div className="site-footer__grid">
          <div className="site-footer__col site-footer__brand-col">
            <Brand light />
            <p className="footer-brand-desc">
              Next Auto Shield delivers straightforward coverage choices, competitive rates, and honest guidance from licensed professionals who put drivers first.
            </p>
            <div className="footer-highlights">
              <div className="footer-highlight-item">
                <HeartHandshake size={16} aria-hidden="true" />
                <span>Zero hidden fees or high-pressure sales</span>
              </div>
              <div className="footer-highlight-item">
                <Clock size={16} aria-hidden="true" />
                <span>Fast, frictionless claims support 24/7</span>
              </div>
            </div>
          </div>

          <div className="site-footer__col">
            <h4>Navigation</h4>
            <ul className="footer-links-list">
              <li><Link href={ROUTES.home}>Home</Link></li>
              <li><Link href="/#coverage">Coverage Options</Link></li>
              <li><Link href="/#how-it-works">How It Works</Link></li>
              <li><Link href="/#faq">FAQs</Link></li>
              <li><Link href={ROUTES.about}>About Us</Link></li>
              <li><Link href={ROUTES.contact}>Contact Us</Link></li>
            </ul>
          </div>

          <div className="site-footer__col">
            <h4>Coverage Plans</h4>
            <ul className="footer-links-list">
              <li><Link href={ROUTES.quote}>Liability Protection</Link></li>
              <li><Link href={ROUTES.quote}>Collision Coverage</Link></li>
              <li><Link href={ROUTES.quote}>Comprehensive Care</Link></li>
              <li><Link href={ROUTES.quote}>24/7 Roadside Assistance</Link></li>
              <li><Link href={ROUTES.quote}>Uninsured Motorist</Link></li>
            </ul>
          </div>

          <div className="site-footer__col site-footer__contact-col">
            <h4>Contact &amp; Hours</h4>
            <div className="footer-contact-items">
              <a href={`tel:${SITE.phoneHref}`} className="footer-contact-link">
                <span className="footer-icon-wrap"><Phone size={16} aria-hidden="true" /></span>
                <div>
                  <small>Call our advisors</small>
                  <strong>{SITE.phoneDisplay}</strong>
                </div>
              </a>
              <a href={`mailto:${SITE.email}`} className="footer-contact-link">
                <span className="footer-icon-wrap"><Mail size={16} aria-hidden="true" /></span>
                <div>
                  <small>Email support</small>
                  <strong>{SITE.email}</strong>
                </div>
              </a>
              <div className="footer-contact-link footer-contact-link--static">
                <span className="footer-icon-wrap"><MapPin size={16} aria-hidden="true" /></span>
                <div>
                  <small>Office headquarters</small>
                  <strong>{SITE.addressDisplay}</strong>
                </div>
              </div>
            </div>
            <div className="footer-hours-badge">
              <Clock size={14} aria-hidden="true" />
              <span>{SITE.hours}</span>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__copyright">
            © {new Date().getFullYear()} Next Auto Shield, Inc. All rights reserved.
          </div>
          <div className="site-footer__legal-notice">
            Coverage and availability vary by state and driving profile. Quotes are estimates and do not bind coverage until policy approval.
          </div>
          <div className="site-footer__legal-links">
            <Link href={ROUTES.contact}>Privacy Policy</Link>
            <Link href={ROUTES.contact}>Terms of Service</Link>
            <Link href={ROUTES.contact}>Licensing Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
