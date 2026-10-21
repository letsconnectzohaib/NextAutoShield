import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroCopy } from "@/components/hero-motion";
import { IMAGES } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="hero-section hero-section--reference" id="hero">
      {/* Full-Bleed background: 100% crisp car on the right, feathering strictly in the architectural stone area */}
      <div className="hero-full-bg-wrap" aria-hidden="true">
        <Image
          src={IMAGES.heroBgPng || "/hero-bg.png"}
          alt="Next Auto Shield hero background featuring candy red sedan outside modern architectural villa"
          fill
          priority
          quality={96}
          sizes="100vw"
          className="hero-full-bg-image"
          referrerPolicy="no-referrer"
        />
        {/* Soft directional scrim behind text on the left, stopping before the vehicle */}
        <div className="hero-bg-dim-scrim" />
      </div>

      <div className="hero-container-exact">
        <HeroCopy />
        {/* Right side remains completely open so the candy red car and sunlit villa shine through at 100% clarity */}
        <div className="hero-right-stage" aria-hidden="true" />
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
