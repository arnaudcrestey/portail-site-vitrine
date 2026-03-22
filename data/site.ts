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
  { href: '/cabinet-astrae', label: 'Cabinet Astrae' },
  { href: '/diagnostics-automatisations', label: 'Diagnostics & Automatisations' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export const homeUniverses: UniverseCard[] = [
  {
    title: 'Cabinet Astrae',
    audience: 'Pour les particuliers',
    description:
      'Des diagnostics clairs, des analyses fines et un accompagnement structuré pour mieux comprendre ce que vous vivez et retrouver un cap.',
    href: '/cabinet-astrae',
    cta: 'Découvrir Astrae',
    accent: 'from-secondary/18 via-secondary/8 to-white',
  },
  {
    title: 'Diagnostics & Automatisations',
    audience: 'Pour les coachs, thérapeutes et formateurs',
    description:
      'Des mini-sites, diagnostics interactifs et systèmes d’acquisition conçus pour capter, qualifier et engager avec élégance.',
    href: '/diagnostics-automatisations',
    cta: 'Voir les solutions',
    accent: 'from-primary/18 via-primary/8 to-white',
  },
];

export const deviceExamples: DeviceExample[] = [
  {
    title: 'Love Scan',
    description: 'Une porte d’entrée relationnelle pensée pour révéler rapidement les dynamiques les plus utiles.',
    icon: 'scan',
  },
  {
    title: 'Parcours d’entrée',
    description: 'Un mini-site qui qualifie, prépare la relation et améliore la qualité des prises de contact.',
    icon: 'flow',
  },
  {
    title: 'Diagnostic personnalisé',
    description: 'Une expérience éditoriale et interactive qui transforme une expertise en dispositif compréhensible.',
    icon: 'spark',
  },
  {
    title: 'Automatisation d’emails',
    description: 'Une séquence claire et structurée pour prolonger la conversation sans alourdir l’expérience.',
    icon: 'mail',
  },
];

export const conceptProjects: ProjectCard[] = [
  {
    slug: 'love-scan',
    number: '01',
    title: 'Love Scan',
    description: 'Des relations plus claires. Une analyse qui révèle l’essentiel.',
    image: '/projects/love-scan.jpg',
    href: '#',
  },
  {
    slug: 'personality-scan',
    number: '02',
    title: 'Personality Scan',
    description: 'Mieux comprendre votre fonctionnement intérieur.',
    image: '/projects/personality-scan.jpg',
    href: '#',
  },
  {
    slug: 'life-decision',
    number: '03',
    title: 'Life Decision',
    description: 'Découvrez ce qui guide vraiment vos choix de vie.',
    image: '/projects/life-decision.jpg',
    href: '#',
  },
  {
    slug: 'blocages-de-vie',
    number: '04',
    title: 'Blocages de vie',
    description: 'Ce qui vous bloque aujourd’hui n’est peut-être pas ce que vous pensez.',
    image: '/projects/blocages-de-vie.jpg',
    href: '#',
  },
  {
    slug: 'miroir-intuition',
    number: '05',
    title: 'Miroir d’Intuition',
    description: 'Exprimez ce que vous traversez et découvrez ce qui se révèle en vous.',
    image: '/projects/miroir-intuition.jpg',
    href: '#',
  },
  {
    slug: 'procoach',
    number: '06',
    title: 'Procoach',
    description: 'Identifiez ce qui freine votre évolution professionnelle.',
    image: '/projects/procoach.jpg',
    href: '#',
  },
];

export const reserveConcepts: ReserveConcept[] = [
  {
    title: 'Boussole intérieure',
    description: 'Un diagnostic narratif pour faire émerger une direction plus claire et plus alignée.',
  },
  {
    title: 'Décodeur de message',
    description: 'Une expérience qui reformule une situation confuse en lecture structurée et actionnable.',
  },
  {
    title: 'Traducteur émotionnel',
    description: 'Un parcours qui transforme un ressenti diffus en compréhension utile et partageable.',
  },
  {
    title: 'Radar de dynamique',
    description: 'Un dispositif court pour identifier les forces et tensions d’une situation donnée.',
  },
];

export const contactDetails = {
  email: 'contact@arnaudcrestey.com',
  phone: '+33 6 00 00 00 00',
  location: 'Bretagne, France',
};
