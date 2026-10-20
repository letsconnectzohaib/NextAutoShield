import Link from "next/link";

type BrandProps = {
  light?: boolean;
  showMark?: boolean;
};

export function Brand({ light = false, showMark = true }: BrandProps) {
  return (
    <Link className={`brand${light ? " brand--light" : ""}`} href="/" aria-label="Next Auto Shield home">
      {showMark && (
        <span className="brand__mark" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="M24 6.5 38.2 11.4v11.1c0 9.3-5.5 15.4-14.2 19.2C15.3 37.9 9.8 31.8 9.8 22.5V11.4L24 6.5Z" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth="2" />
            <path d="m17.5 24.1 4.2 4.3 9-9.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.7" />
          </svg>
        </span>
      )}
      <span className="brand__name">Next Auto <strong>Shield</strong></span>
    </Link>
  );
}
