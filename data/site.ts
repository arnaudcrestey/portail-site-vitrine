export type NavItem = {
  href: string;
  label: string;
};

export type UniverseCard = {
  title: string;
  audience: string;
  description: string;
  href: string;
  cta: string;
  accent: string;
};

export type DeviceExample = {
  title: string;
  description: string;
  icon: 'scan' | 'flow' | 'spark' | 'mail';
  href: string;
};

export type ProjectCard = {
  slug: string;
  number: string;
  title: string;
  hook: string;
  description: string;
  proof: string;
  image: string;
  href: string;
  cta: string;
};

export type ReserveConcept = {
  title: string;
  description: string;
};

export const navigation: NavItem[] = [
  { href: '/', label: 'Accueil' },
  { href: '/systeme', label: 'Le système' },
  { href: '/concepts', label: 'Concepts' },
  { href: '/a-propos', label: 'À propos' },
];

export const homeUniverses: UniverseCard[] = [
  {
    title: 'Cabinet Astrae',
    audience: 'Exemple de dispositif conçu',
    description:
      'Un cas concret de système pensé pour structurer une offre, clarifier une promesse et créer une expérience plus lisible.',
    href: '/cabinet-astrae',
    cta: 'Découvrir le cas Astrae',
    accent: 'from-secondary/18 via-secondary/8 to-white',
  },
  {
    title: 'Le système',
    audience: 'Dispositif d’acquisition concret',
    description:
      'Une démonstration visuelle de la manière dont une expertise peut être transformée en système digital clair, structuré et orienté conversion.',
    href: '/systeme',
    cta: 'Découvrir le système',
    accent: 'from-primary/18 via-primary/8 to-white',
  },
];

export const deviceExamples: DeviceExample[] = [
  {
    title: 'Diagnostic interactif',
    description:
      'Un dispositif interactif conçu pour capter l’attention dès les premières secondes et engager naturellement la personne.',
    icon: 'scan',
    href: '/systeme',
  },
  {
    title: 'Points d’entrée',
    description:
      'Des parcours pensés pour capter différentes situations et guider naturellement vers une prise de contact.',
    icon: 'flow',
    href: '/systeme',
  },
  {
    title: 'Analyse et adaptation',
    description:
      'Chaque dispositif est pensé à partir de l’expertise, du système existant et de l’activité, afin de créer des points d’entrée cohérents et une automatisation utile.',
    icon: 'spark',
    href: '/systeme',
  },
  {
    title: 'Automatisations',
    description:
      'Un dispositif conçu pour capter, qualifier et relancer automatiquement les contacts.',
    icon: 'mail',
    href: '/systeme',
  },
];

export const conceptProjects: ProjectCard[] = [
  {
    slug: 'love-scan',
    number: '01',
    title: 'Love Scan',
    hook: 'Votre relation est-elle vraiment équilibrée ?',
    description:
      'Obtenez un score clair et une lecture immédiate de votre dynamique relationnelle.',
    proof: 'Test rapide • Résultat en 2 minutes',
    image: '/projects/love-scan.jpg',
    href: 'https://love-scan-three.vercel.app/',
    cta: 'Faire le test',
  },
  {
    slug: 'personality-scan',
    number: '02',
    title: 'Personality Scan',
    hook: 'Comprenez enfin votre fonctionnement profond',
    description:
      'Découvrez vos traits dominants, vos forces et vos zones de tension en quelques minutes.',
    proof: 'Simple • Rapide • Immédiat',
    image: '/projects/personality-scan.jpg',
    href: 'https://personnality-scan.vercel.app/',
    cta: 'Découvrir',
  },
  {
    slug: 'life-decision',
    number: '03',
    title: 'Life Decision',
    hook: 'Prenez une décision sans rester bloqué',
    description:
      'Faites émerger plus clairement les options, les hésitations et la direction la plus juste.',
    proof: 'Lecture guidée • Impact immédiat',
    image: '/projects/life-decision.jpg',
    href: 'https://life-decision-six.vercel.app/',
    cta: 'Explorer',
  },
  {
    slug: 'blocages-de-vie',
    number: '04',
    title: 'Blocages de vie',
    hook: 'Ce qui vous bloque n’est pas toujours visible',
    description:
      'Identifiez les freins réels derrière une situation confuse et commencez à les clarifier.',
    proof: 'Diagnostic court • Lecture directe',
    image: '/projects/blocages-de-vie.jpg',
    href: 'https://blocage-scan-s1lw.vercel.app/',
    cta: 'Identifier mes blocages',
  },
  {
    slug: 'miroir-intuition',
    number: '05',
    title: 'Miroir d’Intuition',
    hook: 'Exprimez votre situation, obtenez une lecture immédiate',
    description:
      'Transformez un texte libre en première lecture structurée, claire et exploitable.',
    proof: 'Expression libre • Retour instantané',
    image: '/projects/miroir-intuition.jpg',
    href: 'https://parlez-moi-de-votre-situation.vercel.app/',
    cta: 'Commencer',
  },
  {
    slug: 'procoach',
    number: '06',
    title: 'Procoach',
    hook: 'Êtes-vous vraiment aligné dans votre vie pro ?',
    description:
      'Repérez ce qui freine votre évolution ou votre repositionnement professionnel.',
    proof: 'Diagnostic pro • Résultat immédiat',
    image: '/projects/procoach.jpg',
    href: 'https://procoach-taap.vercel.app/',
    cta: 'Voir mon score',
  },
];

export const reserveConcepts: ReserveConcept[] = [
  {
    title: 'Boussole intérieure',
    description:
      'Un diagnostic narratif pour faire émerger une direction plus claire et plus alignée.',
  },
  {
    title: 'Décodeur de message',
    description:
      'Une expérience qui reformule une situation confuse en lecture structurée et exploitable.',
  },
  {
    title: 'Traducteur émotionnel',
    description:
      'Un parcours qui transforme un ressenti diffus en compréhension utile et partageable.',
  },
  {
    title: 'Radar de dynamique',
    description:
      'Un dispositif court pour identifier les forces et les tensions d’une situation donnée.',
  },
];

export const contactDetails = {
  email: 'demande@arnaudcrestey.com',
  phone: '+33 6 81 95 23 45',
  location: 'Vire, Normandie, France',
};
