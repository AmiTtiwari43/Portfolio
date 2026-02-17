"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const { active, progress } = useProgress();
  const [show, setShow] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // When loading is finished (active is false and progress 100)
    if (progress === 100) {
      // Small delay to ensure smooth exit
      const timer = setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => setShow(false),
        });

        tl.to(textRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            ease: "power2.inOut",
        })
        .to(containerRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", // Curtain effect
            duration: 0.8,
            ease: "power4.inOut",
        });
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [progress]);

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div ref={textRef} className="flex flex-col items-center gap-4">
        <div className="text-6xl md:text-9xl font-bold font-mono tracking-tighter">
          {Math.round(progress)}
        </div>
        <div className="text-sm uppercase tracking-widest text-[#555]">
          Loading Experience
        </div>
      </div>
    </div>
  );
}
