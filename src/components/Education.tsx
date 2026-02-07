import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Engineering",
    field: "Computer Engineering (3rd Year)",
    institution: "Ajeenkya DY Patil University, Lohegaon",
    location: "Pune",
    percentage: "In Progress",
    current: true,
  },
  {
    icon: Award,
    degree: "Diploma in Computer Engineering",
    field: "MSBTE",
    institution: "Bhivrabai Sawant Polytechnic",
    location: "",
    percentage: "88.24%",
    current: false,
  },
  {
    icon: BookOpen,
    degree: "SSC",
    field: "Secondary School Certificate",
    institution: "Subhedar Ramji Maloji Ambedkar Vidyalaya",
    location: "",
    percentage: "81.40%",
    current: false,
  },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32 gradient-subtle relative">
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
              Academic Journey
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Education
            </h2>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {educationData.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-foreground border-4 border-background z-10" />

                {/* Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] p-6 rounded-xl gradient-card border border-border hover:border-muted-foreground/30 transition-all duration-300 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.degree}
                        </h3>
                        {item.current && (
                          <span className="px-2 py-0.5 text-xs bg-foreground text-background rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-2">
                        {item.field}
                      </p>
                      <p className="text-foreground text-sm font-medium mb-1">
                        {item.institution}
                      </p>
                      {item.location && (
                        <p className="text-muted-foreground text-xs mb-2">
                          {item.location}
                        </p>
                      )}
                      <div className="inline-flex items-center px-3 py-1 bg-accent rounded-full">
                        <span className="text-sm font-medium text-foreground">
                          {item.percentage}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
