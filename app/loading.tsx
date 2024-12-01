"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { pulsingIconVariants } from "./globals/constants";

type LoadingProps = {
  showText?: boolean;
};

export default function Loading({ showText = false }: LoadingProps) {
  return (
    <div className="flex-grow flex items-center justify-center h-full w-full bg-background/80 backdrop-blur-sm">
      <div className="text-center w-1/5">
        <motion.div
          variants={pulsingIconVariants}
          initial="initial"
          animate="animate"
        >
          <Image
            src="/logo-mark-white.png"
            alt="Dr Mo Smiles"
            width={280}
            height={75}
            priority
          />
        </motion.div>
        {showText && (
          <>
            <h2 className="mt-4 text-xl font-semibold text-foreground">
              Loading...
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Please wait while we prepare your content.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
