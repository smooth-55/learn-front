"use client";

import { Loader } from "@/components/atoms";
import { useEffect, useState } from "react";

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isDOMLoaded, setIsDOMLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsDOMLoaded(true);
    };
    if (document.readyState === "complete") {
      setIsDOMLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isDOMLoaded) {
    return <Loader />;
  }

  return <>{children}</>;
};

export { LoaderWrapper };
