import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Engagés et compétents, les intervenants sont arrivés à l'objectif dans le temps imparti, et ont produit un rapport de qualité.",
    author: "Laurent P.",
    role: "RSSI",
    company: "Mirion Technologies",
    rating: 5,
  },
  {
    quote: "Très à l'écoute, les équipes de CloudSecure m'ont conseillé des solutions pertinentes. Leur prestation toute aussi pointue que bienveillante a été une véritable plus-value dans la sécurisation de notre SI.",
    author: "Caroline G.",
    role: "Directrice",
    company: "MSD",
    rating: 5,
  },
  {
    quote: "Depuis la fin des années 2000, CloudSecure a fourni son expertise technique à plusieurs de nos projets complexes de cybersécurité, avec un niveau d'efficience, d'engagement et de suivi remarquables.",
    author: "Direction Sécurité Numérique",
    role: "",
    company: "Groupe SNCF",
    rating: 5,
  },
  {
    quote: "Nous avons collaboré avec CloudSecure plusieurs fois et sommes toujours satisfaits. Rapports clairs et précis, conseils judicieux et adaptés à nos contraintes.",
    author: "Didier L.",
    role: "CEO",
    company: "e2Time",
    rating: 5,
  },
  {
    quote: "Les consultants ont été efficaces et très professionnels. Les résultats de ces deux audits nous ont été très utiles. Je recommande AlgoSecure.",
    author: "Jean-Baptiste B.",
    role: "Technology Ops Manager",
    company: "Cosmo Tech",
    rating: 5,
  },
  {
    quote: "Nous souhaitions réaliser un audit Red Team de nos installations, les équipes d'AlgoSecure ont été très efficaces. Les retours ont été très bien expliqués.",
    author: "Cyril B.",
    role: "RSSI",
    company: "Métropole de Grenoble",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Témoignages</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5">
            Ce que nos clients <span className="text-gradient">disent de nous</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Nos clients sont les meilleurs témoins de la qualité de notre travail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-7 border-glow border-glow-hover transition-all duration-300 relative group flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary/10 mb-4" />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-primary fill-primary" />
                ))}
              </div>

              <p className="text-foreground/85 leading-relaxed mb-6 flex-1 text-sm">
                "{t.quote}"
              </p>

              <div className="pt-5 border-t border-border/30">
                <p className="font-heading font-bold text-foreground text-sm">{t.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t.role && `${t.role} · `}{t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
