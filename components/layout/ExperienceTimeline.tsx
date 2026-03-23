"use client";

import { EXPERIENCES } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="min-h-screen w-full flex items-center justify-center relative py-24 pointer-events-auto">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-secondary/5 blur-[100px] rounded-full -z-10" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-accent-secondary/20 bg-accent-secondary/5 text-[10px] text-accent-secondary uppercase tracking-[0.3em] mb-4">
            Professional_Log::04
          </div>
          <h2 className="text-4xl md:text-8xl font-bold colorful-gradient-text tracking-tighter uppercase">
            Experience
          </h2>
        </motion.div>

        <TracingBeam className="px-6">
          <div className="relative ml-0 md:ml-4 space-y-12 pt-10">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Mobile Dot */}
                <div className="md:hidden absolute -left-3 top-0 w-6 h-6 rounded-full bg-accent-secondary border-4 border-black flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Card */}
                <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 text-[8px] text-accent-secondary/40 tracking-[0.4em] font-bold">POS_DATA_EXTRACT</div>
                   
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                     <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Briefcase className="w-6 h-6 text-accent-secondary" />
                        {exp.role}
                     </h3>
                     <span className="text-xs font-mono text-accent-secondary bg-accent-secondary/10 px-3 py-1 rounded-full border border-accent-secondary/20">
                        {exp.period}
                     </span>
                  </div>
                  <div className="text-lg text-accent-primary font-medium mb-4">{exp.company}</div>
                  <p className="text-neutral-400 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
