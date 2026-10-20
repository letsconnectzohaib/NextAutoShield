import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "3000-i2686jx4phk674o7ioxhb-13a0d811.us3.manus.computer",
  ],
};

export default nextConfig;
