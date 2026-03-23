"use client";

import { ACHIEVEMENTS } from "@/lib/data";
import { Trophy, Star, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function AchievementsSection() {
  const icons = [Trophy, Target, Star];

  return (
    <section id="achievements" className="min-h-[60vh] w-full flex flex-col items-center justify-center relative py-24 pointer-events-auto">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-tertiary/5 blur-[100px] rounded-full -z-10" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-accent-tertiary/20 bg-accent-tertiary/5 text-[10px] text-accent-tertiary uppercase tracking-[0.3em] mb-4">
            System_Milestones::03
          </div>
          <h2 className="text-4xl md:text-8xl font-bold colorful-gradient-text tracking-tighter uppercase">
            Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            const colors = ["text-accent-primary", "text-accent-secondary", "text-accent-tertiary"];
            const iconBg = ["bg-accent-primary/10", "bg-accent-secondary/10", "bg-accent-tertiary/10"];
            const iconColor = colors[index % colors.length];
            
            const CardContent = (
              <>
                <div className={`w-12 h-12 rounded-2xl ${iconBg[index % iconBg.length]} border border-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors`}>
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{achievement.title}</h3>
                <p className="text-neutral-400 leading-relaxed font-light">
                  {achievement.description}
                </p>
                <div className="absolute top-0 right-0 p-4 text-[8px] text-white/10 tracking-[0.4em] font-bold">DATA_NODE_{index + 1}</div>
              </>
            );

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:scale-105"
              >
                {achievement.link ? (
                  <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                    {CardContent}
                  </a>
                ) : CardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
