import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      <div className="container">
        <nav className="floating-nav-bar" aria-label="Main navigation">
          <div className="floating-nav-bar__brand">
            <Brand showMark={true} />
          </div>

          <div className="floating-nav-bar__links">
            {links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="floating-nav-bar__action">
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
      </div>
    </header>
  );
}
