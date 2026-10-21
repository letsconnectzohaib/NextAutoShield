import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroCopy } from "@/components/hero-motion";
import { IMAGES } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="hero-section hero-section--immersive" id="hero">
      {/* Full-bleed scene with the copy layered directly over the left side. */}
      <div className="hero-full-bg-wrap" aria-hidden="true">
        <picture className="hero-background-picture">
          <source media="(max-width: 780px)" srcSet={IMAGES.heroBgMobile} />
          <img
            src={IMAGES.heroBg}
            alt=""
            className="hero-full-bg-image"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        {/* Seamless dark gradient keeps the overlaid copy legible without making a separate panel. */}
        <div className="hero-bg-dim-scrim" />
      </div>

      <div className="hero-container-immersive">
        <HeroCopy />
      </div>

      {/* Coverage Navigation Ribbon with crisp opaque background */}
      <div className="hero-ribbon-wrapper">
        <nav className="container trust-ribbon" aria-label="Jump to coverage details">
          <span className="trust-ribbon__lead">
            <small>Coverage at a glance</small>
            <strong>Explore your options</strong>
          </span>
          <Link className="trust-ribbon__link" href="/#coverage-liability">
            <span>Liability Protection</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link className="trust-ribbon__link" href="/#coverage-collision">
            <span>Collision Coverage</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link className="trust-ribbon__link" href="/#coverage-comprehensive">
            <span>Comprehensive Care</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link className="trust-ribbon__link" href="/#coverage-roadside-assistance">
            <span>24/7 Roadside Assistance</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </section>
  );
}
