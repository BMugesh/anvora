import { motion } from 'framer-motion';

export const BrandLogo = () => {
    return (
        <div className="relative inline-flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10"
            >
                {/* Base Metallic Text */}
                <span className="
                    font-display font-semibold text-2xl tracking-[3px] uppercase
                    text-transparent bg-clip-text
                    bg-gradient-to-b from-white via-slate-300 to-slate-500
                    drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
                    filter
                ">
                    ANVORA
                </span>

                {/* Subtle Cool Blue Glow (Outer) */}
                <span className="
                    absolute inset-0 -z-10
                    font-display font-semibold text-2xl tracking-[3px] uppercase
                    text-anvora-indigo-glow blur-md select-none opacity-50
                ">
                    ANVORA
                </span>

                {/* Light Sweep Animation Overlay */}
                <motion.span
                    className="
                        absolute inset-0
                        font-display font-semibold text-2xl tracking-[3px] uppercase
                        text-transparent bg-clip-text
                        bg-gradient-to-r from-transparent via-white/50 to-transparent
                        bg-[length:200%_100%]
                        pointer-events-none select-none
                    "
                    initial={{ backgroundPosition: "100% 0%" }}
                    animate={{ backgroundPosition: "-100% 0%" }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        delay: 0.8, // Start after entrance
                        repeat: 0 // Play once
                    }}
                    style={{
                        backgroundSize: "200% 100%"
                    }}
                >
                    ANVORA
                </motion.span>
            </motion.div>
        </div>
    );
};
