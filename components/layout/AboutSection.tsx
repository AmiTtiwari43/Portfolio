"use client";
import { Spotlight } from "@/components/ui/spotlight";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-transparent antialiased">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-4 max-w-5xl mx-auto relative z-10 w-full pt-20 md:pt-0 md:pl-24 pointer-events-auto"
      >
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          About Me
        </h1>
        <div className="mt-8 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto p-6 bg-transparent border border-white/10 rounded-2xl shadow-xl">
          <p className="mb-4">
            I am a passionate Full Stack Developer tailored for high-impact web experiences.
            With a focus on 3D interaction and cinematic performance, I bring designs to life.
          </p>
          <p>
            Specializing in Next.js, Three.js, and modern UI libraries to create immersive digital journeys.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
