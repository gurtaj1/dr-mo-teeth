import { motion } from "framer-motion";
import type { MotionSVGProps } from "./types";

const CrownLengtheningIcon = (props: MotionSVGProps) => (
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
      //       className="cls-1"
      d="M137.68 9.98c15.37-2.1 29.56 2.77 43.82 7.19 1.08.34 2.17.75 3.29.88 34.13 4.02 68.3 6.43 102.6 2.05 6.95-.89 13.92-1.6 20.86-2.58 1.81-.25 19.58-4.76 20.98-5.21 25.59-8.17 50.46-4.45 74.95 4.6 26.56 9.82 46.1 28.57 60.85 51.75 7.77 12.2 14.15 25.91 15.75 41.02 1.05 9.91 3.3 19.77 3.54 29.68.19 7.77-.8 15.95-3.2 23.32-3.75 11.52-9.15 22.5-13.82 33.72-2.18 5.24-4.6 10.41-6.36 15.8-1.04 3.19-2.43 4.34-5.72 3.65-14.73-3.08-29.53-.17-43.05 4-11.17 3.44-21.85 2.28-32.7 3.55-15.68 1.84-30.25-4.21-45.4-6.08-10.35-1.28-20.11-1.87-30.65.7-19.12 4.66-34 15.27-46.52 29.38-8.46 9.54-13.28 21.19-15.25 34.22-1.14 7.58-4.33 15-2.79 22.74 1.79 9 4.26 17.89 6.87 26.69 1.55 5.22 3.98 10.17 5.95 15.27 1.51 3.91.57 5.37-4.04 6.3-4.69.95-9.55 3.46-13.21 6.6-8.91 7.64-17.03 16.04-22.69 26.65-5.93 11.12-13.26 21.54-18.66 32.89-5.41 11.37-9.08 23.57-13.72 35.32-4.88 12.36-9.28 24.99-15.28 36.8-4.34 8.55-12.25 13.1-22.63 13.33-16.94.37-28.71-6.9-34.08-22.72-2.44-7.19-2.21-15.27-3.23-22.95-2.33-17.6-4.84-35.18-6.97-52.8-.96-7.9-.92-15.91-1.81-23.82-1.03-9.19-2.81-18.29-3.84-27.47-.96-8.65-.43-17.57-2.23-26.02-2.87-13.45-5.56-27.31-11"
    />
  </motion.svg>
);

export default CrownLengtheningIcon;