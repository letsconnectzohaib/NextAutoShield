export const SITE = {
  name: "Next Auto Shield",
  shortName: "Next Auto Shield",
  description:
    "Straightforward auto insurance with flexible coverage, clear pricing, and real people ready to help.",
  origin: "https://nextautoshield.com",
  phoneDisplay: "(888) 555-0147",
  phoneHref: "+18885550147",
  email: "support@nextautoshield.com",
  addressDisplay: "2100 Commerce Street, Suite 400, Dallas, TX 75201",
  address: {
    streetAddress: "2100 Commerce Street, Suite 400",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75201",
    addressCountry: "US",
  },
  hours: "Monday – Friday, 8:00 AM – 8:00 PM CT",
} as const;

export const ROUTES = {
  home: "/",
  about: "/about",
  contact: "/contact",
  quote: "/request-a-quote",
} as const;

export const IMAGES = {
  hero: "/images/hero-bg.webp",
  heroBg: "/images/hero-bg-unified.jpg",
  heroBgMobile: "/images/hero-bg-unified-mobile.jpg",
  heroScene: "/images/hero-car-scene.webp",
  advisor: "/images/advisor-meeting.webp",
} as const;
