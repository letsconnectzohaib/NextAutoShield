import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, UserRoundCheck } from "lucide-react";
import { ROUTES } from "@/lib/site-config";

export function HeroCopy() {
  return (
    <div className="hero-editorial-left">
      <p className="hero-editorial-eyebrow">
        <span className="hero-editorial-eyebrow__icon"><ShieldCheck size={15} aria-hidden="true" /></span>
        Auto insurance, made human
      </p>

      <h1 className="hero-editorial-title">
        Clear coverage.
        <br />
        <span className="hero-editorial-strong-accent">Confident driving.</span>
      </h1>

      <p className="hero-editorial-sub">
        Understand your options, find protection that fits, and get licensed guidance without the guesswork.
      </p>

      <div className="hero-editorial-actions">
        <Link href={ROUTES.quote} className="hero-primary-action">
          <span>Explore quote options</span>
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
        <Link href={ROUTES.contact} className="hero-secondary-action">
          Talk to an advisor
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>

      <div className="hero-editorial-trust" aria-label="What you can expect">
        <span className="hero-editorial-trust__item"><Check size={14} aria-hidden="true" /> No obligation to buy</span>
        <span className="hero-editorial-trust__item"><ShieldCheck size={14} aria-hidden="true" /> Clear coverage choices</span>
        <span className="hero-editorial-trust__item"><UserRoundCheck size={14} aria-hidden="true" /> Licensed advisor support</span>
      </div>

      <p className="hero-editorial-note">Coverage, pricing, and availability vary by state and driving profile.</p>
    </div>
  );
}
