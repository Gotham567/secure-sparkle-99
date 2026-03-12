import { motion } from "framer-motion";
import { Search, ShieldCheck, Phone, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Search, title: "Audit", desc: "Tests d'intrusion, audits de configuration et d'architecture" },
  { icon: ShieldCheck, title: "Conseil", desc: "Accompagnement RSSI, conformité, formations" },
  { icon: Phone, title: "CERT", desc: "Réponse à incident, analyse forensique, gestion de crise" },
  { icon: Award, title: "Certifications", desc: "PASSI, ISO 27001, Cyber Expert, OSEP, OSCP" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-gradient-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
              Cabinet indépendant qualifié PASSI
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
              Experts en{" "}
              <span className="text-gradient">cybersécurité</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Cabinet de conseil indépendant qualifié PASSI & certifié ISO 27001.
              Nous protégeons vos systèmes d'information avec expertise et rigueur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Nos services
            </a>
            <a
              href="#contact"
              className="glass px-8 py-3.5 rounded-lg font-semibold text-foreground hover:border-primary/50 transition-colors"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>

        {/* Service cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20"
          id="services"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass rounded-xl p-6 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
