import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/1234567890?text=Hi%20Anvora!%20I%27d%20like%20to%20place%20an%20order%20for%20your%20digital%20services.";

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-hero rounded-3xl p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Decorative blobs */}
          <motion.div
            className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-20 blur-2xl"
            style={{ background: "hsl(var(--gold))" }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-60 h-60 rounded-full opacity-10 blur-3xl"
            style={{ background: "hsl(var(--indigo-glow))" }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <MessageCircle className="w-12 h-12 text-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
                Ready to Build Something{" "}
                <span className="text-gradient-gold">Amazing</span>?
              </h2>
              <p className="text-primary-foreground/70 max-w-xl mx-auto mb-10 text-lg">
                Tell us about your project on WhatsApp and let's get started.
                No obligations, no pushy sales — just a friendly conversation.
              </p>
            </motion.div>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isVisible
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground font-bold text-lg px-10 py-5 rounded-2xl shadow-gold animate-pulse-gold hover:animate-none transition-all"
            >
              <span>Place Your Order on WhatsApp</span>
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
