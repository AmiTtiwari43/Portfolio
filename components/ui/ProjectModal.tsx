"use client";

import { Project } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function ProjectModal({ project, isOpen, onClose, onNext, onPrev }: ProjectModalProps) {
  // Prevent scroll and handle keyboard navigation when modal is open
  // Handle scroll lock separately
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle keyboard navigation separately
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onNext, onPrev, onClose]);

  if (!project) return null;

  const thumbnailSrc = project.liveUrl && project.liveUrl !== "#" 
    ? `https://api.microlink.io/?url=${encodeURIComponent(project.liveUrl)}&screenshot=true&meta=false&embed=screenshot.url&waitFor=5000&prerender=true`
    : project.image;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md z-0"
          />

          {/* Navigation Buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-10 pointer-events-none z-10">
             <motion.button
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               onClick={(e) => { e.stopPropagation(); onPrev?.(); }}
               className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all backdrop-blur-md border border-white/10 pointer-events-auto group"
             >
               <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
             </motion.button>
             <motion.button
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               onClick={(e) => { e.stopPropagation(); onNext?.(); }}
               className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all backdrop-blur-md border border-white/10 pointer-events-auto group"
             >
               <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
             </motion.button>
          </div>

          {/* Modal Content Wrapper (To catch clicks outside modal content) */}
          <div 
            className="relative z-20 w-fit h-fit pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-5xl bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button - Moved slightly and increased z-index */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-4 right-4 z-[60] p-2 rounded-full bg-black/50 text-white/70 hover:text-white transition-colors border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

            {/* Left: Image Preview */}
            <div className="relative w-full md:w-3/5 h-[250px] md:h-auto bg-black overflow-hidden group">
               <Image
                 src={thumbnailSrc}
                 alt={project.title}
                 fill
                 className="object-cover md:object-contain transition-transform duration-700 group-hover:scale-105"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none md:hidden" />
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-2/5 p-6 md:p-8 overflow-y-auto custom-scrollbar flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {project.title}
              </h2>
              
              <p className="text-neutral-400 text-sm md:text-base mb-6 leading-relaxed line-clamp-4 hover:line-clamp-none transition-all">
                {project.description}
              </p>

              {/* Features List */}
              {project.features && project.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-white text-sm font-semibold mb-3 tracking-widest uppercase">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-neutral-300 text-[13px]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-white text-sm font-semibold mb-3 tracking-widest uppercase">Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-400 text-[10px] font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-white/10">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 text-white text-sm font-bold hover:bg-white/20 border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )}
    </AnimatePresence>
  );
}
