import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

interface BlogLayoutProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  children: React.ReactNode;
}

const BlogLayout = ({ title, description, date, readTime, category, children }: BlogLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={description}
        type="article"
        articleDate={date}
        articleCategory={category}
      />
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link
            to="/actualites"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            aria-label="Retour à la page actualités"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux actualités
          </Link>

          <header className="max-w-4xl mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-medium">
                <Tag className="h-3 w-3" aria-hidden="true" />
                {category}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                <time>{date}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {readTime} de lecture
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </header>

          <div className="max-w-4xl prose-custom">
            {children}
          </div>

          <div className="max-w-4xl mt-16 pt-8 border-t border-border/50">
            <div className="glass rounded-xl p-8 text-center">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Besoin d'un accompagnement en cybersécurité ?
              </h3>
              <p className="text-muted-foreground mb-6">
                CloudSecure vous aide à sécuriser votre infrastructure cloud et à protéger vos données.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-glow-sm transition-all min-h-[44px]"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogLayout;
