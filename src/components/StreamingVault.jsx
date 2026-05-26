import React, { useState, useRef, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, Stars, Environment, Html, Sparkles } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

// =========================================
// ICON LIBRARY IMPORTS (No local images needed)
// =========================================
import { FaSpotify, FaApple, FaYoutube, FaInstagram } from 'react-icons/fa';

// =========================================
// HOLOGRAPHIC CLASS GLASS ORB 
// =========================================
function HolographicGlassOrb({ color, Icon }) {
  const groupRef = useRef();
  const iconRef = useRef(); // Added a ref specifically for the Icon

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating of the entire glass ball
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.2) * 0.1;
      // Rotate the glass shell slowly
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
    if (iconRef.current) {
      // THE FIX: Counter-rotate the icon exactly opposite to the glass.
      // This keeps the icon perfectly flat and facing the camera at all times!
      iconRef.current.rotation.y = -state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      
      {/* 1. Outer Heavy Class Glass Shell */}
      <mesh>
        <sphereGeometry args={[1.7, 64, 64]} />
        <meshPhysicalMaterial 
          color={color} 
          transmission={1} // Fully transparent glass
          opacity={1} 
          metalness={0.1} 
          roughness={0.02} // Perfectly smooth clearcoat
          ior={1.15} // Low IOR prevents the glass from heavily distorting the icon
          thickness={2.5} 
          envMapIntensity={1.5} // Catches the studio lighting reflections beautifully
          clearcoat={1} 
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* 2. Inner Ambient Glowing Core */}
      <mesh>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </mesh>

      {/* 3. The React-Icon Hologram (Suspended inside the 3D Space) */}
      <group ref={iconRef} position={[0, 0, 0]}> {/* Explicitly locked to dead center [0,0,0] */}
        <Html 
          transform 
          center 
          distanceFactor={4.5} 
          zIndexRange={[100, 0]} 
          pointerEvents="none"
        >
          <div 
            className="flex items-center justify-center animate-pulse"
            style={{ 
              width: '240px', // THE FIX: Explicit dimensions ensure perfect mathematical centering
              height: '240px',
              color: '#ffffff',
              filter: `drop-shadow(0 0 20px ${color}) drop-shadow(0 0 40px ${color}) drop-shadow(0 0 80px ${color})` 
            }}
          >
            {/* Increased Size from 140 to 170 */}
            <Icon size={170} />
          </div>
        </Html>
      </group>

      {/* 4. Contained Energy Particles */}
      <Sparkles count={50} scale={2.8} size={2.5} speed={0.4} opacity={0.8} color={color} />
    </group>
  );
}

// =========================================
// MAIN COMPONENT
// =========================================
export default function StreamingVault() {
  const [activePlatform, setActivePlatform] = useState('spotify');

  // Unified data array utilizing React Icons
  const channels = [
    { id: 'spotify', name: 'Spotify Premium', icon: FaSpotify, url: 'https://open.spotify.com/artist/0xjyyAiXfySSYUJInGzJYL?si=t1gI9J7eQJ6HpWOMMBKUqQ', tag: 'High-Fidelity Audio', color: '#1DB954', bgDark: '#0a1a10' },
    { id: 'apple', name: 'Apple Spatial', icon: FaApple, url: 'https://music.apple.com/in/artist/amit-dutta/1896683193?ls', tag: 'Lossless Master', color: '#FA243C', bgDark: '#1a0a0d' },
    { id: 'youtube', name: 'YouTube Music', icon: FaYoutube, url: 'https://youtube.com/@amitdutta-95?si=mxQ85OqERx5CxO-l', tag: 'Official Videos', color: '#FF0000', bgDark: '#1a0505' },
    { id: 'instagram', name: 'Instagram Hub', icon: FaInstagram, url: 'https://www.instagram.com/scrizophernic_gladiator?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', tag: 'Social Feed', color: '#bc2a8d', bgDark: '#1a0514' }
  ];

  const activeData = channels.find(c => c.id === activePlatform);

  return (
    <section id="vault" className="relative min-h-screen bg-[#050505] text-white py-24 md:py-32 overflow-hidden flex flex-col justify-center">
      
      {/* Background Matrix Flare matched to active platform */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] blur-[180px] rounded-full pointer-events-none transition-colors duration-1000" 
        style={{ backgroundColor: `${activeData.color}15` }} // 15 hex adds slight opacity
      />

      <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
            Streaming Vault
          </h2>
        </div>

        {/* =========================================
            DESKTOP & TABLET VIEW
            ========================================= */}
        <div className="hidden md:grid grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[600px]">
          
          {/* Left Panel: Navigation Menu (Sleek Dark Cards) */}
          <div className="col-span-5 lg:col-span-4 flex flex-col gap-4">
            {channels.map((item) => {
              const isSelected = activePlatform === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePlatform(item.id)}
                  className={`group relative flex items-center justify-between p-6 rounded-[2rem] transition-all duration-500 text-left overflow-hidden border ${
                    isSelected 
                      ? `border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]` 
                      : 'bg-[#111111]/80 border-white/5 hover:bg-[#1a1a1a]'
                  }`}
                  style={{ 
                    backgroundColor: isSelected ? item.bgDark : '',
                    borderColor: isSelected ? `${item.color}50` : ''
                  }}
                >
                  <div className="flex items-center gap-5 relative z-10">
                    {/* Icon Box */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-black/60 border border-white/10 shadow-inner">
                      <item.icon 
                        size={24} 
                        className={`transition-all duration-300 ${!isSelected ? 'text-zinc-500 group-hover:text-zinc-300' : ''}`} 
                        style={{ color: isSelected ? item.color : undefined }}
                      />
                    </div>
                    {/* Text block */}
                    <div>
                      <span className="text-lg font-black uppercase tracking-wide block text-white">{item.name}</span>
                      <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mt-1 block group-hover:text-zinc-400 transition-colors">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  
                  {/* Active Brand Dot */}
                  {isSelected && (
                    <motion.div 
                      layoutId="activeDot"
                      className="w-2.5 h-2.5 rounded-full relative z-10 shadow-[0_0_10px_currentColor]" 
                      style={{ backgroundColor: item.color, color: item.color }} 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Panel: Massive 3D Display Container */}
          <div className="col-span-7 lg:col-span-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 relative overflow-hidden flex flex-col justify-between p-8 md:p-12 shadow-2xl">
            
            {/* Embedded 3D Canvas Context */}
            <div className="absolute inset-0 z-0 pointer-events-auto cursor-grab active:cursor-grabbing">
              <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 5.5]} fov={45} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2 + 0.15} minPolarAngle={Math.PI / 4} />
                
                {/* Dark Studio Environment for beautiful glassy reflections */}
                <Environment preset="studio" />
                <ambientLight intensity={0.2} />
                <pointLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
                
                {/* Dynamic Brand Colored Lighting */}
                <directionalLight position={[-5, 5, -2]} intensity={2} color={activeData.color} />
                <spotLight position={[0, -5, 4]} angle={0.6} penumbra={1} intensity={3} color={activeData.color} />

                <Stars count={150} factor={4} speed={1} radius={25} fade />
                
                <Suspense fallback={null}>
                  <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    {/* Passing the raw Icon component into the 3D Sphere */}
                    <HolographicGlassOrb color={activeData.color} Icon={activeData.icon} />
                  </Float>
                </Suspense>
              </Canvas>
            </div>

            {/* Overlaid UI - Top Tags */}
            <div className="relative z-10 flex justify-between items-start pointer-events-none w-full">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-black tracking-[0.25em] text-zinc-500">Node Asset</span>
                <span className="text-sm font-bold text-white uppercase tracking-wider">Holographic Class Ball</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111]/80 backdrop-blur-md border border-white/5 text-[9px] uppercase font-bold tracking-widest text-zinc-400">
                <Zap size={10} style={{ color: activeData.color }} /> Refractive WebGL
              </div>
            </div>

            {/* Overlaid UI - Bottom Info & CTA */}
            <div className="relative z-10 flex justify-between items-end w-full mt-auto">
              <div className="max-w-md pointer-events-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeData.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-3">
                      {activeData.name}
                    </h4>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      Launch straight onto the network protocol node to stream high-resolution structural masters.
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Giant Action Button */}
              <a 
                href={activeData.url} 
                target="_blank" 
                rel="noreferrer"
                className="pointer-events-auto flex items-center justify-center w-16 h-16 rounded-full transition-all duration-300 transform hover:scale-110 shrink-0"
                style={{ backgroundColor: activeData.color, boxShadow: `0 0 40px ${activeData.color}60` }}
              >
                <ArrowUpRight size={28} className="text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* =========================================
            MOBILE VIEW (Flat Cards)
            ========================================= */}
        <div className="flex md:hidden flex-col gap-4 w-full">
          {channels.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-[#111111] border border-white/5 w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black/40 border border-white/10 rounded-xl" style={{ color: item.color }}>
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-wide text-sm text-white leading-none">{item.name}</h4>
                  <span className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 block mt-1.5">{item.tag}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: item.color }}>
                <ArrowUpRight size={16} className="text-white" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}