"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, Github, Linkedin, User, MapPin } from "lucide-react";
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
    <section id="contact" className="min-h-screen w-full flex items-center justify-center relative py-20 pointer-events-auto">
      <div className="max-w-7xl w-full px-6 z-10 md:pl-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl order-2 lg:order-1"
          >
            <h2 className="text-3xl font-bold text-white mb-2">Let's Collaborate</h2>
            <p className="text-neutral-400 mb-8">
              Have a project in mind? Reach out and let's create something extraordinary.
            </p>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-300">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>
              
              <button
                 type="submit"
                 className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-white/5"
              >
                 Send Message
                 <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                    <User className="w-6 h-6" />
                  </div>
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group/item">
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-400 group-hover/item:text-white group-hover/item:border-white/20 transition-all">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Name</p>
                      <p className="text-white font-medium">Amit Tiwari</p>
                    </div>
                  </div>

                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-4 group/item">
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-400 group-hover/item:text-blue-400 group-hover/item:border-blue-400/30 transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Email</p>
                      <p className="text-white font-medium group-hover/item:text-blue-400 transition-colors uppercase">{SOCIAL_LINKS.email}</p>
                    </div>
                  </a>

                  <a href={`tel:${SOCIAL_LINKS.mobile}`} className="flex items-center gap-4 group/item">
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-400 group-hover/item:text-green-400 group-hover/item:border-green-400/30 transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Phone</p>
                      <p className="text-white font-medium group-hover/item:text-green-400 transition-colors">{SOCIAL_LINKS.mobile}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 group/item">
                    <div className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Location</p>
                      <p className="text-white font-medium">India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                  <a 
                    href={SOCIAL_LINKS.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href={SOCIAL_LINKS.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-neutral-400 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer */}
        <footer className="mt-20 py-8 border-t border-white/10 text-center text-neutral-500 text-sm">
            <p>Made with <span className="text-red-500 text-xl animate-pulse">&hearts;</span> By Amit Tiwari</p>
            <p className="mt-2 opacity-50 text-[10px] tracking-widest uppercase">© 2026 Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
