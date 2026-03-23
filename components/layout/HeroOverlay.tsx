"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, TerminalIcon, Cpu, Globe } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";
import Image from "next/image";

export default function HeroOverlay() {
  return (
    <div className="relative z-50 flex flex-col items-center justify-center min-h-[90vh] text-center px-4 overflow-hidden">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent-secondary/5 blur-[100px] rounded-full -z-10" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mb-12"
        >
          {/* Pulsing Outer Rings with Accent Colors */}
          <div className="absolute inset-0 -m-8 border border-accent-primary/20 rounded-full animate-[pulse-ring_4s_infinite]" />
          <div className="absolute inset-0 -m-12 border border-accent-secondary/10 rounded-full animate-[pulse-ring_6s_infinite_1s]" />
          
          <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-2 border-accent-primary/50 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
            <Image
              src="/My Picture.jpeg"
              alt="Amit Tiwari"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Small Floating HUD Elements with Color */}
          <div className="absolute -top-4 -right-4 bg-accent-primary/10 border border-accent-primary/30 px-3 py-1 rounded-lg backdrop-blur-md">
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent-primary rounded-full animate-pulse" />
                <span className="text-[10px] text-accent-primary font-bold tracking-[0.2em]">NODE_ACTIVE</span>
            </div>
          </div>
          <div className="absolute -bottom-2 -left-8 bg-accent-secondary/10 border border-accent-secondary/30 px-3 py-1 rounded-lg backdrop-blur-md">
            <div className="flex items-center gap-2">
                <Cpu className="w-3 h-3 text-accent-secondary" />
                <span className="text-[10px] text-accent-secondary font-bold tracking-[0.2em]">SYS_READY</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent-tertiary/20 bg-accent-tertiary/5 text-[10px] text-accent-tertiary uppercase tracking-[0.4em] font-bold mb-4">
            AmiT Tiwari // Full_Stack_Engine
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black colorful-gradient-text tracking-tighter uppercase leading-[0.9]">
            Architecting <br /> 
            <span className="text-white">Neural</span> Interfaces
          </h1>
          
          <p className="max-w-xl mx-auto text-neutral-400 text-lg font-light leading-relaxed">
            Developing high-performance digital ecosystems with precision, <br/> and futuristic design patterns.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            <a 
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-all hover:scale-105 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent-primary translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-20 skew-x-12" />
              <Github className="w-4 h-4" />
              Github_Hub
            </a>

            <a 
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:border-accent-secondary/50 hover:bg-accent-secondary/5 transition-all hover:scale-105 group"
            >
              <Globe className="w-4 h-4 text-accent-secondary group-hover:animate-pulse" />
              Leet_Protocol
            </a>
            
            <a 
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs hover:border-accent-secondary/50 hover:bg-accent-secondary/5 transition-all hover:scale-105 group"
            >
              <Linkedin className="w-4 h-4 text-accent-secondary group-hover:animate-pulse" />
              Link_Network
            </a>

            <a 
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-accent-tertiary/10 border border-accent-tertiary/20 text-accent-tertiary font-bold uppercase tracking-widest text-xs hover:bg-accent-tertiary/20 transition-all hover:scale-105 group"
            >
              <FileText className="w-4 h-4" />
              Fetch_Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-10 left-10 flex items-center gap-3 text-neutral-600">
        <div className="w-1.5 h-1.5 bg-accent-primary rounded-full" />
        <span className="text-[10px] font-mono tracking-[0.3em]">LATENCY: 12MS</span>
      </div>
      <div className="absolute bottom-10 right-10 flex items-center gap-3 text-neutral-600">
        <span className="text-[10px] font-mono tracking-[0.3em]">LOC: 28.61N, 77.20E</span>
        <Globe className="w-4 h-4" />
      </div>
    </div>
  );
}
