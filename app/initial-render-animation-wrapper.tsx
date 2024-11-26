"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";

export default function InitialRenderAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [renderChildren, setRenderChildren] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRenderChildren(true);
    }, 2000);
  }, []);

  return renderChildren ? children : <Loading />;
}
