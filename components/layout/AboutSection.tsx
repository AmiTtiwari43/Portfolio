"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-transparent py-20 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20 opacity-50" fill="white" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-2">My Journey</h2>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            About Me
          </h1>
        </motion.div>

        <div className="flex justify-center">
          {/* Main Info Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-2">
                <Code2 className="w-6 h-6 text-blue-400" />
                Who I Am
              </h3>
              <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
                <p>
                  I'm a <span className="text-white font-medium">Full Stack Developer</span> dedicated to building scalable and immersive digital experiences. With a strong foundation in the MERN stack and Next.js, I bridge the gap between complex backend architecture and fluid frontend design.
                </p>
                <p>
                  My experience spans from healthcare systems to interactive 3D web applications. I thrive on solving technical challenges, having tackled <span className="text-white font-medium">600+ problems on LeetCode</span>, ensuring every application I build is both performant and robust.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-colors">
                    <Rocket className="w-4 h-4 text-orange-400" />
                    <span className="text-sm text-neutral-400">Project Focused</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-white/10 transition-colors">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-neutral-400">Efficient Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
