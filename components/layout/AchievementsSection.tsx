"use client";

import { ACHIEVEMENTS } from "@/lib/data";
import { Trophy, Star, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function AchievementsSection() {
  const icons = [Trophy, Target, Star];

  return (
    <section id="achievements" className="min-h-[60vh] w-full flex flex-col items-center justify-center relative py-20 pointer-events-auto">
      <div className="max-w-5xl w-full px-4 md:pl-24 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
        >
          Milestones & Accolades
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/40 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-neutral-400 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
