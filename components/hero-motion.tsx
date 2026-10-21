"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Car, Shield, Sparkles } from "lucide-react";
import { ROUTES, IMAGES } from "@/lib/site-config";

// Vehicles matching reference image
const VEHICLES = [
  { id: "sedan", label: "Sedan / Hatch", baseRate: 52 },
  { id: "suv", label: "SUV / Crossover", baseRate: 64 },
  { id: "ev", label: "EV / Hybrid", baseRate: 68 },
];

// Protection tiers matching reference image
// Notice: Sedan (52) + Collision Plus (1.5x) = $78 exactly matches the $78 in reference screenshot!
const TIERS = [
  { id: "core", label: "Core Liability", multiplier: 1.0 },
  { id: "collision", label: "Collision Plus", multiplier: 1.5 },
  { id: "shield", label: "360° Shield Max", multiplier: 1.85 },
];

export function HeroCopy() {
  const [selectedVehicle, setSelectedVehicle] = useState("sedan");
  const [selectedTier, setSelectedTier] = useState("collision");

  const currentVehicle = VEHICLES.find((v) => v.id === selectedVehicle) || VEHICLES[0];
  const currentTier = TIERS.find((t) => t.id === selectedTier) || TIERS[1];
  const calculatedMonthly = Math.round(currentVehicle.baseRate * currentTier.multiplier);

  return (
    <div className="hero-editorial-left">
      <h1 className="hero-editorial-title">
        Auto insurance,
        <br />
        made <span className="hero-editorial-italic">clear.</span>
      </h1>

      <p className="hero-editorial-sub">
        Straightforward cover. Claims handled fast.
        <br />
        Real people when you need us.
      </p>

      {/* Interactive Rate Estimator Card Matching Reference */}
      <div className="hero-reference-card">
        {/* Vehicle Selection Row */}
        <div className="ref-card-row">
          <label className="ref-card-label" id="vehicle-label">
            Vehicle
          </label>
          <div
            className="ref-pills-group"
            role="radiogroup"
            aria-labelledby="vehicle-label"
          >
            {VEHICLES.map((vehicle) => {
              const isActive = selectedVehicle === vehicle.id;
              return (
                <button
                  key={vehicle.id}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                  className={`ref-pill-btn ${isActive ? "ref-pill-btn--active" : ""}`}
                >
                  <Car size={15} aria-hidden="true" />
                  <span>{vehicle.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Protection Tier Row */}
        <div className="ref-card-row">
          <label className="ref-card-label" id="protection-label">
            Protection
          </label>
          <div
            className="ref-pills-group"
            role="radiogroup"
            aria-labelledby="protection-label"
          >
            {TIERS.map((tier) => {
              const isActive = selectedTier === tier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`ref-pill-btn ${isActive ? "ref-pill-btn--active" : ""}`}
                >
                  <span>{tier.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing & CTA Action Row */}
        <div className="ref-card-footer">
          <div className="ref-price-block">
            <span className="ref-price-amount">${calculatedMonthly}</span>
            <span className="ref-price-unit">/ month</span>
          </div>

          <Link
            href={`${ROUTES.quote}?vehicle=${selectedVehicle}&tier=${selectedTier}`}
            className="ref-quote-btn"
          >
            <span>Get my quote</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Driver Rating Under Card */}
      <div className="hero-reference-rating">
        <div className="rating-stars" aria-label="5 out of 5 stars">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <span className="rating-text">4.9/5 Rating</span>
      </div>
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
