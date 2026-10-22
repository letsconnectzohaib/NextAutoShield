import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-config";

const quoteDetails = [
  {
    number: "01",
    title: "About you",
    description: "Your name, email address, and five-digit ZIP code. Phone is optional.",
  },
  {
    number: "02",
    title: "Your vehicle",
    description: "The year, make, and model of the car you want to protect.",
  },
  {
    number: "03",
    title: "What matters most",
    description: "Keeping costs manageable, protecting a newer car, understanding coverage, or help with an existing policy.",
  },
];

export function QuotePrep() {
  return (
    <section className="section section--quote-prep" aria-labelledby="quote-prep-title">
      <div className="container">
        <div className="quote-prep__heading">
          <div>
            <p className="eyebrow"><span aria-hidden="true" />Before you start</p>
            <h2 id="quote-prep-title">A clearer quote starts with the basics.</h2>
          </div>
          <p>Knowing what you’ll be asked for can make it easier to compare options at your own pace.</p>
        </div>

        <div className="quote-prep__steps">
          {quoteDetails.map(({ number, title, description }) => (
            <article className="quote-prep__step" key={number}>
              <span className="quote-prep__number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="quote-prep__notice">
          <p><strong>Demo preview:</strong> The online form on this site does not send or store your details.</p>
          <a href={`tel:${SITE.phoneHref}`}>For a live quote, call {SITE.phoneDisplay} <ArrowRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
