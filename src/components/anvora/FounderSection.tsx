import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Zap, Heart, Target } from "lucide-react";

const values = [
  { icon: Zap, title: "Speed", desc: "From idea to live in days, not months." },
  { icon: Heart, title: "Care", desc: "We treat every project like our own." },
  { icon: Target, title: "Precision", desc: "Pixel-perfect, detail-obsessed work." },
];

export default function FounderSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-sm font-semibold text-gold uppercase tracking-[0.2em] mb-4 block font-display">
              Who We Are
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-foreground leading-tight mb-6">
              Started From a Small Garage.{" "}
              <span className="text-gradient-gold">Built With Grit.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Fueled by late nights, wild ideas, and a genuine love for helping people shine online.
              Today, we craft websites that make students, startups, and creators stand out
              in a world full of noise. No templates. No shortcuts. Just pure craft.
            </p>

            <div className="cinematic-line w-full mb-8" />

            <div className="grid grid-cols-3 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center mx-auto mb-2">
                    <v.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="font-display font-bold text-sm text-foreground">{v.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{v.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative bg-gradient-hero rounded-3xl p-1 overflow-hidden">
              <div className="bg-card rounded-[22px] p-8 md:p-12 relative">
                {/* Decorative code block */}
                <div className="font-mono text-sm space-y-3">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-gold" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span className="text-xs text-muted-foreground ml-2">anvora.studio</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <p className="text-muted-foreground">
                      <span className="text-indigo-light">const</span>{" "}
                      <span className="text-gold">anvora</span> = {"{"}
                    </p>
                    <p className="text-muted-foreground pl-4">
                      mission: <span className="text-gold">"Build digital futures"</span>,
                    </p>
                    <p className="text-muted-foreground pl-4">
                      passion: <span className="text-gold">"∞"</span>,
                    </p>
                    <p className="text-muted-foreground pl-4">
                      clients: <span className="text-indigo-light">500</span>+,
                    </p>
                    <p className="text-muted-foreground pl-4">
                      quality: <span className="text-gold">"unmatched"</span>
                    </p>
                    <p className="text-muted-foreground">{"}"}</p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-gold shadow-gold flex items-center justify-center"
              animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="font-display font-black text-xl text-accent-foreground">A</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
