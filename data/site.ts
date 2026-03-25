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
  description: string;
  image: string;
  href: string;
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
      'Un dispositif interactif conçu pour capter l’attention dès les premières secondes et engager immédiatement le visiteur.',
    icon: 'scan',
    href: '/systeme',
  },
  {
    title: 'Points d’entrée',
    description:
      'Un parcours structuré qui guide naturellement vos visiteurs et facilite le passage à la prise de contact.',
    icon: 'flow',
    href: '/systeme',
  },
  {
    title: 'Analyse sur mesure',
    description:
      'Un système pensé pour transformer une problématique complexe en lecture claire, utile et engageante.',
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
    description:
      'Un dispositif relationnel pensé pour révéler rapidement les dynamiques les plus utiles.',
    image: '/projects/love-scan.jpg',
    href: '#',
  },
  {
    slug: 'personality-scan',
    number: '02',
    title: 'Personality Scan',
    description:
      'Un parcours de découverte conçu pour rendre un fonctionnement intérieur plus lisible.',
    image: '/projects/personality-scan.jpg',
    href: '#',
  },
  {
    slug: 'life-decision',
    number: '03',
    title: 'Life Decision',
    description:
      'Une expérience qui aide à clarifier les choix de vie et les directions possibles.',
    image: '/projects/life-decision.jpg',
    href: '#',
  },
  {
    slug: 'blocages-de-vie',
    number: '04',
    title: 'Blocages de vie',
    description:
      'Un concept pensé pour faire émerger les freins réels derrière une situation confuse.',
    image: '/projects/blocages-de-vie.jpg',
    href: '#',
  },
  {
    slug: 'miroir-intuition',
    number: '05',
    title: 'Miroir d’Intuition',
    description:
      'Un dispositif narratif qui transforme une expression libre en lecture structurée.',
    image: '/projects/miroir-intuition.jpg',
    href: '#',
  },
  {
    slug: 'procoach',
    number: '06',
    title: 'Procoach',
    description:
      'Un outil pensé pour identifier ce qui freine une évolution ou un repositionnement professionnel.',
    image: '/projects/procoach.jpg',
    href: '#',
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
