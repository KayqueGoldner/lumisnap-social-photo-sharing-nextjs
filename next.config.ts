import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "utfs.io",
        protocol: "https",
      },
      {
        hostname: "b4xp1lxq7h.ufs.sh",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
