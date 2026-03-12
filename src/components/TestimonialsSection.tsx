import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Engagés et compétents, les intervenants sont arrivés à l'objectif dans le temps imparti, et ont produit un rapport de qualité.",
    author: "Laurent P.",
    role: "RSSI - Mirion Technologies",
  },
  {
    quote: "Très à l'écoute, les équipes d'AlgoSecure m'ont conseillé des solutions pertinentes. Leur prestation toute aussi pointue que bienveillante a été une véritable plus-value.",
    author: "Caroline G.",
    role: "Directrice - MSD",
  },
  {
    quote: "Depuis la fin des années 2000, AlgoSecure a fourni son expertise technique à plusieurs de nos projets complexes de cybersécurité, avec un niveau d'efficience remarquable.",
    author: "Direction de la Sécurité du Numérique",
    role: "Groupe SNCF",
  },
  {
    quote: "Les consultants ont été efficaces et très professionnels. Les résultats de ces deux audits nous ont été très utiles. Je recommande AlgoSecure.",
    author: "Jean-Baptiste B.",
    role: "Technology Operations Manager - Cosmo Tech",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ce que nos clients <span className="text-gradient">disent de nous</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
