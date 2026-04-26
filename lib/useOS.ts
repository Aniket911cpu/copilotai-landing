"use client";

import { useState, useEffect } from "react";

export type OS = "windows" | "macos" | "linux" | "mobile" | "unknown";

export function useOS() {
  const [os, setOS] = useState<OS>("unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    
    if (userAgent.indexOf("win") !== -1) setOS("windows");
    else if (userAgent.indexOf("mac") !== -1) setOS("macos");
    else if (userAgent.indexOf("linux") !== -1) setOS("linux");
    else if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent)) setOS("mobile");
    else setOS("unknown");
  }, []);

  return os;
}
