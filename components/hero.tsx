import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroCopy } from "@/components/hero-motion";

export function Hero() {
  return (
    <section className="hero-section hero-section--immersive hero-section--type-led" id="hero">
      <div className="hero-container-immersive hero-type-layout">
        <div className="hero-copy-column">
          <HeroCopy />
        </div>

        <div className="hero-type-board" aria-hidden="true">
          <div className="hero-type-board__topline">
            <span>THE NEXT AUTO SHIELD APPROACH</span>
            <span>01 — 03</span>
          </div>
          <div className="hero-type-board__stack">
            <span>Understand.</span>
            <span>Choose.</span>
            <span>Drive.</span>
          </div>
          <div className="hero-type-board__footer">
            <span>CLARITY FIRST</span>
            <i />
            <span>CONFIDENCE FOLLOWS</span>
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
