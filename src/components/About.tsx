import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Passionate about writing clean, efficient code and building scalable applications.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Analytical mindset focused on finding innovative solutions to complex challenges.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description: "Always exploring new technologies, frameworks, and development methodologies.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-3">
              Get to know me
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>
          </div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed text-center">
              I'm a dedicated <span className="text-foreground font-medium">Computer Engineering student</span> currently 
              in my 3rd year at Ajeenkya DY Patil University, Pune. My journey in technology 
              is driven by a deep curiosity about how software can solve real-world problems. 
              I believe in the power of technology to create meaningful impact, and I'm constantly 
              working to expand my skills in <span className="text-foreground font-medium">web development</span>, 
              <span className="text-foreground font-medium"> programming</span>, and 
              <span className="text-foreground font-medium"> software engineering</span>.
            </p>
          </motion.div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-xl gradient-card border border-border hover:border-muted-foreground/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-muted transition-colors">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
