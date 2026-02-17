"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionArrowProps {
  nextSectionId: string;
}

export default function SectionArrow({ nextSectionId }: SectionArrowProps) {
  const scrollToNext = () => {
    const section = document.getElementById(nextSectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] pointer-events-auto cursor-pointer bg-red-500 p-4 rounded-full" onClick={scrollToNext}>
       <motion.div 
         animate={{ y: [0, 10, 0] }}
         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
         className="group"
       >
          <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:bg-white/20 hover:scale-110 transition-all duration-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-white/80 group-hover:text-white"
            >
              <path d="M7 13l5 5 5-5" />
              <path d="M7 6l5 5 5-5" />
            </svg>
          </div>
       </motion.div>
    </div>
  );
}
