import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Brand } from "@/components/brand";
import { ROUTES, SITE } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__brand-block">
            <Brand light />
            <p>Coverage made easier to understand, with real people ready to help you move forward.</p>
            <Link className="footer-quote-link" href={ROUTES.quote}>
              Find your coverage <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="site-footer__column">
            <h2>Explore</h2>
            <Link href="/#coverage">Coverage options</Link>
            <Link href="/#how-it-works">How it works</Link>
            <Link href="/#faq">Common questions</Link>
            <Link href={ROUTES.about}>About us</Link>
            <Link href={`${ROUTES.quote}#coverage-disclosure`}>Coverage disclosure</Link>
          </div>
          <div className="site-footer__column">
            <h2>Get in touch</h2>
            <a href={`tel:${SITE.phoneHref}`}><Phone size={15} aria-hidden="true" />{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`}><Mail size={15} aria-hidden="true" />{SITE.email}</a>
            <span><MapPin size={15} aria-hidden="true" />{SITE.addressDisplay}</span>
            <small>{SITE.hours}</small>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Next Auto Shield. All rights reserved.</span>
          <span className="site-footer__note">Coverage and availability vary by state and policy. A quote request does not bind coverage.</span>
          <Link href={ROUTES.contact}>Questions? Contact us</Link>
        </div>
      </div>
    </footer>
  );
}
