"use client";

import { EXPERIENCES } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="min-h-screen w-full flex items-center justify-center relative py-20 pointer-events-auto">
      <div className="max-w-6xl w-full px-4 md:pl-24">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center">
          Experience
        </h2>

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
                {/* Mobile Dot (optional, beam handles it generally but good for mobile backup) */}
                <div className="md:hidden absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-black flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Card */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                     <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-blue-400" />
                        {exp.role}
                     </h3>
                     <span className="text-sm font-mono text-neutral-400 bg-white/5 px-2 py-1 rounded">
                        {exp.period}
                     </span>
                  </div>
                  <div className="text-lg text-blue-200 mb-2">{exp.company}</div>
                  <p className="text-neutral-400 leading-relaxed">
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
