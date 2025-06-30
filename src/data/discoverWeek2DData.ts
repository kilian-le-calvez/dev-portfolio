import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/timeline/Timeline";

const part240123 = [
  {
    id: "project-January2023-24-01-23",
    type: "project",
    data: {
      title: {
        en: "Day 1: First Contact",
        fr: "Jour 1 : Premier Contact",
      },
      description: [
        {
          en: "My very first time using Unity. I made a simple platformer character with a red hat and a single-frame sprite that flips when changing direction (inspired by Paper Mario’s style).",
          fr: "Ma toute première fois avec Unity. J'ai créé un personnage simple pour un platformer avec un chapeau rouge et un sprite à une seule image qui se retourne en changeant de direction (inspiré du style de Paper Mario).",
        },
        {
          en: "Basic jump (just upward movement), basic level, no real gameplay — but it was the start.",
          fr: "Saut basique (simple mouvement vers le haut), niveau simple, pas de vrai gameplay — mais c'était le début.",
        },
      ],
      highlights: [
        {
          en: "First time using Unity",
          fr: "Première utilisation d’Unity",
        },
        {
          en: "First time creating a 2D character",
          fr: "Première création d’un personnage 2D",
        },
        {
          en: "First time using C# for game development",
          fr: "Première utilisation de C# pour le développement de jeux",
        },
      ],
      technologies: ["Unity", "C#"],
      status: "completed",
      image: "image/24-01-23-Screenshot-1.png",
    } as ProjectBlockData,
  },
  {
    id: "skills-January2023-24-01-23",
    type: "skills",
    data: {
      title: {
        en: "Perceived Difficulty (Learning Journey)",
        fr: "Difficulté perçue (Parcours d’apprentissage)",
      },
      skills: [
        {
          name: {
            en: "Unity",
            fr: "Unity",
          },
          difficulty: 2,
          category: {
            en: "2D Development",
            fr: "Développement 2D",
          },
        },
      ],
    } as SkillsBlockData,
  },
  {
    id: "media-January2023",
    type: "media",
    data: {
      items: [
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=_WuB0BUnosA",
          alt: "Test 3D Video",
        },
        {
          type: "image",
          src: "image/24-01-23-Screenshot-1.png",
          alt: "Test 3D Image-1",
        },
      ],
    } as MediaBlockData,
  },
];

const part250123 = [
  {
    id: "project-January2023-25-01-23",
    type: "project",
    data: {
      title: {
        en: "Day 2: Top-Down Shooter Exploration",
        fr: "Jour 2 : Exploration du Shooter vue du dessus",
      },
      description: [
        {
          en: "Tried something new with a top-down perspective. Built a mini shooter where the player rotates with the mouse, can shoot laser bullets, and spawn destructible boxes.",
          fr: "Essayé quelque chose de nouveau avec une perspective vue du dessus. Créé un mini shooter où le joueur tourne avec la souris, peut tirer des lasers et faire apparaître des boîtes destructibles.",
        },
        {
          en: "Handled object lifetimes and aimed shooting logic for the first time. Not quite a game, but much closer than Day 1.",
          fr: "Géré pour la première fois la durée de vie des objets et la logique de tir ciblé. Pas encore un vrai jeu, mais beaucoup plus proche que le Jour 1.",
        },
      ],
      highlights: [
        {
          en: "First time using a top-down view",
          fr: "Première utilisation d'une vue du dessus",
        },
        {
          en: "Basic shooting mechanic and mouse aiming",
          fr: "Mécanique de tir basique et visée à la souris",
        },
        {
          en: "Dynamic object instantiation and destruction",
          fr: "Instantiation et destruction dynamiques d’objets",
        },
      ],
      technologies: ["Unity", "C#"],
      status: "completed",
      image: "image/25-01-23-Screenshot-1.png",
    } as ProjectBlockData,
  },
  {
    id: "skills-January2023-25",
    type: "skills",
    data: {
      title: {
        en: "Perceived Difficulty (Learning Journey)",
        fr: "Difficulté perçue (Parcours d’apprentissage)",
      },
      skills: [
        {
          name: {
            en: "Unity",
            fr: "Unity",
          },
          difficulty: 5,
          category: {
            en: "2D Development",
            fr: "Développement 2D",
          },
        },
      ],
    } as SkillsBlockData,
  },
  {
    id: "media-January2023-25",
    type: "media",
    data: {
      items: [
        {
          type: "image",
          src: "image/25-01-23-Screenshot-1.png",
          alt: "Top-down shooter screenshot",
        },
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=Lk1i1hLuwlA",
          alt: "Top-down shooter video",
        },
      ],
    } as MediaBlockData,
  },
];

const part260123 = [
  {
    id: "project-January2023-26-01-23",
    type: "project",
    data: {
      title: {
        en: "Day 3: Platformer Evolution",
        fr: "Jour 3 : Évolution du Platformer",
      },
      description: [
        {
          en: "Improved on the platformer idea with proper animations for walking, jumping, falling, and dying.",
          fr: "Amélioration de l’idée du platformer avec des animations appropriées pour marcher, sauter, tomber et mourir.",
        },
        {
          en: "Added spike hazards and player lives. A single-screen level, but now feels like a real game slice.",
          fr: "Ajout d’obstacles à pics et de vies pour le joueur. Un niveau à écran unique, mais qui ressemble désormais à un vrai morceau de jeu.",
        },
      ],
      highlights: [
        {
          en: "Sprite-based animation system",
          fr: "Système d’animation basé sur des sprites",
        },
        {
          en: "Simple hazard interaction",
          fr: "Interaction simple avec les dangers",
        },
        {
          en: "Game-feel refinement",
          fr: "Affinage du ressenti de jeu",
        },
      ],
      technologies: ["Unity", "C#"],
      status: "completed",
      image: "image/26-01-23-Screenshot-1.png",
    } as ProjectBlockData,
  },
  {
    id: "skills-January2023-26",
    type: "skills",
    data: {
      title: {
        en: "Perceived Difficulty (Learning Journey)",
        fr: "Difficulté perçue (Parcours d’apprentissage)",
      },
      skills: [
        {
          name: {
            en: "Unity",
            fr: "Unity",
          },
          difficulty: 8,
          category: {
            en: "2D Development",
            fr: "Développement 2D",
          },
        },
      ],
    } as SkillsBlockData,
  },
  {
    id: "media-January2023-26",
    type: "media",
    data: {
      items: [
        {
          type: "image",
          src: "image/26-01-23-Screenshot-1.png",
          alt: "Platformer evolution screenshot",
        },
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=wLTp-upcmjI",
          alt: "Platformer evolution video",
        },
      ],
    } as MediaBlockData,
  },
];

const part270123 = [
  {
    id: "project-January2023-27-01-23",
    type: "project",
    data: {
      title: {
        en: "Day 4: Fruit Ninja Spear Game",
        fr: "Jour 4 : Jeu de Lance Fruit Ninja",
      },
      description: [
        {
          en: "My first original concept: a spear that cuts fruits flying from both sides.",
          fr: "Mon premier concept original : une lance qui coupe les fruits volant des deux côtés.",
        },
        {
          en: "Rotated with the mouse, the spear destroys fruits and avoids bombs. Includes score system, HUD, lives, and best score menu.",
          fr: "Tournée avec la souris, la lance détruit les fruits et évite les bombes. Comprend un système de score, HUD, vies, et menu du meilleur score.",
        },
      ],
      highlights: [
        {
          en: "First original concept",
          fr: "Premier concept original",
        },
        {
          en: "Object interaction and scoring system",
          fr: "Interaction avec les objets et système de score",
        },
        {
          en: "Mouse-controlled rotation logic",
          fr: "Logique de rotation contrôlée par la souris",
        },
      ],
      technologies: ["Unity", "C#"],
      status: "completed",
      image: "image/27-01-23-Screenshot-1.png",
    } as ProjectBlockData,
  },
  {
    id: "skills-January2023-27",
    type: "skills",
    data: {
      title: {
        en: "Perceived Difficulty (Learning Journey)",
        fr: "Difficulté perçue (Parcours d’apprentissage)",
      },
      skills: [
        {
          name: {
            en: "Unity",
            fr: "Unity",
          },
          difficulty: 12,
          category: {
            en: "2D Development",
            fr: "Développement 2D",
          },
        },
      ],
    } as SkillsBlockData,
  },
  {
    id: "media-January2023-27",
    type: "media",
    data: {
      items: [
        {
          type: "image",
          src: "image/27-01-23-Screenshot-1.png",
          alt: "Fruit ninja spear game screenshot",
        },
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=2Lm6NammZE0",
          alt: "Fruit ninja spear game video",
        },
      ],
    } as MediaBlockData,
  },
];

const part280123 = [
  {
    id: "project-January2023-28-01-23",
    type: "project",
    data: {
      title: {
        en: "Day 5: Multi-Level Platformer",
        fr: "Jour 5 : Platformer multi-niveaux",
      },
      description: [
        {
          en: "Designed a cartoon-style platformer with running and jumping animations.",
          fr: "Conception d’un platformer style dessin animé avec des animations de course et de saut.",
        },
        {
          en: "Created two different levels and a playable level selector with a clear game loop.",
          fr: "Création de deux niveaux différents et d’un sélecteur de niveau jouable avec une boucle de jeu claire.",
        },
      ],
      highlights: [
        {
          en: "Multi-scene setup and level transitions",
          fr: "Configuration multi-scènes et transitions de niveaux",
        },
        {
          en: "Improved animations and movement",
          fr: "Animations et mouvements améliorés",
        },
        {
          en: "Designed a level hub",
          fr: "Conception d’un hub de niveaux",
        },
      ],
      technologies: ["Unity", "C#"],
      status: "completed",
      image: "image/28-01-23-Screenshot-1.png",
    } as ProjectBlockData,
  },
  {
    id: "skills-January2023-28",
    type: "skills",
    data: {
      title: {
        en: "Perceived Difficulty (Learning Journey)",
        fr: "Difficulté perçue (Parcours d’apprentissage)",
      },
      skills: [
        {
          name: {
            en: "Unity",
            fr: "Unity",
          },
          difficulty: 14,
          category: {
            en: "2D Development",
            fr: "Développement 2D",
          },
        },
      ],
    } as SkillsBlockData,
  },
  {
    id: "media-January2023-28",
    type: "media",
    data: {
      items: [
        {
          type: "image",
          src: "image/28-01-23-Screenshot-1.png",
          alt: "Multi-level platformer screenshot",
        },
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=AyFgsfn3uXw",
          alt: "Multi-level platformer video",
        },
      ],
    } as MediaBlockData,
  },
];

const part290123 = [
  {
    id: "project-January2023-29-01-23",
    type: "project",
    data: {
      title: {
        en: "Day 6: Cozy Handmade Platformer",
        fr: "Jour 6 : Platformer douillet fait main",
      },
      description: [
        {
          en: "Focused on crafting all art assets by hand: backgrounds, player sprite, idle and walk animations.",
          fr: "Concentration sur la création manuelle de tous les éléments graphiques : décors, sprite joueur, animations d’attente et de marche.",
        },
        {
          en: "Added a hidden room in the map for exploration. Cozy and full of personality.",
          fr: "Ajout d’une pièce secrète sur la carte pour l’exploration. Douillet et plein de personnalité.",
        },
      ],
      highlights: [
        {
          en: "All handmade assets",
          fr: "Tous les éléments faits à la main",
        },
        {
          en: "Smooth custom animations",
          fr: "Animations personnalisées fluides",
        },
        {
          en: "Discovering Tilemap system",
          fr: "Découverte du système Tilemap",
        },
      ],
      technologies: ["Unity", "C#", "Gimp"],
      status: "completed",
      image: "image/29-01-23-Screenshot-1.png",
    } as ProjectBlockData,
  },
  {
    id: "skills-January2023-29",
    type: "skills",
    data: {
      title: {
        en: "Perceived Difficulty (Learning Journey)",
        fr: "Difficulté perçue (Parcours d’apprentissage)",
      },
      skills: [
        {
          name: {
            en: "Unity",
            fr: "Unity",
          },
          difficulty: 12,
          category: {
            en: "2D Development",
            fr: "Développement 2D",
          },
        },
        {
          name: {
            en: "Gimp",
            fr: "Gimp",
          },
          difficulty: 25,
          category: {
            en: "2D Development",
            fr: "Développement 2D",
          },
        },
      ],
    } as SkillsBlockData,
  },
  {
    id: "media-January2023-29",
    type: "media",
    data: {
      items: [
        {
          type: "image",
          src: "image/29-01-23-Screenshot-1.png",
          alt: "Cozy platformer screenshot",
        },
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=_BzmqtTIYZc",
          alt: "Cozy platformer video",
        },
      ],
    } as MediaBlockData,
  },
];

// You can now compose the full content like this:
const discoverWeek2DData = {
  id: "January2023",
  year: "S1 2023",
  title: "Discover Week 2D",
  subtitle: {
    en: "A One-Week Deep Dive into 2D Game Development",
    fr: "Une immersion d'une semaine dans le développement de jeux 2D",
  },
  status: "completed",
  thumbnail: "image/29-01-23-Screenshot-1.png",
  content: [
    {
      id: "text-January2023-24-01-23",
      type: "text",
      data: {
        content: {
          en: "Challenge myself to go all-in on Unity 2D development for one focused week — with the aim of building a strong enough foundation to tackle a full solo game jam project.",
          fr: "Me challenger à me consacrer pleinement au développement Unity 2D pendant une semaine ciblée — dans le but de construire une base solide pour mener un projet complet de game jam solo.",
        },
      } as TextBlockData,
    },
    {
      id: "separator-January2023-24-01-23",
      type: "separator",
      data: {},
    },
    ...part290123,
    {
      id: "separator-January2023-25-01-23",
      type: "separator",
      data: {},
    },
    ...part280123,
    {
      id: "separator-January2023-26-01-23",
      type: "separator",
      data: {},
    },
    ...part270123,
    {
      id: "separator-January2023-27-01-23",
      type: "separator",
      data: {},
    },
    ...part260123,
    {
      id: "separator-January2023-28-01-23",
      type: "separator",
      data: {},
    },
    ...part250123,
    {
      id: "separator-January2023-29-01-23",
      type: "separator",
      data: {},
    },
    ...part240123,
  ],
} as TimelineData;

export default discoverWeek2DData;
