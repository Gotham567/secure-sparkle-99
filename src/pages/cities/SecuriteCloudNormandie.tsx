import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudNormandie = () => (
  <CityLandingPage
    data={{
      city: "Normandie",
      citySlug: "normandie",
      region: "Normandie",
      postalCode: "14 / 27 / 50 / 61 / 76",
      intro: "CyberSecure est votre prestataire sécurité cloud Normandie : audit AWS, Azure, GCP, conformité NIS2, RGPD et réponse aux incidents cloud pour les entreprises de Rouen, Caen, Le Havre, Cherbourg, Évreux et toute la région.",
      localContext: "La Normandie est une région stratégique pour l'économie française, avec Le Havre qui est le 1er port de France en termes de trafic de conteneurs et une plateforme logistique nationale. L'industrie pétrochimique et raffinerie est concentrée sur l'axe Seine (TotalEnergies Gonfreville, ExxonMobil Port-Jérôme). La Normandie accueille aussi Airbus (Méaulte, St-Nazaire), des industries pharmaceutiques et cosmétiques (Servier à Gidy, Isabelle Lancray), et l'énergie nucléaire (centrales de Paluel, Flamanville, Penly). Cherbourg est un site majeur de la défense navale et du nucléaire (DCNS, Orano). Caen concentre l'électronique et des industries de haute technologie.",
      sectors: [
        "Pétrochimie et raffinage (TotalEnergies Gonfreville, ExxonMobil Port-Jérôme)",
        "Logistique portuaire (Port du Havre, HAROPA, logistique fluviale Seine)",
        "Nucléaire et défense (centrales Paluel/Flamanville/Penly, DCNS Cherbourg, Orano)",
        "Aéronautique (Airbus Méaulte, équipementiers aéronautiques normands)",
        "Agroalimentaire et laitier (Danone Caen, coopératives laitières normandes)",
        "Automobile (Renault Cléon, Sandouville, équipementiers normands)",
        "Santé (CHU Rouen, CHU Caen, hôpital Cherbourg)",
        "Collectivités (Métropole Rouen Normandie, Caen la Mer, Région Normandie)",
      ],
      neighborhoods: [
        "Métropole Rouen Normandie – Sotteville-lès-Rouen (76)",
        "Caen la Mer Métropole – Hérouville-Saint-Clair (14)",
        "Le Havre Seine Métropole – Gonfreville-l'Orcher (76)",
        "Cherbourg-en-Cotentin – Équeurdreville (50)",
        "Évreux – Vernon – Bernay (27)",
        "Alençon – Argentan (61)",
        "Dieppe – Fécamp (76)",
        "Lisieux – Deauville – Honfleur (14)",
      ],
      faq: [
        {
          q: "Couvrez-vous les 5 départements normands ?",
          a: "Oui, CyberSecure intervient dans les cinq départements : Calvados (14), Eure (27), Manche (50), Orne (61) et Seine-Maritime (76). Nos spécialistes cloud se déplacent sur site dans toute la Normandie, des zones portuaires aux zones rurales. CERT d'urgence 24/7.",
        },
        {
          q: "Le port du Havre migre-t-il ses systèmes vers le cloud ? Quels risques ?",
          a: "HAROPA Port (ports du Havre, Rouen, Paris) opère une transformation numérique avec des plateformes logistiques cloud (Port Community System). Ces systèmes gèrent des flux de marchandises, données douanières et logistiques critiques. Les risques incluent des attaques sur les systèmes de gestion des escales (déni de service portuaire), des ransomwares sur les TMS (Transport Management Systems), et des menaces sur les OT des terminaux automatisés. CyberSecure audite ces environnements.",
        },
        {
          q: "Les raffineries normandes utilisent-elles des clouds industriels ?",
          a: "Oui. Les raffineries TotalEnergies (Gonfreville-l'Orcher) et ExxonMobil (Port-Jérôme) modernisent leurs infrastructures IT/OT avec des solutions cloud hybrides. Ces environnements cumulent des systèmes SCADA, des plateformes IoT industriel et des ERP cloud (SAP S/4HANA). Les architectures OT/IT convergentes créent des risques spécifiques : mouvement latéral vers les systèmes de contrôle process. CyberSecure est spécialiste des audits IT/OT pour le secteur pétrolier.",
        },
        {
          q: "Cherbourg et le secteur nucléaire/défense : comment sécuriser les environnements cloud ?",
          a: "Cherbourg concentre des acteurs de la défense nucléaire (Naval Group, Orano, TechnicAtome). Ces entreprises opèrent des systèmes d'information de niveau classifié (IGC/A, RGS++) et des systèmes industriels critiques. Les fournisseurs et sous-traitants intervenant dans ces programmes doivent respecter des exigences de sécurité strictes. CyberSecure accompagne les prestataires de la défense dans leurs audits de sécurité cloud et les homologations RGS.",
        },
        {
          q: "Quels financements pour un audit sécurité cloud en Normandie ?",
          a: "Mon Aide Cyber (ANSSI) — diagnostic gratuit. La Région Normandie via ses fonds FEDER et le programme Normandie Numérique. Les CCI normandes (CCI Normandie, CCI Seine-Estuaire, CCI Caen Normandie). BPI France Normandie — prêts numériques et garanties. La SEBN (filière numérique normande) et les clusters industriels accompagnent aussi leurs membres sur la sécurité cloud.",
        },
      ],
    }}
  />
);

export default SecuriteCloudNormandie;
