import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';
import { Disc3, ArrowUpRight, Clock } from 'lucide-react';

import baburamImg from '../assets/songcover/baburamsapure.png';

const releases = [
  {
    id: 1,
    title: "Baburam Sapure",
    type: "Single",
    status: "Released",
    date: "Available Now",
    description: "A dark, intense reimagining of the classic Bengali rhyme. Blending aggressive gully rap flows with heavy rock distortion and hypnotic trance elements to create an entirely new counter-culture anthem.",
    image: baburamImg,
    links: {
      spotify: "https://open.spotify.com/album/2zt6aIIUVKat632UKMu0Zd",
      apple: "https://music.apple.com/in/song/baburam-sapure/6770527733",
      ytmusic: "https://music.youtube.com/watch?v=VQutKgBJKp8",
      youtube: "https://youtu.be/VQutKgBJKp8?si=arMFDcsxJAUpr0-5"
    }
  },
  {
    id: 2,
    title: "Kolkata Cypher",
    type: "EP",
    status: "Upcoming",
    date: "Coming Soon",
    description: "An upcoming collaborative extended play featuring raw underground voices from the streets of Kolkata, layered over massive psychedelic trance structures.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWuwzzLsVSXOfSYqcqwDzKrTysbvWKbIgpOQ&s",
    links: null 
  },
  {
    id: 3,
    title: "The Astral Loop",
    type: "Album",
    status: "In Studio",
    date: "TBA 2026",
    description: "The highly anticipated debut full-length project. A sonic journey pushing the boundaries of Bengali folk, rock riffs, and electronic synthesis.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=600&h=600",
    links: null
  }
];

// Duplicate the items enough times so one single track is wider than ultra-wide monitors
const trackItems = [...releases, ...releases, ...releases]; 

export default function Releases() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section 
      id="releases" 
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] text-white py-24 md:py-32 overflow-hidden flex flex-col justify-center"
    >
      <motion.div style={{ y: yBg }} className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-red-600/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-zinc-800/20 blur-[150px] rounded-full" />
      </motion.div>

      <div className="w-full relative z-10">
        
        {/* =========================================
            SECTION HEADER
            ========================================= */}
        <div className="px-6 md:px-12 lg:px-24 mb-10 md:mb-16 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 md:w-12 bg-red-500" />
            <span className="text-[10px] md:text-sm tracking-[0.3em] uppercase font-black text-red-500">Discography</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white">
              Latest <br className="hidden md:block" /> Drops
            </h2>
            <p className="text-zinc-400 font-light max-w-sm text-sm md:text-base">
              Stream the newest releases, official music videos, and secure pre-saves for upcoming underground projects.
            </p>
          </div>
        </div>

        {/* =========================================
            INFALLIBLE DOUBLE-TRACK MARQUEE
            ========================================= */}
        <div className="relative w-full overflow-hidden flex group cursor-grab active:cursor-grabbing">
          
          {/* Edge Fade Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

          {/* TRACK 1 */}
          <div className="flex flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
            {trackItems.map((release, idx) => (
              <div 
                key={`t1-${release.id}-${idx}`} 
                // We use right-margin (mr-5) instead of flex gap on the parent. 
                // This ensures the 100% translation math is flawless.
                className="mr-5 md:mr-8 relative flex-shrink-0 w-[75vw] sm:w-[280px] md:w-[320px] lg:w-[360px] group/card rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                {/* 1. Card Image */}
                <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden border-b border-white/10">
                  <img 
                    src={release.image} 
                    alt={release.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute top-4 md:top-5 left-4 md:left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                    {release.status === 'Released' ? (
                      <Disc3 size={10} className="text-red-500 animate-spin-slow" />
                    ) : (
                      <Clock size={10} className="text-zinc-400" />
                    )}
                    <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-white">
                      {release.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 md:left-5 text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-zinc-300 drop-shadow-md">
                    {release.date}
                  </div>
                </div>

                {/* 2. Card Content Details */}
                <div className="p-5 md:p-6 flex flex-col justify-between h-[auto]">
                  <div>
                    <span className="text-[9px] tracking-[0.2em] uppercase font-black text-red-500">
                      {release.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white mt-1 leading-none">
                      {release.title}
                    </h3>
                    <p className="text-[11px] md:text-xs text-zinc-400 font-light leading-relaxed mt-3 line-clamp-3">
                      {release.description}
                    </p>
                  </div>

                  {/* 3. Platform Links */}
                  <div className="mt-6 pt-5 border-t border-white/10">
                    {release.links ? (
                      <div className="flex flex-col gap-3">
                        <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-zinc-500">Listen On</span>
                        <div className="grid grid-cols-4 gap-2">
                          <a href={release.links.spotify} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-[#1DB954] hover:text-black hover:border-[#1DB954] transition-colors group/btn">
                            <FaSpotify className="text-base md:text-lg text-zinc-400 group-hover/btn:text-black transition-colors" />
                          </a>
                          <a href={release.links.apple} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-[#FA243C] hover:text-white hover:border-[#FA243C] transition-colors group/btn">
                            <FaApple className="text-base md:text-lg text-zinc-400 group-hover/btn:text-white transition-colors" />
                          </a>
                          <a href={release.links.ytmusic} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-colors group/btn">
                            <SiYoutubemusic className="text-base md:text-lg text-zinc-400 group-hover/btn:text-white transition-colors" />
                          </a>
                          <a href={release.links.youtube} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-colors group/btn">
                            <FaYoutube className="text-base md:text-lg text-zinc-400 group-hover/btn:text-white transition-colors" />
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 border-dashed">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Pre-Save Unavailable</span>
                        <ArrowUpRight size={14} className="text-zinc-600" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TRACK 2 (Identical Clone for seamless infinite loop) */}
          <div className="flex flex-shrink-0 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
            {trackItems.map((release, idx) => (
              <div 
                key={`t2-${release.id}-${idx}`} 
                className="mr-5 md:mr-8 relative flex-shrink-0 w-[75vw] sm:w-[280px] md:w-[320px] lg:w-[360px] group/card rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                {/* 1. Card Image */}
                <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden border-b border-white/10">
                  <img 
                    src={release.image} 
                    alt={release.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute top-4 md:top-5 left-4 md:left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                    {release.status === 'Released' ? (
                      <Disc3 size={10} className="text-red-500 animate-spin-slow" />
                    ) : (
                      <Clock size={10} className="text-zinc-400" />
                    )}
                    <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-white">
                      {release.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 md:left-5 text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-zinc-300 drop-shadow-md">
                    {release.date}
                  </div>
                </div>

                {/* 2. Card Content Details */}
                <div className="p-5 md:p-6 flex flex-col justify-between h-[auto]">
                  <div>
                    <span className="text-[9px] tracking-[0.2em] uppercase font-black text-red-500">
                      {release.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white mt-1 leading-none">
                      {release.title}
                    </h3>
                    <p className="text-[11px] md:text-xs text-zinc-400 font-light leading-relaxed mt-3 line-clamp-3">
                      {release.description}
                    </p>
                  </div>

                  {/* 3. Platform Links */}
                  <div className="mt-6 pt-5 border-t border-white/10">
                    {release.links ? (
                      <div className="flex flex-col gap-3">
                        <span className="text-[8px] uppercase tracking-[0.2em] font-bold text-zinc-500">Listen On</span>
                        <div className="grid grid-cols-4 gap-2">
                          <a href={release.links.spotify} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-[#1DB954] hover:text-black hover:border-[#1DB954] transition-colors group/btn">
                            <FaSpotify className="text-base md:text-lg text-zinc-400 group-hover/btn:text-black transition-colors" />
                          </a>
                          <a href={release.links.apple} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-[#FA243C] hover:text-white hover:border-[#FA243C] transition-colors group/btn">
                            <FaApple className="text-base md:text-lg text-zinc-400 group-hover/btn:text-white transition-colors" />
                          </a>
                          <a href={release.links.ytmusic} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-colors group/btn">
                            <SiYoutubemusic className="text-base md:text-lg text-zinc-400 group-hover/btn:text-white transition-colors" />
                          </a>
                          <a href={release.links.youtube} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-colors group/btn">
                            <FaYoutube className="text-base md:text-lg text-zinc-400 group-hover/btn:text-white transition-colors" />
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 border-dashed">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Pre-Save Unavailable</span>
                        <ArrowUpRight size={14} className="text-zinc-600" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Simplified, Math-Free Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          /* 100% moves the exact width of ONE track off-screen */
          100% { transform: translateX(-100%); } 
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
      `}} />
    </section>
  );
}