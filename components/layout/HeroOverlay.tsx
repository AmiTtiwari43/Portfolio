"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/lib/data";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

function LeetCodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  );
}

export default function HeroOverlay() {
  return (
    <section id="hero" className="min-h-screen w-full flex flex-col items-center justify-start pt-[80px] pointer-events-none relative z-20 select-none">
      <div className="text-center p-4 max-w-3xl mx-auto flex flex-col items-center gap-6 scale-90 md:scale-95">
        {/* Profile Picture */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl pointer-events-auto">
             <Image 
                src="https://github.com/AmiTtiwari43.png" 
                alt="Amit Tiwari" 
                fill 
                className="object-cover"
                priority
             />
        </div>

        <div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 pb-2">
                AMIT TIWARI
            </h1>
            <div className="text-xl md:text-3xl text-neutral-400 font-light mb-6">
               <TextGenerateEffect words="Fullstack Developer" />
            </div>
            
            <p className="text-neutral-300 md:text-lg max-w-2xl mx-auto leading-relaxed bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-white/5 pointer-events-auto">
                Passionate Full Stack Developer dedicated to creating intuitive and scalable web applications. 
                I specialize in building responsive, high-performance solutions using modern technologies. 
                My focus is on delivering seamless user experiences and robust backend systems.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pointer-events-auto">
                <a 
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-105 text-white backdrop-blur-md group"
                >
                  <Github className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all hover:scale-105 text-blue-100 backdrop-blur-md group"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a 
                  href={SOCIAL_LINKS.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 transition-all hover:scale-105 text-orange-100 backdrop-blur-md group"
                >
                  <LeetCodeIcon className="w-5 h-5 group-hover:text-orange-400 transition-colors fill-current" />
                  <span className="font-medium">LeetCode</span>
                </a>

                <a 
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 transition-all hover:scale-105 text-red-100 backdrop-blur-md group"
                >
                  <Mail className="w-5 h-5 group-hover:text-red-400 transition-colors" />
                  <span className="font-medium">Mail</span>
                </a>

                <a 
                  href={SOCIAL_LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-all hover:scale-105 text-emerald-100 backdrop-blur-md group"
                >
                  <FileText className="w-5 h-5 group-hover:text-emerald-400 transition-colors" />
                  <span className="font-medium">Resume</span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
