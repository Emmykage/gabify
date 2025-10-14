"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
const ScrollToTopWrapper = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
};

export default ScrollToTopWrapper;
