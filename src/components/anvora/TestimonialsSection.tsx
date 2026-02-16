import { useState, useEffect } from "react";
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

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 cinematic-line" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold-dark uppercase tracking-[0.2em] mb-4 block font-display">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
            Loved by{" "}
            <span className="text-gradient-gold">Real People</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card rounded-3xl p-8 md:p-12 border border-border text-center shadow-cinematic relative"
            >
              <Quote className="w-10 h-10 text-gold/20 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-body">
                "{t.text}"
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.08, type: "spring" }}
                    className="text-gold text-lg"
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
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent/40 transition-all hover:shadow-cinematic"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold w-8" : "bg-border w-2"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent/40 transition-all hover:shadow-cinematic"
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
