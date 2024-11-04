/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProduction ? "/dr-mo-teeth" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
  //   env: {
  //     NEXT_PUBLIC_BASE_PATH: isProduction ? "/dr-mo-teeth" : "",
  //   },
};

export default nextConfig;
