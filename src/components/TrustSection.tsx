import { motion } from "framer-motion";

const clientRows = [
  ["SNCF", "Thales", "Enedis", "Crédit Agricole", "Arkema", "Eurofins", "APICIL", "April", "Go Sport", "SAMSE", "Grand Lyon", "Grenoble"],
  ["Mirion Technologies", "Cosmo Tech", "e2Time", "IDKIDS", "ProwebCE", "Solyon Mutuelle", "Wanimo", "Delta Plus", "AVEM", "Villefranche", "Caluire-et-Cuire", "Conseil de l'Europe"],
];

const TrustSection = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 px-6"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Références</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5">
            Ils nous font <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Grands comptes, ETI, PME et acteurs publics sécurisent leurs systèmes avec CloudSecure.
          </p>
        </motion.div>

        {/* Marquee rows */}
        {clientRows.map((row, rowIdx) => (
          <div key={rowIdx} className="relative mb-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex overflow-hidden">
              <div
                className="flex gap-4 animate-marquee"
                style={{ animationDirection: rowIdx % 2 === 0 ? "normal" : "reverse" }}
              >
                {[...row, ...row].map((client, i) => (
                  <div
                    key={`${client}-${i}`}
                    className="flex-shrink-0 glass rounded-xl px-6 py-4 flex items-center justify-center border-glow border-glow-hover transition-all duration-300 cursor-default"
                  >
                    <span className="text-sm font-semibold text-secondary-foreground whitespace-nowrap tracking-wide">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
