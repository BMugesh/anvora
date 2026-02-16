import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "NovaTech Startup",
    category: "Startup Website",
    description: "A futuristic landing page for an AI startup, featuring smooth animations and bold typography.",
    gradient: "from-indigo to-indigo-glow",
  },
  {
    title: "Bloom Bakery",
    category: "Small Business",
    description: "A warm, inviting website for a local bakery that increased online orders by 300%.",
    gradient: "from-gold to-gold-dark",
  },
  {
    title: "Alex Chen Portfolio",
    category: "Student Portfolio",
    description: "A sleek portfolio that helped a CS student land their dream internship at a top firm.",
    gradient: "from-indigo-light to-indigo",
  },
  {
    title: "GreenLeaf Co.",
    category: "E-Commerce",
    description: "A sustainable products brand site with seamless checkout and eco-conscious design.",
    gradient: "from-gold-dark to-gold",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Project preview */}
      <div className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} relative`}>
        {/* Mock content inside */}
        <div className="absolute inset-4 bg-card/90 rounded-xl shadow-cinematic flex items-center justify-center">
          <div className="text-center p-6">
            <div className="font-display text-xl font-bold text-foreground mb-1">{project.title}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{project.category}</div>
          </div>
        </div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-hero/90 flex flex-col items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Eye className="w-8 h-8 mb-4" style={{ color: "hsl(0 0% 100%)" }} />
          <p className="text-sm text-center leading-relaxed mb-4" style={{ color: "hsl(0 0% 100% / 0.8)" }}>
            {project.description}
          </p>
          <div className="flex items-center gap-1 text-gold text-sm font-display font-semibold">
            View Project <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="py-24 md:py-36 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold-dark uppercase tracking-[0.2em] mb-4 block font-display">
            Our Work
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
            Built to{" "}
            <span className="text-gradient-gold">Impress</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every project is a story. Here are some of our favorites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
