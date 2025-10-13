"use client";

// component imports
import { ReactLenis } from "lenis/react";
// component imports

// react imports
import { useEffect, useRef } from "react";
// react imports

export default function SmoothScroll() {
  const lenisRef = useRef(null);
  useEffect(() => {
    let rafId;

    const loop = (time) => {
      lenisRef.current?.lenis?.raf(time);
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafId);
  }, []);
  return (
    <>
      <ReactLenis
        root
        options={{ autoRaf: false, duration: 3 }}
        smoothWheel={true}
        ref={lenisRef}
      >
        <div className="h-screen bg-amber-950">w</div>
        <div className="h-screen bg-amber-950">w</div>
        <div className="h-screen bg-amber-950">w</div>
        <div className="h-screen bg-amber-950"></div>
        <div className="h-screen bg-amber-950"></div>
        <div className="h-screen bg-amber-950"></div>
        <div className="h-screen bg-amber-950"></div>
        <div className="h-screen bg-amber-950"></div>
        <div className="h-screen bg-amber-950"></div>
        <div className="h-screen bg-amber-950"></div>
      </ReactLenis>
    </>
  );
}
