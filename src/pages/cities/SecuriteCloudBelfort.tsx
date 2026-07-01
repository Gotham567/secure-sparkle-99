import CityLandingPage from "@/components/CityLandingPage";

const SecuriteCloudBelfort = () => (
  <CityLandingPage
    data={{
      city: "Belfort",
      citySlug: "belfort",
      region: "Bourgogne-Franche-Comté",
      postalCode: "90000",
      intro: "Belfort, capitale industrielle du Territoire de Belfort, abrite Alstom (trains connectés IIoT), GE Power (turbines data analytics) et un cluster énergie smart grid : CloudSecure sécurise vos infrastructures cloud industrielles IIoT AWS et Azure contre les cybermenaces ciblant l'Industrie 4.0. Audit sécurité cloud industriel Belfort, conformité NIS2 et protection des données OT/IT pour les sous-traitants d'Alstom et GE.",
      localContext: "Alstom à Belfort est un pionnier des trains connectés (TGV INOUI, Avelia Liberty) dont les systèmes IIoT cloud collectent des données de maintenance prédictive, de télématique et de supervision des flottes hébergées sur des plateformes cloud AWS et Azure nécessitant une sécurité renforcée de la convergence OT/IT. GE Power Belfort déploie des plateformes d'analytics cloud pour les turbines à gaz et les systèmes de production d'énergie, avec des données opérationnelles sensibles échangées avec des partenaires mondiaux via des APIs cloud. Le territoire de Belfort développe un cluster smart grid et énergie renouvelable où les systèmes SCADA et les plateformes de gestion d'énergie cloud sont exposés aux attaques ciblant les infrastructures critiques. Les sous-traitants industriels de la filière doivent sécuriser leurs accès aux plateformes cloud partagées avec les donneurs d'ordre.",
      sectors: [
        "Industrie ferroviaire et trains connectés IIoT (Alstom cloud maintenance)",
        "Énergie et turbines data analytics (GE Power, smart grid cloud)",
        "Sous-traitants industriels (accès cloud partagé donneurs d'ordre)",
        "Système SCADA et OT/IT convergence (cloud industriel sécurisé)",
        "PME et ETI du Territoire de Belfort (ERP cloud, Microsoft 365)",
        "Collectivités et services publics (dématérialisation cloud)",
      ],
      neighborhoods: [
        "Centre-ville de Belfort – Faubourg de France",
        "Zone industrielle de Dorans",
        "Technoparc de l'Aéroparc de Fontaine",
        "Danjoutin et Valdoie (industries)",
        "Agglomération Belfortaine (CAUB)",
        "Territoire de Belfort (90) – Franche-Comté",
      ],
      faq: [
        {
          q: "Combien coûte un audit de sécurité cloud industriel pour un sous-traitant d'Alstom ou GE à Belfort ?",
          a: "Un audit de sécurité cloud industriel (IIoT, OT/IT) pour un sous-traitant belfortain est facturé entre 5 000 et 12 000 € HT selon la complexité de l'architecture (nombre de plateformes cloud partagées, interfaces OPC-UA cloud, APIs de collecte de données IIoT). CloudSecure analyse les droits d'accès aux plateformes cloud des donneurs d'ordre, la segmentation réseau OT/IT, la sécurité des passerelles IoT-cloud, et la conformité aux exigences cybersécurité des clients (chartes fournisseurs Alstom, exigences IEC 62443). Rapport de vulnérabilités priorisées sous 10 jours. Devis gratuit sous 24h.",
        },
        {
          q: "Comment sécuriser les données IIoT des trains connectés Alstom hébergées dans le cloud ?",
          a: "Les trains connectés Alstom génèrent des données de maintenance prédictive (vibrations, températures, usure des pièces) et de supervision (position, performance) collectées via des passerelles IIoT et hébergées dans des plateformes cloud. CloudSecure sécurise ces pipelines IIoT : chiffrement TLS des données en transit depuis les capteurs embarqués, authentification mutuelle des appareils IoT (certificats X.509), contrôle d'accès RBAC aux bases de données analytiques cloud, et monitoring des accès pour détecter les exfiltrations de données techniques. Nous auditons également les interfaces de programmation (APIs) exposées aux partenaires de maintenance.",
        },
        {
          q: "Quelles sont les obligations NIS2 pour les industriels du Territoire de Belfort (énergie, ferroviaire) ?",
          a: "Les opérateurs dans les secteurs de l'énergie (GE Power, smart grid) et du transport (Alstom) sont directement éligibles à NIS2 en tant qu'entités essentielles, avec des obligations renforcées en matière de sécurité des systèmes d'information cloud. Les sous-traitants de ces donneurs d'ordre peuvent également être concernés via les exigences de sécurité de la chaîne d'approvisionnement. CloudSecure réalise des audits de conformité NIS2 pour les industriels belfortains : analyse des risques, PSSI cloud, plan de continuité et notification des incidents à l'ANSSI. Diagnostic d'éligibilité gratuit.",
        },
        {
          q: "Comment sécuriser la convergence OT/IT cloud dans un environnement industriel à Belfort ?",
          a: "La convergence OT/IT dans les usines de Belfort (SCADA connectés au cloud, MES cloud, supervision à distance) crée des risques spécifiques : les systèmes de contrôle industriel (PLC, SCADA) ne sont pas conçus pour la sécurité cloud et peuvent être compromis via les interfaces de supervision. CloudSecure audite les DMZ industrielles, contrôle les flux entre les réseaux OT et les plateformes cloud, implémente des pare-feux industriels (Purdue Model) et évalue les risques liés aux accès à distance (VPN industriel, RDP) sur les équipements de production. Nous sommes certifiés sur les standards IEC 62443 et NIST pour la cybersécurité industrielle.",
        },
        {
          q: "CloudSecure intervient-il en présentiel à Belfort pour les audits de sécurité cloud industriels ?",
          a: "Oui, CloudSecure intervient en présentiel à Belfort pour les audits cloud industriels nécessitant une présence physique : inspection des réseaux OT/IT sur site, interviews des équipes IT et automaticiens, revue des architectures de supervision cloud, ateliers de sensibilisation des opérateurs. Les phases de test cloud et de revue de configuration sont réalisées à distance via accès sécurisés. Nous nous déplaçons dans les usines des zones industrielles de Dorans et de l'Aéroparc. Déplacement inclus pour les missions supérieures à 6 000 € HT.",
        },
      ],
    }}
  />
);

export default SecuriteCloudBelfort;
