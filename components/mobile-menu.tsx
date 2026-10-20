"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";

type MobileNavLink = { href: string; label: string };

type MobileMenuProps = {
  links: MobileNavLink[];
  contactHref: string;
  quoteHref: string;
};

function closeMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
}

export function MobileMenu({ links, contactHref, quoteHref }: MobileMenuProps) {
  return (
    <details className="mobile-menu">
      <summary aria-label="Navigation menu">
        <span />
        <span />
        <span className="visually-hidden">Menu</span>
      </summary>
      <nav className="mobile-menu__panel" aria-label="Mobile navigation">
        {links.map((link) => (
          <Link key={link.label} href={link.href} onClick={closeMenu}>{link.label}</Link>
        ))}
        <Link href={contactHref} onClick={closeMenu}>Talk to an advisor</Link>
        <Link className="button" href={quoteHref} onClick={closeMenu}>
          Get a quote <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </nav>
    </details>
  );
}
