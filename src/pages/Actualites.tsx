import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Calendar, Clock, Tag, BookOpen, FileText } from "lucide-react";

interface Article {
  title: string;
  description: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  isPillar: boolean;
}

const articles: Article[] = [
  {
    title: "SOC 2 : guide complet pour les entreprises cloud en 2026",
    description: "Tout savoir sur la certification SOC 2 : types de rapports, critères TSC, processus d'audit et bonnes pratiques pour réussir votre mise en conformité.",
    slug: "soc2-compliance-guide",
    date: "18 mars 2026",
    readTime: "16 min",
    category: "Conformité",
    isPillar: false,
  },
  {
    title: "Sécurité Kubernetes : guide complet pour protéger vos clusters",
    description: "Maîtrisez la sécurité de vos clusters Kubernetes : RBAC, Network Policies, Pod Security, scanning d'images et bonnes pratiques DevSecOps.",
    slug: "securite-kubernetes-guide",
    date: "16 mars 2026",
    readTime: "17 min",
    category: "Sécurité Cloud",
    isPillar: false,
  },
  {
    title: "Conformité DORA : ce que les entreprises tech doivent savoir",
    description: "Guide complet sur le règlement DORA : obligations, calendrier, piliers de conformité et plan d'action pour les entreprises technologiques et financières.",
    slug: "conformite-dora-guide",
    date: "14 mars 2026",
    readTime: "15 min",
    category: "Conformité",
    isPillar: false,
  },
  {
    title: "Qu'est-ce qu'un audit cybersécurité et pourquoi en faire un ?",
    description: "Découvrez en détail ce qu'est un audit de cybersécurité, ses différentes étapes, ses bénéfices concrets et pourquoi il est indispensable pour protéger votre PME.",
    slug: "audit-cybersecurite-guide",
    date: "10 mars 2026",
    readTime: "15 min",
    category: "Audit Cybersécurité",
    isPillar: true,
  },
  {
    title: "Pentest entreprise : guide complet pour les PME",
    description: "Tout comprendre sur les tests d'intrusion en entreprise : méthodologies, types de pentest, coûts, et comment choisir le bon prestataire.",
    slug: "pentest-entreprise-guide",
    date: "8 mars 2026",
    readTime: "14 min",
    category: "Pentest",
    isPillar: true,
  },
  {
    title: "Comment choisir son prestataire en cybersécurité ?",
    description: "Les critères essentiels pour sélectionner un prestataire de cybersécurité de confiance : certifications, expérience, méthodologie et références.",
    slug: "choisir-prestataire-cybersecurite",
    date: "5 mars 2026",
    readTime: "13 min",
    category: "Conseil",
    isPillar: true,
  },
  {
    title: "Cybersécurité PME : par où commencer ?",
    description: "Guide pratique pour les PME qui veulent structurer leur démarche de cybersécurité, de l'analyse de risques à la mise en conformité.",
    slug: "cybersecurite-pme-guide",
    date: "3 mars 2026",
    readTime: "14 min",
    category: "PME",
    isPillar: true,
  },
  {
    title: "Sécurité cloud : guide complet pour les entreprises tech",
    description: "Maîtrisez la sécurité de vos environnements cloud avec ce guide exhaustif couvrant AWS, Azure, GCP et les bonnes pratiques essentielles.",
    slug: "securite-cloud-guide",
    date: "28 février 2026",
    readTime: "16 min",
    category: "Sécurité Cloud",
    isPillar: true,
  },
  {
    title: "Audit AWS : comment sécuriser votre infrastructure Amazon ?",
    description: "Guide détaillé pour auditer et sécuriser votre infrastructure AWS : IAM, VPC, S3, CloudTrail et les meilleures pratiques de sécurité.",
    slug: "audit-aws-guide",
    date: "25 février 2026",
    readTime: "15 min",
    category: "AWS",
    isPillar: true,
  },
  {
    title: "Sécurité Azure : bonnes pratiques pour les startups",
    description: "Sécurisez votre infrastructure Azure dès le départ avec ces bonnes pratiques adaptées aux startups et entreprises en croissance.",
    slug: "securite-azure-startups",
    date: "22 février 2026",
    readTime: "14 min",
    category: "Azure",
    isPillar: true,
  },
  {
    title: "IA et cybersécurité : quels risques pour votre entreprise ?",
    description: "Analyse complète des risques de sécurité liés à l'intelligence artificielle en entreprise et comment s'en protéger efficacement.",
    slug: "ia-cybersecurite-risques",
    date: "20 février 2026",
    readTime: "13 min",
    category: "IA & Sécurité",
    isPillar: true,
  },
  {
    title: "Combien coûte un audit AWS en 2025 ?",
    description: "Comprendre les tarifs d'un audit de sécurité AWS : facteurs de prix, fourchettes budgétaires et comment optimiser votre investissement.",
    slug: "cout-audit-aws-2025",
    date: "18 février 2026",
    readTime: "10 min",
    category: "AWS",
    isPillar: false,
  },
  {
    title: "AWS vs Azure : quel est le plus sécurisé ?",
    description: "Comparatif détaillé de la sécurité entre AWS et Azure : fonctionnalités, certifications, outils natifs et cas d'usage.",
    slug: "aws-vs-azure-securite",
    date: "15 février 2026",
    readTime: "11 min",
    category: "Sécurité Cloud",
    isPillar: false,
  },
  {
    title: "Les 5 erreurs de sécurité cloud les plus fréquentes",
    description: "Découvrez les erreurs de sécurité cloud les plus courantes et comment les éviter pour protéger vos données et applications.",
    slug: "erreurs-securite-cloud",
    date: "12 février 2026",
    readTime: "9 min",
    category: "Sécurité Cloud",
    isPillar: false,
  },
  {
    title: "Comment sécuriser ses données sur Google Cloud ?",
    description: "Guide pratique pour la sécurisation de vos données sur Google Cloud Platform : chiffrement, IAM, VPC et monitoring.",
    slug: "securiser-donnees-google-cloud",
    date: "10 février 2026",
    readTime: "10 min",
    category: "GCP",
    isPillar: false,
  },
  {
    title: "IA générative en entreprise : quels risques de sécurité ?",
    description: "Les risques de sécurité liés à l'utilisation de l'IA générative (ChatGPT, Copilot) en entreprise et les mesures de protection à adopter.",
    slug: "ia-generative-risques-securite",
    date: "8 février 2026",
    readTime: "10 min",
    category: "IA & Sécurité",
    isPillar: false,
  },
  {
    title: "Audit sécurité cloud : par où commencer ?",
    description: "Guide étape par étape pour démarrer votre premier audit de sécurité cloud, de la préparation à l'exécution.",
    slug: "audit-securite-cloud-debut",
    date: "5 février 2026",
    readTime: "9 min",
    category: "Audit",
    isPillar: false,
  },
  {
    title: "Zero Trust Architecture : c'est quoi et comment l'implémenter ?",
    description: "Comprendre le modèle Zero Trust, ses principes fondamentaux et comment le déployer dans votre organisation étape par étape.",
    slug: "zero-trust-architecture-guide",
    date: "3 février 2026",
    readTime: "12 min",
    category: "Architecture",
    isPillar: false,
  },
];

const pillarArticles = articles.filter((a) => a.isPillar);
const blogArticles = articles.filter((a) => !a.isPillar);

const ArticleCard = ({ article }: { article: Article }) => (
  <Link
    to={`/actualites/${article.slug}`}
    className="group glass rounded-xl p-6 hover:border-glow-hover transition-all duration-300 block"
  >
    <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
        <Tag className="h-3 w-3" />
        {article.category}
      </span>
      {article.isPillar && (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium">
          <BookOpen className="h-3 w-3" />
          Guide complet
        </span>
      )}
    </div>
    <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
      {article.title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
      {article.description}
    </p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {article.date}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {article.readTime}
        </span>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </div>
  </Link>
);

const Actualites = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Actualités & Ressources Cybersécurité"
        description="Guides complets, analyses et articles sur la cybersécurité cloud, les audits AWS/Azure, les tests d'intrusion et la conformité NIS2 pour les PME et startups."
      />
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
              <FileText className="h-4 w-4" />
              Centre de ressources
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Actualités & <span className="text-gradient">Ressources</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Guides complets, analyses et articles pour vous aider à comprendre et maîtriser la cybersécurité de votre entreprise.
            </p>
          </div>

          {/* Pillar pages */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              Guides complets
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pillarArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>

          {/* Blog articles */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              Articles de blog
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Actualites;
