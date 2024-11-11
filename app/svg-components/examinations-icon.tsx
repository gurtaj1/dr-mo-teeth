import { motion } from "framer-motion";
import type { MotionSVGProps } from "./types";

const ExaminationsIcon = (props: MotionSVGProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    id="Layer_1"
    data-name="Layer 1"
    {...props}
  >
    <defs>
      <style>{`fill:${props.fill || "#fff"}`}</style>
    </defs>
    <path
      d="M310.2 264.17a84.742 84.742 0 0 1-6.68 13.19c-12.56 20.11-18.92 43.4-18.92 67.08v70.1c0 38.15-23.37 72.41-58.82 86.48-11.13 4.37-23.21-3.81-23.21-15.82l-12.4-121.21c0-17.09-7.63-30.92-24.72-30.92s-24.72 13.83-24.72 30.92l-12.4 121.21c0 12-12.08 20.19-23.21 15.82-35.45-14.07-58.82-48.32-58.82-86.48v-70.1c0-23.69-6.36-46.97-18.92-67.08-11.21-18.04-17.25-44.67-15.74-67.24 3.1-46.66 39.03-85.44 84.89-92.44-5.33 43.16 8.5 88.22 41.57 121.21 46.34 46.34 115.96 55.72 172.08 25.28Z"
      // className="cls-1"
    />
    <path
      d="M189.31 187.71c-13.91-13.83-21.54-32.27-21.54-51.98 0-3.18.24-6.36.64-9.54 5.33-.24 10.65-1.35 15.74-3.26 14.15-5.25 29.81-7.47 46.18-5.72 32.98 3.66 61.28 23.61 76.7 51.42-3.42 6.91-8.11 13.43-13.75 19.08-13.91 13.91-32.35 21.54-51.98 21.54s-38.15-7.63-51.98-21.54Z"
      // className="cls-1"
    />
    <path
      d="m489.35 329.58-91.4-91.48c2.7-5.96 3.26-10.65 1.03-12.88-3.34-3.34-12.16-.4-22.89 6.76-2.07 1.35-4.13 2.94-6.28 4.61l-26.79-26.79c35.93-49.28 31.79-118.75-12.64-163.18C281.26-2.5 201.3-2.5 152.1 46.62c-19.71 19.71-31.47 44.43-35.37 70.1-5.8 38.31 5.96 78.77 35.37 108.17 44.43 44.35 113.98 48.48 163.26 12.64l26.71 26.71c-1.59 2.15-3.18 4.29-4.53 6.28-7.23 10.81-10.09 19.63-6.76 22.97 2.23 2.23 6.84 1.59 12.88-1.11l91.48 91.48c14.86 14.86 39.34 14.86 54.21-.08 14.94-14.94 14.94-39.26 0-54.21ZM316.16 191.52c-2.62 3.58-5.56 6.99-8.82 10.25-36.48 36.4-95.7 36.4-132.1 0-21.3-21.3-30.12-50.39-26.55-78.21 2.54-19.71 11.45-38.71 26.55-53.89 36.4-36.4 95.62-36.4 132.1 0 33.14 33.22 36.08 85.36 8.82 121.85Z"
      // className="cls-1"
    />
  </motion.svg>
);

export default ExaminationsIcon;
