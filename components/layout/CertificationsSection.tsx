"use client";

import { CERTIFICATIONS } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Image from "next/image";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="min-h-screen w-full flex flex-col items-center justify-center relative py-20 bg-transparent">
      <div className="max-w-7xl w-full px-4 md:pl-24 z-10 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-2">My Credentials</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Certifications
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Image Preview */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-2">{cert.issuer}</p>
                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-500">
                      {cert.date}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
