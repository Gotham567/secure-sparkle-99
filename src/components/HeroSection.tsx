import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Search, ShieldCheck, Phone, Award, ArrowRight, ChevronDown, Shield, Lock, Server, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useRef } from "react";

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute inset-0 animate-grid-pulse"
      style={{
        backgroundImage: `
          linear-gradient(hsl(145 80% 42% / 0.06) 1px, transparent 1px),
          linear-gradient(90deg, hsl(145 80% 42% / 0.06) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
    <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan opacity-30" />
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
  </div>
);

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
    return () => { controls.stop(); unsub(); };
  }, [isInView, target, suffix, count, rounded]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { icon: Shield, value: 500, suffix: "+", label: "Audits réalisés", desc: "Tests d'intrusion & audits cloud" },
  { icon: Lock, value: 15, suffix: "+", label: "Années d'expertise", desc: "En cybersécurité offensive" },
  { icon: Server, value: 200, suffix: "+", label: "Infrastructures sécurisées", desc: "AWS, Azure & GCP" },
  { icon: Globe, value: 100, suffix: "%", label: "Indépendant", desc: "Conseil objectif & impartial" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Infrastructure cloud sécurisée" className="w-full h-full object-cover opacity-30" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>
      <GridBackground />

      <div className="container relative z-10 mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 border-glow bg-primary/5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Qualifié PASSI · Certifié ISO 27001
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8">
                Sécurité Cloud
                <br />
                <span className="text-gradient">& IA</span>
              </h1>

              <p className="text-lg md:text-xl text-secondary-foreground max-w-lg mb-10 leading-relaxed">
                Cabinet expert en audit AWS, Azure et sécurité cloud pour startups et entreprises tech.
                Tests d'intrusion, conformité NIS2 et cybersécurité pilotée par l'IA.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 flex items-center gap-2 group"
                >
                  Découvrir nos services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="glass border-glow px-8 py-4 rounded-xl font-semibold text-foreground border-glow-hover transition-all duration-300"
                >
                  Nous contacter
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right - Animated Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                className="glass-strong rounded-2xl p-6 border-glow hover:shadow-glow transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="font-heading text-4xl font-bold text-gradient mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 gap-4 mt-12 lg:hidden"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="glass-strong rounded-xl p-4 border-glow text-center">
              <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="font-heading text-2xl font-bold text-gradient">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
