import { motion } from "framer-motion";
import { Search, ShieldCheck, Phone, Award, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Audit Cloud & IA",
    tag: "01 — Audit",
    desc: "Audit de sécurité AWS, Azure et GCP. Tests d'intrusion cloud, revue d'architecture et analyse des configurations pour sécuriser vos environnements cloud.",
    features: ["Audit AWS & Azure", "Pentest Cloud", "Revue IAM & accès", "Sécurité Kubernetes"],
  },
  {
    icon: ShieldCheck,
    title: "Conseil & Conformité",
    tag: "02 — Conseil",
    desc: "Accompagnement stratégique en sécurité cloud, conformité NIS2, RGPD et ISO 27001 pour startups et entreprises tech.",
    features: ["Conformité NIS2", "RSSI externalisé", "ISO 27001 Cloud", "Formation DevSecOps"],
  },
  {
    icon: Phone,
    title: "CERT & Incident Cloud",
    tag: "03 — CERT",
    desc: "Réponse à incident sur environnements cloud. Analyse forensique AWS/Azure, gestion de crise et plan de reprise cloud.",
    features: ["Réponse incident cloud", "Forensique AWS/Azure", "Gestion de crise", "Plan de reprise"],
  },
  {
    icon: Award,
    title: "Certifications",
    tag: "04 — Certifications",
    desc: "Nos certifications cloud et cybersécurité garantissent un haut niveau d'expertise sur AWS, Azure et les standards internationaux.",
    features: ["PASSI (ANSSI)", "ISO 27001:2022", "AWS Security", "Azure Expert"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Nos expertises cloud & IA</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5">
            Sécurité cloud de <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Audit AWS, Azure, sécurité IA et conformité pour startups et entreprises tech.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 border-glow border-glow-hover transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/0 group-hover:bg-primary/5 rounded-full blur-3xl transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center group-hover:shadow-glow-sm transition-shadow duration-300">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-primary/60 tracking-widest uppercase">{service.tag}</span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary transition-colors duration-300" />
                </div>

                <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-medium bg-primary/8 text-primary/80 px-3 py-1.5 rounded-lg border border-primary/15 group-hover:border-primary/30 transition-colors"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
