"use client";

import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { SITE } from "@/lib/site-config";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [maximumVehicleYear, setMaximumVehicleYear] = useState<number>();
  const [zipValue, setZipValue] = useState("");

  useEffect(() => {
    setMaximumVehicleYear(new Date().getFullYear() + 1);
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlZip = params.get("zip");
      if (urlZip) setZipValue(urlZip);
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span className="form-success__icon"><BadgeCheck size={25} aria-hidden="true" /></span>
        <h2>Preview complete—no request was sent.</h2>
        <p>This demo did not send or store your details. To request a live quote, call an advisor and they’ll help with next steps.</p>
        <a className="button" href={`tel:${SITE.phoneHref}`}>Call {SITE.phoneDisplay} <ArrowRight size={16} aria-hidden="true" /></a>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <p className="form-preview-notice"><strong>Demo preview:</strong> This form does not send or save your details. To request a live quote, <a href={`tel:${SITE.phoneHref}`}>call {SITE.phoneDisplay}</a>.</p>
      <div className="form-section-title"><span>01</span><div><h2>About you</h2><p>Just the basics to get started.</p></div></div>
      <div className="form-grid">
        <label className="form-field"><span>First name <b aria-hidden="true">*</b></span><input name="firstName" autoComplete="given-name" required placeholder="Jordan" /></label>
        <label className="form-field"><span>Last name <b aria-hidden="true">*</b></span><input name="lastName" autoComplete="family-name" required placeholder="Taylor" /></label>
        <label className="form-field"><span>Email address <b aria-hidden="true">*</b></span><input type="email" name="email" autoComplete="email" required placeholder="jordan@example.com" /></label>
        <label className="form-field"><span>Phone number</span><input type="tel" name="phone" autoComplete="tel" placeholder="(555) 123-4567" /></label>
        <label className="form-field"><span>ZIP code <b aria-hidden="true">*</b></span><input name="zip" autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} required placeholder="75201" title="Enter a 5-digit ZIP code" value={zipValue} onChange={(e) => setZipValue(e.target.value)} /></label>
      </div>
      <div className="form-section-title form-section-title--spaced"><span>02</span><div><h2>About your vehicle</h2><p>Tell us what you’d like to protect.</p></div></div>
      <div className="form-grid">
        <label className="form-field"><span>Vehicle year <b aria-hidden="true">*</b></span><input type="number" name="vehicleYear" min={1980} max={maximumVehicleYear} required placeholder="2022" /></label>
        <label className="form-field"><span>Make <b aria-hidden="true">*</b></span><input name="vehicleMake" required placeholder="Toyota" /></label>
        <label className="form-field"><span>Model <b aria-hidden="true">*</b></span><input name="vehicleModel" required placeholder="Camry" /></label>
        <label className="form-field"><span>What matters most?</span><select name="priority" defaultValue=""><option value="" disabled>Select an option</option><option>Keeping costs manageable</option><option>Protecting a newer vehicle</option><option>Understanding coverage choices</option><option>Getting help with an existing policy</option></select></label>
      </div>
      <p className="form-legal">Submitting a quote request does not create a policy or bind coverage. Final terms and availability depend on your state and insurer.</p>
      <button className="button button--large form-submit" type="submit">Preview next step <ArrowRight size={17} aria-hidden="true" /></button>
    </form>
  );
}
