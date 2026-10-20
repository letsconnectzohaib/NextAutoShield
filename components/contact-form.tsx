"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { SITE } from "@/lib/site-config";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="form-success__icon"><BadgeCheck size={25} aria-hidden="true" /></span>
        <h2>Preview complete—no message was sent.</h2>
        <p>This demo did not send or store your message. Call or email an advisor for help with a quote, policy question, or claims next step.</p>
        <a className="button" href={`tel:${SITE.phoneHref}`}>Call {SITE.phoneDisplay} <ArrowRight size={16} aria-hidden="true" /></a>
      </div>
    );
  }

  return (
    <form className="lead-form lead-form--contact" onSubmit={handleSubmit}>
      <p className="form-preview-notice"><strong>Demo preview:</strong> Nothing entered here is sent or saved. For a real response, <a href={`tel:${SITE.phoneHref}`}>call {SITE.phoneDisplay}</a> or <a href={`mailto:${SITE.email}`}>email an advisor</a>.</p>
      <label className="form-field"><span>Your name <b aria-hidden="true">*</b></span><input name="name" autoComplete="name" required placeholder="Your name" /></label>
      <label className="form-field"><span>Email address <b aria-hidden="true">*</b></span><input type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label>
      <label className="form-field"><span>What can we help with? <b aria-hidden="true">*</b></span><select name="topic" defaultValue="" required><option value="" disabled>Choose a topic</option><option>Getting a quote</option><option>Understanding coverage</option><option>Policy question</option><option>Claims support</option><option>Something else</option></select></label>
      <label className="form-field"><span>Message <b aria-hidden="true">*</b></span><textarea name="message" rows={5} required minLength={12} placeholder="Tell us a little about what you need…" /></label>
      <button className="button button--large form-submit" type="submit">Preview message flow <ArrowRight size={17} aria-hidden="true" /></button>
    </form>
  );
}
