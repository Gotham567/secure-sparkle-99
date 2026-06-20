import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales — CloudSecure</title>
        <meta name="description" content="Mentions légales du site CloudSecure, expert en sécurité cloud AWS, Azure et GCP." />
        <link rel="canonical" href="https://cloud-secure.fr/mentions-legales" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Mentions Légales</h1>
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">1. Éditeur du site</h2>
                  <p>Le site <strong className="text-foreground">cloud-secure.fr</strong> est édité par :</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong className="text-foreground">Raison sociale :</strong> CloudSecure</li>
                    <li><strong className="text-foreground">Forme juridique :</strong> SAS (Société par Actions Simplifiée)</li>
                    <li><strong className="text-foreground">Siège social :</strong> 40 rue de Bruxelles, 69009 Lyon, France</li>
                    <li><strong className="text-foreground">Téléphone :</strong> 04 26 78 24 86</li>
                    <li><strong className="text-foreground">Email :</strong> contact@cloudsecure.fr</li>
                    <li><strong className="text-foreground">Directeur de la publication :</strong> Le représentant légal de CloudSecure</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">2. Hébergement</h2>
                  <p>Le site est hébergé par :</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong className="text-foreground">Hébergeur :</strong> Lovable (via Cloudflare)</li>
                    <li><strong className="text-foreground">Adresse :</strong> San Francisco, CA, États-Unis</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">3. Propriété intellectuelle</h2>
                  <p>L'ensemble du contenu de ce site est la propriété exclusive de CloudSecure et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction sans autorisation écrite préalable est interdite.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">4. Limitation de responsabilité</h2>
                  <p>CloudSecure s'efforce d'assurer l'exactitude des informations diffusées sur ce site mais ne peut en garantir l'exhaustivité. CloudSecure décline toute responsabilité pour toute imprécision ou omission portant sur les informations disponibles sur ce site.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">5. Droit applicable</h2>
                  <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
                </section>
                <p className="text-sm text-muted-foreground/60 pt-4 border-t border-border">Dernière mise à jour : juin 2026</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MentionsLegales;
