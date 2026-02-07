import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 80 },
  { name: "C++", level: 80 },
  { name: "Java", level: 80 },
  { name: "Python", level: 80 },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
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
              Technical Expertise
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Skills
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="max-w-2xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-foreground font-medium text-lg">
                    {skill.name}
                  </span>
                  <span className="text-muted-foreground font-mono text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-accent rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                    className="h-full bg-foreground rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-muted-foreground/20" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center text-muted-foreground mt-12 max-w-lg mx-auto"
          >
            Continuously expanding my technical toolkit through hands-on projects, 
            internships, and self-directed learning.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
