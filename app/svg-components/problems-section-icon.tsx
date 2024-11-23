import { motion } from "framer-motion";
import type { MotionSVGProps } from "./types";

const ProblemsSectionIcon = (props: MotionSVGProps) => (
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
      d="M359.93 322.44c8.69 0 17.21 2.09 24.84 6.08l-21.03 138.49c-1.08 3.07-2.83 5.42-5.2 7-.72.48-1.51.89-2.34 1.23-1.73.7-3.65 1.07-5.61 1.07-.99 0-1.98-.1-2.94-.29-1.83-.36-3.55-1.05-5.01-2.02-2.37-1.58-4.12-3.93-5.2-7-3.99-11.3-7.83-101.86-11.55-113.15l-.06-.18c-1.57-4.78-3.2-9.7-4.83-14.6.15-.12.3-.25.44-.39 10.2-10.48 23.87-16.25 38.49-16.25h0z"
    />
    <path
      //       className="cls-1"
      d="M436.47 176.12c-.49 21.87-10.07 44.18-20.2 67.8-4.52 10.53-9.19 21.42-13.1 32.49l-15.54 44.03c-8.56-4.26-18.04-6.5-27.69-6.5-1.8 0-3.59.07-5.36.23.45-3.25.94-6.57 1.49-9.96 1.72-10.66 4-23.57 7.33-36.83 4.46-9.71 12.12-17.84 22.78-24.18 8.18-4.87 15.14-6.78 15.21-6.8 2.26-.61 3.6-2.93 3-5.19-.6-2.26-2.93-3.61-5.2-3.01-.32.09-7.96 2.16-17.12 7.56-4.29 2.53-8.22 5.39-11.73 8.52 4.76-13.96 8.39-27.03 6.96-42.61-1.52-16.53-7.35-33.02-16.87-47.7-1.28-1.97-3.9-2.53-5.87-1.25-1.97 1.28-2.53 3.9-1.25 5.87 8.77 13.53 14.15 28.69 15.54 43.85.87 9.49-.34 17.92-2.64 26.54-2.23-6.88-5.82-12.74-10.74-17.52-14.08-13.67-33.83-13.24-34.66-13.22-2.34.07-4.19 2.03-4.12 4.37.07 2.34 2.02 4.19 4.36 4.12.17 0 17.11-.29 28.56 10.88 7.04 6.86 10.68 16.74 10.85 29.37-6.5 19.65-10.24 40.16-12.77 55.88-.7 4.33-1.32 8.56-1.85 12.69-3.58.83-7.09 1.98-10.5 3.46-6.35 2.74-12.13 6.47-17.23 11.11-.71-2.39-1.44-5.01-2.2-7.71l-.18-.63c-.5-1.78-1.02-3.62-1.55-5.48-4.93-17.16-20.24-28.69-38.1-28.69s-33.28 11.6-38.16 28.87c-.4 1.4-.78 2.8-1.17 4.19-1.24 4.47-2.42 8.69-3.61 12.21-5.54 16.33-12.13 114.54-19.05 134.13-1.08 3.07-2.83 5.43-5.2 7-1.55 1.03-3.38 1.74-5.32 2.08 6.17-25.93 6.15-134.99 0-173.22-2.53-15.72-6.27-36.23-12.77-55.88.17-12.63 3.81-22.51 10.85-29.37 11.45-11.17 28.39-10.88 28.56-10.88 2.34.07 4.29-1.78 4.36-4.12.07-2.34-1.77-4.3-4.12-4.37-.83-.02-20.58-.45-34.66 13.22-4.92 4.78-8.51 10.64-10.74 17.52-2.3-8.63-3.51-17.06-2.64-26.54 1.39-15.16 6.76-30.33 15.54-43.85 1.28-1.97.72-4.6-1.25-5.87-1.97-1.28-4.6-.72-5.87 1.25-9.52 14.68-15.36 31.17-16.87 47.7-1.43 15.57 2.2 28.64 6.96 42.6-3.51-3.13-7.44-5.99-11.73-8.52-9.15-5.4-16.8-7.47-17.12-7.56-2.26-.6-4.59.74-5.2 3.01-.6 2.26.74 4.59 3.01 5.19.27.07 27.18 7.49 37.97 30.97 3.34 13.27 5.61 26.17 7.33 36.84 6.05 37.6 6.03 145.88-.11 170.92-.74-.31-1.43-.69-2.08-1.12-2.37-1.58-4.12-3.93-5.2-7l-11.03-110.13c-4.66-13.21-9.22-26.63-13.63-39.6-11.39-33.48-23.16-68.11-37.29-101.51-6.49-15.34-11.08-27.12-11.08-39.1 0-2.71.13-5.39.4-8.06 3.08.34 6.19.51 9.33.51 11.27 0 22.21-2.21 32.51-6.57 9.95-4.21 18.88-10.23 26.55-17.9s13.69-16.6 17.9-26.55c2.79-6.59 4.69-13.44 5.71-20.47 16.44 2.55 31.63 10.15 43.7 22.03 6.68 6.58 15.53 10.2 24.92 10.2s18.24-3.62 24.92-10.2c15.06-14.82 34.98-22.99 56.11-22.99 6.18 0 12.32.7 18.27 2.09 14.19 3.31 27.32 10.65 37.96 21.2 10.65 10.56 18.08 23.63 21.51 37.79 1.44 5.95 2.07 11.95 1.93 18.34h0z"
    />
    <path
      //       className="cls-1"
      d="M459.93 152.49c-9.17-37.91-39.83-68.32-77.81-77.19-7.82-1.82-15.84-2.74-23.87-2.74-28.59 0-54.5 11.47-73.38 30.06-4.23 4.17-11.07 4.17-15.3 0-16.13-15.89-37.4-26.58-61.09-29.35.65 4.21.97 8.49.97 12.81 0 1.2-.03 2.39-.08 3.57 18.39 2.74 35.39 11.18 48.87 24.45 5.08 5.01 11.82 7.76 18.97 7.76s13.88-2.76 18.97-7.76c16.65-16.4 38.7-25.43 62.07-25.43 6.82 0 13.62.78 20.2 2.31 15.73 3.67 30.25 11.78 42.01 23.45 11.76 11.67 19.98 26.13 23.78 41.83 1.61 6.68 2.32 13.39 2.16 20.52-.26 11.76-2.87 23.4-6.72 35.15-3.85 11.75-8.94 23.61-14.17 35.81-4.47 10.4-9.08 21.16-12.9 31.97l-17.2 48.74-22.22 141.85c-1.71 4.84-4.57 8.62-8.5 11.24-3.61 2.4-8.1 3.73-12.65 3.73s-9.05-1.32-12.66-3.73c-3.93-2.62-6.79-6.4-8.5-11.24-4.02-11.39-7.88-101.99-11.61-113.32l-.06-.18c-1.82-5.52-3.7-11.23-5.59-16.88-.15-.46-.31-.92-.46-1.38l-.29-.85c-1.2-3.57-2.42-7.92-3.71-12.54l-.18-.63c-.49-1.76-1.01-3.59-1.53-5.43-3.88-13.48-15.91-22.54-29.94-22.54s-26.16 9.12-29.99 22.69c-.39 1.39-.78 2.78-1.16 4.15-1.28 4.6-2.49 8.94-3.76 12.67-5.55 16.35-12.15 114.59-19.08 134.23-1.71 4.84-4.57 8.63-8.5 11.24-3.61 2.4-8.1 3.73-12.65 3.73s-9.04-1.32-12.66-3.73c-3.93-2.62-6.79-6.4-8.5-11.24l-11.03-110.13c-4.68-13.26-9.24-26.7-13.66-39.69-11.34-33.34-23.06-67.82-37.07-100.93-6.88-16.27-11.75-28.83-11.75-42.41 0-3.17.16-6.31.49-9.42-5.05-1.09-9.99-2.66-14.79-4.69-.28-.12-.56-.24-.84-.36-.66 4.73-.99 9.56-.99 14.47 0 17.38 6.38 32.98 13.03 48.69 17.03 40.25 44.59 129.25 49.63 194.46 1.45 18.79 5.4 37.29 11.67 55.07.04.1.07.21.11.31 12.11 34.31 60.62 34.31 72.73 0 6.51-18.46 12.85-115.87 19.14-134.42 1.82-5.35 3.41-11.43 5.16-17.62 4.11-14.55 24.73-14.61 28.91-.07 2.01 6.97 3.78 13.75 5.64 19.28 6.05 17.98 11.77 114.94 18.09 132.83 12.11 34.31 60.62 34.31 72.73 0 13.14-37.24 26.28-153.36 39.42-190.6 12.33-34.95 33.86-70.2 34.7-107.94.18-8.1-.59-16.32-2.61-24.68h0z"
    />
    <path
      //       className="cls-1"
      d="M128.71 35.75V104.2c0 2.34-1.9 4.24-4.24 4.24s-4.24-1.9-4.24-4.24V35.75c0-2.34 1.9-4.24 4.24-4.24s4.24 1.91 4.24 4.24h0z"
    />
    <path
      //       className="cls-1"
      d="M124.47 10.57c-41.38 0-75.04 33.66-75.04 75.04s33.66 75.04 75.04 75.04 75.04-33.66 75.04-75.04S165.85 10.57 124.47 10.57h0zm0 137.64c-7.02 0-12.73-5.71-12.73-12.73s5.71-12.73 12.73-12.73 12.73 5.71 12.73 12.73-5.71 12.73-12.73 12.73zm12.73-44c0 7.02-5.71 12.73-12.73 12.73s-12.73-5.71-12.73-12.73V35.75c0-7.02 5.71-12.73 12.73-12.73s12.73 5.71 12.73 12.73V104.2zm-12.73 27.02c-2.34 0-4.24 1.9-4.24 4.24s1.9 4.24 4.24 4.24 4.24-1.91 4.24-4.24-1.9-4.24-4.24-4.24z"
    />
  </motion.svg>
);

export default ProblemsSectionIcon;