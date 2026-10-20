import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ROUTES } from "@/lib/site-config";
import { AdvisorPhoto } from "@/components/advisor-photo";

const supportPoints = [
  "Clear explanations before you choose",
  "Guidance when life or your vehicle changes",
  "A real person to help with claims questions",
];

export function AdvisorSection() {
  return (
      <section className="section section--advisor" aria-labelledby="advisor-title">
        <div className="container advisor-layout">
        <div className="advisor-image-wrap">
          <AdvisorPhoto alt="An insurance advisor and customer reviewing coverage together" className="advisor-image" />
          <div className="advisor-image-caption"><span className="advisor-image-caption__icon"><Check size={15} aria-hidden="true" /></span><span><strong>Here when you need a hand</strong><small>Guidance from a licensed advisor</small></span></div>
          <span className="advisor-image-decoration" aria-hidden="true" />
        </div>
        <div className="advisor-copy">
          <p className="eyebrow"><span aria-hidden="true" />The Next Auto Shield difference</p>
          <h2 id="advisor-title">Protection is important. <em>Feeling understood</em> matters, too.</h2>
          <p className="advisor-copy__lead">Insurance can be complicated. We keep the conversation practical, so you know what you’re choosing and who to call when you have a question.</p>
          <ul className="check-list">
            {supportPoints.map((point) => <li key={point}><span><Check size={14} aria-hidden="true" /></span>{point}</li>)}
          </ul>
          <Link href={ROUTES.about} className="text-link">Get to know us <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
