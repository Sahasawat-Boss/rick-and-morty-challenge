import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        hostname: "rickandmortyapi.com",
        protocol: "https",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
