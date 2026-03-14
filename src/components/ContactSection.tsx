import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    setLoading(true);
    try {
      // Store in DB
      const { error: dbError } = await supabase
        .from("contact_submissions")
        .insert({ name: form.name.trim(), email: form.email.trim(), message: form.message.trim() });

      if (dbError) throw dbError;

      // Send email notification
      const { error: fnError } = await supabase.functions.invoke("send-contact-email", {
        body: { type: "contact", name: form.name.trim(), email: form.email.trim(), message: form.message.trim() },
      });

      if (fnError) console.error("Email notification failed:", fnError);

      setSent(true);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message envoyé avec succès !");
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de l'envoi du message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-5">
            Parlons de votre <span className="text-gradient">sécurité</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Une question ? Un projet ? Contactez-nous et nous vous répondrons dans les plus brefs délais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 md:p-12 max-w-2xl mx-auto border-glow"
        >
          {sent ? (
            <div className="text-center py-10">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-2">Message envoyé !</h3>
              <p className="text-muted-foreground">Nous vous répondrons rapidement.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-primary hover:underline text-sm"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <label htmlFor="contact-name" className="sr-only">Votre nom</label>
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Votre nom"
                  maxLength={100}
                  required
                  className="w-full bg-card border border-border/80 rounded-xl pl-11 pr-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="votre@email.com"
                  maxLength={255}
                  className="w-full bg-card border border-border/80 rounded-xl pl-11 pr-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
                <textarea
                  value={form.message}
                  onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Décrivez votre besoin..."
                  maxLength={1000}
                  rows={5}
                  className="w-full bg-card border border-border/80 rounded-xl pl-11 pr-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-primary text-primary-foreground px-7 py-4 rounded-xl font-semibold text-sm hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
