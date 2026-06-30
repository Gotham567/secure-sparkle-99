import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock, Loader2, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const serviceOptions = [
  "Audit AWS / Azure / GCP",
  "Pentest cloud",
  "Conformité NIS2 / RGPD",
  "RSSI externalisé",
  "Formation cybersécurité",
  "Autre",
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: Record<string, string>) => {
    const errs: Record<string, string> = {};
    if (!data.nom?.trim()) errs.nom = "Le nom est requis";
    if (!data.email?.trim()) errs.email = "L'email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Email invalide";
    if (!data.message?.trim()) errs.message = "Le message est requis";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((v, k) => { data[k] = v as string; });

    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({
          name: `${data.nom || ""} ${data.prenom || ""}`.trim(),
          email: data.email,
          message: `[${data.service || "Non précisé"}] ${data.societe ? `Société: ${data.societe} — ` : ""}${data.message}`,
        });

      if (dbError) throw dbError;

      const { error: fnError } = await supabase.functions.invoke("send-contact-email", {
        body: {
          type: "contact",
          name: `${data.nom || ""} ${data.prenom || ""}`.trim(),
          email: data.email,
          message: data.message,
          societe: data.societe || "",
          service: data.service || "",
          telephone: data.telephone || "",
        },
      });

      if (fnError) {
        if (import.meta.env.DEV) console.error("Email notification failed:", fnError);
      }

      setSuccess(true);
      toast.success("Message envoyé avec succès !");
    } catch (err) {
      if (import.meta.env.DEV) console.error(err);
      toast.error("Erreur lors de l'envoi. Veuillez réessayer ou nous contacter par email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact – CloudSecure | Audit Sécurité Cloud & Pentest"
        description="Contactez CloudSecure pour un audit de sécurité cloud AWS/Azure, un pentest ou un accompagnement RSSI externalisé. Réponse sous 24h. Devis gratuit."
      />
      <Navbar />

      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">Contact</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">
              Parlons de votre <span className="text-gradient">sécurité cloud</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Nos experts vous répondent sous 24h avec une proposition adaptée à votre environnement.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {[
                { icon: Mail, label: "Email", value: "contact@cloudsecure.fr", href: "mailto:contact@cloudsecure.fr" },
                { icon: Phone, label: "Téléphone", value: "07 69 32 30 19", href: "tel:+33679323019" },
                { icon: MapPin, label: "Implantations", value: "Lyon · Paris · Grenoble · Saint-Étienne", href: null },
                { icon: Clock, label: "Disponibilité", value: "Lun-Ven 9h-18h · SOC 24/7", href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="glass rounded-xl p-5 border-glow flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{value}</a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              {success ? (
                <div className="glass rounded-2xl border-glow p-12 text-center">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-5" />
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Message envoyé !</h2>
                  <p className="text-muted-foreground">
                    Merci pour votre message. Nos experts vous répondront sous 24h ouvrées avec une proposition personnalisée.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="glass rounded-2xl border-glow p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nom" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                        Nom *
                      </label>
                      <input
                        id="nom" name="nom" type="text" autoComplete="family-name"
                        className={`w-full glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 border ${errors.nom ? "border-red-500/50" : "border-border/30"} focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors`}
                        placeholder="Dupont"
                      />
                      {errors.nom && <p className="text-red-400 text-xs mt-1">{errors.nom}</p>}
                    </div>
                    <div>
                      <label htmlFor="prenom" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                        Prénom
                      </label>
                      <input
                        id="prenom" name="prenom" type="text" autoComplete="given-name"
                        className="w-full glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 border border-border/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors"
                        placeholder="Jean"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                        Email professionnel *
                      </label>
                      <input
                        id="email" name="email" type="email" autoComplete="email"
                        className={`w-full glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 border ${errors.email ? "border-red-500/50" : "border-border/30"} focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors`}
                        placeholder="jean@entreprise.fr"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="telephone" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                        Téléphone
                      </label>
                      <input
                        id="telephone" name="telephone" type="tel" autoComplete="tel"
                        className="w-full glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 border border-border/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors"
                        placeholder="+33 6 00 00 00 00"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="societe" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                      Société
                    </label>
                    <input
                      id="societe" name="societe" type="text" autoComplete="organization"
                      className="w-full glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 border border-border/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors"
                      placeholder="Ma Startup SAS"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                      Type de service souhaité
                    </label>
                    <select
                      id="service" name="service"
                      className="w-full glass rounded-xl px-4 py-3 text-sm text-foreground border border-border/30 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors bg-transparent"
                    >
                      <option value="">Sélectionner...</option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="message" name="message" rows={4}
                      className={`w-full glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 border ${errors.message ? "border-red-500/50" : "border-border/30"} focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-colors resize-none`}
                      placeholder="Décrivez votre environnement cloud et vos besoins en sécurité..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-primary text-primary-foreground py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-glow transition-all duration-300 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Réponse garantie sous 24h · 100% gratuit et sans engagement
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
