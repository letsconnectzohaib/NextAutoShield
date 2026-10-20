import { benefits } from "@/lib/site-content";
import { SectionHeading } from "@/components/section-heading";

export function BenefitGrid() {
  return (
    <section className="section section--benefits" aria-labelledby="benefits-title">
      <div className="container">
        <div className="benefit-intro">
          <SectionHeading
            eyebrow="Why Next Auto Shield"
            title="Start with clear answers. Choose on your terms."
            titleId="benefits-title"
            description="Clear choices, fair-minded guidance, and a little more care at every step."
          />
          <span className="benefit-intro__index" aria-hidden="true">01 <i /> 04</span>
        </div>
        <div className="benefit-grid">
          {benefits.map(({ Icon, title, description }, index) => (
            <article className="benefit-card" key={title}>
              <div className="benefit-card__top"><span className="icon-tile"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /></span><span className="benefit-card__number">0{index + 1}</span></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="benefit-card__rule" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
