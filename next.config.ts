import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";
const repoName = "CV_Portolio_QC-QA_NguyenTanDat";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
  // Fix: suppress workspace-root lockfile warning
  outputFileTracingRoot: path.join(__dirname, "./"),
};

export default nextConfig;
