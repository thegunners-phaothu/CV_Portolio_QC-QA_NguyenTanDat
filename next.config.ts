import type { NextConfig } from "next";

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
};

export default nextConfig;
