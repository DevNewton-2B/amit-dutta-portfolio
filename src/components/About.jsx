import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Zap, Waves, Quote } from 'lucide-react';
import { FaSpotify, FaApple, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiYoutubemusic } from 'react-icons/si';

import artistImg from '../assets/artist/artistimg.png';

const socialLinks = [
    { name: 'Spotify', url: 'https://open.spotify.com/artist/0xjyyAiXfySSYUJInGzJYL?si=t1gI9J7eQJ6HpWOMMBKUqQ', icon: FaSpotify, color: 'hover:text-[#1DB954]' },
    { name: 'Apple Music', url: 'https://music.apple.com/in/artist/amit-dutta/1896683193?ls', icon: FaApple, color: 'hover:text-[#FA243C]' },
    { name: 'YT Music', url: 'https://music.youtube.com/@amitdutta-95?si=CGw7FRZGJjAiFfJG', icon: SiYoutubemusic, color: 'hover:text-[#FF0000]' },
    { name: 'YouTube', url: 'https://youtube.com/@amitdutta-95?si=mxQ85OqERx5CxO-l', icon: FaYoutube, color: 'hover:text-[#FF0000]' },
    { name: 'Instagram', url: 'https://www.instagram.com/scrizophernic_gladiator?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: FaInstagram, color: 'hover:text-[#E1306C]' },
    { name: 'Facebook', url: 'https://facebook.com/share/1AwMSV87PQ', icon: FaFacebookF, color: 'hover:text-[#1877F2]' }
];

const sonicPillars = [
    {
        id: 'rap',
        title: 'Gully Rap',
        icon: Flame,
        tagline: 'Raw Street Truth',
        description: 'Rooted deeply in the streets of Kolkata, translating survival, systemic grit, and unapologetic Bengali lyricism into heavy rhythmic flows that echo the pulse of the masses.',
        metrics: { intensity: '95%', tempo: '90-110 BPM', spirit: 'Rebellion' }
    },
    {
        id: 'rock',
        title: 'Bengali Rock',
        icon: Zap,
        tagline: 'Sonic Defiance',
        description: 'Infusing screaming distortion pedals, stadium-sized anthemic drums, and vulnerable Bengali poetry into alternative rock arrangements that bring unmatched energy live on stage.',
        metrics: { intensity: '98%', tempo: '120-140 BPM', spirit: 'Catharsis' }
    },
    {
        id: 'trance',
        title: 'Psycho Trance',
        icon: Waves,
        tagline: 'Ethereal Folklore',
        description: 'Blending classic Baul and traditional Bengali spiritual folk motifs with complex, hypnotic modular synthesis, deep basslines, and layered, immersive electronic soundscapes.',
        metrics: { intensity: '88%', tempo: '138-145 BPM', spirit: 'Transcendence' }
    }
];

const timelineMilestones = [
    { year: '2019', title: 'The Streets Awaken', desc: 'Released early underground cyphers capturing raw Bengali street poetry, immediately disrupting the local independent scene.' },
    { year: '2022', title: 'Amplified Chaos', desc: 'Formed a live touring group to seamlessly layer heavy alternative guitar riffs right underneath rapid-fire spoken word delivery.' },
    { year: '2025', title: 'The Astral Loop', desc: 'Introduced traditional folklore elements layered into massive psychedelic trance structures, defining a completely unique sonic genre.' }
];

export default function About() {
    const [activePillar, setActivePillar] = useState('rap');
    const currentPillarData = sonicPillars.find(p => p.id === activePillar);

    return (
        <section
            id="about"
            className="relative min-h-screen bg-[#050505] text-zinc-100 py-24 px-6 md:px-12 lg:px-24 overflow-hidden w-full selection:bg-red-500/30"
        >
            {/* Background Ambience */}
            <div className="absolute top-1/4 right-0 w-[50vw] h-[50vh] bg-gradient-to-br from-red-600/10 to-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[40vw] h-[40vh] bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* =========================================
            DESKTOP LAYOUT (1024px+)
            ========================================= */}
                <div className="hidden lg:grid grid-cols-12 gap-16 items-start">

                    {/* LEFT COLUMN: Sticky Circular Profile & Social Hub */}
                    <div className="col-span-5 sticky top-32 flex flex-col items-center gap-6">

                        {/* Circular Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full max-w-[320px] aspect-square rounded-full overflow-hidden group border-[4px] border-white/10 bg-white/5 shadow-[0_0_50px_rgba(0,0,0,0.3)]"
                        >
                            <img
                                src={artistImg}
                                alt="Amit Dutta"
                                className="absolute inset-0 w-full h-full object-cover grayscale-[30%] contrast-125 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/10 mix-blend-overlay" />
                        </motion.div>

                        {/* Profile Info */}
                        <div className="text-center mt-2">
                            <h3 className="text-5xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
                                Amit Dutta
                            </h3>
                            <p className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs mt-2 drop-shadow-md">
                                Vocalist / Producer / Lyricist
                            </p>
                        </div>

                        {/* Glassmorphism Social Icons (Icon only for cleaner look below circle) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-4 mt-2"
                        >
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={link.name}
                                    className={`p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-white/10 ${link.color}`}
                                >
                                    <link.icon className="text-xl text-zinc-300 transition-colors duration-300 group-hover:text-inherit" />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Narrative & Interactions */}
                    <div className="col-span-7 flex flex-col gap-16 pt-10">

                        {/* Header */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-[2px] w-12 bg-red-500" />
                                <span className="text-sm tracking-[0.3em] uppercase font-black text-red-500">The Architect</span>
                            </div>
                            <h2 className="text-6xl xl:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                                Behind The <br /> Soundscapes
                            </h2>
                            <p className="text-xl font-light text-zinc-300 leading-relaxed mt-8 max-w-2xl">
                                Amit Dutta doesn’t view music as separate compartments. To him, the raw fury of a guitar solo shares the exact same heartbeat as an electronic dance loop or an underground battle rap sequence. It is an uncompromising dedication to building modern Bengali counter-culture music that commands attention on global platforms. <br /> Bengali music was never meant to sound this feral.
                                Raw Bengali chaos.
                                Corrupted bass, fractured textures and violent experimental sound.
                                Underground culture.
                                No polished sound. No clean aesthetics.
                                Just noise, rage and distortion.
                            </p>
                        </div>

                        {/* Interactive Sonic Pillars */}
                        <div className="flex flex-col gap-6">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">Explore The Layers</h4>
                            <div className="flex gap-4 border-b border-white/10 pb-4">
                                {sonicPillars.map((pillar) => (
                                    <button
                                        key={pillar.id}
                                        onClick={() => setActivePillar(pillar.id)}
                                        className={`relative px-4 py-2 text-sm font-black uppercase tracking-widest transition-colors ${activePillar === pillar.id ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                                            }`}
                                    >
                                        {pillar.title}
                                        {activePillar === pillar.id && (
                                            <motion.div
                                                layoutId="activePillarTab"
                                                className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-red-500"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Dynamic Content Panel */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePillar}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <currentPillarData.icon size={28} className="text-red-500 mt-1" />
                                        <div>
                                            <p className="text-2xl font-black text-white uppercase tracking-tight">{currentPillarData.title}</p>
                                            <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">{currentPillarData.tagline}</p>
                                        </div>
                                    </div>
                                    <p className="text-zinc-300 font-light leading-relaxed mb-6">{currentPillarData.description}</p>

                                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                                        <div>
                                            <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-500">Intensity</span>
                                            <p className="text-sm font-bold text-white mt-1">{currentPillarData.metrics.intensity}</p>
                                        </div>
                                        <div>
                                            <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-500">BPM</span>
                                            <p className="text-sm font-bold text-white mt-1">{currentPillarData.metrics.tempo}</p>
                                        </div>
                                        <div>
                                            <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-500">Spirit</span>
                                            <p className="text-sm font-bold text-white mt-1">{currentPillarData.metrics.spirit}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Timeline */}
                        <div className="flex flex-col gap-8 mt-4">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-500">The Journey</h4>
                            <div className="flex flex-col gap-8 relative pl-6 border-l border-white/10">
                                {timelineMilestones.map((m, idx) => (
                                    <div key={idx} className="relative flex flex-col gap-1 group">
                                        <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-zinc-800 border-2 border-zinc-600 group-hover:border-red-500 group-hover:bg-red-500 transition-colors" />
                                        <span className="text-xs font-black tracking-widest text-red-500">{m.year}</span>
                                        <h5 className="text-lg font-bold text-white uppercase tracking-tight mt-1">{m.title}</h5>
                                        <p className="text-zinc-400 font-light leading-relaxed max-w-xl">{m.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* =========================================
            TABLET & MOBILE LAYOUT (Under 1024px)
            ========================================= */}
                <div className="flex lg:hidden flex-col gap-12 w-full">

                    {/* Header Mobile */}
                    <div className="text-center flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[1px] w-8 bg-red-500" />
                            <span className="text-[10px] tracking-[0.3em] uppercase font-black text-red-500">The Architect</span>
                            <span className="h-[1px] w-8 bg-red-500" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none text-white">
                            Behind The <br /> Soundscapes
                        </h2>
                    </div>

                    {/* Circular Image & Connect Stack Mobile */}
                    <div className="w-full flex flex-col items-center gap-6 mt-2">
                        <div className="relative w-56 sm:w-72 aspect-square rounded-full overflow-hidden border-[4px] border-white/10 bg-white/5 shadow-2xl">
                            <img
                                src={artistImg}
                                alt="Amit Dutta"
                                className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-4xl font-black uppercase tracking-tighter text-white">Amit Dutta</h3>
                            <p className="text-red-500 font-bold tracking-[0.2em] uppercase text-[10px] mt-1 mb-6">Vocalist / Producer</p>

                            <div className="flex flex-wrap justify-center gap-3 px-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white transition-all hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] ${link.color}`}
                                    >
                                        <link.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Philosophy Statement Mobile */}
                    <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl w-full relative overflow-hidden mt-4">
                        <Quote size={100} className="absolute -top-6 -right-6 text-red-500/10 rotate-12" />
                        <p className="text-base sm:text-lg font-light text-zinc-300 leading-relaxed relative z-10">
                            "Music should never feel safe. It needs to reflect the dirt of the street corners, the fury of structural amplifiers, and the meditative trance of folk heritage."
                        </p>
                    </div>

                    {/* Mobile Sonic Blocks Stack */}
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-[10px] uppercase font-black tracking-[0.25em] text-zinc-500 px-2">Sonic Layers</p>
                        {sonicPillars.map((pillar) => (
                            <div key={pillar.id} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 w-full flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-red-500/10 rounded-lg text-red-500 border border-red-500/20">
                                        <pillar.icon size={16} />
                                    </div>
                                    <div>
                                        <h4 className="font-black uppercase tracking-wide text-sm text-white leading-none">{pillar.title}</h4>
                                        <span className="text-[9px] uppercase tracking-widest font-bold text-zinc-500">{pillar.tagline}</span>
                                    </div>
                                </div>
                                <p className="text-xs text-zinc-400 font-light leading-relaxed mt-2">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Clean Stacked Timeline */}
                    <div className="p-6 rounded-3xl bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 w-full flex flex-col gap-6 mt-4">
                        <p className="text-[10px] uppercase font-black tracking-[0.25em] text-zinc-500">The Journey</p>
                        <div className="flex flex-col gap-6 relative pl-5 border-l border-white/10">
                            {timelineMilestones.map((m, idx) => (
                                <div key={idx} className="relative flex flex-col gap-1">
                                    <div className="absolute -left-[25px] top-1 h-2 w-2 rounded-full bg-red-500 ring-4 ring-[#050505]" />
                                    <span className="text-[10px] font-black tracking-widest text-red-400">{m.year}</span>
                                    <h5 className="text-sm font-bold text-white uppercase tracking-tight">{m.title}</h5>
                                    <p className="text-xs text-zinc-400 font-light leading-relaxed mt-1">{m.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}