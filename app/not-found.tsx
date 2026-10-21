import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "64px 20px" }}>
      <p style={{ color: "#c32626", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "14px", margin: "0 0 12px" }}>
        404 — Page Not Found
      </p>
      <h1 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, margin: "0 0 16px", color: "#0f172a" }}>
        Looking for insurance coverage?
      </h1>
      <p style={{ maxWidth: "480px", color: "#64748b", margin: "0 0 32px", fontSize: "16px", lineHeight: 1.6 }}>
        The page you are looking for might have been moved, removed, or is temporarily unavailable.
      </p>
      <Link href="/" className="button button--floating-cta" style={{ textDecoration: "none" }}>
        <ArrowLeft size={16} aria-hidden="true" />
        Return to Home
      </Link>
    </div>
  );
}
