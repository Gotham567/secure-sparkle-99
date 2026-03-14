import { motion } from "framer-motion";
import { Brain, Scale, Lightbulb, Users, MapPin, Award } from "lucide-react";

const items = [
  { icon: Brain, title: "Expertise Cloud & IA", desc: "Audit AWS, Azure, GCP. Sécurité Kubernetes, DevSecOps et détection de menaces par IA. Une équipe certifiée cloud." },
  { icon: Scale, title: "Indépendance totale", desc: "Aucun partenariat éditeur cloud. Nos recommandations sont guidées uniquement par la sécurité de vos infrastructures." },
  { icon: Lightbulb, title: "Innovation IA", desc: "Recherche appliquée en cybersécurité IA. Détection automatisée, analyse comportementale et scoring de risques cloud." },
  { icon: Users, title: "Partenaire des startups", desc: "Nous comprenons les enjeux des startups et entreprises tech : agilité, scalabilité cloud et conformité rapide." },
  { icon: MapPin, title: "Couverture nationale", desc: "Siège à Lyon. Présents à Paris, Saint-Étienne, Grenoble, Annecy et intervention à distance sur vos clouds." },
  { icon: Award, title: "Doublement certifiés", desc: "PASSI et ISO 27001 : nous appliquons les standards de sécurité cloud les plus exigeants du marché." },
];

const DifferentiatorsSection = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Pourquoi nous choisir</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ce qui nous <span className="text-gradient">différencie</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CloudSecure est un cabinet indépendant spécialisé en sécurité cloud et cybersécurité IA.
            Le partenaire de confiance des startups et entreprises tech pour sécuriser AWS, Azure et vos infrastructures cloud.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-7 rounded-2xl border border-border/30 hover:border-primary/20 bg-card/20 hover:bg-card/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:shadow-glow-sm transition-all duration-300">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
