/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/dr-mo-teeth" : "";

const nextConfig = {
  basePath,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
