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
        className="bg-transparent border-neutral-800 dark:bg-slate-900/50 text-black dark:text-white border-none"
        containerClassName="w-[20rem] h-[25rem]" // Increased height for buttons
        duration={3000}
      >
        <div className="flex flex-col p-4 tracking-tight sm:basis-[20rem] w-[20rem] h-full relative">
          {/* Click Badge */}
          <div className="absolute top-2 right-2 z-20 opacity-0 group-hover/card:opacity-100 transition-opacity bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] px-2 py-1 rounded-full uppercase tracking-widest font-bold">
            Expand
          </div>

          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 uppercase tracking-widest">
            {project.title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 line-clamp-2 text-sm">
              {project.description}
            </span>
          </div>
          
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 overflow-hidden relative min-h-[10rem]">
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
          
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400"
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
                   className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                   title="View Source"
                 >
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 4-.25.26-.5.54-.73.83-2.64-3.5-5.36-4.5-8-4 0 0-.28 1.15 0 3.5.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                 </a>
               )}
               {project.liveUrl && project.liveUrl !== "#" && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 hover:bg-purple-500/40 text-purple-300 transition-colors border border-purple-500/30"
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
