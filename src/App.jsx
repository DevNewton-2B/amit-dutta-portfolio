import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles } from '@react-three/drei';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; // Imported the new About component

// =========================================
// 3D BACKGROUND SCENE
// =========================================
function AbstractBackground() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ff3333" />
      <directionalLight position={[-10, -10, -5]} intensity={2} color="#3366ff" />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} scale={1.5}>
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

      <Sparkles count={200} scale={15} size={2} speed={0.2} opacity={0.4} color="#ffffff" />
    </>
  );
}

// =========================================
// MAIN APPLICATION
// =========================================
export default function App() {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-50 font-sans selection:bg-red-500/30 selection:text-white no-scrollbar">
      
      {/* 3D Canvas Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <AbstractBackground />
        </Canvas>
      </div>

      <Navbar />

      {/* Main Scrollable Content */}
      <main className="relative z-10 flex flex-col w-full">
        
        <Home />
        
        {/* INJECTED ABOUT SECTION */}
        <About />

        {/* RELEASES / BENTO GRID PLACEHOLDER */}
        <section id="releases" className="min-h-screen px-6 py-24 bg-[#050505] relative z-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">Latest Drops</h2>
            <div className="w-full h-[60vh] border border-white/10 bg-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center text-zinc-600 uppercase tracking-widest font-bold">
              [ Bento Grid Component Goes Here ]
            </div>
          </div>
        </section>

        {/* TOURS PLACEHOLDER */}
        <section id="tours" className="min-h-screen px-6 py-24 bg-[#050505] relative z-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">Live Tour</h2>
             <div className="w-full h-[60vh] border border-white/10 bg-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center text-zinc-600 uppercase tracking-widest font-bold">
              [ Tour Dates Component Goes Here ]
            </div>
          </div>
        </section>

        {/* CONTACT PLACEHOLDER */}
        <section id="contact" className="min-h-screen px-6 py-24 bg-[#050505] relative z-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">Connect</h2>
             <div className="w-full h-[60vh] border border-white/10 bg-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center text-zinc-600 uppercase tracking-widest font-bold">
              [ Glassmorphism Contact Form Goes Here ]
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}