import { colors } from "@/constants";

export const navBarHeight = 72;

export const linkFramerVariants = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.05,
  },
  whileTap: {
    scale: 0.95, // Scale down effect on tap
  },
};

export const iconFramerVariants = {
  initial: {
    fill: "white",
    filter: "drop-shadow(0px 0px 0px rgba(229, 185, 77, 0))",
  },
  whileHover: {
    fill: [colors.dental.deepBlue, colors.dental.teal, colors.dental.deepBlue],
    transition: {
      fill: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  },
  whileTap: {
    fill: [colors.dental.deepBlue, colors.dental.teal, colors.dental.deepBlue],
    transition: {
      fill: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  },
};

export const homeIconVariants = {
  initial: {
    fill: colors.dental.navy,
  },
  whileHover: {
    fill: colors.dental.teal,
    transition: {
      fill: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
  whileTap: {
    fill: colors.dental.teal,
    transition: {
      fill: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
};

export const homeCardVariants = {
  initial: {
    scale: 1,
    boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
  },
  whileHover: {
    scale: 1.05,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: {
      scale: { type: "spring", stiffness: 300 },
      boxShadow: { type: "spring", stiffness: 300 },
    },
  },
  whileTap: {
    scale: 0.95,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: {
      scale: { type: "spring", stiffness: 300 },
      boxShadow: { type: "spring", stiffness: 300 },
    },
  },
};
