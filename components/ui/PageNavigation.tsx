"use client";
import React from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";

const SECTIONS = ["hero", "about", "skills", "projects", "experience", "achievements", "contact"];

export default function PageNavigation() {
  
  const scrollToRelative = (direction: 'next' | 'prev') => {
    // Find current scroll position
    const scrollY = window.scrollY;
    // Buffer for fuzzy matching
    const buffer = 100;

    let targetSectionId = SECTIONS[0]; // Default

    // Logic: Find the first section that satisfies the condition relative to current scroll
    if (direction === 'next') {
        // Find first section starting BELOW current view
        for (const id of SECTIONS) {
            const el = document.getElementById(id);
            if (el) {
                if (el.offsetTop > scrollY + buffer) {
                    targetSectionId = id;
                    break;
                }
            }
        }
    } else {
        // Find closest section ABOVE current view
        // Iterate backwards
        for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const id = SECTIONS[i];
            const el = document.getElementById(id);
            if (el) {
                if (el.offsetTop < scrollY - buffer) {
                    targetSectionId = id;
                    break;
                }
            }
        }
    }

    const section = document.getElementById(targetSectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4 pointer-events-auto">
      {/* UP Arrow */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToRelative('prev')}
        className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-colors group"
        aria-label="Scroll Up"
      >
        <ChevronUp className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
      </motion.button>

      {/* DOWN Arrow */}
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToRelative('next')}
        className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-colors group"
        aria-label="Scroll Down"
      >
        <ChevronDown className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
      </motion.button>
    </div>
  );
}
