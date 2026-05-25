import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MessageCircle, Send, ArrowUpRight, Sparkles, User, FileText } from 'lucide-react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa'; // Imported social icons

export default function Contact() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    purpose: 'Booking Inquiry',
    message: ''
  });

  const inquiryTypes = [
    "Booking Inquiry", 
    "Feature / Collab", 
    "Press / Interview", 
    "General"
  ];

  // WhatsApp Gateway Logic
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `*New Inquiry via Portfolio*\n\n*Name:* ${formData.name}\n*Purpose:* ${formData.purpose}\n\n*Message:*\n${formData.message}`;
    const phone = "919836265409"; 
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] text-white py-24 md:py-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Ambience */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[-10%] w-[50vw] h-[50vw] bg-red-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/5 blur-[150px] rounded-full" />
      </motion.div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* =========================================
              LEFT COLUMN: Header, Email & Socials
              ========================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-[2px] w-12 bg-red-500" />
                <span className="text-sm tracking-[0.3em] uppercase font-black text-red-500">Connect</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6"
              >
                Let's <br className="hidden md:block" /> Talk.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 font-light text-lg max-w-md mb-12"
              >
                Open for live show bookings, studio collaborations, and press inquiries. Choose your preferred channel below.
              </motion.p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Direct Email Card */}
              <motion.a 
                href="mailto:amitd2984@gmail.com"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden flex flex-col items-start gap-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 w-full"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                  <Mail size={120} className="rotate-12" />
                </div>
                
                <div className="p-4 rounded-full bg-white/5 border border-white/10 text-zinc-400 group-hover:text-white group-hover:bg-red-600 transition-colors duration-300">
                  <Mail size={24} />
                </div>
                
                <div className="relative z-10">
                  <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-zinc-500 mb-2">Direct Mail</p>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-red-400 transition-colors">
                    amitd2984@gmail.com
                  </h3>
                </div>

                <div className="absolute bottom-8 right-8 text-zinc-600 group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </motion.a>

              {/* Social Grid (Facebook & Instagram) */}
              <div className="grid grid-cols-2 gap-4 w-full">
                <motion.a 
                  href="https://www.instagram.com/scrizophernic_gladiator?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="group flex flex-col gap-4 p-6 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:bg-[#E1306C]/10 hover:border-[#E1306C]/50 transition-all duration-300"
                >
                  <FaInstagram className="text-2xl text-zinc-400 group-hover:text-[#E1306C] transition-colors" />
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                    Instagram
                  </span>
                </motion.a>

                <motion.a 
                  href="https://facebook.com/share/1AwMSV87PQ"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="group flex flex-col gap-4 p-6 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:bg-[#1877F2]/10 hover:border-[#1877F2]/50 transition-all duration-300"
                >
                  <FaFacebookF className="text-2xl text-zinc-400 group-hover:text-[#1877F2] transition-colors" />
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                    Facebook
                  </span>
                </motion.a>
              </div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: Interactive WhatsApp Form
              ========================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative p-6 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl h-full flex flex-col"
          >
            {/* Top Badge */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 w-fit">
              <MessageCircle size={14} className="text-[#25D366]" />
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-300">Priority WhatsApp Gateway</span>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-8 flex-grow justify-between">
              
              <div className="flex flex-col gap-8">
                {/* Name Input */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 flex items-center gap-2">
                    <User size={12} /> Your Name
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-lg md:text-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-red-500 transition-colors rounded-none"
                  />
                </div>

                {/* Purpose Selector */}
                <div className="flex flex-col gap-4">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 flex items-center gap-2">
                    <Sparkles size={12} /> Inquiry Type
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {inquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({...formData, purpose: type})}
                        className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                          formData.purpose === type 
                            ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]' 
                            : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 flex items-center gap-2">
                    <FileText size={12} /> The Details
                  </label>
                  <textarea 
                    required
                    rows="4"
                    placeholder="Tell me about the project, date, or proposal..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-base md:text-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="group relative flex items-center justify-center gap-3 w-full p-5 mt-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-black uppercase tracking-widest text-sm transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Send via WhatsApp</span>
                <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}