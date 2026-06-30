import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Cloud, MapPin, Phone, CheckCircle2, ArrowRight, Building2, Users, Clock, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface CityData {
  city: string;
  citySlug: string;
  region: string;
  postalCode: string;
  intro: string;
  localContext: string;
  sectors: string[];
  neighborhoods: string[];
  faq: { q: string; a: string }[];
}

interface Props {
  data: CityData;
}

const services = [
  { title: "Audit sécurité cloud AWS", desc: "Évaluation complète de votre infrastructure AWS : IAM, S3, EC2, réseau et conformité CIS Benchmarks." },
  { title: "Sécurité Azure & Microsoft 365", desc: "Audit Azure AD, Defender, configuration M365 et conformité RGPD des tenants Microsoft." },
  { title: "Sécurité Google Cloud Platform", desc: "Revue de configuration GCP, IAM, Cloud Storage, VPC et mise en conformité ISO 27001." },
  { title: "DevSecOps & CI/CD", desc: "Intégration de la sécurité dans vos pipelines GitLab/GitHub Actions, scanning SAST/DAST, secrets detection." },
  { title: "Conformité NIS2 & RGPD Cloud", desc: "Mise en conformité réglementaire de vos environnements cloud et accompagnement DPO externalisé." },
  { title: "SOC Cloud managé", desc: "Supervision 24/7 de vos workloads cloud, SIEM et réponse à incident cloud-native." },
];

const CityLandingPage = ({ data }: Props) => {
  const url = `https://cloud-secure.fr/securite-cloud-${data.citySlug}`;
  const title = `Sécurité Cloud ${data.city} — AWS, Azure, GCP | CloudSecure`;
  const description = `Expert en sécurité cloud à ${data.city} (${data.region}). Audit AWS, Azure, GCP, DevSecOps et conformité NIS2 pour les entreprises et startups ${data.region.toLowerCase()}.`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `CloudSecure – Sécurité Cloud ${data.city}`,
    description,
    url,
    telephone: "+33679323019",
    email: "contact@cloudsecure.fr",
    image: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9788b1a0-488a-4642-9aa3-61a4f2faeedc/id-preview-57d65fc8--ac5cac8d-0c20-497c-96b5-7d97436bd2b7.lovable.app-1773502129598.png",
    logo: "https://cloud-secure.fr/favicon.png",
    openingHours: "Mo-Fr 09:00-18:00",
    areaServed: [
      { "@type": "City", name: data.city },
      { "@type": "AdministrativeArea", name: data.region },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: data.city,
      postalCode: data.postalCode,
      addressRegion: data.region,
      addressCountry: "FR",
    },
    priceRange: "€€€",
    serviceType: [
      "Audit sécurité cloud",
      "Sécurité AWS",
      "Sécurité Azure",
      "Sécurité Google Cloud",
      "DevSecOps",
      "Conformité NIS2",
      "RSSI externalisé",
    ],
    sameAs: [
      "https://www.linkedin.com/company/cloudsecure/",
      "https://twitter.com/CloudSecureFr"
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://cloud-secure.fr/" },
      { "@type": "ListItem", position: 2, name: `Sécurité Cloud ${data.city}`, item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9788b1a0-488a-4642-9aa3-61a4f2faeedc/id-preview-57d65fc8--ac5cac8d-0c20-497c-96b5-7d97436bd2b7.lovable.app-1773502129598.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CloudSecureFr" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9788b1a0-488a-4642-9aa3-61a4f2faeedc/id-preview-57d65fc8--ac5cac8d-0c20-497c-96b5-7d97436bd2b7.lovable.app-1773502129598.png" />
        <meta name="twitter:image:alt" content={title} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Sécurité Cloud {data.city}</span>
            </nav>

            {/* Hero */}
            <section className="max-w-4xl mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-primary mb-6">
                <MapPin className="h-3 w-3" /> {data.region}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Sécurité Cloud à {data.city} : AWS, Azure & GCP
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {data.intro}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 min-h-[44px]"
                >
                  Audit cloud gratuit à {data.city}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+33679323019"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all min-h-[44px]"
                >
                  <Phone className="h-4 w-4" /> 07 69 32 30 19
                </a>
              </div>
            </section>

            {/* Local context */}
            <section className="max-w-4xl mb-16 rounded-2xl border border-border bg-card/50 p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Building2 className="h-6 w-6 text-primary" />
                Expertise cloud security pour {data.city}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{data.localContext}</p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Secteurs accompagnés</p>
                  <ul className="space-y-1 text-muted-foreground">
                    {data.sectors.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">Zones d'intervention</p>
                  <ul className="space-y-1 text-muted-foreground">
                    {data.neighborhoods.map((n) => (
                      <li key={n} className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Services */}
            <section className="max-w-5xl mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Nos services cloud security à {data.city}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s) => (
                  <div key={s.title} className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
                    <Cloud className="h-6 w-6 text-primary mb-3" />
                    <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Stats / Trust */}
            <section className="max-w-4xl mb-16 grid sm:grid-cols-3 gap-6">
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">+150</p>
                <p className="text-xs text-muted-foreground">Clients cloud accompagnés</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Clock className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">48h</p>
                <p className="text-xs text-muted-foreground">Délai d'audit cloud</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">AWS / Azure</p>
                <p className="text-xs text-muted-foreground">Partenaires certifiés</p>
              </div>
            </section>

            {/* FAQ */}
            <section className="max-w-4xl mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                FAQ — Sécurité Cloud à {data.city}
              </h2>
              <div className="space-y-4">
                {data.faq.map((f) => (
                  <details key={f.q} className="group rounded-xl border border-border bg-card p-6">
                    <summary className="cursor-pointer font-semibold text-foreground list-none flex items-start justify-between gap-4">
                      {f.q}
                      <span className="text-primary text-xl shrink-0 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="max-w-4xl rounded-2xl border border-primary/30 bg-primary/5 p-8 md:p-12 text-center">
              <Cloud className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Audit cloud gratuit pour les entreprises de {data.city}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nos experts analysent votre configuration AWS/Azure/GCP en 48h et vous remettent un rapport de risques personnalisé.
              </p>
              <Link
                to="/contact"
                className="inline-block rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 min-h-[44px]"
              >
                Demander mon audit cloud gratuit
              </Link>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CityLandingPage;
