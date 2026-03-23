"use client";

import { motion } from "framer-motion";
import { Code2, Target, Zap, ChevronRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export default function AboutSection() {
  const metrics = [
    { label: "LeetCode_Solved", value: "600+", icon: Code2, color: "text-accent-primary", progress: 85 },
    { label: "Active_Streak", value: "200D", icon: Zap, color: "text-accent-secondary", progress: 70 },
    { label: "Neural_Accuracy", value: "98%", icon: Target, color: "text-accent-tertiary", progress: 98 }
  ];

  return (
    <section id="about" className="min-h-screen w-full relative flex items-center justify-center py-20 overflow-hidden pointer-events-auto">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 rounded-full border border-accent-primary/20 bg-accent-primary/5 text-[10px] text-accent-primary uppercase tracking-[0.3em] mb-6">
              Core_Identity::02
            </div>
            
            <h2 className="text-4xl md:text-7xl font-bold colorful-gradient-text tracking-tighter uppercase mb-8">
              Human_Interface <br /> 
              <span className="text-white">Protocol</span>
            </h2>

            <div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
              <p>
                I'm a <span className="text-white font-medium">Full Stack Architect</span> specializing in high-performance digital ecosystems. My workflow merges robust backend engineering with fluid, futuristic interface design.
              </p>
              <p>
                Currently evolving at <span className="text-accent-secondary">Lovely Professional University</span>, I focus on building systems that don't just work, but inspire. My approach is data-driven, security-first, and always pushing the boundaries of modern web standards.
              </p>

              <div className="pt-8">
                 <a 
                   href={SOCIAL_LINKS.leetcode} 
                   target="_blank" 
                   className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] font-bold text-accent-secondary hover:text-white transition-colors group"
                 >
                    Access_Neural_Metrics
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                 </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 text-[8px] text-accent-primary/40 tracking-[0.4em] font-bold">BIO_DATA_EXTRACT</div>
               
               <div className="space-y-10">
                  {metrics.map((metric, i) => (
                    <div key={metric.label} className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <metric.icon className={`w-5 h-5 ${metric.color}`} />
                                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">{metric.label}</span>
                            </div>
                            <span className="text-lg font-mono text-white">{metric.value}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${metric.progress}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: i * 0.2 }}
                                className={`h-full bg-gradient-to-r from-transparent via ${metric.color.replace('text-', 'bg-')} to-white/20`}
                            />
                        </div>
                    </div>
                  ))}
               </div>

               {/* Decorative holographic circles */}
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-secondary/5 blur-[50px] rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
