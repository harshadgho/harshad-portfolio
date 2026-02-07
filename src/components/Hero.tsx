import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile-placeholder.jpg";


export const Hero = () => {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/20 shadow-glow">

              <img
                src={profileImg}
                alt="Harshad Rajabhau Gholve"
                className="w-full h-full object-contain bg-[#0f0f0f]"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 border border-border/50 rounded-full animate-pulse-slow" />
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-sm md:text-base uppercase tracking-widest mb-4"
            >
              Computer Engineering Student
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            >
              Harshad Rajabhau
              <span className="block text-gradient">Gholve</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed"
            >
              A computer engineering student with a strong interest in technology 
              and software development. Passionate about learning new tools, 
              programming concepts, and building practical solutions that create 
              real-world impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={() => handleScrollTo("#projects")}
                className="group bg-foreground text-background hover:bg-foreground/90 px-8"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScrollTo("#contact")}
                className="border-border hover:bg-accent px-8"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground cursor-pointer"
            onClick={() => handleScrollTo("#about")}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
