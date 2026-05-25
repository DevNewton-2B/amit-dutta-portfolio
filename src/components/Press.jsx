import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote, Mic2, Radio, Trophy, Newspaper } from 'lucide-react';

// =========================================
// TEXT-ONLY DATA (No Images Required)
// =========================================
const pressQuotes = [
  {
    id: 1,
    source: "Rolling Stone India",
    quote: "Amit Dutta is tearing down the walls between Bengali folk traditions and modern underground rap. The result is a sonic rebellion that the independent scene desperately needed.",
    author: "Indie Music Review",
    size: "large" // Spans more grid space
  },
  {
    id: 2,
    source: "The Kolkata Cypher",
    quote: "A masterclass in tension and release. His ability to fuse heavy guitar distortion with rapid-fire Bengali lyricism is unmatched in the current circuit.",
    author: "Underground Spotlight",
    size: "normal"
  },
  {
    id: 3,
    source: "Electronic Frequencies",
    quote: "The way he integrates psycho-trance synthesis into traditional street narratives feels entirely alien, yet deeply rooted in cultural heritage.",
    author: "Global Soundscapes",
    size: "normal"
  }
];

const achievements = [
  { icon: Trophy, title: "1M+ Streams", desc: "Across All Major Platforms" },
  { icon: Radio, title: "Top 50 Indie Chart", desc: "National Underground Radio" },
  { icon: Mic2, title: "Best Lyricist 2025", desc: "Bengal Independent Music Awards" }
];

export default function Press() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const yGrid = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      id="press" 
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] text-white py-24 md:py-32 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Ambience */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] bg-zinc-800/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* =========================================
            SECTION HEADER
            ========================================= */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 md:w-12 bg-red-500" />
              <span className="text-[10px] md:text-sm tracking-[0.3em] uppercase font-black text-red-500">Industry Impact</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white">
              Critical <br className="hidden md:block" /> Acclaim
            </h2>
          </div>
          <p className="text-zinc-400 font-light max-w-sm text-sm md:text-base">
            What the industry is saying about the fusion of raw street lyricism and heavy trance soundscapes.
          </p>
        </div>

        {/* =========================================
            TYPOGRAPHY-DRIVEN BENTO GRID
            ========================================= */}
        <motion.div 
          style={{ y: yGrid }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
        >
          {/* Left Side: Press Quotes */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-4 md:gap-6">
            {pressQuotes.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                className={`relative p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden group ${item.size === 'large' ? 'bg-gradient-to-br from-white/[0.05] to-transparent border-white/20' : ''}`}
              >
                <Quote 
                  size={item.size === 'large' ? 120 : 80} 
                  className="absolute -top-4 -right-4 text-white/[0.03] group-hover:text-red-500/[0.05] transition-colors duration-500 rotate-12" 
                />
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                  <p className={`font-light text-zinc-300 leading-relaxed ${item.size === 'large' ? 'text-xl md:text-3xl' : 'text-lg md:text-xl'}`}>
                    "{item.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="p-3 bg-red-500/10 rounded-xl text-red-500 border border-red-500/20">
                      <Newspaper size={18} />
                    </div>
                    <div>
                      <h4 className="font-black uppercase tracking-wider text-white text-sm md:text-base">{item.source}</h4>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">{item.author}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Achievements / Metrics Stack */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4 md:gap-6 h-full">
            
            {/* Title Card for right column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-8 rounded-[2rem] bg-red-600 border border-red-500 shadow-[0_0_40px_rgba(220,38,38,0.2)]"
            >
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white leading-none mb-2">
                The Numbers
              </h3>
              <p className="text-red-200 text-xs md:text-sm font-medium tracking-wide">
                Independent impact across the digital spectrum.
              </p>
            </motion.div>

            {/* Achievement Blocks */}
            {achievements.map((achieve, idx) => (
              <motion.div
                key={achieve.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 + (idx * 0.15), ease: "easeOut" }}
                className="flex-1 p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col justify-center gap-4 group hover:bg-white/[0.05] hover:border-white/20 transition-colors"
              >
                <achieve.icon size={28} className="text-red-500 mb-2 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter text-white">{achieve.title}</h4>
                  <p className="text-[10px] md:text-xs text-zinc-400 uppercase tracking-widest font-bold mt-2">
                    {achieve.desc}
                  </p>
                </div>
              </motion.div>
            ))}
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}