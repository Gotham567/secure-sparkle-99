import { motion } from "framer-motion";
import { Brain, Scale, Lightbulb, Users, MapPin, Award } from "lucide-react";

const items = [
  { icon: Brain, title: "Expertise", desc: "Pentests, reverse engineering, forensique, conseil ISO 27001" },
  { icon: Scale, title: "Indépendance", desc: "Aucun partenariat éditeur ou constructeur" },
  { icon: Lightbulb, title: "Innovation", desc: "Recherche sur la sécurité IoT via une thèse Cifre" },
  { icon: Users, title: "À taille humaine", desc: "Offre personnalisée et qualité de service optimale" },
  { icon: MapPin, title: "En expansion", desc: "Lyon, Paris, Saint-Étienne, Grenoble, Annecy" },
  { icon: Award, title: "Certifiés", desc: "PASSI, ISO 27001 pour des audits qualitatifs" },
];

const DifferentiatorsSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ce qui nous <span className="text-gradient">différencie</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AlgoSecure est un cabinet de conseil indépendant spécialisé en sécurité des systèmes d'information, 
            une équipe lyonnaise de passionnés au plus proche de vos besoins.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl hover:bg-card/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
