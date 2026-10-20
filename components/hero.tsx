import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroCopy, HeroVisual } from "@/components/hero-motion";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background" aria-hidden="true">
        <span className="hero-background__glow hero-background__glow--one" />
        <span className="hero-background__glow hero-background__glow--two" />
      </div>
      <div className="container hero-layout">
        <HeroCopy />
        <HeroVisual />
      </div>
      <nav className="container trust-ribbon" aria-label="Jump to coverage details">
        <span className="trust-ribbon__lead">
          <small>Coverage, at a glance</small>
          <strong>Explore your options</strong>
        </span>
        <Link className="trust-ribbon__link" href="/#coverage-liability"><span>Liability</span><ArrowRight size={16} aria-hidden="true" /></Link>
        <Link className="trust-ribbon__link" href="/#coverage-collision"><span>Collision</span><ArrowRight size={16} aria-hidden="true" /></Link>
        <Link className="trust-ribbon__link" href="/#coverage-comprehensive"><span>Comprehensive</span><ArrowRight size={16} aria-hidden="true" /></Link>
        <Link className="trust-ribbon__link" href="/#coverage-roadside-assistance"><span>Roadside assistance</span><ArrowRight size={16} aria-hidden="true" /></Link>
      </nav>
    </section>
  );
}
