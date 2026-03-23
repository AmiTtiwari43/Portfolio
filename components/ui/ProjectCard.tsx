"use client";

import { Button as MovingBorderContainer } from "./moving-border";
import { Project } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const [isLoading, setIsLoading] = useState(true);
  const thumbnailSrc = project.liveUrl && project.liveUrl !== "#" 
    ? `https://api.microlink.io/?url=${encodeURIComponent(project.liveUrl)}&screenshot=true&meta=false&embed=screenshot.url&waitFor=5000&prerender=true`
    : project.image;

  return (
    <div 
      className="flex items-center justify-center w-full cursor-pointer group/card"
      onClick={onOpen}
    >
      <MovingBorderContainer
        borderRadius="1.75rem"
        className="bg-transparent border-none"
        containerClassName="w-full h-[25rem]"
        duration={3000}
      >
        <div className="flex flex-col p-6 glass-card rounded-[1.75rem] w-full h-full relative overflow-hidden group">
          {/* Decorative Edge Glow */}
          <div className="absolute top-0 right-0 p-4 text-[8px] text-accent-primary/40 tracking-[0.4em] font-bold">PROJECT_NODE</div>

          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-white uppercase tracking-tighter">
            {project.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-neutral-400 font-light line-clamp-2 text-sm">
              {project.description}
            </span>
          </div>
          
          <div className="flex flex-1 w-full rounded-2xl mt-6 bg-accent-primary/5 border border-white/5 overflow-hidden relative min-h-[10rem]">
             <Image
              src={thumbnailSrc}
              alt={project.title}
              fill
              className={`object-cover transition-transform duration-500 group-hover/card:scale-110 ${
                isLoading ? "blur-lg" : "blur-0"
              }`}
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div className="flex items-center justify-between mt-auto pt-6">
            <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-500 font-mono"
                  >
                    {t}
                  </span>
                ))}
            </div>
            
            <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
               {project.githubUrl && (
                 <a 
                   href={project.githubUrl} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 hover:bg-accent-primary hover:text-white transition-all duration-300 text-neutral-500 border border-white/10"
                   title="View Source"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 4-.25.26-.5.54-.73.83-2.64-3.5-5.36-4.5-8-4 0 0-.28 1.15 0 3.5.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                 </a>
               )}
               {project.liveUrl && project.liveUrl !== "#" && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-secondary/10 hover:bg-accent-secondary text-accent-secondary hover:text-white transition-all duration-300 border border-accent-secondary/20"
                  title="Live Demo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                </a>
               )}
            </div>
          </div>
        </div>
      </MovingBorderContainer>
    </div>
  );
}
