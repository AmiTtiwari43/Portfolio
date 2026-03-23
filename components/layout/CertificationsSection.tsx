"use client";

import { CERTIFICATIONS } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import Image from "next/image";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="min-h-screen w-full flex flex-col items-center justify-center relative py-24 bg-transparent overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-primary/5 blur-[100px] rounded-full -z-10" />

      <div className="section-container relative z-10 pointer-events-auto">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-accent-primary/20 bg-accent-primary/5 text-[10px] text-accent-primary uppercase tracking-[0.3em] mb-4">
            Credential_Registry::06
          </div>
          <h2 className="text-4xl md:text-8xl font-bold colorful-gradient-text tracking-tighter uppercase">
            Certifications
          </h2>
        </motion.div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              className="group relative flex flex-col glass-card rounded-3xl overflow-hidden hover:scale-[1.02] active:scale-[0.98]"
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
              <div className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-primary transition-colors uppercase tracking-tight">
                      {cert.name}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4 font-light">{cert.issuer}</p>
                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-neutral-500 font-mono tracking-widest">
                      {cert.date}
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
