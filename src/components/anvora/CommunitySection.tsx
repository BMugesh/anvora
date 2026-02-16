import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Star, TrendingUp, Award } from "lucide-react";

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
  },
  {
    title: "Local Business Boost",
    description: "Free websites for small businesses in underserved communities.",
    tag: "Impact",
  },
  {
    title: "Startup Pitch Deck",
    description: "Interactive pitch decks that helped 12 startups secure seed funding.",
    tag: "Success",
  },
];

export default function CommunitySection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="community" className="py-24 md:py-32 relative overflow-hidden">
      {/* Parallax background element */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl -z-10"
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
          <span className="text-sm font-semibold text-gold-dark uppercase tracking-widest mb-3 block">
            Our Community
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            More Than a Service —{" "}
            <span className="text-gradient-indigo">A Movement</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We believe in building together. Here's what our community has achieved.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => {
            const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
            return (
              <motion.div
                key={stat.label}
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center bg-card rounded-2xl p-6 border border-border hover:border-accent/40 transition-all hover:shadow-lg"
              >
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="font-display text-3xl font-extrabold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
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
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-indigo-light/40 transition-all duration-500 hover:shadow-indigo/10 hover:shadow-xl cursor-pointer"
              >
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-indigo-light bg-indigo/10 px-3 py-1 rounded-full mb-4">
                  {project.tag}
                </span>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-indigo-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
