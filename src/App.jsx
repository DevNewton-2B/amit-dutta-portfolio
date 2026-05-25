import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles } from '@react-three/drei';

// =========================================
// COMPONENT IMPORTS
// =========================================
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Releases from './components/Releases';

// =========================================
// 3D BACKGROUND SCENE (Trance / Dark Vibe)
// =========================================
function AbstractBackground() {
  const meshRef = useRef();

  // Rotate the abstract shape slowly on every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <>
      <Environment preset="city" />
      {/* Ambient lighting for the dark rock/trance mood */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ff3333" />
      <directionalLight position={[-10, -10, -5]} intensity={2} color="#3366ff" />

      {/* Floating Abstract Geometry */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} scale={1.5}>
          {/* Icosahedron gives a sharp, edgy rock feel */}
          <icosahedronGeometry args={[2, 0]} />
          <meshStandardMaterial 
            color="#111111" 
            wireframe 
            emissive="#ffffff"
            emissiveIntensity={0.05}
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>

      {/* Background dust/sparkles for the trance atmosphere */}
      <Sparkles count={200} scale={15} size={2} speed={0.2} opacity={0.4} color="#ffffff" />
    </>
  );
}

// =========================================
// MAIN APPLICATION COMPONENT
// =========================================
export default function App() {
  
  // 1. Initialize Global Smooth Scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom ease out curve
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Usually best to leave native scrolling on mobile touch
      touchMultiplier: 2,
      infinite: false,
    });

    // Request animation frame loop to drive Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    // no-scrollbar class ensures the native scrollbar is hidden while Lenis handles the smooth scroll
    <div className="relative min-h-screen bg-[#050505] text-zinc-50 font-sans selection:bg-red-500/30 selection:text-white no-scrollbar">
      
      {/* FIXED 3D BACKGROUND LAYER 
        This sits behind all content. The pointer-events-none ensures 
        it doesn't block clicks on your bento grid or buttons.
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <AbstractBackground />
        </Canvas>
      </div>

      {/* FIXED NAVIGATION */}
      <Navbar />

      {/* MAIN SCROLLABLE CONTENT 
        Z-index 10 keeps it above the 3D background.
      */}
      <main className="relative z-10 flex flex-col w-full">
        
        {/* COMPLETED SECTIONS */}
        <Home />
        <About />
        <Releases />

        {/* TOURS PLACEHOLDER */}
        <section id="tours" className="min-h-screen px-6 py-24 bg-[#050505] relative z-20 flex flex-col justify-center">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-white">Live Tour</h2>
             <div className="w-full h-[60vh] border border-white/10 bg-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center text-zinc-600 uppercase tracking-widest font-bold shadow-2xl">
              [ Tour Dates Component Goes Here ]
            </div>
          </div>
        </section>

        {/* CONTACT PLACEHOLDER */}
        <section id="contact" className="min-h-screen px-6 py-24 bg-[#050505] relative z-20 flex flex-col justify-center">
          <div className="w-full max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 text-white">Connect</h2>
             <div className="w-full h-[60vh] border border-white/10 bg-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center text-zinc-600 uppercase tracking-widest font-bold shadow-2xl">
              [ Glassmorphism Contact Form Goes Here ]
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}