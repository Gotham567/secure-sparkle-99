import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudThionville = () => (
  <CityLandingPage
    data={{
      city: "Thionville",
      citySlug: "thionville",
      region: "Grand Est",
      postalCode: "57100",
      intro: "CloudSecure sécurise les systèmes IIoT cloud d'ArcelorMittal et des sidérurgistes de Thionville contre les cybermenaces ciblant l'Industrie 4.0, et accompagne les entreprises frontalières France-Luxembourg dans la conformité cloud transfrontalière NIS2 et PSSI. Audit cloud IIoT sidérurgie, sécurité cloud bi-nationale et cloud souverain pour les industries lourdes de Moselle et de la Grande Région.",
      localContext: "Thionville est le cœur sidérurgique de la Lorraine, dominé par la présence d'ArcelorMittal (Florange, Hayange, Metz) dont les usines intelligentes connectées à des systèmes MES et IIoT cloud collectent en temps réel des données de production d'une valeur stratégique exceptionnelle. La proximité immédiate du Luxembourg (30 km) crée une situation économique unique : des milliers de frontaliers accèdent chaque jour aux systèmes d'information d'entreprises luxembourgeoises depuis des réseaux français, et inversement — générant des architectures cloud bi-nationales complexes soumises à la fois au droit français (RGPD, NIS2) et à la réglementation luxembourgeoise (CSSF, CNPD). La logistique transfrontalière (camions, trains, ports rhénans) développe des applications cloud de tracking temps réel. CloudSecure maîtrise ces enjeux industriels et transfrontaliers spécifiques à la Grande Région et intervient à Thionville, Yutz, Florange, Hayange et dans toute la Moselle.",
      sectors: [
        "Sidérurgie cloud Industrie 4.0 (ArcelorMittal, MES connecté, IIoT aciéries)",
        "Frontaliers Luxembourg (cloud bi-national, systèmes d'information transfrontaliers)",
        "Logistique transfrontalière cloud (tracking, supply chain France-Luxembourg-Allemagne)",
        "PME industrie Moselle (sous-traitants sidérurgie, mécanique, chimie)",
        "Santé et hôpitaux mosellans (données médicales HDS cloud)",
        "Collectivités et services publics (Thionville, agglomération Portes de France)",
      ],
      neighborhoods: [
        "Zone industrielle de Thionville et Terville",
        "Yutz et agglomération Portes de France",
        "Florange et Hayange (sites ArcelorMittal)",
        "Moselle (57) et bassin minier lorrain",
        "Luxembourg-Ville (30 km) et Grande Région",
        "Metz (30 km) et axe Metz–Thionville",
      ],
      faq: [
        {
          q: "Comment auditer la sécurité cloud IIoT d'une aciérie ArcelorMittal ou d'un sous-traitant sidérurgique à Thionville ?",
          a: "Un audit cloud IIoT pour une aciérie ou un sous-traitant sidérurgique de Thionville couvre les systèmes MES (Manufacturing Execution System) connectés au cloud Azure, les capteurs IIoT (température, pression, vibrations des lignes de production), les SCADA de supervision des hauts fourneaux et laminoirs, et les passerelles IT/OT entre le réseau bureautique et le réseau industriel. CloudSecure évalue les risques de cybersabotage (arrêt de production, manipulation des paramètres de process), d'espionnage industriel et de ransomware ciblant les systèmes de contrôle. Forfait audit cloud IIoT sidérurgie à partir de 8 000 € HT. Nous disposons d'experts en sécurité OT (Operational Technology) spécialisés industrie lourde.",
        },
        {
          q: "Comment sécuriser un cloud transfrontalier France-Luxembourg pour les entreprises de Thionville ?",
          a: "Les entreprises de Thionville opérant de part et d'autre de la frontière franco-luxembourgeoise font face à des enjeux de sécurité cloud complexes : hébergement des données dans le pays adéquat selon leur nature (données de salariés luxembourgeois, données clients français), conformité simultanée au RGPD européen, à la supervision de la CSSF (Commission de Surveillance du Secteur Financier) pour les activités financières, et aux exigences du CNPD luxembourgeois. CloudSecure réalise des audits de conformité cloud transfrontalière et met en place des architectures cloud bi-nationales sécurisées, avec cloisonnement des données par juridiction et gestion centralisée des identités via Azure Entra ID ou AWS IAM. Forfait audit cloud transfrontalier à partir de 5 000 € HT.",
        },
        {
          q: "Quelles obligations PSSI et NIS2 s'appliquent aux entreprises frontalières France-Luxembourg de Thionville ?",
          a: "Les entreprises de Thionville opérant au Luxembourg dans des secteurs régulés (finance, assurance, PSF — Prestataire de Services Financiers) doivent respecter les exigences de la CSSF en matière de Politique de Sécurité des Systèmes d'Information (PSSI), qui sont parmi les plus strictes d'Europe. En France, la directive NIS2 s'applique selon le secteur d'activité. CloudSecure accompagne ces entreprises dans l'alignement de leur PSSI avec les deux référentiels, réalise les audits d'infrastructure cloud requis et prépare les dossiers de conformité pour les régulateurs français et luxembourgeois. Diagnostic de conformité PSSI transfrontalière à partir de 3 500 € HT.",
        },
        {
          q: "Faut-il un cloud souverain pour les données industrielles d'ArcelorMittal à Thionville ?",
          a: "Pour les données de production sidérurgique d'ArcelorMittal classées sensibles (procédés exclusifs, formulations d'aciers spéciaux, données de recherche), l'hébergement dans un cloud européen avec des garanties de souveraineté est fortement recommandé pour éviter l'exposition aux lois extraterritoriales (Cloud Act américain). CloudSecure évalue le niveau de sensibilité de vos données industrielles, identifie les flux nécessitant un cloud souverain (OVHcloud, Thales S3NS) et vous accompagne dans la migration sans interruption de production. Pour les données IIoT opérationnelles, un cloud commercial sécurisé avec chiffrement de bout en bout peut être suffisant. Diagnostic souveraineté cloud gratuit.",
        },
        {
          q: "Proposez-vous des missions de cybersécurité cloud pour les PME de logistique transfrontalière de Thionville ?",
          a: "Oui. Les PME de logistique transfrontalière de Thionville (transport routier, commissionnaires, prestataires douaniers) qui gèrent des plateformes cloud de tracking et des accès aux systèmes douaniers DELTA (dédouanement) et NSTI (transit) sont des cibles de choix pour les cybercriminels cherchant à manipuler les données de fret ou à contourner les contrôles douaniers. CloudSecure audite la sécurité de ces applications cloud à partir de 3 500 € HT et propose des formations spécifiques aux risques cyber de la logistique transfrontalière pour vos équipes opérationnelles.",
        },
      ],
    }}
  />
);

export default SecuriteCloudThionville;
