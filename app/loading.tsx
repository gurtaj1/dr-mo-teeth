"use client";

import ToothLogoDark from "./svg-components/pulsing-tooth-logo-dark";

export default function Loading() {
  return (
    <div className="flex-grow flex items-center justify-center h-full w-full bg-background/80 backdrop-blur-sm">
      <div className="text-center">
        {/* <ReloadIcon className="h-16 w-16 animate-spin text-primary mx-auto" /> */}
        <ToothLogoDark className="h-16 w-16 mx-auto" />
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Loading...
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Please wait while we prepare your content.
        </p>
      </div>
    </div>
  );
}
