/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProduction ? "/dr-mo-teeth" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/dr-mo-teeth/" : "",
};

export default nextConfig;
