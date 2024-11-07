/** @type {import('next').NextConfig} */

// const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
  ],
  //   basePath: isProduction ? "/dr-mo-teeth" : "",
  //   output: "export",
  //   env: {
  //     NEXT_PUBLIC_BASE_PATH: isProduction ? "/dr-mo-teeth" : "",
  //   },
};

export default nextConfig;
