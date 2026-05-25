import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ArrowDownRight, Sparkles, Activity } from 'lucide-react';

export default function Home() {
  const containerRef = useRef(null);
  
  // Parallax scroll logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Different parallax speeds for the solid text vs the hollow outline text
  const ySolidText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yOutlineText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-[100dvh] px-6 pt-20 overflow-hidden w-full selection:bg-red-500/30"
    >
      {/* 1. ANALOG TEXTURE LAYER: CSS Film Grain (Super Premium Vibe)
      */}
      <div 
        className="pointer-events-none absolute inset-0 z-50 opacity-[0.04] mix-blend-overlay"
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" 
        }} 
      />
      
      {/* 2. ATMOSPHERIC GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[60vh] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* =========================================
          MAIN HERO CONTENT 
          ========================================= */}
      <motion.div 
        style={{ opacity: opacityFade }}
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto h-full mt-10 md:mt-0"
      >
        
        {/* Top Tagline / Status Indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 px-5 py-2.5 mb-10 border rounded-full border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
        >
          {/* Animated Equalizer Visualizer */}
          <div className="flex items-end gap-0.5 h-4 w-6">
            <span className="w-1 bg-red-500 rounded-full animate-[eq_1.2s_ease-in-out_infinite]" style={{ height: '40%' }} />
            <span className="w-1 bg-red-500 rounded-full animate-[eq_0.8s_ease-in-out_infinite_0.2s]" style={{ height: '100%' }} />
            <span className="w-1 bg-red-500 rounded-full animate-[eq_1.5s_ease-in-out_infinite_0.4s]" style={{ height: '60%' }} />
            <span className="w-1 bg-red-500 rounded-full animate-[eq_1.1s_ease-in-out_infinite_0.1s]" style={{ height: '80%' }} />
          </div>
          
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold text-zinc-300">
            System Online: Studio Mode
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_2s_infinite]" />
        </motion.div>

        {/* 3. KINETIC TYPOGRAPHY LAYER
          The outline text sits behind the solid text and scrolls faster to create depth.
        */}
        <div className="relative w-full flex flex-col items-center text-center -my-4 md:-my-10">
          
          {/* Background Layer: Hollow Stroke Text */}
          <motion.div 
            style={{ y: yOutlineText }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-0 right-0 flex flex-col items-center pointer-events-none select-none z-0"
          >
            <h1 className="text-[25vw] md:text-[18vw] lg:text-[14rem] font-black uppercase tracking-tighter leading-[0.75] text-transparent [-webkit-text-stroke:2px_#ffffff] opacity-50">
              AMIT
            </h1>
            <h1 className="text-[25vw] md:text-[18vw] lg:text-[14rem] font-black uppercase tracking-tighter leading-[0.75] text-transparent [-webkit-text-stroke:2px_#ffffff] opacity-50">
              DUTTA
            </h1>
          </motion.div>

          {/* Foreground Layer: Solid Gradient Text */}
          <motion.div 
            style={{ y: ySolidText }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="overflow-hidden pb-4">
              <motion.h1 
                initial={{ y: 150, opacity: 0, rotateZ: 5 }}
                animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[22vw] md:text-[16vw] lg:text-[13rem] font-black uppercase tracking-tighter leading-[0.8] text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                AMIT
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-6">
              <motion.h1 
                initial={{ y: 150, opacity: 0, rotateZ: -5 }}
                animate={{ y: 0, opacity: 1, rotateZ: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[22vw] md:text-[16vw] lg:text-[13rem] font-black uppercase tracking-tighter leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-600"
              >
                DUTTA
              </motion.h1>
            </div>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p 
          style={{ y: ySolidText }}
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mt-8 md:mt-12 text-sm font-light text-center md:text-lg lg:text-xl text-zinc-400 max-w-[90%] md:max-w-2xl leading-relaxed relative z-10"
        >
          Bridging the raw energy of <span className="text-white font-medium">gully street rap</span>, the weight of <span className="text-white font-medium">rock</span>, and the depth of <span className="text-white font-medium">psycho-trance</span>.
        </motion.p>

        {/* CTA Buttons (Updated to match the new sections) */}
        <motion.div 
          style={{ y: ySolidText }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full px-6 sm:px-0 relative z-20"
        >
          <a href="#releases" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center w-full gap-3 px-8 py-4 overflow-hidden font-bold text-white uppercase tracking-widest bg-red-600 rounded-full shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all hover:shadow-[0_0_60px_rgba(220,38,38,0.5)]"
            >
              <Play size={18} fill="currentColor" />
              <span className="text-xs md:text-sm">Latest Release</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            </motion.button>
          </a>
          
          <a href="#press" className="w-full sm:w-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center w-full gap-3 px-8 py-4 font-bold text-white uppercase tracking-widest transition-all border rounded-full border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40"
            >
              <Activity size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-xs md:text-sm">Critical Acclaim</span>
            </motion.button>
          </a>
        </motion.div>
      </motion.div>

      {/* Internal Styles for Keyframes (Equalizer & Shimmer) */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes eq {
          0% { height: 30%; }
          50% { height: 100%; }
          100% { height: 30%; }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />

      {/* Base Gradient to smoothly blend into the About section */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-0" />
    </section>
  );
}