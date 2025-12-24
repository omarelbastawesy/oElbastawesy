import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "private-user-images.githubusercontent.com",
    ],
  },
};

export default nextConfig;
