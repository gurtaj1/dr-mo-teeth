import { motion } from "framer-motion";
import type { MotionSVGProps } from "./types";

const ExtractionsIcon = (props: MotionSVGProps) => (
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
      d="M95.64 506c-15.37 0-27.91-12.54-27.91-27.92V373.92h79.56c12.29 0 22.51 9.35 23.49 21.64 2.46 30.13 16.85 54.35 43.04 72.55 4.67 1.97 7.5.49 8.48-4.43v-23.86c7.63-1.72 13.9-8.36 13.9-17.34v-42.8c5.66-4.18 12.67-6.52 19.8-6.52s14.14 2.33 19.8 6.52v42.8c0 8.98 6.27 15.62 13.9 17.34v23.86c.98 4.92 3.81 6.4 8.49 4.43 26.19-18.2 40.58-42.43 43.04-72.55.99-12.3 11.19-21.64 23.49-21.64h79.56v104.16c0 15.37-12.54 27.92-27.92 27.92H95.64zM141.39 6l57.06 48.45L241 6h-99.61zm114.61 329.93c-17.84 0-32.34 14.39-32.34 32.22v54.48c0 4.06-4.68 6.52-7.99 4.18-33.69-23.37-46.98-56.81-39.85-100.47 1.11-6.64-.12-8.24-3.32-13.65-14.63-25.7-16.35-54.11-8.61-81.53 12.3-32.46 35.79-37.63 70.59-15.49 13.77 5.29 29.26 5.29 43.04 0 34.8-22.14 58.29-16.97 70.58 15.49 7.75 27.42 6.03 55.83-8.73 81.53-3.08 5.41-4.31 7.01-3.2 13.65 7.13 43.65-6.15 77.1-39.85 100.47-3.44 2.34-8.12-.12-7.99-4.18v-54.48c0-17.83-14.51-32.22-32.34-32.22h0zm-30.01-98.38c-3.2-1.23-4.8-4.92-3.56-8.11 1.23-3.2 4.8-4.8 7.99-3.57 8.24 3.2 16.84 4.79 25.58 4.79s17.34-1.6 25.58-4.79c3.2-1.23 6.77.37 7.99 3.57 1.23 3.2-.37 6.88-3.56 8.11-9.71 3.69-19.92 5.54-30 5.54s-20.29-1.84-30.01-5.54h0zM370.49 6L145.82 196.73l-.87 105.63c-.24 5.66-4.06 10.45-9.59 11.93-8.23 2.21-13.4-2.46-15.25-9.96l-27.55-110.31L257.6 6h112.89zm-114.49 41.44c6.52 0 11.8 5.29 11.8 11.68s-5.29 11.81-11.81 11.81-11.81-5.29-11.81-11.81 5.29-11.68 11.81-11.68h0zm9.59 63.95l100.59 85.34.86 105.63c.24 5.66 4.05 10.45 9.47 11.93 8.36 2.21 13.53-2.46 15.37-9.96l27.55-110.31-107.23-122.11-46.6 39.48z"
    />
  </motion.svg>
);

export default ExtractionsIcon;
