import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    clientRouterFilter: true,
    clientRouterFilterRedirects: true,
  },
};

export default nextConfig;
