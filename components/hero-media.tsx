interface HeroMediaProps {
  posterSrc: string;
  alt: string;
}

export function HeroMedia({ posterSrc, alt }: HeroMediaProps) {
  return (
    <div className="hero-media">
      <img
        className="hero-image-frame__poster"
        src={posterSrc}
        alt={alt}
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
}
