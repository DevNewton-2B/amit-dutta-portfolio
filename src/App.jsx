import React, { useEffect, useRef, useState } from 'react'; // Added useState
import { AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import Lenis from 'lenis';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles } from '@react-three/drei';

// Components
import Preloader from './components/Preloader'; // 1. Import Preloader
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Releases from './components/Releases';
import Press from './components/Press';
import Contact from './components/Contact';
import Footer from './components/Footer';

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

export default function App() {
  // 2. Add Loading State
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Only initialize Lenis after loading is complete so they can't scroll the site while it boots
    if (isLoading) return;

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
  }, [isLoading]); // Added isLoading as a dependency

  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-50 font-sans selection:bg-red-500/30 selection:text-white no-scrollbar">
      
      {/* 3. Inject AnimatePresence and Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <AbstractBackground />
        </Canvas>
      </div>

      {/* Main UI */}
      <Navbar />
      <main className="relative z-10 flex flex-col w-full">
        <Home />
        <About />
        <Releases />
        <Press />
        <Contact />
        <Footer />
      </main>
      
    </div>
  );
}