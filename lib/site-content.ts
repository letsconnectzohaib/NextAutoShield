import {
  BadgeCheck,
  CarFront,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  HeartHandshake,
  LifeBuoy,
  MapPin,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
  Wrench,
} from "lucide-react";

export const benefits = [
  {
    Icon: Clock3,
    title: "A simpler start",
    description: "Share a few details and get clear options without a long, confusing process.",
  },
  {
    Icon: CircleDollarSign,
    title: "Pricing you can follow",
    description: "Understand what your policy includes, what it costs, and where your choices are.",
  },
  {
    Icon: ShieldCheck,
    title: "Coverage that fits",
    description: "Explore protection around your vehicle, your budget, and the way you drive.",
  },
  {
    Icon: HeartHandshake,
    title: "People in your corner",
    description: "Talk things through with a licensed advisor before and after you choose coverage.",
  },
];

export const coverages = [
  {
    Icon: Shield,
    title: "Liability",
    description: "Helps cover injuries or property damage to others when you’re responsible for an accident.",
    points: ["Bodily injury protection", "Property damage protection"],
  },
  {
    Icon: CarFront,
    title: "Collision",
    description: "Helps pay to repair or replace your vehicle after a collision with another car or object.",
    points: ["Repair and replacement", "Deductible options"],
  },
  {
    Icon: Sparkles,
    title: "Comprehensive",
    description: "Protection for covered events beyond a collision, such as theft, storms, or vandalism.",
    points: ["Theft and vandalism", "Weather and fire damage"],
  },
  {
    Icon: Stethoscope,
    title: "Medical payments",
    description: "Can help with covered medical costs for you and your passengers after an accident.",
    points: ["Injury-related costs", "Passenger protection"],
  },
  {
    Icon: UserRoundCheck,
    title: "Uninsured motorist",
    description: "Helps protect you if an uninsured or underinsured driver causes a covered accident.",
    points: ["Hit-and-run protection", "Underinsured driver gaps"],
  },
  {
    Icon: Wrench,
    title: "Roadside assistance",
    description: "Optional help for common roadside problems, from towing to a flat tire or lockout.",
    points: ["Towing and battery jumps", "Lockout and fuel service"],
  },
];

export const quoteSteps = [
  {
    number: "01",
    Icon: FileCheck2,
    title: "Tell us a little",
    description: "Share basic driver and vehicle details to get the conversation started.",
  },
  {
    number: "02",
    Icon: BadgeCheck,
    title: "Review your options",
    description: "See coverage choices explained in plain language, side by side.",
  },
  {
    number: "03",
    Icon: ShieldCheck,
    title: "Choose what fits",
    description: "Adjust limits and deductibles with an advisor, without pressure.",
  },
  {
    number: "04",
    Icon: CarFront,
    title: "Move forward confidently",
    description: "Get the next steps and know who to contact whenever you need help.",
  },
];

export const testimonials = [
  {
    quote:
      "Switching saved me real money every month, and the quote took less time than my coffee break. The whole process just felt honest.",
    initials: "MR",
    name: "Marcus R.",
    location: "Austin, TX",
  },
  {
    quote:
      "When someone backed into my car, I expected a nightmare. Instead, an advisor helped me understand what came next and followed up.",
    initials: "PS",
    name: "Priya S.",
    location: "Columbus, OH",
  },
  {
    quote:
      "I finally understand what I’m paying for. They walked me through each option without any pressure to buy more than I needed.",
    initials: "DW",
    name: "Dana W.",
    location: "Denver, CO",
  },
];

export const faqs = [
  {
    question: "What does auto insurance cover?",
    answer:
      "It depends on the coverages you choose. A policy may include liability for damage you cause to others, collision for your vehicle, and comprehensive coverage for covered events such as theft or weather damage. Options and availability vary by state and policy.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Start with the quote form and share a few details about yourself and your vehicle. A licensed advisor can help review your options. A quote request is no obligation and does not create a policy or bind coverage.",
  },
  {
    question: "Can I choose different coverage options?",
    answer:
      "Yes. You can discuss coverage limits, deductibles, and optional protections with an advisor so the choices make sense for your vehicle and budget.",
  },
  {
    question: "What information should I have ready?",
    answer:
      "Your ZIP code, vehicle year, make, and model, and a few basic driver details are a helpful place to start. More accurate information can help an advisor prepare relevant options.",
  },
  {
    question: "Can someone help me understand the details?",
    answer:
      "Absolutely. Next Auto Shield’s licensed advisors can explain the options in plain language and answer questions about coverage, policy changes, and claims support.",
  },
  {
    question: "What happens after I request a quote?",
    answer:
      "An advisor can review the information and follow up with coverage options. Submitting a request does not create a policy or bind coverage. Coverage begins only after the required application and insurer approval steps are complete.",
  },
];

export const pricingPrinciples = [
  {
    Icon: CircleDollarSign,
    title: "Know what you’re paying for",
    description: "Coverage and pricing are explained before you decide, with no pressure to choose more than you need.",
  },
  {
    Icon: MapPin,
    title: "Choices that reflect your situation",
    description: "Your vehicle, location, driving history, and selected coverage all help shape the options available to you.",
  },
  {
    Icon: LifeBuoy,
    title: "Support when the road changes",
    description: "Get help understanding policy questions, updates, and what to expect when you need to file a claim.",
  },
];
