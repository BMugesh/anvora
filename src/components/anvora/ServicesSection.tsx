import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, Palette, Code, Smartphone, Rocket, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Beautiful, responsive websites that tell your story and convert visitors into customers.",
  },
  {
    icon: Palette,
    title: "Portfolio & Branding",
    description: "Stand out with a stunning portfolio and cohesive brand identity that speaks volumes.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored digital solutions built exactly to your vision — no cookie-cutter templates.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every project optimized for phones, tablets, and desktops from day one.",
  },
  {
    icon: Rocket,
    title: "Startup Launchpad",
    description: "Get your MVP live fast with our rapid-build packages designed for startups.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "We don't disappear after delivery. Ongoing care and updates whenever you need them.",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-gold/20 hover:shadow-xl"
      style={{ perspective: "1000px" }}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <service.icon className="w-6 h-6 text-accent-foreground" />
      </div>
      <h3 className="font-display text-lg font-bold text-foreground mb-3">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {service.description}
      </p>
      <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 md:py-32 bg-warm relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold-dark uppercase tracking-widest mb-3 block">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Solutions That{" "}
            <span className="text-gradient-gold">Actually Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            From your first idea to a fully launched product — we handle the tech so you can focus on what matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
