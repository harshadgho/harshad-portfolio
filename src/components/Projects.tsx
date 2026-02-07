import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { QrCode, Shield, Clock, Users, Database, ExternalLink } from "lucide-react";

const projectFeatures = [
  { icon: QrCode, text: "QR Code & OTP Authentication" },
  { icon: Shield, text: "Secure Student Verification" },
  { icon: Clock, text: "In-time & Out-time Tracking" },
  { icon: Users, text: "Staff & Admin Access" },
  { icon: Database, text: "Student Data Management" },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
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
              Featured Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Projects
            </h2>
          </div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 md:p-12 rounded-2xl gradient-card border border-border shadow-glow overflow-hidden group">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-muted/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-foreground text-background rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-background rounded-full animate-pulse" />
                  Final Year Project
                </div>

                {/* Project Title */}
                <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                  Attendance Management System
                  <span className="block text-lg md:text-xl text-muted-foreground font-normal mt-2">
                    using QR Code & OTP
                  </span>
                </h3>

                {/* Technology */}
                <div className="inline-flex items-center px-3 py-1 bg-accent rounded-full mb-6">
                  <span className="text-sm text-foreground font-mono">
                    Django (Python Framework)
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
                  A comprehensive web-based attendance management system designed to 
                  streamline the attendance tracking process in educational institutions. 
                  The system securely stores student data including name, roll number, 
                  department, gender, and marks while providing real-time attendance 
                  verification through QR codes and OTP authentication.
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {projectFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg"
                    >
                      <feature.icon className="w-5 h-5 text-foreground shrink-0" />
                      <span className="text-sm text-foreground">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <h4 className="text-foreground font-semibold mb-3">Key Highlights</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 shrink-0" />
                      Tracks lecture in-time and out-time for accurate attendance records
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 shrink-0" />
                      QR code and OTP-based authentication ensures only authorized students
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 shrink-0" />
                      Staff and admin can securely access and manage student records
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
