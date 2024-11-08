import React, { useRef, useState } from "react";
import { useIntersectionObservers } from "@/hooks/use-intersection-observers";
import { cn } from "@/lib/utils";

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  transitionSize?: boolean;
}

const AnimatedElement = ({
  children,
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
    <div
      ref={elementRef}
      className={cn(
        "transition-all duration-500 ease-in-out will-change-transform will-change-opacity origin-center",
        isVisible ? "opacity-100" : "opacity-50",
        isVisible && transitionSize
          ? "scale-100"
          : transitionSize && !isVisible
          ? "scale-95"
          : ""
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
