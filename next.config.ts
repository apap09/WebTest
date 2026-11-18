import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/WebTest",
  assetPrefix: "/WebTest",
  trailingSlash: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
