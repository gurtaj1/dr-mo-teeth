import { motion } from "framer-motion";
import type { MotionSVGProps } from "./types";

const ImplantsIcon = (props: MotionSVGProps) => (
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
    <g id="implanted_in_gum" data-name="implanted in gum">
      <path
        // className="cls-1"
        d="M227.09 436.09c15.98 15.92 41.83 15.92 57.81 0 26.99-27.2 30.83-29.12 33.81-39.47l-122.56 6.72c2.67 4.91 1.92 3.63 30.93 32.75z"
      />
      <path
        // className="cls-1"
        d="M320 277.37H192v19.52l128-7.15v-12.37zM320 311.18l-128 7.15v21.23l128-7.15v-21.23zM320 353.85l-128 7.15v21.23l128-7.15v-21.23z"
      />
      <path
        // className="cls-1"
        d="M410.99 193.96c-8.1 15.02-14.27 31-18.35 47.57-3.38 20.87-21.53 36.11-42.67 35.84h-8.64v11.2l10.03-.53c5.89-.35 10.95 4.14 11.31 10.03.35 5.89-4.14 10.95-10.03 11.31l-11.31.64v21.33l10.03-.53c5.89-.35 10.95 4.14 11.31 10.03.35 5.89-4.14 10.95-10.03 11.31h0l-11.31.53v21.33h10.03c5.89-.35 10.95 4.14 11.31 10.03.35 5.89-4.14 10.95-10.03 11.31l-11.95.64c-2.99 22.72-17.49 32.64-40.75 55.79-24.22 24.27-63.52 24.32-87.79.1-.03-.03-.07-.07-.1-.1-24.64-24.53-33.49-30.83-38.61-46.51l-13.44.11c-5.89.18-10.81-4.46-10.99-10.35-.18-5.89 4.46-10.81 10.35-10.99l11.31-.64v-20.69h-10.67c-5.89.18-10.81-4.46-10.99-10.35-.18-5.89 4.46-10.81 10.35-10.99l11.31-.64v-20.69h-10.67c-5.89.18-10.81-4.46-10.99-10.35-.18-5.89 4.46-10.81 10.35-10.99l11.31-.64v-20.69h-9.17c-21.14.27-39.29-14.97-42.67-35.84-3.7-16.67-9.84-32.7-18.24-47.57-5-1.19-10.11-1.84-15.25-1.92-14.19 0-18.13 2.45-74.67 21.33V501.37H501.33V213.37c-53.33-17.71-66.13-25.39-90.35-19.41z"
      />
      <path
        // className="cls-1"
        d="M140.48 238.01c1.64 10.48 10.73 18.15 21.33 18.03h188.69c10.6.13 19.69-7.55 21.33-18.03 7.68-45.97 44.16-77.97 44.16-133.65 0-20.8 0-93.65-74.67-93.65-19.13-.58-38.2 2.27-56.32 8.43-18.68 7.15-39.35 7.15-58.03 0-18.12-6.15-37.19-9.01-56.32-8.43-74.67 0-74.67 72.85-74.67 93.65 0 56.53 36.37 86.61 44.48 133.65h0z"
      />
    </g>
  </motion.svg>
);

export default ImplantsIcon;
