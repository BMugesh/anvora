
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, PenTool, Rocket } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "You Send The Idea",
        desc: "We dive deep into your vision. No fluff. Just strategy.",
        icon: MessageSquare,
        color: "anvora-indigo",
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        id: 2,
        title: "We Architect & Design",
        desc: "Wireframes morph into high-fidelity UI. Engineered for impact.",
        icon: PenTool,
        color: "anvora-gold",
        gradient: "from-amber-400 to-orange-500"
    },
    {
        id: 3,
        title: "You Launch With Authority",
        desc: "Deploy to a global edge network. Fast. Secure. Dominant.",
        icon: Rocket,
        color: "anvora-indigo",
        gradient: "from-indigo-500 to-purple-600"
    }
];

export const HowItWorks = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Slow down: 500vh height
    // Hold at end: [0, 0.85, 1] map to ["1%", "-75%", "-75%"]
    // This allows the user to view the final card without it scrolling away immediately
    const x = useTransform(scrollYProgress, [0, 0.85, 1], ["1%", "-55%", "-55%"]);

    return (
        <section id="process" ref={targetRef} className="relative h-[500vh] bg-anvora-black">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="relative z-10 px-6 md:px-20 mb-8 md:mb-12 w-full">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">
                        How It Works
                    </h2>
                    <p className="text-gray-400 text-lg">The Anvora Protocol</p>
                </div>

                <div className="absolute inset-0 bg-anvora-indigo/5 skew-y-12 transform origin-top-left scale-150 pointer-events-none" />

                <motion.div style={{ x }} className="flex gap-6 md:gap-10 px-6 md:px-20 items-center">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative flex-shrink-0 w-[85vw] md:w-[60vw] max-w-4xl h-[60vh] rounded-3xl overflow-hidden glass-card group hover:border-white/20 transition-all duration-500"
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                            <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                <div className="mb-auto">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-8 shadow-lg`}>
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="text-9xl font-display font-bold text-white/5 absolute top-4 right-8 select-none">
                                        0{step.id}
                                    </span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-xl text-gray-300 max-w-xl">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Final spacer to ensure last card is fully viewable without edge clipping */}
                    <div className="w-[5vw]" />
                </motion.div>
            </div>
        </section>
    );
};
