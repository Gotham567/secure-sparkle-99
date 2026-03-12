import { motion } from "framer-motion";
import { Radar, Eye, BarChart3, ArrowRight } from "lucide-react";

const AlgoLightHouseSection = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-10 md:p-16 border-glow relative overflow-hidden"
        >
          {/* Corner accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/5 to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-primary/10 border-glow px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-primary mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Surveillance continue
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
                algo<span className="text-gradient">LightHouse</span>
              </h2>
              <p className="text-lg text-secondary-foreground leading-relaxed mb-8">
                Pilotez et maîtrisez votre surface d'attaque externe. Un service managé combinant
                technologie avancée et expertise humaine pour une cybersécurité pilotable et efficiente.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://algolighthouse.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 flex items-center gap-2 group"
                >
                  Découvrir
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: Radar, title: "Cartographie continue", desc: "Découverte automatique de tous vos actifs exposés sur Internet" },
                { icon: Eye, title: "Détection proactive", desc: "Identification des vulnérabilités avant qu'elles ne soient exploitées" },
                { icon: BarChart3, title: "Tableau de bord pilotable", desc: "Visibilité complète sur votre posture de sécurité en temps réel" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="flex gap-4 p-5 rounded-xl bg-card/50 border border-border/30 hover:border-primary/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlgoLightHouseSection;
