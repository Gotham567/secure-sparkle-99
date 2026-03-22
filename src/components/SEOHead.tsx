import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  articleDate?: string;
  articleCategory?: string;
}

const SITE_URL = "https://cloud-secure.fr";

const SEOHead = ({ title, description, canonical, type = "website", articleDate, articleCategory }: SEOHeadProps) => {
  const location = useLocation();
  const url = canonical || `${SITE_URL}${location.pathname}`;
  const fullTitle = location.pathname === "/" ? title : `${title} | CloudSecure`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta tags
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

    setMeta("description", description);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    setMeta("og:url", url, true);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    // Canonical
    let canonicalEl = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", url);

    // Article structured data
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
        "headline": title,
        "description": description,
        "datePublished": articleDate,
        "author": { "@type": "Organization", "name": "CloudSecure" },
        "publisher": { "@type": "Organization", "name": "CloudSecure" },
        "url": url,
        ...(articleCategory && { "articleSection": articleCategory }),
      });

      return () => {
        scriptEl?.remove();
      };
    }
  }, [fullTitle, description, url, type, articleDate, articleCategory, title]);

  return null;
};

export default SEOHead;
