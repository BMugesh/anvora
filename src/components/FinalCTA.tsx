
import { motion } from "framer-motion";

export const FinalCTA = () => {
    return (
        <section id="contact" className="py-32 relative overflow-hidden flex items-center justify-center bg-anvora-black">
            {/* Mesh Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-anvora-indigo/20 via-black to-anvora-gold/10 opacity-50" />

            <motion.div
                className="relative z-10 text-center px-6 max-w-4xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
                    Ready To Be <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-anvora-gold to-orange-400">
                        Taken Seriously?
                    </span>
                </h2>

                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Tell us your idea. We'll engineer the rest.
                </p>

                <div className="flex flex-col items-center gap-4">
                    <button className="relative px-12 py-5 bg-white text-anvora-black font-bold text-lg rounded-full overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        <span className="relative z-10">Place Your Order</span>
                        <div className="absolute inset-0 bg-anvora-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                    <p className="text-sm text-gray-500 font-medium">Fast. Friendly. Professional.</p>
                </div>
            </motion.div>
        </section>
    );
};
