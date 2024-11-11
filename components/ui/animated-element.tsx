"use client";

import React, { useRef, useState } from "react";
import { useIntersectionObservers } from "@/hooks/use-intersection-observers";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  transitionSize?: boolean;
}

const AnimatedElement = ({
  children,
  className,
  threshold = 0.1,
  transitionSize = false,
}: AnimatedElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useIntersectionObservers({
    intersectionTargets: [
      {
        ref: elementRef,
        onIntersect: () => setIsVisible(true),
      },
    ],
    intersectionThreshold: threshold,
  });

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{
        opacity: isVisible ? 1 : 0.5,
        scale: isVisible && transitionSize ? 1 : 0.98,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn("origin-center", className ? className : "")}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
