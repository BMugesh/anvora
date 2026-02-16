
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-anvora-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Mesh / Blobs */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-anvora-indigo/20 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-anvora-gold/10 blur-[120px] animate-pulse-gold" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />

                {/* Particles - simple css implementation or motion */}
                <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-30">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: Math.random() * 3 + 'px',
                                height: Math.random() * 3 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                opacity: Math.random() * 0.5 + 0.2
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                style={{ opacity }}
            >
                <div className="mb-6 flex items-center justify-center gap-2">
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 60, opacity: 1 }}
                        transition={{ duration: 1, delay: 4.8 }}
                        className="h-[1px] bg-gradient-to-r from-transparent to-anvora-gold"
                    />
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 4.8 }}
                        className="text-anvora-gold text-sm font-medium tracking-[0.3em] uppercase"
                    >
                        Welcome to the Future
                    </motion.span>
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 60, opacity: 1 }}
                        transition={{ duration: 1, delay: 4.8 }}
                        className="h-[1px] bg-gradient-to-l from-transparent to-anvora-gold"
                    />
                </div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight tracking-tight mb-8"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 5.0, ease: "easeOut" }}
                >
                    We Engineer <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-anvora-indigo-light">
                        Digital Presence.
                    </span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 5.3, ease: "easeOut" }}
                >
                    Not templates. Not noise. Real impact. <br />
                    Built for those who refuse to be ignored.
                </motion.p>

                <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 5.6, ease: "easeOut" }}
                >
                    <a
                        href="https://wa.me/YOURNUMBER?text=Hi%20Anvora,%20I%20want%20to%20start%20my%20project"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative px-8 py-4 bg-anvora-indigo hover:bg-anvora-indigo-glow text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] flex items-center gap-3 overflow-hidden"
                    >
                        <span className="relative z-10">Start Your Project</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />

                        {/* Magnetic/Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.5, duration: 1 }}
            >
                <span className="text-xs text-gray-500 font-display tracking-widest rotate-90 origin-right translate-x-12">SCROLL</span>
                <div className="w-[1px] h-24 bg-gray-800 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-anvora-gold"
                        animate={{ y: [0, 96, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};
