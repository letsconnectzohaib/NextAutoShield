import Image from "next/image";
import { IMAGES } from "@/lib/site-config";

type AdvisorPhotoProps = {
  alt: string;
  className: string;
  loading?: "eager" | "lazy";
};

const mobileSources = "/images/advisor-meeting-640.webp 640w, /images/advisor-meeting-960.webp 960w";
const desktopSources = "/images/advisor-meeting-960.webp 960w, /images/advisor-meeting-1440.webp 1440w";

export function AdvisorPhoto({ alt, className, loading = "lazy" }: AdvisorPhotoProps) {
  return (
    <picture className="advisor-photo">
      <source
        media="(max-width: 780px)"
        type="image/webp"
        srcSet={mobileSources}
        sizes="100vw"
      />
      <source
        type="image/webp"
        srcSet={desktopSources}
        sizes="(max-width: 1200px) 90vw, 700px"
      />
      <Image
        src={IMAGES.advisor}
        alt={alt}
        width={1920}
        height={1080}
        sizes="(max-width: 780px) 100vw, 700px"
        className={className}
        unoptimized
        loading={loading}
        fetchPriority={loading === "eager" ? "high" : "auto"}
      />
    </picture>
  );
}
