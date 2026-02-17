
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-anvora-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Cinematic Gradient Base */}
                <div className="absolute inset-0 bg-gradient-hero opacity-80" />

                {/* Moving Light Beams */}
                <motion.div
                    className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-anvora-indigo/10 blur-[150px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-anvora-gold/5 blur-[120px]"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -20, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Grid Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />

                {/* Enhanced Particles */}
                <motion.div style={{ y: y1 }} className="absolute inset-0">
                    {[...Array(30)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: Math.random() * 2 + 1 + 'px',
                                height: Math.random() * 2 + 1 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                opacity: Math.random() * 0.4 + 0.1,
                                filter: `blur(${Math.random() * 1}px)`
                            }}
                            animate={{
                                y: [0, Math.random() * -100 - 50],
                                opacity: [0, 0.5, 0]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 10
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                style={{ opacity, scale }}
            >
                <div className="mb-8 flex items-center justify-center gap-4">
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 80, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="h-[1px] bg-gradient-to-r from-transparent via-anvora-gold to-transparent"
                    />
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.5em" }}
                        animate={{ opacity: 1, letterSpacing: "0.3em" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="text-anvora-gold text-xs md:text-sm font-medium uppercase tracking-[0.3em] glow-text-gold"
                    >
                        Welcome to the Future
                    </motion.span>
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 80, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="h-[1px] bg-gradient-to-r from-transparent via-anvora-gold to-transparent"
                    />
                </div>

                <motion.h1
                    className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.9] tracking-tighter mb-8"
                    initial={{ y: 100, opacity: 0, rotateX: 20 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                >
                    Build Bold. <br />
                    <span className="text-gradient-cinematic relative inline-block">
                        Rise Digital.
                        <motion.div
                            className="absolute -inset-1 bg-anvora-indigo/20 blur-xl rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        />
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 font-light leading-relaxed"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                >
                    We engineer digital presence. <br />
                    <span className="text-gray-300">Not templates. Not noise. Real impact.</span> <br />
                    Built for those who refuse to be ignored.
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                >
                    <a
                        href="https://wa.me/YOURNUMBER?text=Hi%20Anvora,%20I%20want%20to%20start%20my%20project"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative px-10 py-5 bg-white text-anvora-black rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center gap-4 overflow-hidden"
                    >
                        <span className="relative z-10">Start Your Project</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />

                        {/* Button Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
            >
                <div className="w-[1px] h-24 bg-gray-800 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-anvora-gold"
                        animate={{ y: [0, 96, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};
