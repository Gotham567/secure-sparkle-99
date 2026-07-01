import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudSaintNazaire = () => (
  <CityLandingPage
    data={{
      city: "Saint-Nazaire",
      citySlug: "saint-nazaire",
      region: "Pays de la Loire",
      postalCode: "44600",
      intro: "CloudSecure sécurise les données PLM collaboratives des Chantiers de l'Atlantique, les systèmes IIoT de l'éolien offshore et les infrastructures cloud des industriels navals de Saint-Nazaire contre les cybermenaces ciblant les données de conception de paquebots et d'éoliennes. Audit cloud industriel, conformité NIS2 énergie et cloud souverain pour l'industrie navale et les énergies renouvelables de Loire-Atlantique.",
      localContext: "Saint-Nazaire abrite l'un des sites industriels les plus stratégiques de France : les Chantiers de l'Atlantique, où sont construits les plus grands paquebots du monde pour MSC, Royal Caribbean et d'autres armateurs internationaux. Ces chantiers génèrent des masses considérables de données de conception 3D (PLM, CAO Catia, Siemens NX) hébergées sur des plateformes cloud collaboratives partagées avec des bureaux d'études du monde entier — exposant des propriétés intellectuelles ultra-sensibles à des risques d'espionnage industriel et de cyberattaque étatique. Le développement massif de l'éolien offshore dans la baie de Saint-Nazaire et de Saint-Brieuc crée de nouveaux défis de sécurité cloud pour les opérateurs (EDF Renouvelables, Siemens Gamesa) qui collectent des données de performance en temps réel via des milliers de capteurs IoT connectés au cloud. La chaîne de sous-traitants navals et énergétiques de la région nazairienne doit également se conformer aux exigences croissantes de sécurité cloud de leurs donneurs d'ordres. CloudSecure maîtrise ces enjeux industriels critiques et intervient à Saint-Nazaire, Montoir-de-Bretagne, Saint-Brévin et dans toute la Loire-Atlantique.",
      sectors: [
        "Construction navale cloud PLM (Chantiers de l'Atlantique, sous-traitants CAO/PLM)",
        "Éolien offshore et data cloud (capteurs IoT, maintenance prédictive, SCADA)",
        "Industrie sous-traitants naval (mécanique, électronique embarquée)",
        "Énergie renouvelable IoT (EDF Renouvelables, Siemens Gamesa)",
        "Logistique portuaire et supply chain navale",
        "Ingénierie industrielle et bureaux d'études cloud",
      ],
      neighborhoods: [
        "Chantiers de l'Atlantique et zone industrialo-portuaire",
        "Zone portuaire de Saint-Nazaire (Penhoët, Ville-Port)",
        "Montoir-de-Bretagne et zone logistique",
        "Saint-Brévin-les-Pins et presqu'île de Guérande",
        "Loire-Atlantique (44) et estuaire de la Loire",
        "Axe Saint-Nazaire–Nantes–Rennes (Grand Ouest)",
      ],
      faq: [
        {
          q: "Comment sécuriser les données PLM cloud des Chantiers de l'Atlantique et de leurs sous-traitants à Saint-Nazaire ?",
          a: "Les données PLM (Product Lifecycle Management) des Chantiers de l'Atlantique — plans 3D de paquebots, nomenclatures, calculs de résistance — constituent une propriété intellectuelle d'une valeur commerciale et stratégique considérable. CloudSecure sécurise ces environnements cloud collaboratifs (Dassault Systèmes 3DExperience, Siemens Teamcenter cloud) en auditant les droits d'accès des partenaires étrangers, le chiffrement des flux PLM, les politiques de gestion des droits numériques (DRM) sur les fichiers de conception et la conformité aux exigences de sécurité des armateurs. Forfait audit cloud PLM naval à partir de 8 000 € HT, avec option pentest ciblé des environnements de collaboration inter-entreprises.",
        },
        {
          q: "Quels risques de sécurité cloud menacent les parcs éoliens offshore de Saint-Nazaire ?",
          a: "Les parcs éoliens offshore (Saint-Nazaire, Yeu-Noirmoutier) collectent en temps réel des données de performance via des milliers de capteurs IoT (vibrations, température, production) transmises à des plateformes cloud AWS ou Azure pour la maintenance prédictive. Les risques de sécurité sont multiples : compromission des passerelles IoT permettant de manipuler les données de production ou d'interrompre le monitoring, attaques sur les SCADA de supervision à distance des turbines, et fuites de données propriétaires sur les performances des nouvelles générations d'éoliennes. CloudSecure audite ces architectures IoT/cloud industriel et déploie des protections adaptées. Forfait audit cloud IoT éolien offshore à partir de 7 000 € HT.",
        },
        {
          q: "Quelles sont les obligations NIS2 pour les opérateurs d'énergie renouvelable à Saint-Nazaire ?",
          a: "Les opérateurs de parcs éoliens offshore (EDF Renouvelables, Siemens Gamesa, Total Énergies ENR) classés entités essentielles NIS2 dans le secteur énergie doivent implémenter des mesures de sécurité cloud strictes : audits de sécurité annuels des systèmes de contrôle industriel (ICS/SCADA), gestion des accès distants des équipes de maintenance, plan de réponse aux incidents cyber avec notification ANSSI sous 24h, et continuité d'activité cloud. CloudSecure accompagne les opérateurs ENR de la Loire-Atlantique dans leur mise en conformité NIS2 énergie. Forfait NIS2 énergie renouvelable à partir de 10 000 € HT.",
        },
        {
          q: "Faut-il un cloud souverain pour les données de conception navale sensibles à Saint-Nazaire ?",
          a: "Pour les données de conception navale liées à des marchés de défense ou classifiées (navires de guerre, sous-marins, composants militaires), l'hébergement dans un cloud souverain qualifié SecNumCloud ou un cloud privé on-premise est recommandé par l'ANSSI et souvent exigé contractuellement par la DGA (Direction Générale de l'Armement). Pour les données de paquebots civils, un cloud commercial sécurisé (AWS GovCloud, Azure Government ou OVHcloud SecNumCloud) avec chiffrement de bout en bout peut suffire selon la sensibilité des informations. CloudSecure analyse vos données, évalue le niveau de classification requis et vous oriente vers la solution cloud adaptée. Diagnostic souveraineté cloud gratuit.",
        },
        {
          q: "Comment sécuriser la supply chain cloud des sous-traitants navals de Saint-Nazaire ?",
          a: "La supply chain navale de Saint-Nazaire implique des centaines de sous-traitants (mécanique, électronique, isolation, aménagement intérieur) qui accèdent aux systèmes cloud des Chantiers de l'Atlantique via des portails fournisseurs. CloudSecure audite ces accès tiers, déploie des architectures de cloisonnement (bastion cloud, Privileged Access Management) pour sécuriser les connexions fournisseurs, et évalue le niveau de sécurité cloud de vos sous-traitants via des questionnaires structurés. Nous accompagnons également les PME sous-traitantes dans la mise en conformité avec les exigences de sécurité cloud imposées par leurs donneurs d'ordres. Forfait supply chain navale cloud security à partir de 6 000 € HT.",
        },
      ],
    }}
  />
);

export default SecuriteCloudSaintNazaire;
