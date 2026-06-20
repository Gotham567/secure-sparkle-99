import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité — CloudSecure</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles de CloudSecure, expert en sécurité cloud." />
        <link rel="canonical" href="https://cloud-secure.fr/politique-confidentialite" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Politique de Confidentialité</h1>
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">1. Responsable du traitement</h2>
                  <p>CloudSecure, SAS — 40 rue de Bruxelles, 69009 Lyon — contact@cloudsecure.fr — est responsable du traitement de vos données personnelles collectées via ce site.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">2. Données collectées</h2>
                  <p>Nous collectons les données suivantes via le formulaire de contact :</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Nom et prénom</li>
                    <li>Adresse email professionnelle</li>
                    <li>Numéro de téléphone (optionnel)</li>
                    <li>Société</li>
                    <li>Message et description de votre besoin</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">3. Finalités du traitement</h2>
                  <p>Vos données sont collectées pour :</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Répondre à vos demandes de contact et de devis</li>
                    <li>Vous adresser des propositions commerciales adaptées à vos besoins</li>
                    <li>Améliorer nos services</li>
                  </ul>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">4. Base légale</h2>
                  <p>Le traitement est fondé sur votre consentement (article 6.1.a du RGPD) lorsque vous soumettez le formulaire de contact.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">5. Durée de conservation</h2>
                  <p>Vos données sont conservées pendant 3 ans à compter de votre dernier contact, puis supprimées ou archivées conformément aux obligations légales.</p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">6. Vos droits</h2>
                  <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition. Pour exercer ces droits, contactez-nous à : <strong className="text-foreground">contact@cloudsecure.fr</strong></p>
                </section>
                <section>
                  <h2 className="text-xl font-semibold text-foreground mb-3">7. Cookies</h2>
                  <p>Ce site utilise des cookies techniques nécessaires à son fonctionnement et des cookies analytiques pour mesurer l'audience. Vous pouvez gérer vos préférences via le bandeau de consentement affiché lors de votre première visite.</p>
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

export default PolitiqueConfidentialite;
