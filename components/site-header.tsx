import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
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
    <>
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span>{SITE.hours}</span>
          <a href={`tel:${SITE.phoneHref}`} className="utility-bar__phone">
            <Phone size={13} strokeWidth={1.8} aria-hidden="true" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <Brand showMark={false} />
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="site-header__actions">
            <Link className="header-contact" href={ROUTES.contact}>Talk to an advisor</Link>
            <Link className="button button--small" href={ROUTES.quote}>
              Get a quote <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <MobileMenu links={links} contactHref={ROUTES.contact} quoteHref={ROUTES.quote} />
        </div>
      </header>
    </>
  );
}
