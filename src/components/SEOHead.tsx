import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  articleDate?: string;
  articleModified?: string;
  articleCategory?: string;
  noindex?: boolean;
  ogImage?: string;
}

const SITE_URL = "https://cloud-secure.fr";
const DEFAULT_OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9788b1a0-488a-4642-9aa3-61a4f2faeedc/id-preview-57d65fc8--ac5cac8d-0c20-497c-96b5-7d97436bd2b7.lovable.app-1773502129598.png";

const SEOHead = ({
  title,
  description,
  canonical,
  type = "website",
  articleDate,
  articleModified,
  articleCategory,
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
}: SEOHeadProps) => {
  const location = useLocation();
  const url = canonical || `${SITE_URL}${location.pathname}`;
  const fullTitle = location.pathname === "/" ? title : `${title} | CloudSecure`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta tags helper
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Core meta
    setMeta("description", description);
    setMeta("robots", noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // Open Graph
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type === "article" ? "article" : "website", true);
    setMeta("og:url", url, true);
    setMeta("og:locale", "fr_FR", true);
    setMeta("og:site_name", "CloudSecure", true);
    setMeta("og:image", ogImage, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", fullTitle, true);
    setMeta("og:image:type", "image/png", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:site", "@CloudSecureFr");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
    setMeta("twitter:image:alt", fullTitle);

    // Article-specific OG tags
    if (type === "article" && articleDate) {
      setMeta("article:published_time", articleDate, true);
      setMeta("article:modified_time", articleModified || articleDate, true);
      if (articleCategory) setMeta("article:section", articleCategory, true);
      setMeta("article:author", "CloudSecure", true);
    }

    // Canonical
    let canonicalEl = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", url);

    // Hreflang (pour pages non-home : index.html les gère déjà pour /)
    if (location.pathname !== "/") {
      const setHreflang = (hreflang: string, href: string) => {
        let el = document.querySelector(`link[rel='alternate'][hreflang='${hreflang}']`) as HTMLLinkElement;
        if (!el) {
          el = document.createElement("link");
          el.setAttribute("rel", "alternate");
          el.setAttribute("hreflang", hreflang);
          document.head.appendChild(el);
        }
        el.setAttribute("href", href);
      };
      setHreflang("fr", url);
      setHreflang("x-default", url);
    }

    // Article structured data (JSON-LD)
    if (type === "article" && articleDate) {
      let scriptEl = document.getElementById("article-jsonld") as HTMLScriptElement;
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = "article-jsonld";
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url
        },
        "headline": title,
        "description": description,
        "datePublished": articleDate,
        "dateModified": articleModified || articleDate,
        "image": {
          "@type": "ImageObject",
          "url": ogImage,
          "width": 1200,
          "height": 630
        },
        "author": {
          "@type": "Person",
          "name": "Équipe CloudSecure",
          "url": "https://cloud-secure.fr"
        },
        "publisher": {
          "@type": "Organization",
          "name": "CloudSecure",
          "url": "https://cloud-secure.fr",
          "logo": {
            "@type": "ImageObject",
            "url": "https://cloud-secure.fr/favicon.png",
            "width": 512,
            "height": 512
          }
        },
        "url": url,
        ...(articleCategory && { "articleSection": articleCategory }),
        "inLanguage": "fr-FR"
      });

      // Breadcrumb for article pages
      let breadcrumbEl = document.getElementById("breadcrumb-jsonld") as HTMLScriptElement;
      if (!breadcrumbEl) {
        breadcrumbEl = document.createElement("script");
        breadcrumbEl.id = "breadcrumb-jsonld";
        breadcrumbEl.type = "application/ld+json";
        document.head.appendChild(breadcrumbEl);
      }
      breadcrumbEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cloud-secure.fr/" },
          { "@type": "ListItem", "position": 2, "name": "Actualités", "item": "https://cloud-secure.fr/actualites" },
          { "@type": "ListItem", "position": 3, "name": title, "item": url }
        ]
      });

      return () => {
        scriptEl?.remove();
        breadcrumbEl?.remove();
      };
    }
  }, [fullTitle, description, url, type, articleDate, articleModified, articleCategory, noindex, ogImage, title]);

  return null;
};

export default SEOHead;
