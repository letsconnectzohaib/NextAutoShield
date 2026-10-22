import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ROUTES, SITE } from "@/lib/site-config";
import { Brand } from "@/components/brand";
import { MobileMenu } from "@/components/mobile-menu";

const links = [
  { href: "/#coverage", label: "Coverage" },
  { href: "/#how-it-works", label: "How it works" },
  { href: ROUTES.about, label: "About us" },
  { href: "/#faq", label: "FAQs" },
];

export function SiteHeader() {
  return (
    <header className="site-header-floating-wrap">
      <nav className="floating-nav-bar" aria-label="Main navigation">
        <div className="floating-nav-bar__brand">
          <Brand showMark />
        </div>

        <div className="floating-nav-bar__links">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="floating-nav-bar__actions">
          <a className="header-phone" href={`tel:${SITE.phoneHref}`}>
            <span className="header-phone__icon"><Phone size={15} aria-hidden="true" /></span>
            <span><small>Questions? Call us</small><strong>{SITE.phoneDisplay}</strong></span>
          </a>
          <Link className="button button--floating-cta" href={ROUTES.quote}>
            Get a quote <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="floating-nav-bar__mobile">
          <MobileMenu
            links={[...links, { href: ROUTES.contact, label: "Talk to an advisor" }]}
            contactHref={ROUTES.contact}
            quoteHref={ROUTES.quote}
          />
        </div>
      </nav>
    </header>
  );
}
