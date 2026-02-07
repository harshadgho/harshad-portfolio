import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, Smartphone } from "lucide-react";

const experiences = [
  {
    icon: Code,
    role: "Python Developer Intern",
    company: "ProAzure Software Solution",
    description:
      "Gained hands-on experience in Python development, working on real-world projects and enhancing programming skills through practical application.",
    highlights: ["Python Development", "Real-world Projects", "Problem Solving"],
  },
  {
    icon: Smartphone,
    role: "Android Development Intern",
    company: "Prodigy Infotech Solution",
    description:
      "Explored Android application development, learning mobile development fundamentals and contributing to practical development work.",
    highlights: ["Android Development", "Mobile Apps", "Practical Experience"],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 gradient-subtle relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-3">
              Professional Journey
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Experience
            </h2>
          </div>

          {/* Experience Cards */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="group p-6 md:p-8 rounded-xl gradient-card border border-border hover:border-muted-foreground/30 transition-all duration-300 shadow-card"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0 group-hover:bg-muted transition-colors">
                    <exp.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2 py-0.5 text-xs bg-foreground text-background rounded-full mb-2">
                      <Briefcase className="w-3 h-3 mr-1" />
                      Internship
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 text-xs bg-accent text-foreground rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
