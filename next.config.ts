import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_URL: process.env.NEXT_API_URL,
  },
  images: {
    minimumCacheTTL: 1200,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nyaa.shikimori.one",
        port: "",
      },
      {
        protocol: "https",
        hostname: "dere.shikimori.one",
        port: "",
      },
      {
        protocol: "https",
        hostname: "moe.shikimori.one",
        port: "",
      },
      {
        protocol: "https",
        hostname: "shikimori.one",
        port: "",
      },
    ],
  },
};

export default nextConfig;
