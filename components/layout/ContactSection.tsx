"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
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
    // Open Gmail compose in new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${SOCIAL_LINKS.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };
  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center relative py-20 pointer-events-auto">
      <div className="max-w-xl w-full px-6 z-10 md:pl-24">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center">
            Let's Collaborate
          </h2>
          <p className="text-neutral-400 text-center mb-8">
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
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
            </div>
            
            <button
               type="submit"
               className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group"
            >
               Send Message
               <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
        
        {/* Footer */}
        <footer className="mt-20 text-center text-neutral-500 text-sm space-y-2">
            <p>Made with <span className="text-red-500 text-xl">&hearts;</span> By Amit Tiwari</p>
            <p className="hover:text-white transition-colors">
              <a href={`mailto:${SOCIAL_LINKS.email}`}>{SOCIAL_LINKS.email}</a>
            </p>
        </footer>
      </div>
    </section>
  );
}
