import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Star, TrendingUp, Award, ArrowUpRight } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: TrendingUp, value: "200+", label: "Projects Delivered" },
  { icon: Award, value: "50+", label: "Community Projects" },
];

const projects = [
  {
    title: "Student Portfolio Hub",
    description: "A showcase platform connecting talented students with real-world opportunities.",
    tag: "Community",
    impact: "120+ students helped",
  },
  {
    title: "Local Business Boost",
    description: "Free websites for small businesses in underserved communities.",
    tag: "Impact",
    impact: "30+ businesses launched",
  },
  {
    title: "Startup Pitch Deck",
    description: "Interactive pitch decks that helped 12 startups secure seed funding.",
    tag: "Success",
    impact: "$2M+ raised",
  },
];

export default function CommunitySection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="community" className="py-24 md:py-36 bg-warm relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 cinematic-line" />

      {/* Ambient glow */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-[120px] -z-10"
        style={{ background: "hsl(var(--gold))" }}
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold-dark uppercase tracking-[0.2em] mb-4 block font-display">
            Our Community
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
            More Than a Service —{" "}
            <span className="text-gradient-indigo">A Movement</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We believe in building together. Here's what our community has achieved.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => {
            const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
            return (
              <motion.div
                key={stat.label}
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-cinematic"
              >
                <stat.icon className="w-7 h-7 text-gold mx-auto mb-3" />
                <div className="font-display text-3xl font-black text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Project tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
            return (
              <motion.div
                key={project.title}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-indigo-light/30 transition-all duration-500 hover:shadow-cinematic cursor-pointer relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-indigo-light bg-indigo/10 px-3 py-1 rounded-full font-display">
                    {project.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-indigo-light transition-colors" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-indigo-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="text-xs font-display font-semibold text-gold">
                  {project.impact}
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
