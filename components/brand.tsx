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
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
            <path d="M24 6.5 38.2 11.4v11.1c0 9.3-5.5 15.4-14.2 19.2C15.3 37.9 9.8 31.8 9.8 22.5V11.4L24 6.5Z" fill="#c32626" />
            <path d="m18 24.2 4.2 4.2 8.8-8.8" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" />
          </svg>
        </span>
      )}
      <span className="brand__name">
        <span className="brand__lead">Next Auto</span> <strong className="brand__tail">Shield</strong>
      </span>
    </Link>
  );
}
