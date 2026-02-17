"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  User, 
  Cpu, 
  FolderOpen, 
  Briefcase, 
  Trophy, 
  Mail
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll to top on load
  useEffect(() => {
     // Disable browser's default scroll restoration
     if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
     }
     window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If intersecting, set it as active.
          // We use a broader threshold to catch it sooner
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2, // Lower threshold triggers sooner
        rootMargin: "-20% 0px -35% 0px", // Focus on the middle-upper part of the screen
      }
    );

    // Initial check and observe
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id); // Immediate UI update
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-6 pointer-events-auto perspective-1000">
      <div className="relative flex flex-col gap-4 p-4 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
        {/* Decorative 3D line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -z-10" />

        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          
          return (
            <div key={item.id} className="relative group flex items-center justify-center">
              {/* Tooltip Label */}
              <AnimatePresence>
                {/* Show label on hover or if active? Maybe just hover for cleanliness */}
                <div className="absolute left-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs whitespace-nowrap shadow-lg">
                    {item.label}
                  </div>
                </div>
              </AnimatePresence>

              <motion.button
                onClick={() => scrollToSection(item.id)}
                className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? "bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.3)] border-white/30" 
                    : "bg-transparent hover:bg-white/5 border-transparent hover:border-white/10"
                } border`}
                whileHover={{ 
                  scale: 1.2, 
                  rotateX: 10,
                  rotateY: -10,
                  z: 50
                }}
                whileTap={{ scale: 0.9 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                aria-label={item.label}
              >
                {/* 3D Inner Glow for Active State */}
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 rounded-full bg-blue-500/20 blur-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {React.createElement(item.icon, {
                  className: `w-5 h-5 transition-colors duration-300 ${
                    isActive ? "text-blue-400" : "text-white/60 group-hover:text-white"
                  }`
                })}
              </motion.button>
            </div>
          );
        })}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex md:hidden items-center justify-between gap-1 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl max-w-[95vw] overflow-x-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
             <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-2 rounded-full transition-all shrink-0 ${isActive ? "bg-white/20 text-white" : "text-white/50"}`}
                aria-label={item.label}
             >
               {React.createElement(item.icon, {
                 className: "w-4 h-4 sm:w-5 sm:h-5"
               })}
             </button>
          );
        })}
      </div>
    </div>
  );
}
