"use client";

import { useEffect } from "react";
import Jelliy from "jelliy";

export default function JelliyScroll() {
  useEffect(() => {
    const jelliy = new Jelliy({
      lerp: 0.08,
      duration: 0.8,
      smoothWheel: true,
      smoothTouch: false,
    });

    return () => {
      jelliy.destroy();
    };
  }, []);

  return null;
}
