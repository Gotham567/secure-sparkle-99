import { motion } from "framer-motion";

const clients = [
  "SNCF", "Thales", "Enedis", "Crédit Agricole", "Arkema", "Eurofins",
  "APICIL", "April", "Go Sport", "SAMSE", "Grand Lyon", "Grenoble",
];

const TrustSection = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Grands comptes, ETI, PME et acteurs publics nous font confiance pour sécuriser leurs systèmes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6"
        >
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl p-4 flex items-center justify-center h-20 hover:border-primary/30 transition-colors"
            >
              <span className="text-sm font-medium text-muted-foreground text-center">
                {client}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
