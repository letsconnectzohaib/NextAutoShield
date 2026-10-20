"use client";

import { useLayoutEffect } from "react";
import Link from "next/link";
import {
  motion,
  useAnimationControls,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { IMAGES, ROUTES } from "@/lib/site-config";
import { HeroMedia } from "@/components/hero-media";

const calmEase = [0.22, 1, 0.36, 1] as const;

const heroSequence: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.1,
    },
  },
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: calmEase },
  },
};

const assuranceSequence: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.44,
      ease: calmEase,
      delayChildren: 0.08,
      staggerChildren: 0.07,
    },
  },
};

const assuranceItem: Variants = {
  hidden: { opacity: 0, y: 7 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: calmEase },
  },
};

const visualReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.84, ease: calmEase },
  },
};

function useHeroEntrance(delayMs = 0) {
  const controls = useAnimationControls();
  const prefersReducedMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (prefersReducedMotion) {
      controls.set("visible");
      return;
    }

    controls.set("hidden");
    const timeout = window.setTimeout(() => {
      void controls.start("visible");
    }, delayMs);

    return () => {
      window.clearTimeout(timeout);
      controls.stop();
    };
  }, [controls, delayMs, prefersReducedMotion]);

  return controls;
}

export function HeroCopy() {
  const controls = useHeroEntrance();

  return (
    <motion.div
      className="hero-copy"
      variants={heroSequence}
      initial={false}
      animate={controls}
    >
      <motion.p className="eyebrow eyebrow--hero" variants={revealItem}>
        <span aria-hidden="true" />Coverage, explained for real life
      </motion.p>
      <h1>
        <motion.span className="hero-title-line hero-title-line--plain" variants={revealItem}>
          Auto insurance,
        </motion.span>
        <motion.span className="hero-title-line hero-title-line--accent" variants={revealItem}>
          in plain English.
        </motion.span>
      </h1>
      <motion.p className="hero-copy__description" variants={revealItem}>
        Understand your options, ask a real person, and request a no-obligation quote—without the jargon.
      </motion.p>
      <motion.div className="hero-actions" variants={revealItem}>
        <Link href={ROUTES.quote} className="button button--large">
          Get my free quote <ArrowRight size={17} aria-hidden="true" />
        </Link>
        <Link href={ROUTES.contact} className="text-link">Talk with an advisor</Link>
      </motion.div>
      <motion.ul
        className="hero-assurances"
        aria-label="What you can expect"
        variants={assuranceSequence}
      >
        <motion.li variants={assuranceItem}><Check size={14} aria-hidden="true" /> No-obligation quote</motion.li>
        <motion.li variants={assuranceItem}><Check size={14} aria-hidden="true" /> Clear coverage choices</motion.li>
        <motion.li variants={assuranceItem}><Check size={14} aria-hidden="true" /> Licensed advisor support</motion.li>
      </motion.ul>
    </motion.div>
  );
}

export function HeroVisual() {
  const controls = useHeroEntrance(140);

  return (
    <motion.div
      className="hero-visual"
      variants={visualReveal}
      initial={false}
      animate={controls}
    >
      <div className="hero-image-frame">
        <HeroMedia posterSrc={IMAGES.hero} alt="A modern sedan on a quiet, sunlit road" />
        <div className="hero-image-note">
          <span className="hero-image-note__icon"><ShieldCheck size={16} aria-hidden="true" /></span>
          <span><strong>Clear answers, from real people</strong><small>Guidance from a licensed advisor</small></span>
        </div>
      </div>
    </motion.div>
  );
}
