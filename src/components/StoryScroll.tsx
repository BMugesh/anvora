import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const StoryScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- Master Timeline Transforms (EXTREME Slow Pacing) ---
    // Height: 1200vh (Very slow, deliberate scroll)

    // Scene 1: 0% - 15% "Most websites exist."
    const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.12, 0.15], [0, 1, 1, 0]);
    const scale1 = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);
    const blur1 = useTransform(scrollYProgress, [0.12, 0.15], [0, 10]);

    // Scene 2: 15% - 30% "They don't perform."
    const opacity2 = useTransform(scrollYProgress, [0.18, 0.22, 0.28, 0.32], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.18, 0.32], [40, -40]);
    const rotateX2 = useTransform(scrollYProgress, [0.18, 0.32], [20, -20]);

    // Scene 3: 30% - 45% "They don't convert."
    const opacity3 = useTransform(scrollYProgress, [0.35, 0.38, 0.42, 0.45], [0, 1, 1, 0]);
    const scale3 = useTransform(scrollYProgress, [0.35, 0.45], [1.2, 1]);
    const letterSpacing3 = useTransform(scrollYProgress, [0.35, 0.45], ["-0.05em", "0.1em"]);

    // Scene 4: 45% - 60% "They don't build identity."
    const opacity4 = useTransform(scrollYProgress, [0.48, 0.52, 0.58, 0.62], [0, 1, 1, 0]);
    const filter4 = useTransform(scrollYProgress, [0.48, 0.62], ["blur(5px) brightness(0.5)", "blur(0px) brightness(1)"]);

    // Shift Moment: 60% - 100% (Massive Range for Distinct Reveals)

    // Line 1: "We build leverage." (Appears 0.65 - 0.75)
    // Range is wide (10% of 1200vh = 120vh)
    const opacity5 = useTransform(scrollYProgress, [0.65, 0.70, 0.98], [0, 1, 1]);
    const x5 = useTransform(scrollYProgress, [0.65, 0.80], [-50, 0]);
    const blur5 = useTransform(scrollYProgress, [0.65, 0.72], [10, 0]);

    // GAP: 0.75 - 0.78 (User scrolls 3% of 1200vh => 36vh with nothing new happening)

    // Line 2: "We build authority." (Appears 0.78 - 0.88)
    const opacity6 = useTransform(scrollYProgress, [0.78, 0.83, 0.98], [0, 1, 1]);
    const x6 = useTransform(scrollYProgress, [0.78, 0.90], [-50, 0]);
    const blur6 = useTransform(scrollYProgress, [0.78, 0.85], [10, 0]);

    // GAP: 0.88 - 0.91 (Another dead zone)

    // Line 3: "We build presence." (Appears 0.91 - 1.0)
    const opacity7 = useTransform(scrollYProgress, [0.91, 0.96, 1], [0, 1, 1]);
    const scale7 = useTransform(scrollYProgress, [0.91, 1], [0.9, 1.1]);
    const glow7 = useTransform(scrollYProgress, [0.91, 1], ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 50px rgba(251,191,36,0.6)"]);
    const textBlur7 = useTransform(scrollYProgress, [0.91, 0.94], [10, 0]);


    // --- Background Environment Transforms ---
    const bgGradient = useTransform(scrollYProgress, [0, 0.5, 1],
        ["radial-gradient(circle at 50% 50%, #1e1b4b 0%, #000000 100%)",
            "radial-gradient(circle at 50% 50%, #312e81 0%, #000000 100%)",
            "radial-gradient(circle at 50% 50%, #4338ca 0%, #000000 100%)"]
    );

    const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const starScale = useTransform(scrollYProgress, [0.5, 1], [1, 3]);

    return (
        <section ref={containerRef} className="relative h-[1200vh] bg-anvora-black perspective-1000">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* --- 1. Cinematic Environment --- */}

                {/* Dynamic Radial Background */}
                <motion.div
                    className="absolute inset-0 z-0 opacity-40"
                    style={{ background: bgGradient }}
                />

                {/* Noise Grain Overlay for Film Look */}
                <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
                />

                {/* Central Holographic Sphere (Menu Interface feel) */}
                <motion.div
                    className="absolute z-[2] w-[60vmin] h-[60vmin] rounded-full border border-white/10"
                    style={{ rotate: orbitRotate, scale: starScale }}
                >
                    <div className="absolute inset-0 rounded-full border-t border-b border-white/20 animate-spin-slow" />
                    <div className="absolute inset-[10%] rounded-full border-l border-r border-anvora-indigo/30 animate-spin-reverse-slower" />
                </motion.div>

                {/* Floating Particles (High Depth) */}
                <div className="absolute inset-0 z-[3] overflow-hidden">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: Math.random() * 3 + 'px',
                                height: Math.random() * 3 + 'px',
                                opacity: Math.random() * 0.5 + 0.1,
                            }}
                            animate={{
                                y: [0, -100, 0],
                                scale: [1, 1.5, 1],
                                opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>


                {/* --- 2. Typography Layers (Centered Absolute) --- */}

                <div className="relative z-10 w-full px-6 flex items-center justify-center pointer-events-none">

                    {/* Scene 1 */}
                    <motion.div style={{ opacity: opacity1, scale: scale1, filter: useTransform(blur1, v => `blur(${v}px)`) }} className="absolute text-center w-full">
                        <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none">
                            Most websites exist.
                        </h2>
                        <p className="mt-4 text-gray-400 text-lg md:text-xl font-light tracking-widest uppercase">
                            Static. Boring. Forgettable.
                        </p>
                    </motion.div>

                    {/* Scene 2 */}
                    <motion.div style={{ opacity: opacity2, y: y2, rotateX: rotateX2 }} className="absolute text-center w-full">
                        <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none">
                            They don't perform.
                        </h2>
                        <div className="w-24 h-1 bg-red-500 mx-auto mt-6 shadow-[0_0_20px_rgba(239,68,68,0.5)]" />
                    </motion.div>

                    {/* Scene 3 */}
                    <motion.div style={{ opacity: opacity3, scale: scale3 }} className="absolute text-center w-full">
                        <motion.h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-none" style={{ letterSpacing: letterSpacing3 }}>
                            They don't convert.
                        </motion.h2>
                    </motion.div>

                    {/* Scene 4 */}
                    <motion.div style={{ opacity: opacity4, filter: filter4 }} className="absolute text-center w-full">
                        <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tighter leading-none">
                            They don't build identity.
                        </h2>
                    </motion.div>

                    {/* Shift Moment - STRICT SEQUENTIAL */}
                    <div className="absolute text-center w-full flex flex-col items-center gap-6 md:gap-8">
                        <motion.h2
                            className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-anvora-gold/80 tracking-tighter"
                            style={{ opacity: opacity5, x: x5, filter: useTransform(blur5, v => `blur(${v}px)`) }}
                        >
                            We build leverage.
                        </motion.h2>
                        <motion.h2
                            className="text-3xl md:text-5xl lg:text-7xl font-display font-bold text-anvora-gold tracking-tighter"
                            style={{ opacity: opacity6, x: x6, filter: useTransform(blur6, v => `blur(${v}px)`) }}
                        >
                            We build authority.
                        </motion.h2>
                        <motion.h2
                            className="text-5xl md:text-8xl lg:text-9xl font-display font-black text-white tracking-tighter uppercase"
                            style={{ opacity: opacity7, scale: scale7, textShadow: glow7, filter: useTransform(textBlur7, v => `blur(${v}px)`) }}
                        >
                            We build presence.
                        </motion.h2>
                    </div>

                </div>
            </div>
        </section>
    );
};
