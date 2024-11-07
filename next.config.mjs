import { navBarHeight } from "./app/globals/constants";

// const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./app/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [`pt-[${navBarHeight}px]`], // Add any dynamic classes you need
    },
  },
  //   basePath: isProduction ? "/dr-mo-teeth" : "",
  //   output: "export",
  //   env: {
  //     NEXT_PUBLIC_BASE_PATH: isProduction ? "/dr-mo-teeth" : "",
  //   },
};

export default nextConfig;
