import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/1234567890?text=Hi%20Anvora!%20I%27d%20like%20to%20place%20an%20order%20for%20your%20digital%20services.";

// Floating particles for cinematic effect
function Particles() {
  const [particles] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.id % 3 === 0
              ? "hsl(42 92% 55% / 0.6)"
              : "hsl(243 80% 75% / 0.4)",
          }}
          animate={{
            y: [0, -200, -400],
            x: [0, Math.random() * 60 - 30],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Animated grid lines
function GridOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(hsl(0 0% 100%) 1px, transparent 1px),
          linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />
    </div>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Ambient glow orbs */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: "hsl(243 80% 55% / 0.15)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[5%] w-[400px] h-[400px] rounded-full blur-[100px]"
        style={{ background: "hsl(42 92% 55% / 0.08)" }}
        animate={{ scale: [1, 1.3, 1], y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] left-[50%] w-[300px] h-[300px] rounded-full blur-[80px]"
        style={{ background: "hsl(280 60% 50% / 0.06)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Particles />
      <GridOverlay />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={mounted ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-glass rounded-full px-5 py-2.5 mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm font-medium" style={{ color: "hsl(0 0% 100% / 0.8)" }}>
            Award-Winning Digital Craftsmanship
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 tracking-tight"
          style={{ color: "hsl(0 0% 100%)" }}
        >
          We Don't Just Build
          <br />
          Websites. We Build
          <br />
          <span className="text-gradient-cinematic">Digital Legacies.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "hsl(0 0% 100% / 0.55)" }}
        >
          Students, startups, and creators trust us to turn ideas into impact.
          We craft digital experiences that are beautiful, fast, and unforgettable.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-gold font-display font-bold text-base px-8 py-4 rounded-xl shadow-gold flex items-center gap-2 transition-all duration-300"
            style={{ color: "hsl(235 40% 12%)" }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Place Your Order
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#portfolio"
            className="font-display font-semibold text-base px-8 py-4 rounded-xl bg-glass transition-all duration-300"
            style={{ color: "hsl(0 0% 100% / 0.8)" }}
            whileHover={{ scale: 1.03 }}
          >
            View Our Work
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 flex items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: "500+", label: "Clients" },
            { value: "200+", label: "Projects" },
            { value: "4.9★", label: "Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-black text-gradient-gold">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "hsl(0 0% 100% / 0.35)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 pt-2 flex items-start justify-center" style={{ borderColor: "hsl(0 0% 100% / 0.2)" }}>
          <motion.div
            className="w-1 h-2.5 rounded-full"
            style={{ background: "hsl(0 0% 100% / 0.4)" }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
