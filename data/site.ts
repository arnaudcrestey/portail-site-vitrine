export type NavItem = {
  href: string;
  label: string;
};

export type AudienceCard = {
  title: string;
  description: string;
  eyebrow: string;
};

export type SolutionCard = {
  title: string;
  description: string;
  icon: 'scan' | 'flow' | 'spark' | 'mail';
};

export type BenefitCard = {
  title: string;
  description: string;
};

export type HomeProofCard = {
  slug: string;
  number: string;
  title: string;
  description: string;
  image: string;
  href: string;
  tag: string;
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

export const audienceCards: AudienceCard[] = [
  {
    eyebrow: 'Accompagnement',
    title: 'Coachs, thérapeutes et praticiens',
    description:
      'Des activités où la confiance, la finesse de perception et la qualité de l’entrée en relation font une différence immédiate.',
  },
  {
    eyebrow: 'Pédagogie',
    title: 'Formateurs, pédagogues et transmetteurs',
    description:
      'Des métiers qui ont besoin de rendre une offre plus lisible, de structurer un parcours et d’installer une perception claire de la valeur.',
  },
  {
    eyebrow: 'Expertise',
    title: 'Consultants, indépendants et métiers de transformation',
    description:
      'Des profils qui veulent transformer leur expertise en dispositif digital crédible, utile et capable d’orienter la suite.',
  },
];

export const solutionCards: SolutionCard[] = [
  {
    title: 'Mini-sites premium',
    description: 'Des pages nettes et haut de gamme pour clarifier une promesse, présenter une expertise et donner envie d’aller plus loin.',
    icon: 'spark',
  },
  {
    title: 'Diagnostics interactifs',
    description: 'Des expériences qui éveillent la curiosité, créent de la résonance et qualifient la relation dès les premiers instants.',
    icon: 'scan',
  },
  {
    title: 'Parcours d’entrée',
    description: 'Des dispositifs conçus pour orienter, filtrer et préparer une prise de contact dans de meilleures conditions.',
    icon: 'flow',
  },
  {
    title: 'Automatisations utiles',
    description: 'Des séquences sobres et intelligentes pour prolonger l’échange, nourrir l’attention et structurer la suite.',
    icon: 'mail',
  },
  {
    title: 'Systèmes de conversion',
    description: 'Un ensemble cohérent de messages, de pages et de points d’entrée pour rendre une activité plus lisible, crédible et efficace.',
    icon: 'spark',
  },
];

export const benefitCards: BenefitCard[] = [
  {
    title: 'Clarifier le positionnement',
    description: 'Mieux faire comprendre ce que vous proposez, à qui cela s’adresse et pourquoi cela mérite attention.',
  },
  {
    title: 'Améliorer la première impression',
    description: 'Donner immédiatement une sensation de sérieux, de maîtrise et de cohérence.',
  },
  {
    title: 'Fluidifier l’entrée en relation',
    description: 'Créer une expérience plus naturelle pour découvrir, comprendre, qualifier et contacter.',
  },
  {
    title: 'Mieux convertir sans surjouer',
    description: 'Faire avancer la relation avec sobriété, clarté et intelligence plutôt qu’avec pression ou effets artificiels.',
  },
];

export const homeProofs: HomeProofCard[] = [
  {
    slug: 'cabinet-astrae',
    number: '01',
    title: 'Cabinet Astrae',
    description:
      'Un exemple de dispositif éditorial et expérientiel conçu pour clarifier une promesse sensible et créer une entrée en relation qualitative.',
    image: '/projects/cabinet-astrae.jpg',
    href: '/cabinet-astrae',
    tag: 'Démonstration éditoriale',
  },
  {
    slug: 'love-scan',
    number: '02',
    title: 'Love Scan',
    description:
      'Une porte d’entrée relationnelle pensée pour capter l’attention juste, éveiller la curiosité et ouvrir vers une suite.',
    image: '/projects/love-scan.jpg',
    href: '/concepts',
    tag: 'Diagnostic interactif',
  },
  {
    slug: 'parcours-entree',
    number: '03',
    title: 'Parcours d’entrée',
    description:
      'Un exemple de mini-site conçu pour qualifier, structurer la découverte et améliorer la qualité des demandes entrantes.',
    image: '/projects/personality-scan.jpg',
    href: '/concepts',
    tag: 'Mini-site premium',
  },
  {
    slug: 'automatisation-emails',
    number: '04',
    title: 'Automatisation d’emails',
    description:
      'Une séquence pensée pour prolonger l’attention, créer de la continuité et orienter naturellement vers la conversion.',
    image: '/projects/procoach.jpg',
    href: '/concepts',
    tag: 'Système de conversion',
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
