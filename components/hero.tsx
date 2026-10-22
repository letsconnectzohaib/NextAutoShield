import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { HeroCopy } from "@/components/hero-motion";
import { IMAGES, ROUTES } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="hero-section hero-section--immersive hero-section--split" id="hero">
      <div className="hero-container-immersive">
        <div className="hero-copy-column">
          <HeroCopy />
        </div>

        <div className="hero-artwork">
          <picture className="hero-artwork__picture">
            <source media="(max-width: 780px)" srcSet={IMAGES.heroBgMobile} />
            <img
              src={IMAGES.heroScene}
              alt="Red sedan outside a modern home"
              className="hero-artwork__image"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div className="hero-artwork__photo-tag" aria-hidden="true">PROTECTION FOR THE ROAD AHEAD</div>
          <div className="hero-artwork__caption">
            <span className="hero-artwork__caption-icon"><ShieldCheck size={18} aria-hidden="true" /></span>
            <span>
              <small>Guidance from real people</small>
              <strong>Talk it through with a licensed advisor.</strong>
            </span>
            <ArrowRight size={17} aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="hero-ribbon-wrapper">
        <nav className="container trust-ribbon" aria-label="Jump to coverage details">
          <span className="trust-ribbon__lead">
            <small>Coverage at a glance</small>
            <strong>Explore your options</strong>
          </span>
          <Link className="trust-ribbon__link" href="/#coverage-liability">
            <span>Liability protection</span><ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link className="trust-ribbon__link" href="/#coverage-collision">
            <span>Collision coverage</span><ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link className="trust-ribbon__link" href="/#coverage-comprehensive">
            <span>Comprehensive care</span><ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link className="trust-ribbon__link" href="/#coverage-roadside-assistance">
            <span>24/7 roadside assistance</span><ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </section>
  );
}
