import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sentences = [
    "Initializing Presence...",
    "Calibrating Design...",
    "Engineering Impact...",
    "Welcome to Anvora."
];

interface LoadingScreenProps {
    onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        // Text sequence timer
        const interval = setInterval(() => {
            setTextIndex((prev) => {
                if (prev < sentences.length - 1) {
                    return prev + 1;
                }
                clearInterval(interval);
                return prev;
            });
        }, 800); // Faster switching for dynamic feel

        // Total loading time before unmounting
        const timeout = setTimeout(() => {
            onComplete();
        }, 4500);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-anvora-black text-white overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            {/* Central animating graphic */}
            <div className="relative flex items-center justify-center mb-8">
                {/* Core Glowing Dot */}
                <motion.div
                    className="w-2 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.5] }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 1 }}
                />

                {/* Expanding Grid/Wireframe Effect - Simulated by turning rings */}
                <motion.div
                    className="absolute border border-anvora-indigo/30 rounded-full w-32 h-32"
                    initial={{ scale: 0, opacity: 0, rotateX: 60 }}
                    animate={{ scale: 1, opacity: 1, rotateX: 60, rotateZ: 360 }}
                    exit={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 3, ease: "linear" }}
                />
                <motion.div
                    className="absolute border border-anvora-gold/20 rounded-full w-48 h-48"
                    initial={{ scale: 0, opacity: 0, rotateY: 60 }}
                    animate={{ scale: 1, opacity: 1, rotateY: 60, rotateZ: -180 }}
                    exit={{ opacity: 0, scale: 1.5 }}
                    transition={{ duration: 3.5, ease: "linear" }}
                />

                {/* Particles */}
                <div className="absolute inset-0 w-64 h-64 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-anvora-gold rounded-full"
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            animate={{
                                x: (Math.random() - 0.5) * 200,
                                y: (Math.random() - 0.5) * 200,
                                opacity: [0, 1, 0]
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeOut"
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Text Sequence */}
            <div className="h-8 relative overflow-hidden flex flex-col items-center">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={textIndex}
                        className="text-sm md:text-base font-display tracking-[0.2em] uppercase text-anvora-glass"
                        initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
                        transition={{ duration: 0.5 }}
                    >
                        {sentences[textIndex]}
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* Progress Bar (Subtle) */}
            <motion.div
                className="absolute bottom-10 w-64 h-[1px] bg-white/10 overflow-hidden"
                exit={{ opacity: 0 }}
            >
                <motion.div
                    className="h-full bg-anvora-gold"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3.2, ease: "easeInOut" }}
                />
            </motion.div>

        </motion.div>
    );
};
