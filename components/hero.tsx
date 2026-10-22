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

        <div className="hero-orbit-art" aria-hidden="true">
          <div className="hero-orbit-art__caption"><span>THE NEXT AUTO SHIELD APPROACH</span><span>01 — 03</span></div>
          <svg className="hero-orbit-art__path" viewBox="0 0 560 470" fill="none" focusable="false">
            <path d="M62 364C99 320 131 342 158 300C192 248 204 176 275 168C345 160 364 235 424 216C474 201 481 148 510 114" />
            <circle cx="62" cy="364" r="6" />
            <circle cx="275" cy="168" r="7" />
            <circle cx="510" cy="114" r="6" />
          </svg>
          <span className="hero-orbit-art__ghost" aria-hidden="true">01</span>
          <div className="hero-orbit-art__word hero-orbit-art__word--understand"><small>01</small>Understand<span>.</span></div>
          <div className="hero-orbit-art__word hero-orbit-art__word--choose"><small>02</small>Choose<span>.</span></div>
          <div className="hero-orbit-art__word hero-orbit-art__word--drive"><small>03</small>Drive<span>.</span></div>
          <div className="hero-orbit-art__note hero-orbit-art__note--one"><i />Clear choices</div>
          <div className="hero-orbit-art__note hero-orbit-art__note--two"><i />Real guidance</div>
          <div className="hero-orbit-art__note hero-orbit-art__note--three"><i />Your pace</div>
          <div className="hero-orbit-art__signature"><span>CLARITY FIRST</span><i /><span>CONFIDENCE FOLLOWS</span></div>
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
