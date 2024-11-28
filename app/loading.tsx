"use client";

import PulsingDrMoWithToothInCircle from "./svg-components/pulsing-dr-mo-with-tooth-in-circle";

type LoadingProps = {
  showText?: boolean;
};

export default function Loading({ showText = false }: LoadingProps) {
  return (
    <div className="flex-grow flex items-center justify-center h-full w-full bg-background/80 backdrop-blur-sm">
      <div className="text-center w-1/5">
        <PulsingDrMoWithToothInCircle />
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
