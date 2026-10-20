import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { faqs } from "@/lib/site-content";
import { ROUTES } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";

export function FaqList() {
  return (
    <section className="section section--faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="faq-intro">
          <SectionHeading
            eyebrow="Good to know"
            title="Answers, without the runaround."
            titleId="faq-title"
            description="A few common questions to help make your next step easier."
          />
          <Link className="text-link" href={ROUTES.contact}>Ask us anything <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }, index) => (
            <details className="faq-item" key={question} open={index === 0}>
              <summary><span>{question}</span><Plus size={18} aria-hidden="true" /></summary>
              <div className="faq-item__answer"><p>{answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
