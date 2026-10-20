import type { Metadata } from "next";
import { IMAGES, SITE } from "@/lib/site-config";

export function pageMetadata(title: string, description: string, pathname: string): Metadata {
  const fullTitle = `${title} | ${SITE.name}`;
  const publicUrl = new URL(pathname, SITE.origin).toString();
  const image = {
    url: new URL(IMAGES.hero, SITE.origin).toString(),
    width: 1920,
    height: 1080,
    alt: "A modern sedan on a quiet, sunlit road",
  };

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: fullTitle,
      description,
      url: publicUrl,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}
