import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Building2 } from "lucide-react";

const certs = [
  {
    icon: ShieldCheck,
    title: "Qualifiés PASSI",
    desc: "Prestataire d'Audit de la Sécurité des Systèmes d'Information, qualification délivrée par l'ANSSI. Portées : Test d'intrusion, Audit de configuration, Audit d'architecture et Audit organisationnel.",
  },
  {
    icon: FileCheck,
    title: "Certifiés ISO 27001:2022",
    desc: "Certification sur le périmètre de notre infrastructure d'audit, démontrant notre engagement à appliquer les meilleures pratiques de sécurité que nous recommandons à nos clients.",
  },
  {
    icon: Building2,
    title: "Membre du Campus Cyber",
    desc: "AlgoSecure est membre du Campus Cyber, le lieu totem de la cybersécurité en France, renforçant notre réseau et notre expertise collective.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Des accréditations qui attestent de notre expertise et de notre rigueur.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <cert.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
