import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Startup Founder",
    text: "Anvora turned my rough idea into a beautiful, functional website in days. They truly care about their clients — it felt like working with friends, not vendors.",
    stars: 5,
  },
  {
    name: "James O.",
    role: "University Student",
    text: "I needed a portfolio fast for internship applications. Anvora delivered something beyond my expectations — and at a student-friendly price!",
    stars: 5,
  },
  {
    name: "Amina B.",
    role: "Small Business Owner",
    text: "Finally, a team that listens. My bakery website looks amazing, loads fast, and I've already seen more online orders. Highly recommend!",
    stars: 5,
  },
  {
    name: "David L.",
    role: "Freelance Designer",
    text: "The attention to detail and the warmth of the team made all the difference. Anvora doesn't just build websites — they build relationships.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-warm relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold-dark uppercase tracking-widest mb-3 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Loved by{" "}
            <span className="text-gradient-gold">Real People</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-3xl p-8 md:p-12 border border-border text-center shadow-lg relative"
            >
              <Quote className="w-10 h-10 text-gold/30 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-gold text-xl"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <div className="font-display font-bold text-foreground">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold w-8" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent/50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
