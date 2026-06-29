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
    title: "OWASP LLM Top 10 : sécuriser les applications basées sur l'IA générative",
    description: "Sécurité des LLM et applications IA : OWASP LLM Top 10 (prompt injection, insecure output, training data poisoning), RAG security, sécurisation des agents IA et LLM red teaming.",
    slug: "owasp-llm-top-10-securite-ia-generative",
    date: "29 juin 2026",
    readTime: "14 min",
    category: "AI Security",
    isPillar: false,
  },
  {
    title: "CNAPP : plateforme unifiée de sécurité cloud-native (CSPM, CWPP, CIEM)",
    description: "CNAPP (Cloud-Native Application Protection Platform) : comprendre la convergence CSPM/CWPP/CIEM, comparatif Wiz/Prisma Cloud/Lacework/Orca Security, et comment choisir votre plateforme.",
    slug: "cnapp-securite-cloud-native-cspm-cwpp-ciem",
    date: "29 juin 2026",
    readTime: "13 min",
    category: "Cloud Security",
    isPillar: false,
  },
  {
    title: "Sécurité des API GraphQL : introspection, injections et bonnes pratiques",
    description: "Sécuriser les API GraphQL : désactiver l'introspection en production, limiter la profondeur et la complexité des requêtes, persisted queries, authentification, et prévention des injections.",
    slug: "securite-api-graphql-introspection-injections",
    date: "29 juin 2026",
    readTime: "12 min",
    category: "API Security",
    isPillar: false,
  },
  {
    title: "Kubernetes RBAC et durcissement : CIS Benchmark, Network Policies et Admission Controllers",
    description: "Durcir Kubernetes en production : RBAC moindre privilège, Network Policies, Admission Controllers (OPA Gatekeeper), CIS Benchmark avec kube-bench, mTLS avec Istio, et secrets management.",
    slug: "kubernetes-rbac-durcissement-cis-benchmark",
    date: "29 juin 2026",
    readTime: "14 min",
    category: "Kubernetes",
    isPillar: false,
  },
  {
    title: "Sécurité des conteneurs Docker en production : Trivy, Falco et durcissement",
    description: "Sécuriser vos conteneurs Docker : scan d'images avec Trivy, runtime security avec Falco, Dockerfile best practices, rootless containers, seccomp et AppArmor, et gestion des secrets.",
    slug: "securite-conteneurs-docker-trivy-falco",
    date: "29 juin 2026",
    readTime: "15 min",
    category: "Conteneurs",
    isPillar: false,
  },
  {
    title: "GitHub Actions security : OIDC, permissions et protection de la supply chain CI/CD",
    description: "Sécuriser vos GitHub Actions : OIDC pour les credentials cloud sans secrets statiques, permissions minimales, protection supply chain (SLSA), scanning des actions tierces et branch protection.",
    slug: "github-actions-securite-oidc-supply-chain",
    date: "29 juin 2026",
    readTime: "13 min",
    category: "CI/CD Security",
    isPillar: false,
  },
  {
    title: "Terraform security : sécuriser votre IaC avec Checkov, tfsec et Terrascan",
    description: "Sécuriser votre code Terraform : scanner avec Checkov, tfsec et Terrascan, mauvaises configurations fréquentes (S3 public, SG permissif, IAM *), intégration CI/CD et GitOps security.",
    slug: "terraform-securite-iac-checkov-tfsec",
    date: "29 juin 2026",
    readTime: "14 min",
    category: "IaC Security",
    isPillar: false,
  },
  {
    title: "Microsoft Sentinel (Azure SIEM) : guide de déploiement et de configuration 2026",
    description: "Déployer Microsoft Sentinel : connecteurs de données, règles analytiques KQL, SOAR playbooks, UEBA, intégration M365 Defender et optimisation des coûts d'ingestion.",
    slug: "azure-sentinel-microsoft-defender-siem-guide",
    date: "28 juin 2026",
    readTime: "15 min",
    category: "SIEM Cloud",
    isPillar: false,
  },
  {
    title: "Cloud souverain France : SecNumCloud, Bleu, Numspot — guide complet 2026",
    description: "Le cloud souverain en France : qualification SecNumCloud ANSSI, offres Bleu (Orange-Capgemini), S3NS (Thales-Google), Numspot, Cloud Temple, Outscale — quel cloud choisir selon vos données ?",
    slug: "cloud-souverain-france-secnumcloud-guide",
    date: "28 juin 2026",
    readTime: "13 min",
    category: "Souveraineté Cloud",
    isPillar: false,
  },
  {
    title: "Sécurité Google Cloud Platform (GCP) : guide complet 2026 pour les PME et startups",
    description: "Sécuriser GCP : IAM, Organization Policies, VPC design, Security Command Center, CMEK, Secret Manager, Cloud Armor, conformité RGPD (résidence des données Paris) et NIS2.",
    slug: "securite-google-cloud-platform-guide-pme",
    date: "28 juin 2026",
    readTime: "14 min",
    category: "Sécurité Cloud",
    isPillar: false,
  },
  {
    title: "Sécurité Kubernetes sur AWS, Azure et GCP : guide complet 2026",
    description: "Sécuriser Kubernetes en production : RBAC, Pod Security Admission, Network Policies, secrets management (IRSA, Workload Identity), scanning d'images, Falco runtime security et conformité NIS2.",
    slug: "securite-kubernetes-cloud-aws-azure-gcp",
    date: "28 juin 2026",
    readTime: "15 min",
    category: "Architecture Sécurisée",
    isPillar: false,
  },
  {
    title: "WAF cloud : comparer AWS WAF, Azure Front Door WAF et Google Cloud Armor en 2026",
    description: "Guide complet WAF cloud : managed rules OWASP, bot management, rate limiting, protection DDoS L7 et intégration CI/CD. Comparatif AWS WAF v2 vs Azure Front Door WAF vs Google Cloud Armor.",
    slug: "waf-cloud-aws-azure-gcp-comparatif",
    date: "28 juin 2026",
    readTime: "13 min",
    category: "Architecture Sécurisée",
    isPillar: false,
  },
  {
    title: "Sécurité des API cloud : OWASP API Top 10 et bonnes pratiques AWS, Azure, GCP",
    description: "Guide complet sécurité API cloud : OWASP API Security Top 10 2023, authentification OAuth2/OIDC, rate limiting, API Gateway AWS/Azure/Kong, tests DAST et monitoring des API en production.",
    slug: "securite-api-cloud-owasp-aws-azure-gcp",
    date: "28 juin 2026",
    readTime: "13 min",
    category: "Architecture Sécurisée",
    isPillar: false,
  },
  {
    title: "NIS2 et fournisseurs de services cloud : obligations et conformité pour les hébergeurs et SaaS",
    description: "NIS2 et cloud : quels fournisseurs sont concernés (IaaS, PaaS, SaaS, CDN, DNS), obligations de sécurité, notification des incidents et conformité pour les entités 'infrastructure numérique' en 2026.",
    slug: "nis2-cloud-fournisseurs-services-numeriques",
    date: "28 juin 2026",
    readTime: "12 min",
    category: "Conformité Cloud",
    isPillar: false,
  },
  {
    title: "DORA et le cloud : obligations de conformité pour les entreprises financières cloud-native",
    description: "Guide DORA pour les fintechs et entreprises financières cloud-native : obligations spécifiques AWS/Azure/GCP, clauses contractuelles obligatoires, tests TLPT et gestion du risque de concentration cloud.",
    slug: "dora-conformite-cloud-entreprises-financieres",
    date: "28 juin 2026",
    readTime: "11 min",
    category: "Conformité Cloud",
    isPillar: false,
  },
  {
    title: "Budget cybersécurité cloud pour startups et PME tech : combien investir en 2026 ?",
    description: "Guide complet du budget cybersécurité cloud pour startups et PME tech : benchmarks par stade de croissance, postes prioritaires AWS/Azure/GCP, ROI et coût d'une violation de données cloud.",
    slug: "budget-securite-cloud-startup-pme-tech",
    date: "28 juin 2026",
    readTime: "12 min",
    category: "Budget & ROI",
    isPillar: false,
  },
  {
    title: "Cyberattaque cloud : délais de notification ANSSI et CNIL pour les entreprises",
    description: "Guide complet sur les obligations de notification après un incident cyber cloud : délais NIS2 (24h/72h/1 mois), notification CNIL 72h, procédure pour les entreprises cloud et sanctions en cas de non-déclaration.",
    slug: "notification-incident-cloud-nis2-cnil",
    date: "28 juin 2026",
    readTime: "10 min",
    category: "Incidents & Conformité",
    isPillar: false,
  },
  {
    title: "Coût d'une cyberattaque en 2026 : chiffres IBM, Verizon DBIR et CNIL",
    description: "Coût moyen d'une violation de données, impact sur les PME, coûts directs et indirects, perte réputationnelle et calcul du ROI des investissements cyber en 2026.",
    slug: "cout-cyberattaque-entreprise-2026",
    date: "20 juin 2026",
    readTime: "11 min",
    category: "Risques",
    isPillar: false,
  },
  {
    title: "Patch management : prioriser avec CVSS 3.1, EPSS et le catalogue KEV CISA",
    description: "Stratégie de patch management pour PME : priorités CVSS 3.1 et EPSS, catalogue KEV CISA, SLA par criticité, outils d'automatisation et conformité NIS2.",
    slug: "patch-management-cvss-nis2",
    date: "18 juin 2026",
    readTime: "12 min",
    category: "Opérations",
    isPillar: false,
  },
  {
    title: "Sécurité Docker et conteneurs en 2026 : Trivy, Falco et CIS Docker Benchmark",
    description: "Hardening des conteneurs Docker et Kubernetes : CIS Benchmark, scan de vulnérabilités avec Trivy, détection runtime avec Falco, images minimales, secrets et RBAC.",
    slug: "securite-docker-conteneurs-guide",
    date: "16 juin 2026",
    readTime: "13 min",
    category: "DevSecOps",
    isPillar: false,
  },
  {
    title: "Threat modeling avec STRIDE : intégrer la sécurité dès la phase de conception",
    description: "Appliquer STRIDE, PASTA et LINDDUN pour identifier les menaces en amont : ateliers, data flow diagrams, arbres d'attaque et intégration dans le pipeline CI/CD DevSecOps.",
    slug: "threat-modeling-stride-guide",
    date: "14 juin 2026",
    readTime: "12 min",
    category: "Architecture",
    isPillar: false,
  },
  {
    title: "Ransomware-as-a-Service (RaaS) en 2026 : LockBit, BlackCat et stratégies de défense",
    description: "Fonctionnement des groupes RaaS, double extorsion, principaux groupes actifs, vecteurs d'infection et plan de protection en 15 mesures pour les PME et ETI.",
    slug: "ransomware-as-a-service-protection-2026",
    date: "12 juin 2026",
    readTime: "12 min",
    category: "Menaces",
    isPillar: false,
  },
  {
    title: "SBOM et sécurité de la chaîne logicielle : protéger contre les attaques supply chain",
    description: "Software Bill of Materials (SBOM), formats SPDX et CycloneDX, attaques XZ Utils et SolarWinds, outils Syft/Grype, conformité Cyber Resilience Act et NIS2.",
    slug: "sbom-supply-chain-securite-logicielle",
    date: "10 juin 2026",
    readTime: "11 min",
    category: "DevSecOps",
    isPillar: false,
  },
  {
    title: "Sécuriser Active Directory : BloodHound, PingCastle et modèle de Tiering",
    description: "Guide complet de hardening Active Directory : modèle Tier 0/1/2, détection avec BloodHound, audit PingCastle, Kerberoasting, délégations dangereuses et Protected Users.",
    slug: "securite-active-directory-enterprise-guide",
    date: "8 juin 2026",
    readTime: "14 min",
    category: "Infrastructure",
    isPillar: false,
  },
  {
    title: "Sécurité Infrastructure as Code (IaC) : Terraform, Pulumi et bonnes pratiques",
    description: "Sécuriser votre IaC avec Terraform et Pulumi : scanning statique (tfsec, Checkov, KICS), gestion des secrets, drift detection, politiques OPA et intégration CI/CD DevSecOps.",
    slug: "securite-infrastructure-as-code-terraform-guide",
    date: "18 juin 2026",
    readTime: "14 min",
    category: "DevSecOps",
    isPillar: false,
  },
  {
    title: "AWS Well-Architected Framework : pilier sécurité en pratique",
    description: "Appliquer le pilier sécurité du AWS Well-Architected Framework : gestion des identités, détection, protection des données, réponse aux incidents et revue Well-Architected.",
    slug: "aws-well-architected-framework-securite",
    date: "16 juin 2026",
    readTime: "13 min",
    category: "AWS",
    isPillar: false,
  },
  {
    title: "Sécurité Azure Active Directory / Entra ID : guide complet 2026",
    description: "Durcir Microsoft Entra ID : Conditional Access, PIM, Identity Protection, détection des comptes compromis, revue des accès et conformité NIS2/RGPD pour les organisations Azure.",
    slug: "securite-azure-active-directory",
    date: "14 juin 2026",
    readTime: "13 min",
    category: "Azure",
    isPillar: false,
  },
  {
    title: "CSPM (Cloud Security Posture Management) : gérer la sécurité de vos environnements cloud",
    description: "Guide complet sur le CSPM : définition, fonctionnement, comparatif des solutions (Wiz, Orca, Prisma Cloud, Defender for Cloud) et intégration dans votre stratégie cloud security.",
    slug: "cspm-cloud-security-posture-management-guide",
    date: "12 juin 2026",
    readTime: "13 min",
    category: "Cloud Security",
    isPillar: false,
  },
  {
    title: "Pentest cloud AWS, Azure et GCP : méthodologie et autorisations",
    description: "Guide du pentest cloud : obtenir les autorisations AWS/Azure/GCP, méthodologie d'attaque (IAM, méta-données, SSRF cloud), outils et livrables d'un test d'intrusion cloud professionnel.",
    slug: "pentest-cloud-aws-azure-guide",
    date: "10 juin 2026",
    readTime: "14 min",
    category: "Pentest Cloud",
    isPillar: false,
  },
  {
    title: "SOC et SIEM managés : guide complet de la détection 24/7 pour 2026",
    description: "Tout sur le SOC managé (MSSP, MDR) et le SIEM : fonctionnement, comparatif Splunk, Sentinel, QRadar, Elastic, Chronicle, prix, ROI et critères de choix pour PME et ETI.",
    slug: "soc-siem-manage-guide",
    date: "8 avril 2026",
    readTime: "20 min",
    category: "Cybersécurité",
    isPillar: true,
  },
  {
    title: "MFA et IAM dans le cloud : guide complet de la sécurité des identités 2026",
    description: "Guide expert sur le MFA et l'IAM cloud : FIDO2/passkeys, SSO, gestion des accès AWS/Azure/GCP, PAM, Zero Standing Privilege, comparatif Okta, Entra ID, Ping et bonnes pratiques.",
    slug: "mfa-iam-cloud-guide",
    date: "7 avril 2026",
    readTime: "19 min",
    category: "Sécurité Cloud",
    isPillar: true,
  },
  {
    title: "Sécurité email et anti-phishing : guide complet pour les entreprises 2026",
    description: "Guide expert anti-phishing : SPF, DKIM, DMARC, BIMI, MTA-STS, protection contre le BEC, AiTM et QR phishing. Comparatif Proofpoint, Mimecast, Microsoft Defender et bonnes pratiques.",
    slug: "phishing-email-securite-guide",
    date: "6 avril 2026",
    readTime: "18 min",
    category: "Cybersécurité",
    isPillar: true,
  },
  {
    title: "Sécurité des API REST : guide OWASP API Top 10 pour 2026",
    description: "Guide complet pour sécuriser vos API REST et GraphQL : OWASP API Security Top 10 2023, OAuth2/JWT, rate limiting, gestion des autorisations, monitoring et bonnes pratiques DevSecOps.",
    slug: "securite-api-owasp-guide",
    date: "5 avril 2026",
    readTime: "19 min",
    category: "Sécurité Applicative",
    isPillar: true,
  },
  {
    title: "Protection contre les ransomwares en entreprise : guide complet 2026",
    description: "Guide définitif anti-ransomware : prévention, détection, sauvegardes immuables, plan de réponse, paiement ou non, exemples LockBit, BlackCat, Cl0p. Méthodes éprouvées pour PME et ETI.",
    slug: "protection-ransomware-entreprise-guide",
    date: "4 avril 2026",
    readTime: "20 min",
    category: "Cybersécurité",
    isPillar: true,
  },
  {
    title: "EDR vs XDR : comparatif complet et guide de choix pour 2026",
    description: "Comparatif détaillé EDR vs XDR : différences, fonctionnalités, vendors leaders (CrowdStrike, SentinelOne, Microsoft Defender, Palo Alto Cortex), prix, cas d'usage et critères de choix.",
    slug: "edr-vs-xdr-comparatif-guide",
    date: "3 avril 2026",
    readTime: "18 min",
    category: "Cybersécurité",
    isPillar: true,
  },
  {
    title: "Sécurité Serverless : guide AWS Lambda, Azure Functions et GCP 2026",
    description: "Tout sur la sécurité des architectures serverless : OWASP Serverless Top 10, IAM, secrets, monitoring, supply chain et bonnes pratiques pour AWS Lambda, Azure Functions et Cloud Functions.",
    slug: "securite-serverless-guide",
    date: "2 avril 2026",
    readTime: "18 min",
    category: "Sécurité Cloud",
    isPillar: true,
  },
  {
    title: "Gestion des secrets en entreprise : HashiCorp Vault et alternatives 2026",
    description: "Guide complet sur la gestion des secrets : HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, GCP Secret Manager. Architecture, rotation, audit et bonnes pratiques DevSecOps.",
    slug: "gestion-secrets-vault-guide",
    date: "1 avril 2026",
    readTime: "17 min",
    category: "DevSecOps",
    isPillar: true,
  },
  {
    title: "CASB et sécurité SaaS : maîtriser le Shadow IT en 2026",
    description: "Tout sur les Cloud Access Security Brokers : fonctions, déploiement, comparatif Microsoft Defender for Cloud Apps, Netskope, Zscaler. Sécurisation Microsoft 365, Google Workspace, Salesforce.",
    slug: "casb-securite-saas-guide",
    date: "31 mars 2026",
    readTime: "16 min",
    category: "Sécurité Cloud",
    isPillar: true,
  },
  {
    title: "ISO 27001 et cloud : guide complet de certification pour 2026",
    description: "Tout savoir sur la norme ISO 27001 appliquée aux environnements cloud : exigences, SMSI, annexe A, processus de certification, coûts et plan d'action concret.",
    slug: "iso-27001-cloud-guide",
    date: "28 mars 2026",
    readTime: "19 min",
    category: "Conformité",
    isPillar: true,
  },
  {
    title: "Plan de réponse aux incidents cybersécurité : guide complet 2026",
    description: "Construisez un plan de réponse aux incidents efficace : phases NIST, équipe CSIRT, playbooks ransomware, communication de crise et exercices de simulation.",
    slug: "reponse-incidents-cybersecurite-guide",
    date: "27 mars 2026",
    readTime: "17 min",
    category: "Gestion de crise",
    isPillar: true,
  },
  {
    title: "Sécurité multi-cloud : stratégie et bonnes pratiques 2026",
    description: "Guide complet pour sécuriser une infrastructure multi-cloud : gouvernance unifiée, IAM fédéré, CSPM, chiffrement, monitoring transverse et conformité.",
    slug: "securite-multi-cloud-guide",
    date: "26 mars 2026",
    readTime: "18 min",
    category: "Sécurité Cloud",
    isPillar: true,
  },
  {
    title: "Directive NIS2 : guide complet de mise en conformité pour les entreprises",
    description: "Tout savoir sur la directive européenne NIS2 : périmètre élargi, obligations de cybersécurité, sanctions, calendrier et plan d'action concret pour vous mettre en conformité.",
    slug: "conformite-nis2-guide",
    date: "25 mars 2026",
    readTime: "18 min",
    category: "Conformité",
    isPillar: true,
  },
  {
    title: "DevSecOps : intégrer la sécurité dans votre pipeline CI/CD",
    description: "Guide complet DevSecOps : principes, outils, bonnes pratiques et stratégie pour intégrer la sécurité à chaque étape de votre cycle de développement logiciel.",
    slug: "devsecops-guide",
    date: "23 mars 2026",
    readTime: "16 min",
    category: "DevSecOps",
    isPillar: true,
  },
  {
    title: "RGPD et sécurité cloud : comment protéger les données personnelles",
    description: "Guide pratique pour concilier hébergement cloud et conformité RGPD : localisation des données, chiffrement, droits des personnes, sous-traitance et audit de conformité.",
    slug: "rgpd-securite-cloud-guide",
    date: "20 mars 2026",
    readTime: "15 min",
    category: "Conformité",
    isPillar: true,
  },
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
