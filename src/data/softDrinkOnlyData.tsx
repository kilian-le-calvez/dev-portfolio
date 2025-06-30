import React from "react";
import { LinksBlockData } from "../components/blocks/LinksBlock";
import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/timeline/Timeline";

const softDrinkOnlyData = {
  id: "February-March-2023",
  year: "S1 2023",
  title: "Soft Drinks Only",
  subtitle: {
    en: "Nightclub Simulation Game Jam",
    fr: "Game jam : simulation de boîte de nuit",
  },
  status: "completed",
  thumbnail: "image/SoftDrinksOnly-Screenshot-2.png",
  content: [
    {
      id: "project-February-March-2023",
      type: "project",
      data: {
        title: {
          en: "Soft Drinks Only",
          fr: "Soft Drinks Only",
        },
        description: [
          {
            en: "Soft Drinks Only is a nightclub simulation game built in just two weeks as my second game jam project, right after The Legend of Clouds. It was a challenge to prove that I could scope and finish another full game under tighter constraints.",
            fr: "Soft Drinks Only est un jeu de simulation de boîte de nuit créé en seulement deux semaines, mon deuxième projet de game jam après The Legend of Clouds. C’était un défi pour prouver que je pouvais cadrer et terminer un autre jeu complet dans un délai plus court.",
          },
          {
            en: "In the game, you manage a nightclub where pixel-art-style guests want to dance, eat, and drink. Each visitor has basic needs: if they don’t dance, they get bored and leave; if they don’t eat, they might die; and if they drink alcohol, it lowers their boredom and hunger—but too much causes fights and chaos.",
            fr: "Dans le jeu, vous gérez une boîte de nuit où des invités en pixel art veulent danser, manger et boire. Chaque visiteur a des besoins de base : s’il ne danse pas, il s’ennuie et part ; s’il ne mange pas, il peut mourir ; et s’il boit de l’alcool, cela réduit son ennui et sa faim — mais en excès, cela provoque des bagarres et du chaos.",
          },
          {
            en: "Your goal is to keep the party going as long as possible. The game features procedurally generated maps based on difficulty and size settings, along with a homemade radio soundtrack to match the dark, neon nightclub aesthetic.",
            fr: "Votre objectif est de faire durer la fête le plus longtemps possible. Le jeu propose des cartes générées procéduralement selon la difficulté et la taille choisies, accompagnées d’une bande-son maison pour coller à l’esthétique sombre et néon de la boîte de nuit.",
          },
          {
            en: "I also had to implement behavior algorithms so each character reacts in real-time to their needs, which made the development technically more challenging despite the smaller scope.",
            fr: "J’ai également dû implémenter des algorithmes de comportement pour que chaque personnage réagisse en temps réel à ses besoins, ce qui a rendu le développement plus complexe techniquement malgré la portée réduite.",
          },
        ],
        technologies: [
          "Unity",
          "C#",
          "GIMP",
          "FL Studio",
          "Procedural Generation",
        ],
        status: "completed",
        highlights: [
          {
            en: "Two-week solo game jam project",
            fr: "Projet solo de game jam en deux semaines",
          },
          {
            en: "Procedural map generation based on difficulty",
            fr: "Génération de cartes procédurale selon la difficulté",
          },
          {
            en: "Real-time simulation with AI behavior logic",
            fr: "Simulation en temps réel avec logique de comportement IA",
          },
          {
            en: "Original pixel-style visuals and club soundtrack",
            fr: "Graphismes originaux en pixel art et bande-son de club",
          },
          {
            en: "Unique 'soft chaos' strategy gameplay loop",
            fr: "Boucle de gameplay stratégique autour du 'chaos doux'",
          },
        ],
        image: "image/SoftDrinksOnly-Screenshot-1.png",
      } as ProjectBlockData,
    },
    {
      id: "skills-February-March-2023",
      type: "skills",
      data: {
        title: {
          en: "Skills Demonstrated",
          fr: "Compétences mises en œuvre",
        },
        skills: [
          {
            name: {
              en: "Unity",
              fr: "Unity",
            },
            difficulty: 50,
            category: {
              en: "Simulation / Bots Algorithms",
              fr: "Simulation / Algorithmes de bots",
            },
          },
          {
            name: {
              en: "Procedural Generation",
              fr: "Génération procédurale",
            },
            difficulty: 40,
            category: {
              en: "Game Design",
              fr: "Game design",
            },
          },
          {
            name: {
              en: "GIMP",
              fr: "GIMP",
            },
            difficulty: 35,
            category: {
              en: "2D Art / Pixel Art",
              fr: "Art 2D / Pixel art",
            },
          },
          {
            name: {
              en: "FL Studio",
              fr: "FL Studio",
            },
            difficulty: 20,
            category: {
              en: "Audio / Music",
              fr: "Audio / Musique",
            },
          },
        ],
      } as SkillsBlockData,
    },
    {
      id: "text-February-March-2023",
      type: "text",
      data: {
        title: {
          en: "Why This Project Matters",
          fr: "Pourquoi ce projet compte",
        },
        content: {
          en: "softDrinkOnly was my attempt to quickly scope and execute a simulation game within two weeks, applying lessons from my previous project while exploring a new genre. It taught me how to balance player control with emergent behavior and AI logic, and helped me grow in procedural level design and simplified production pipelines.",
          fr: "softDrinkOnly était ma tentative de cadrer et réaliser rapidement un jeu de simulation en deux semaines, en appliquant les leçons de mon projet précédent tout en explorant un nouveau genre. Ce projet m’a appris à équilibrer le contrôle du joueur avec des comportements émergents et une logique d’IA, et m’a permis de progresser en conception de niveaux procéduraux et en simplification de pipelines de production.",
        },
        highlight: true,
      } as TextBlockData,
    },
    {
      id: "media-February-March-2023",
      type: "media",
      data: {
        items: [
          {
            type: "image",
            src: "image/Screenshot_SDO_1.png",
            alt: "softDrinkOnly Screenshot 1",
          },
          {
            type: "image",
            src: "image/SoftDrinksOnly-Screenshot-1.png",
            alt: "softDrinkOnly Screenshot 1",
          },
          {
            type: "image",
            src: "image/SoftDrinksOnly-Screenshot-2.png",
            alt: "softDrinkOnly Screenshot 2",
          },
          {
            type: "image",
            src: "image/SoftDrinksOnly-Screenshot-3.png",
            alt: "softDrinkOnly Screenshot 3",
          },
          {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=zF5Fqemjghg",
            thumbnail: "https://img.youtube.com/vi/zF5Fqemjghg/hqdefault.jpg",
            alt: "softDrinkOnly Gameplay",
            caption: "Gameplay trailer for softDrinkOnly",
          },
        ],
      } as MediaBlockData,
    },
    {
      id: "link-February-March-2023",
      type: "links",
      data: {
        links: [
          {
            title: {
              en: "Play softDrinkOnly",
              fr: "Jouer à softDrinkOnly",
            },
            url: "https://kilian-le-calvez.itch.io/soft-drinks-only",
            description: {
              en: "Experience the nightclub simulation game on Itch.io",
              fr: "Découvrez le jeu de simulation de boîte de nuit sur Itch.io",
            },
            type: "itchio",
            itchioEmbed: (
              <iframe
                title="Soft Drinks Only on Itch.io"
                src="https://itch.io/embed/1948399?bg_color=000000&fg_color=ffffff&link_color=fa5c5c&border_color=333333"
                width="552"
                height="167"
                style={{
                  borderRadius: "8px",
                }}
              >
                <a href="https://kilian-le-calvez.itch.io/soft-drinks-only">
                  Soft Drinks Only by Kilian
                </a>
              </iframe>
            ),
          },
        ],
      } as LinksBlockData,
    },
  ],
} as TimelineData;

export default softDrinkOnlyData;
