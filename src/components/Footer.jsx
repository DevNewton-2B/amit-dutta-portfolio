import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Releases', href: '#releases' },
  { name: 'Press', href: '#press' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'Spotify', url: 'https://open.spotify.com/artist/0xjyyAiXfySSYUJInGzJYL?si=t1gI9J7eQJ6HpWOMMBKUqQ', icon: FaSpotify },
  { name: 'Apple Music', url: 'https://music.apple.com/in/artist/amit-dutta/1896683193?ls', icon: FaApple },
  { name: 'YT Music', url: 'https://music.youtube.com/@amitdutta-95?si=CGw7FRZGJjAiFfJG', icon: SiYoutubemusic },
  { name: 'Instagram', url: 'https://www.instagram.com/scrizophernic_gladiator?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: FaInstagram },
  { name: 'Facebook', url: 'https://facebook.com/share/1AwMSV87PQ', icon: FaFacebookF },
  { name: 'YouTube', url: 'https://youtube.com/@amitdutta-95?si=mxQ85OqERx5CxO-l', icon: FaYoutube },
];

export default function Footer() {
  // Function to smoothly scroll back to top using Lenis's native anchor handling
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-20 overflow-hidden border-t border-white/10 z-20">
      
      {/* Background Ambience for Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[500px] bg-gradient-to-b from-red-600/5 to-transparent blur-[120px] pointer-events-none" />

      {/* =========================================
          TIER 1: MASSIVE INFINITE MARQUEE
          ========================================= */}
      <div className="relative w-full flex overflow-hidden border-y border-white/5 py-4 md:py-6 bg-white/[0.01]">
        <div className="flex whitespace-nowrap animate-footer-marquee items-center opacity-80">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-700 mx-8">
                Amit Dutta
              </span>
              <span className="text-red-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-12 md:h-12 animate-pulse">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </span>
              <span className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 to-zinc-500 mx-8">
                Bengal Counter-Culture
              </span>
              <span className="text-red-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-12 md:h-12 animate-pulse">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 pt-20 pb-12 relative z-10">
        
        {/* =========================================
            TIER 2: BENTO GRID FOOTER LINKS
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Manifesto (Spans 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="text-3xl md:text-4xl font-black tracking-tighter text-white uppercase mb-6">
              Amit Dutta<span className="text-red-500">.</span>
            </a>
            <p className="text-zinc-400 font-light leading-relaxed text-sm max-w-xs mb-8">
              Fusing the raw energy of Bengali street rap, the weight of alternative rock, and the depth of psycho-trance into an uncompromising sonic rebellion.
            </p>
            <a 
              href="mailto:amitd2984@gmail.com" 
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Bookings & Press</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Column 2: Navigation Map (Spans 2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-black text-zinc-500 mb-2">Sitemap</h4>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white hover:translate-x-2 transition-all duration-300 w-fit"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Column 3: Management Info (Spans 3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-black text-zinc-500 mb-2">Management</h4>
            
            <div className="flex flex-col gap-1 mb-4">
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">General Inquiries</span>
              <a href="mailto:amitd2984@gmail.com" className="text-sm text-zinc-300 hover:text-red-400 transition-colors">amitd2984@gmail.com</a>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Direct Line (WhatsApp)</span>
              <a href="https://wa.me/919836265409" target="_blank" rel="noreferrer" className="text-sm text-zinc-300 hover:text-[#25D366] transition-colors">+91 98362 65409</a>
            </div>
          </div>

          {/* Column 4: Social Grid (Spans 3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-black text-zinc-500 mb-2">Socials</h4>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  className="flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 group"
                >
                  <social.icon size={20} className="text-zinc-400 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* =========================================
            TIER 3: LEGAL & BACK TO TOP
            ========================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-zinc-500">
              © {new Date().getFullYear()} Amit Dutta. All Rights Reserved.
            </p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-700" />
            <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-zinc-500">
              Engineered by{' '}
              <a 
                href="https://koustav2303.github.io/koustavpan-portfolio/" 
                target="_blank" 
                rel="noreferrer"
                className="text-white hover:text-red-500 transition-colors decoration-white/30 underline-offset-4 hover:underline"
              >
                Koustav
              </a>
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-300 group-hover:text-white transition-colors">Back to Top</span>
            <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-white group-hover:text-black transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>

        </div>
      </div>

      {/* Internal Styles for Smooth Marquee Loop */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes footer-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } 
        }
        .animate-footer-marquee {
          width: max-content;
          animation: footer-marquee 30s linear infinite;
        }
      `}} />
    </footer>
  );
}