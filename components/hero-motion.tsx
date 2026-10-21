"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ShieldCheck, UserRoundCheck } from "lucide-react";
import { ROUTES, IMAGES } from "@/lib/site-config";

export function HeroCopy() {
  return (
    <div className="hero-editorial-left">
      <p className="hero-editorial-eyebrow">
        <span className="hero-editorial-eyebrow__icon"><ShieldCheck size={16} aria-hidden="true" /></span>
        Clear protection. Real support.
      </p>

      <h1 className="hero-editorial-title">
        Auto insurance,
        <br />
        made <span className="hero-editorial-italic">clear.</span>
      </h1>

      <p className="hero-editorial-sub">
        Understand your coverage choices, explore options that fit the way you drive, and get help from a licensed advisor when you need it.
      </p>

      <div className="hero-editorial-actions">
        <Link href={ROUTES.quote} className="hero-primary-action">
          <span>Explore quote options</span>
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
        <Link href="/#coverage-liability" className="hero-secondary-action">
          Explore coverage
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>

      <div className="hero-editorial-trust" aria-label="What you can expect">
        <span className="hero-editorial-trust__item"><Check size={15} aria-hidden="true" /> No obligation to buy</span>
        <span className="hero-editorial-trust__item"><ShieldCheck size={15} aria-hidden="true" /> Clear coverage explanations</span>
        <span className="hero-editorial-trust__item"><UserRoundCheck size={15} aria-hidden="true" /> Licensed advisor support</span>
      </div>

      <p className="hero-editorial-note">A quote request doesn’t create a policy. Terms, pricing, and availability vary.</p>
    </div>
  );
}

export function HeroVisual() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / rect.height) * 4,
      y: (x / rect.width) * 5,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={stageRef}
      className="hero-reference-visual-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="hero-reference-visual-inner"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Cinematic Villa & Performance Sedan Scene */}
        <div className="hero-scene-frame">
          <Image
            src={IMAGES.hero}
            alt="Candy red luxury sports sedan parked outside sun-drenched modern architectural villa"
            width={1400}
            height={1310}
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="hero-scene-car-image"
            referrerPolicy="no-referrer"
          />

          {/* Soft ambient sunflare and vignette depth */}
          <div className="hero-scene-warm-glow" aria-hidden="true" />
          <div className="hero-scene-shadow-plate" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
