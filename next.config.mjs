/** @type {import('next').NextConfig} */

// const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  mode: "jit",
  //   basePath: isProduction ? "/dr-mo-teeth" : "",
  //   output: "export",
  //   env: {
  //     NEXT_PUBLIC_BASE_PATH: isProduction ? "/dr-mo-teeth" : "",
  //   },
};

export default nextConfig;
