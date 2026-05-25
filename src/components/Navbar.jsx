import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Disc3, Newspaper, Mail } from 'lucide-react';
import { FaSpotify, FaInstagram, FaYoutube } from 'react-icons/fa';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for clean tailwind class merging
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// =========================================
// NAVIGATION DATA
// Updated to match the final app structure
// =========================================
const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Releases', href: '#releases', icon: Disc3 },
  { name: 'Press', href: '#press', icon: Newspaper },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const socialLinks = [
  { name: 'Spotify', href: 'https://open.spotify.com/artist/0xjyyAiXfySSYUJInGzJYL?si=t1gI9J7eQJ6HpWOMMBKUqQ', icon: FaSpotify }, 
  { name: 'Instagram', href: 'https://www.instagram.com/scrizophernic_gladiator?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: FaInstagram },
  { name: 'YouTube', href: 'https://youtube.com/@amitdutta-95?si=mxQ85OqERx5CxO-l', icon: FaYoutube },       
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Detect scroll to change navbar opacity/styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* =========================================
          DESKTOP NAVIGATION (1024px and above)
          ========================================= */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 hidden lg:flex items-center justify-between px-12 py-5 transition-all duration-500',
          isScrolled 
            ? 'bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4' 
            : 'bg-transparent py-6'
        )}
      >
        <a href="#home" className="group relative z-10 flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-white uppercase">
            Amit Dutta
          </span>
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
        </a>

        <div className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.name)}
              className="relative text-sm font-medium tracking-widest text-zinc-300 uppercase transition-colors hover:text-white group"
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-2 left-0 h-[2px] bg-white transition-all duration-300",
                activeSection === link.name ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6 z-10">
          <div className="flex gap-4 border-r border-white/20 pr-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white transition-all hover:scale-110 duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          <a href="#releases" className="px-6 py-2 bg-white text-black font-bold uppercase tracking-wider text-xs rounded-full hover:bg-zinc-200 transition-colors">
            Listen Now
          </a>
        </div>
      </motion.nav>

      {/* =========================================
          TABLET NAVIGATION (Floating Bottom Dock)
          ========================================= */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex lg:hidden pointer-events-none w-full justify-center px-6">
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-auto flex items-center gap-2 p-2 bg-black/70 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                className={cn(
                  "flex items-center justify-center p-4 rounded-full transition-all duration-300",
                  isActive 
                    ? "bg-white text-black" 
                    : "text-zinc-400 hover:text-white hover:bg-white/10"
                )}
              >
                <link.icon size={22} strokeWidth={isActive ? 2 : 1.5} />
              </a>
            );
          })}
        </motion.nav>
      </div>

      {/* =========================================
          MOBILE NAVIGATION (Top Bar + Fullscreen Overlay)
          ========================================= */}
      <div className="md:hidden">
        <nav
          className={cn(
            'fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 transition-all duration-300',
            (isScrolled && !mobileMenuOpen) ? 'bg-black/40 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
          )}
        >
          <a href="#home" className="text-xl font-black tracking-tighter text-white uppercase relative z-[60]">
            Amit Dutta
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-[60] p-2 -mr-2 text-white focus:outline-none"
          >
            <motion.div animate={mobileMenuOpen ? "open" : "closed"} className="relative w-6 h-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </button>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 z-50 flex flex-col justify-center bg-black/95 px-8"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onClick={() => {
                      setActiveSection(link.name);
                      setMobileMenuOpen(false);
                    }}
                    className="group flex items-center gap-6"
                  >
                    <span className="text-zinc-600 group-hover:text-white transition-colors duration-300">
                      <link.icon size={32} strokeWidth={1} />
                    </span>
                    <span className="text-4xl font-black uppercase tracking-tighter text-transparent overflow-hidden bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-600 group-hover:from-white group-hover:to-zinc-300 transition-all duration-300">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="absolute bottom-12 left-8 flex gap-6"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}