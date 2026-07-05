"use client";

import React, { useEffect } from "react";
import { initLenis } from "@/lib/lenis";

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const lenisInstance = initLenis();
    return () => {
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
};
export default SmoothScroll;
