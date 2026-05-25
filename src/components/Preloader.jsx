import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const loadingPhrases = [
  "INITIALIZING SYSTEM...",
  "CALIBRATING DISTORTION...",
  "LOADING GULLY VOCALS...",
  "SYNCING TRANCE STEMS...",
  "PREPARING LIVE ENVIRONMENT..."
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // Handle the progress counter
    const duration = 2500; // 2.5 seconds total loading time
    const intervalTime = 20; 
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        // Wait a tiny bit at 100% before triggering the exit animation
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    }, intervalTime);

    // Handle the phrase changing
    const phraseTimer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1 < loadingPhrases.length ? prev + 1 : prev));
    }, 500); // Change phrase every 500ms

    return () => {
      clearInterval(timer);
      clearInterval(phraseTimer);
    };
  }, [onComplete]);

  // Custom easing curve for that premium "snap" feel
  const slideUp = {
    initial: { y: 0 },
    exit: { 
      y: "-100vh", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } 
    }
  };

  return (
    <motion.div 
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#050505] px-6 py-12 md:px-12 lg:px-24 text-white overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* TOP HEADER */}
      <div className="flex justify-between items-start relative z-10">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-red-500">
            System Boot
          </span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-zinc-500">
            v2.0.26
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
            Live
          </span>
        </div>
      </div>

      {/* CENTER MASSIVE TEXT */}
      <div className="flex flex-col items-center justify-center relative z-10 w-full flex-grow">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[15vw] md:text-[10vw] lg:text-[8rem] font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 text-center"
          >
            Amit Dutta
          </motion.h1>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-zinc-500 mt-4 text-center"
        >
          {loadingPhrases[phraseIndex]}
        </motion.p>
      </div>

      {/* BOTTOM PROGRESS BAR */}
      <div className="flex flex-col gap-4 relative z-10 w-full max-w-4xl mx-auto">
        <div className="flex justify-between items-end">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Loading Environment
          </span>
          <span className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            {progress}%
          </span>
        </div>
        
        {/* The Bar */}
        <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-red-500"
            style={{ width: `${progress}%` }}
            layout
          />
        </div>
      </div>
    </motion.div>
  );
}