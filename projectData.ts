export interface IProject {
  links: IProjectLink[];
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}
export interface IProjectLink {
  url: string;
  type: 'github' | 'other';
}
export const mainProjects: IProject[] = [
  {
    links: [
      {
        type: 'github',
        url: 'https://github.com/af4oz/react-game-of-life',
      },
      {
        type: 'other',
        url: 'https://af4oz.github.io/react-game-of-life/',
      },
    ],
    title: 'Game of Life',
    description: "Conway's game of life(limited universe) using react.",
    image: 'v1650873048/blog/game-of-life_shctsw.png',
    imageAlt:
      'A rectangular shape filled with blue squared tiles with controls at bottom.',
  },
  {
    links: [
      {
        type: 'github',
        url: 'https://github.com/af4oz/suf-mern-gql-frontend',
      },
    ],
    title: 'Stack Underflow',
    description:
      "A web app basically similar to Stack Overflow using Next.js's SSR + CSR.",
    image: 'v1652195930/blog/stackunderflow_zzrakk.png',
    imageAlt:
      'Three sections in row with first one with Menu items,second with questions list and third with tags and their count.',
  },
  {
    links: [
      {
        type: 'github',
        url: 'https://github.com/af4oz/shoppingify',
      },
    ],
    title: 'Shoppingify',
    description: 'Shopping list management with purchase stats using next.js.',
    image: 'v1650880389/blog/shoppingify_xtok6h.png',
    imageAlt:
      'A rectangular shape filled with blue squared tiles with controls at bottom.',
  },
  {
    links: [
      {
        type: 'github',
        url: 'https://github.com/af4oz/dc-auth',
      },
    ],
    title: 'Auths',
    description:
      'An app with various OAuth providers with out passport/similar lib.',
    image: 'v1650882829/blog/auths_nohgxh.png',
    imageAlt: 'A sign up form with blue and white color theme.',
  },
  {
    links: [
      {
        type: 'github',
        url: 'https://github.com/af4oz/starter-fullstack-graphql-rq',
      },
    ],
    title: 'A Full stack Graphql,React starter',
    description:
      'It includes user authentication flow  based on JWT, refreshTokens and uses React, Graphql, Apollo server, Express, Nexus, React-query, jest, vite, vitest.',
    image: 'v1650883643/blog/auths_sync_tab_ehtin4.png',
    imageAlt: 'A login form with a dark green button',
  },
];

export const frontEndMentorChallenges: IProject[] = [
  {
    links: [
      {
        type: 'github',
        url: 'https://github.com/af4oz/fe-c5-search-ip-domain',
      },
      {
        type: 'other',
        url: 'https://af4oz.github.io/fe-c5-search-ip-domain/',
      },
    ],
    title: 'IP address tracker UI',
    description: 'Track Location of IP address and websites.',
    image: 'v1650875076/blog/ip-address-tracker_yja9lx.webp',
    imageAlt: 'A search bar with map at bottom',
  },
  {
    links: [
      {
        type: 'github',
        url: 'https://github.com/af4oz/fe-c7-bookmark-landing-page',
      },
      {
        type: 'other',
        url: 'https://af4oz.github.io/fe-c7-bookmark-landing-page/',
      },
    ],
    title: 'Bookmark Landing Page',
    description:
      'A Product landing page for a dummy bookmarking app using React,tailwindcss.',
    image: 'v1650874199/blog/bookmark-landing-page_vu8fky.png',
    imageAlt:
      'A Bookmark landing page Hero section with violet themed button and gray text',
  },

  {
    links: [
      {
        type: 'github',
        url: 'https://github.com/af4oz/fe-c1-product-page',
      },
      {
        type: 'other',
        url: 'https://af4oz.github.io/fe-c1-product-page/',
      },
    ],
    title: 'Commerce Product Page',
    description: 'UI for Product display page.',
    image: 'v1650875075/blog/commerce-product-page_wrswox.webp',
    imageAlt: 'Amazon like product page (Frontend Demo)',
  },
  {
    links: [
      {
        type: 'github',
        url: 'https://github.com/af4oz/fe-c2-launchdown-timer-react',
      },
      {
        type: 'other',
        url: 'https://af4oz.github.io/fe-c2-launchdown-timer-react/',
      },
    ],
    title: 'Launchdown Timer',
    description: 'Product launchdown timer with 3d effect.',
    image: 'v1650875073/blog/countdown-timer_bnbesf.webp',
    imageAlt: 'Product launchdown timer with 3d effect',
  },
];

export const freeCodeCampChallenges: IProject[] = [
  {
    links: [
      {
        type: 'github',
        url: 'https://github.com/af4oz/calculator',
      },
      {
        type: 'other',
        url: 'https://af4oz.github.io/calculator/',
      },
    ],
    title: 'Javascript Calculator',
    description: 'An attempt at cloning linux calculator.',
    image: 'v1650875073/blog/calculator_e5dbbp.webp',
    imageAlt:
      'A rectangular shape with buttons and white background to display information typed by buttons.',
  },
  {
    links: [
      {
        type: 'github',
        url: 'https://github.com/af4oz/pomodoro',
      },
      {
        type: 'other',
        url: 'https://af4oz.github.io/pomodoro/',
      },
    ],
    title: '25+5 Timer',
    description: 'simple timer web app.',
    image: 'v1650875073/blog/pomodoro_jze18p.webp',
    imageAlt: 'A timer web app',
  },
  {
    links: [
      {
        type: 'github',
        url: 'https://github.com/af4oz/drum-machine',
      },
      {
        type: 'other',
        url: 'http://af4oz.github.io/drum-machine',
      },
    ],
    title: 'Ally Drum Machine',
    description: 'Dummy Drum machine.',
    image: 'v1650875073/blog/drum-machina_kpusah.jpg',
    imageAlt:
      'A bunch of rounded square like buttons on left and controls at right with pink and drak gray colors',
  },
];
