import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle, Code2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "You Place Your Order",
    description: "Drop us a message on WhatsApp. Tell us your vision, your goals, and we'll take it from there.",
    accent: "gold" as const,
  },
  {
    icon: Code2,
    number: "02",
    title: "We Build It",
    description: "Our team crafts a professional, stylish, and scalable solution tailored exactly to you.",
    accent: "indigo" as const,
  },
  {
    icon: Rocket,
    number: "03",
    title: "You Get Your Website",
    description: "Delivered fast, polished to perfection. Happy vibes guaranteed — every single time.",
    accent: "gold" as const,
  },
];

export default function ProcessSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-36 bg-warm relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 cinematic-line" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-gold-dark uppercase tracking-[0.2em] mb-4 block font-display">
            The Anvora Way
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
            How We Make the{" "}
            <span className="text-gradient-gold">Magic Happen</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three simple steps. Zero headaches. One incredible result.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 cinematic-line" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, i) => {
              const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
              return (
                <motion.div
                  key={step.number}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group"
                >
                  <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-cinematic text-center relative z-10">
                    {/* Number */}
                    <div className="font-display text-6xl font-black text-muted/40 absolute top-4 right-4">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                        step.accent === "gold" ? "bg-gradient-gold" : "bg-gradient-hero"
                      }`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <step.icon className={`w-7 h-7 ${
                        step.accent === "gold" ? "text-accent-foreground" : "text-primary-foreground"
                      }`} />
                    </motion.div>

                    <h3 className="font-display text-lg font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between steps */}
                  {i < 2 && (
                    <div className="hidden md:flex absolute top-1/2 -right-5 -translate-y-1/2 z-20">
                      <ArrowRight className="w-5 h-5 text-muted-foreground/30" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
