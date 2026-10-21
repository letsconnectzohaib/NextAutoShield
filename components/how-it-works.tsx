import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { quoteSteps } from "@/lib/site-content";
import { ROUTES } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";

export function HowItWorks() {
  return (
    <section className="section section--process" id="how-it-works" aria-labelledby="process-title">
      <div className="container">
        <div className="process-heading-row">
          <SectionHeading
            eyebrow="How it works"
            title="Four simple steps. No guesswork."
            titleId="process-title"
            description="A clear path from your first question to a policy that feels right for you."
          />
          <div className="process-aside">No obligation · No pressure</div>
        </div>
        <ol className="process-list">
          {quoteSteps.map(({ number, Icon, title, description }) => (
            <li className="process-step" key={number}>
              <div className="process-step__marker"><span>{number}</span><Icon size={19} strokeWidth={1.65} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
        <Link href={ROUTES.quote} className="text-link process-link">Start with a few details <ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
