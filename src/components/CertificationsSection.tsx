import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Building2, CheckCircle2 } from "lucide-react";

const certs = [
  {
    icon: ShieldCheck,
    title: "Qualifiés PASSI",
    subtitle: "Qualification ANSSI",
    desc: "Prestataire d'Audit de la Sécurité des Systèmes d'Information. Cette qualification atteste de nos compétences et du soin apporté à la confidentialité.",
    items: ["Test d'intrusion", "Audit de configuration", "Audit d'architecture", "Audit organisationnel"],
  },
  {
    icon: FileCheck,
    title: "ISO 27001:2022",
    subtitle: "Certifié Bureau Veritas",
    desc: "Certification sur notre infrastructure d'audit démontrant que nous appliquons à nous-même les meilleures pratiques que nous recommandons.",
    items: ["Sécurité technique", "Sécurité organisationnelle", "Gestion des processus", "Protection des données"],
  },
  {
    icon: Building2,
    title: "Campus Cyber",
    subtitle: "Membre fondateur",
    desc: "CloudSecure est membre du Campus Cyber, le lieu totem de la cybersécurité en France, renforçant notre réseau et expertise collective.",
    items: ["Réseau national", "Veille collaborative", "Innovation partagée", "Écosystème cyber"],
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Accréditations</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5">
            Certifications & <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Des accréditations exigeantes qui garantissent l'excellence de nos prestations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-8 border-glow border-glow-hover transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/0 group-hover:bg-primary/5 rounded-full blur-3xl transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-6 group-hover:shadow-glow-sm transition-shadow">
                  <cert.icon className="h-8 w-8 text-primary" />
                </div>

                <span className="text-xs text-primary font-semibold tracking-wider uppercase">{cert.subtitle}</span>
                <h3 className="font-heading text-xl font-bold text-foreground mt-2 mb-4">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {cert.desc}
                </p>

                <div className="space-y-2.5">
                  {cert.items.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary/70 shrink-0" />
                      <span className="text-sm text-secondary-foreground">{item}</span>
                    </div>
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

export default CertificationsSection;
