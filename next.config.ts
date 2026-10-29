import type { NextConfig } from "next";

const config: NextConfig = {
  devIndicators: false,
  distDir: process.env.TICHU_BUILD_DIR || ".next",
  outputFileTracingRoot: process.cwd(),
  turbopack: { root: process.cwd() },
  experimental: { cpus: 2 },

  output: "export",
  basePath: "/-_-",
  images: {
    unoptimized: true,
  },
};

export default config;
