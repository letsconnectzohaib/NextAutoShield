import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site-content";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section className="section section--stories" aria-labelledby="stories-title">
      <div className="container">
        <div className="stories-heading-row">
          <SectionHeading
            eyebrow="What drivers say"
            title="A little more human. A lot more clear."
            titleId="stories-title"
            description="A few words from drivers who wanted insurance to make more sense."
          />
          <span className="stories-note">Real voices. Thoughtful guidance.</span>
        </div>
        <div className="stories-grid">
          {testimonials.map(({ quote, initials, name, location }) => (
            <figure className="story-card" key={name}>
              <Quote size={23} className="story-card__quote-icon" strokeWidth={1.5} aria-hidden="true" />
              <blockquote>“{quote}”</blockquote>
              <figcaption>
                <span className="story-card__avatar" aria-hidden="true">{initials}</span>
                <span><strong>{name}</strong><small>{location}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
