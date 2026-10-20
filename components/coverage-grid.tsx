import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { coverages } from "@/lib/site-content";
import { ROUTES } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";

export function CoverageGrid() {
  return (
    <section className="section section--coverage" id="coverage" aria-labelledby="coverage-title">
      <div className="container">
        <div className="coverage-heading-row">
          <SectionHeading
            eyebrow="Coverage options"
            title="Know what each coverage is for."
            titleId="coverage-title"
            description="Compare the basics in plain language. A licensed advisor can help you understand what may fit your vehicle and state."
          />
          <Link className="text-link coverage-heading-row__link" href={ROUTES.quote}>Explore a quote <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="coverage-grid">
          {coverages.map(({ Icon, title, description, points }, index) => (
            <article id={`coverage-${title.toLowerCase().replace(/\s+/g, "-")}`} className={`coverage-card${index === 0 ? " coverage-card--featured" : ""}`} key={title}>
              <div className="coverage-card__head"><span className="icon-tile icon-tile--soft"><Icon size={20} strokeWidth={1.65} aria-hidden="true" /></span><span className="coverage-card__index">0{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>
                {points.map((point) => <li key={point}><Check size={14} aria-hidden="true" />{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="coverage-note">Coverage availability, terms, and limits vary by state and policy. A licensed advisor can help explain your options.</p>
      </div>
    </section>
  );
}
