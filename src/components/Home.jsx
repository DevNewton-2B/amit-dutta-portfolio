import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowDownRight, Sparkles, Disc } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Home() {
  const containerRef = useRef(null);
  
  // Parallax scroll logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Cinematic staggered text reveal variants
  const wordAnimation = {
    hidden: { y: 120, opacity: 0, rotateZ: 3, scale: 0.9 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotateZ: 0,
      scale: 1,
      transition: {
        delay: i * 0.12,
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], 
      },
    }),
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative flex items-center justify-center min-h-[100dvh] px-6 pt-24 overflow-hidden w-full selection:bg-red-500/30"
    >
      {/* 
        CREATIVE LAYER: Gritty Studio Grid
      */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      {/* 
        ENVIRONMENTAL GLOWS (Cinematic Lighting) 
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vh] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* =========================================
          MAIN HERO CONTENT 
          Cleaned up to guarantee zero overlap
          ========================================= */}
      <motion.div 
        style={{ y: yText, opacity: opacityFade }}
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto h-full"
      >
        
        {/* Top Label */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex items-center gap-3 px-5 py-2 mb-8 md:mb-12 border rounded-full border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
        >
          <div className="relative flex items-center justify-center">
            <Sparkles size={14} className="text-red-500 relative z-10" />
            <div className="absolute inset-0 bg-red-500 blur-md opacity-50" />
          </div>
          <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold text-zinc-300">
            The Bengal Gully Anthem
          </span>
        </motion.div>

        {/* Massive Typography */}
        <div className="flex flex-col items-center text-center">
          <div className="overflow-hidden pb-2">
            <motion.h1 
              custom={1}
              variants={wordAnimation}
              initial="hidden"
              animate="visible"
              className="text-[20vw] md:text-[14vw] lg:text-[12rem] font-black uppercase tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 drop-shadow-2xl"
            >
              AMIT
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-4">
            <motion.h1 
              custom={2}
              variants={wordAnimation}
              initial="hidden"
              animate="visible"
              className="text-[20vw] md:text-[14vw] lg:text-[12rem] font-black uppercase tracking-tighter leading-[0.8] text-white flex items-center gap-4"
            >
              DUTTA
              {/* Spinning Disc Detail (Hidden on Mobile for cleanliness) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="hidden lg:flex items-center justify-center text-red-500 bg-white/5 border border-white/10 backdrop-blur-md rounded-full p-4 ml-4"
              >
                <Disc size={64} strokeWidth={1} />
              </motion.div>
            </motion.h1>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-6 text-sm font-light text-center md:text-lg lg:text-xl text-zinc-400 max-w-[90%] md:max-w-2xl leading-relaxed"
        >
          Bridging the raw energy of <span className="text-white font-medium">street rap</span>, the weight of <span className="text-white font-medium">rock</span>, and the depth of <span className="text-white font-medium">trance</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full px-6 sm:px-0"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-4 overflow-hidden font-bold text-white uppercase tracking-widest bg-red-600 rounded-full shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all hover:shadow-[0_0_60px_rgba(220,38,38,0.5)]"
          >
            <Play size={18} fill="currentColor" />
            <span className="text-sm">Latest Release</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-4 font-bold text-white uppercase tracking-widest transition-all border rounded-full border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40"
          >
            <span className="text-sm">View Tour</span>
            <ArrowDownRight size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none hidden lg:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-500 rotate-90 mb-8">Scroll</span>
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }} 
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[2px] h-16 bg-gradient-to-b from-white to-transparent rounded-full"
        />
      </motion.div>

      {/* Base Gradient to smoothly blend into the next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-0" />
    </section>
  );
}