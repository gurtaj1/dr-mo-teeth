import { motion } from "framer-motion";
import type { MotionSVGProps } from "./types";

const BespokeIcon = (props: MotionSVGProps) => (
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
      d="M256 9.57c135.88 0 246.43 110.55 246.43 246.43S391.88 502.43 256 502.43 9.57 391.88 9.57 256 120.13 9.57 256 9.57Zm153.79 369.65c-36.16 45.04-91.67 73.93-153.79 73.93s-117.63-28.89-153.79-73.93c36.16-45.04 91.67-73.93 153.79-73.93s117.63 28.89 153.79 73.93ZM256 256c40.83 0 73.93-33.1 73.93-73.93s-33.1-73.93-73.93-73.93-73.93 33.1-73.93 73.93S215.17 256 256 256Z"
      style={{
        fillRule: "evenodd",
      }}
    />
  </motion.svg>
);

export default BespokeIcon;
