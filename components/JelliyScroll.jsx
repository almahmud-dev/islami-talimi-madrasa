"use client";

import { useEffect } from "react";
import Jelliy from "jelliy";

export default function JelliyScroll() {
  useEffect(() => {
    const jelliy = new Jelliy({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    return () => {
      jelliy.destroy();
    };
  }, []);

  return null;
}
