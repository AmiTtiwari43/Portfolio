"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, Github, Linkedin, TerminalIcon, Globe } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";
import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Inquiry from ${name || email || 'Visitor'}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${SOCIAL_LINKS.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col items-center justify-center relative py-32 pointer-events-auto overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-accent-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent-secondary/5 blur-[120px] rounded-full -z-10" />

      <div className="section-container relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-accent-tertiary/20 bg-accent-tertiary/5 text-[10px] text-accent-tertiary uppercase tracking-[0.3em] mb-6">
            Communication_Link::08
          </div>
          <h2 className="text-4xl md:text-8xl font-bold colorful-gradient-text tracking-tighter uppercase leading-none">
            Initiate Link
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 text-[8px] text-accent-secondary/40 tracking-[0.4em] font-bold">STATUS_ACTIVE</div>
                 
                 <h3 className="text-xl font-light text-white mb-10 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl border border-accent-secondary/20 bg-accent-secondary/5 flex items-center justify-center">
                        <TerminalIcon className="w-5 h-5 text-accent-secondary" />
                    </div>
                    System_Endpoints
                 </h3>

                 <div className="space-y-8">
                    <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-6 group/link">
                       <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover/link:bg-accent-primary group-hover/link:border-accent-primary group-hover/link:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-500">
                          <Mail className="w-5 h-5 text-neutral-500 group-hover/link:text-white transition-colors" />
                       </div>
                       <div>
                          <div className="text-[10px] text-accent-primary/60 uppercase tracking-widest mb-1">E-Mail</div>
                          <div className="text-neutral-400 group-hover/link:text-white transition-colors text-lg font-light tracking-tight">{SOCIAL_LINKS.email}</div>
                       </div>
                    </a>

                    <a href={`tel:${SOCIAL_LINKS.mobile}`} className="flex items-center gap-6 group/link">
                       <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center group-hover/link:bg-accent-secondary group-hover/link:border-accent-secondary group-hover/link:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-500">
                          <Phone className="w-5 h-5 text-neutral-500 group-hover/link:text-white transition-colors" />
                       </div>
                       <div>
                          <div className="text-[10px] text-accent-secondary/60 uppercase tracking-widest mb-1">Signal_Line</div>
                          <div className="text-neutral-400 group-hover/link:text-white transition-colors text-lg font-light tracking-tight">{SOCIAL_LINKS.mobile}</div>
                       </div>
                    </a>
                 </div>

                 <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" className="glass-card py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all group/sub">
                        <Linkedin className="w-4 h-4 text-neutral-600 group-hover/sub:text-accent-primary transition-colors" />
                        <span className="text-[10px] text-neutral-600 group-hover/sub:text-white uppercase tracking-widest transition-colors font-bold">LinkedIn</span>
                    </a>
                    <a href={SOCIAL_LINKS.github} target="_blank" className="glass-card py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all group/sub">
                        <Github className="w-4 h-4 text-neutral-600 group-hover/sub:text-accent-secondary transition-colors" />
                        <span className="text-[10px] text-neutral-600 group-hover/sub:text-white uppercase tracking-widest transition-colors font-bold">GitHub</span>
                    </a>
                    <a href={SOCIAL_LINKS.leetcode} target="_blank" className="glass-card py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all group/sub">
                        <Globe className="w-4 h-4 text-neutral-600 group-hover/sub:text-accent-secondary transition-colors" />
                        <span className="text-[10px] text-neutral-600 group-hover/sub:text-white uppercase tracking-widest transition-colors font-bold">LeetCode</span>
                    </a>
                 </div>
            </div>
            
            <div className="p-8 border border-accent-secondary/10 bg-accent-secondary/[0.02] rounded-3xl relative overflow-hidden group">
                <div className="flex items-center gap-4 text-accent-secondary text-[10px] uppercase tracking-[0.2em] font-bold">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-accent-secondary/30" />
                    </div>
                    Developer_Online // Secure_Connection_Ready
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-secondary/5 blur-2xl rounded-full" />
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-10 md:p-12 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-[8px] text-accent-tertiary/40 tracking-[0.4em] font-bold uppercase">DATA_INPUT_FIELD</div>
                
                <h3 className="text-xl font-light text-white mb-10 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl border border-accent-tertiary/20 bg-accent-tertiary/5 flex items-center justify-center">
                        <Send className="w-5 h-5 text-accent-tertiary" />
                    </div>
                    Transmission_Interface
                </h3>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                         <label className="text-[10px] text-accent-primary/60 uppercase tracking-[0.2em] ml-2 font-bold">Name</label>
                         <input 
                            type="text" 
                            placeholder="NAME_REQUIRED"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-neutral-800 focus:outline-none focus:border-accent-primary/40 focus:bg-accent-primary/5 transition-all"
                         />
                    </div>
                    <div className="space-y-3">
                         <label className="text-[10px] text-accent-secondary/60 uppercase tracking-[0.2em] ml-2 font-bold">Reply_Email</label>
                         <input 
                            type="email" 
                            placeholder="EMAIL@SIGNAL.COM"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-neutral-800 focus:outline-none focus:border-accent-secondary/40 focus:bg-accent-secondary/5 transition-all"
                         />
                    </div>
                  </div>

                  <div className="space-y-3">
                       <label className="text-[10px] text-accent-tertiary/60 uppercase tracking-[0.2em] ml-2 font-bold">Message_Payload</label>
                       <textarea 
                          rows={6}
                          placeholder="ENTER_DATA_HERE..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-5 text-white placeholder:text-neutral-800 focus:outline-none focus:border-accent-tertiary/40 focus:bg-accent-tertiary/5 transition-all resize-none"
                       />
                  </div>

                  <button type="submit" className="w-full py-6 rounded-2xl bg-white text-black font-bold uppercase tracking-[0.5em] text-xs hover:bg-neutral-200 transition-all flex items-center justify-center gap-4 shadow-[0_0_40px_rgba(255,255,255,0.1)] group/btn overflow-hidden relative">
                    <div className="absolute inset-0 bg-accent-primary translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 opacity-10 skew-x-12" />
                    <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    Contact Now
                  </button>
                </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-32 py-10 border-t border-white/5 text-center flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 text-neutral-600 text-[10px] uppercase tracking-[0.5em]">
                <div className="w-8 h-[1px] bg-white/5" />
                Built with <span className="text-accent-primary font-bold">Precision</span> By Amit Tiwari
                <div className="w-8 h-[1px] bg-white/5" />
            </div>
            <p className="text-neutral-800 text-[9px] uppercase tracking-[0.3em]">© 2026 DIGITAL_ARTIFACT // SYNC_COMPLETED</p>
        </footer>
      </div>
    </section>
  );
}
