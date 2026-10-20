import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ROUTES } from "@/lib/site-config";

export function QuoteCallout() {
  return (
    <section className="quote-callout-section">
      <div className="container">
        <div className="quote-callout">
          <div className="quote-callout__pattern" aria-hidden="true"><span /><span /><span /></div>
          <div className="quote-callout__icon"><ShieldCheck size={25} strokeWidth={1.6} aria-hidden="true" /></div>
          <div className="quote-callout__copy">
            <p className="eyebrow eyebrow--light"><span aria-hidden="true" />Ready when you are</p>
            <h2>Make your next mile feel more certain.</h2>
            <p>Start with a few details. Get thoughtful options and real guidance, with no obligation to buy.</p>
          </div>
          <Link href={ROUTES.quote} className="button button--light">Get a free quote <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
