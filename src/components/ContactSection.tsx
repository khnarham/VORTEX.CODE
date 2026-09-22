'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Terminal, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <footer id="contact" className="relative max-w-7xl mx-auto px-6 py-28 border-t border-[#27272a]/55">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#3f3f46] text-[#32CD32] text-xs font-mono mb-6 w-max">
            <Terminal className="w-3.5 h-3.5" />
            <span>INITIATE CONNECTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-['Space_Grotesk'] mb-6">
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] to-[#4ade80]">
              SOMETHING SCALABLE.
            </span>
          </h2>

          <p className="text-base text-[#a1a1aa] font-sans leading-relaxed mb-8">
            Have a backend architecture challenge, a high-concurrency web application idea, or want to collaborate? Drop a message directly through the terminal relay below.
          </p>

          <div className="space-y-4 font-mono text-xs text-[#a1a1aa]">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121216] border border-[#27272a]">
              <Mail className="w-4 h-4 text-[#32CD32]" />
              <span>Direct: Build@VortexCode.in</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121216] border border-[#27272a]">
              <span className="w-2 h-2 rounded-full bg-[#32CD32] animate-pulse" />
              <span>Status: Available for Selective Projects</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="relative p-8 sm:p-10 rounded-3xl bg-[#121216]/90 border border-[#27272a] backdrop-blur-xl shadow-2xl overflow-hidden">
            
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#32CD32] to-transparent" />

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 flex flex-col items-center text-center space-y-4"
              >
                <div className="p-4 rounded-full bg-[#32CD32]/10 border border-[#32CD32]/30 text-[#32CD32]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">Transmission Received</h3>
                <p className="text-sm text-[#a1a1aa] max-w-sm">
                  Thanks for reaching out. Your message has been successfully routed. I'll get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-[#a1a1aa] mb-2">YOUR_NAME</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      placeholder="Arham Khan"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#18181b] border border-[#27272a] text-white font-mono text-sm focus:outline-none focus:border-[#32CD32] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-[#a1a1aa] mb-2">YOUR_EMAIL</label>
                    <input 
                      type="email" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      placeholder="arham@domain.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#18181b] border border-[#27272a] text-white font-mono text-sm focus:outline-none focus:border-[#32CD32] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#a1a1aa] mb-2">MESSAGE_PAYLOAD</label>
                  <textarea 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="Describe your project, architecture query, or proposal..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#18181b] border border-[#27272a] text-white font-mono text-sm focus:outline-none focus:border-[#32CD32] transition-colors resize-none"
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#32CD32] text-[#0e0e10] font-bold rounded-xl hover:bg-[#2db82d] transition-all shadow-[0_0_20px_rgba(50,205,50,0.3)] flex items-center justify-center gap-2 font-mono text-sm cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <span>DISPATCH TRANSMISSION</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            )}

            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-[#32CD32]/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </footer>
  );
}