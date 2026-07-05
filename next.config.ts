import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["gsap", "three"],
  /* Other Next.js 15 options if needed */
  compiler: {
    // Remove console in production if desired, but keep it standard for boilerplate
  },
};

export default nextConfig;
