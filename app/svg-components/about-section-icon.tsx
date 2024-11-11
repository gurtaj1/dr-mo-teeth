import { motion } from "framer-motion";
import type { MotionSVGProps } from "./types";

const AboutSectionIcon = (props: MotionSVGProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    id="Layer_1"
    data-name="Layer 1"
    {...props}
  >
    <defs>
      <style>{`.cls-1{fill:${props.fill || "#fff"}}`}</style>
    </defs>
    <path
      //       className="cls-1"
      d="M144.05 116.24C66.86 116.24 4.29 178.81 4.29 256s62.58 139.76 139.76 139.76S283.8 333.18 283.8 256s-62.56-139.76-139.75-139.76Zm0 93.54c23.73 0 42.98 19.25 42.98 42.98s-19.25 42.98-42.98 42.98-42.98-19.25-42.98-42.98 19.23-42.98 42.98-42.98ZM79.03 352.07c40.82-47.68 92.1-46.58 130.02 0-38.64 28.53-87.99 28.74-130.02 0ZM491.82 204.35H330.75c-8.78 0-15.89 7.11-15.89 15.89s7.11 15.89 15.89 15.89h161.07c8.78 0 15.89-7.11 15.89-15.89s-7.11-15.89-15.89-15.89ZM411.65 280.92h-80.9c-8.78 0-15.89 7.11-15.89 15.89 0 8.78 7.11 15.89 15.89 15.89h80.9c8.78 0 15.89-7.11 15.89-15.89 0-8.78-7.11-15.89-15.89-15.89Z"
    />
  </motion.svg>
);
export default AboutSectionIcon;
