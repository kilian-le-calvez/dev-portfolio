import React from "react";
import { LinksBlockData } from "../components/blocks/LinksBlock";
import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/timeline/Timeline";

const legendOfCloudsData = {
  id: "January-February-2023",
  year: "S1 2023",
  title: "The Legend of Clouds",
  subtitle: {
    en: "Handmade 2D Platformer Game Jam",
    fr: "Jeu de plateforme 2D fait main - Game Jam",
  },
  status: "completed",
  thumbnail: "image/Screenshot_TLOC_2.png",
  content: [
    {
      id: "project-January-February-2023",
      type: "project",
      data: {
        title: {
          en: "The Legend of Clouds",
          fr: "La Légende des Nuages",
        },
        description: [
          {
            en: "The Legend of Clouds is a fully handmade 2D platformer created for My First Game Jam: Winter 2023. I built the entire game over the span of one month during vacation, with no work or school—just full focus and passion.",
            fr: "La Légende des Nuages est un jeu de plateforme 2D entièrement fait main créé pour My First Game Jam : Hiver 2023. J'ai construit tout le jeu en un mois pendant les vacances, sans travail ni école—juste concentration et passion.",
          },
          {
            en: "You play as a young child who must overcome trials across different levels in a cloudy world, progressively acquiring powers to master the clouds and ultimately face a banished god threatening the world.",
            fr: "Vous incarnez un enfant qui doit surmonter des épreuves à travers différents niveaux dans un monde nuageux, acquérant progressivement des pouvoirs pour maîtriser les nuages et affronter un dieu banni menaçant le monde.",
          },
          {
            en: "I handled everything myself: I made the sprites and 2D animations in GIMP, composed the music and sound effects in FL Studio (many recorded with a microphone), and wrote the story and voiceovers.",
            fr: "J'ai tout fait moi-même : création des sprites et animations 2D dans GIMP, composition de la musique et des effets sonores dans FL Studio (beaucoup enregistrés au micro), et écriture de l'histoire et des voix off.",
          },
          {
            en: "This was my first complete game project, and I gave it everything—working day and night, barely sleeping. It received very positive feedback from other game jam participants and remains one of my proudest accomplishments.",
            fr: "C'était mon premier projet de jeu complet, auquel j'ai consacré tout mon temps—travaillant jour et nuit, presque sans dormir. Il a reçu d'excellents retours des participants au game jam et reste une de mes plus grandes fiertés.",
          },
        ],
        technologies: ["Unity", "GIMP", "FL Studio", "C#", "Microphone"],
        status: "completed",
        highlights: [
          {
            en: "Fully handmade 2D platformer built in one month",
            fr: "Jeu de plateforme 2D entièrement fait main construit en un mois",
          },
          {
            en: "Original soundtrack and SFX recorded with microphone",
            fr: "Bande-son originale et effets sonores enregistrés au micro",
          },
          {
            en: "All sprite and animation work done in GIMP",
            fr: "Tous les sprites et animations réalisés dans GIMP",
          },
          {
            en: "Narrative design with custom story and voiceovers",
            fr: "Conception narrative avec histoire personnalisée et voix off",
          },
          {
            en: "Well-received on Itch.io with positive feedback from players",
            fr: "Très bien accueilli sur Itch.io avec des retours positifs des joueurs",
          },
        ],
        image: "image/Screenshot_TLOC_3.png",
      } as ProjectBlockData,
    },
    {
      id: "skills-January-February-2023",
      type: "skills",
      data: {
        title: {
          en: "Skills Demonstrated",
          fr: "Compétences démontrées",
        },
        skills: [
          {
            name: {
              en: "Unity",
              fr: "Unity",
            },
            difficulty: 50,
            category: {
              en: "2D Development",
              fr: "Développement 2D",
            },
          },
          {
            name: {
              en: "GIMP",
              fr: "GIMP",
            },
            difficulty: 60,
            category: {
              en: "2D Art / Animation",
              fr: "Art / Animation 2D",
            },
          },
          {
            name: {
              en: "FL Studio",
              fr: "FL Studio",
            },
            difficulty: 40,
            category: {
              en: "Audio / Music",
              fr: "Audio / Musique",
            },
          },
          {
            name: {
              en: "Narrative Design",
              fr: "Conception narrative",
            },
            difficulty: 30,
            category: {
              en: "Storytelling / Voice Acting",
              fr: "Scénarisation / Doublage",
            },
          },
        ],
      } as SkillsBlockData,
    },
    {
      id: "text-January-February-2023",
      type: "text",
      data: {
        title: {
          en: "Why This Project Matters",
          fr: "Pourquoi ce projet est important",
        },
        content: {
          en: "The Legend of Clouds is where I proved to myself I could build an entire game on my own—from gameplay to art, music, and story. It marked a turning point in my creative journey. Every aspect of the game was crafted with love and dedication, and completing it made me realize the joy and challenge of bringing ideas to life in a playable world.",
          fr: "La Légende des Nuages est le projet où j'ai prouvé que je pouvais créer un jeu entier seul—du gameplay à l'art, la musique et l'histoire. Ce fut un tournant dans mon parcours créatif. Chaque aspect du jeu a été fait avec amour et dévouement, et le terminer m’a fait réaliser la joie et le défi de donner vie aux idées dans un monde jouable.",
        },
        highlight: true,
      } as TextBlockData,
    },
    {
      id: "media-January-February-2023",
      type: "media",
      data: {
        items: [
          {
            type: "image",
            src: "image/Screenshot_TLOC_2.png",
            alt: "The Legend of Clouds Screenshot 2",
            caption: {
              en: "The Legend of Clouds - Screenshot Gameplay 2",
              fr: "The Legend of Clouds - Capture d'écran du gameplay 2",
            },
          },
          {
            type: "image",
            src: "image/Screenshot_TLOC_3.png",
            alt: "The Legend of Clouds Screenshot 3",
            caption: {
              en: "The Legend of Clouds - Screenshot Gameplay 3",
              fr: "The Legend of Clouds - Capture d'écran du gameplay 3",
            },
          },
          {
            type: "image",
            src: "image/Screenshot_TLOC_4.png",
            alt: "The Legend of Clouds Screenshot 4",
            caption: {
              en: "The Legend of Clouds - Screenshot Gameplay 4",
              fr: "The Legend of Clouds - Capture d'écran du gameplay 4",
            },
          },
          {
            type: "image",
            src: "image/Screenshot_TLOC_5.png",
            alt: "The Legend of Clouds Screenshot 5",
            caption: {
              en: "The Legend of Clouds - Screenshot Gameplay 5",
              fr: "The Legend of Clouds - Capture d'écran du gameplay 5",
            },
          },
          {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=ZK8lyD_yh94",
            thumbnail: "https://img.youtube.com/vi/ZK8lyD_yh94/hqdefault.jpg",
            alt: "Game Trailer",
            caption: {
              en: "The Legend of Clouds - Trailer / Gameplay",
              fr: "The Legend of Clouds - Bande-annonce / Gameplay",
            },
          },
          {
            type: "image",
            src: "image/Screenshot_TLOC_1.png",
            alt: "The Legend of Clouds Screenshot 1",
            caption: {
              en: "The Legend of Clouds - Screenshot Gameplay 1",
              fr: "The Legend of Clouds - Capture d'écran du gameplay 1",
            },
          },
        ],
      } as MediaBlockData,
    },
    {
      id: "links-January-February-2023",
      type: "links",
      data: {
        title: {
          en: "Play the Game",
          fr: "Jouer au jeu",
        },
        links: [
          {
            title: {
              en: "Play on Itch.io",
              fr: "Jouer sur Itch.io",
            },
            url: "https://matthew-rougeaux.itch.io/the-legend-of-clouds",
            description: {
              en: "Experience the full game on Itch.io",
              fr: "Découvrez le jeu complet sur Itch.io",
            },
            type: "itchio",
            itchioEmbed: (
              <iframe
                title="The Legend of Clouds on Itch.io"
                src="https://itch.io/embed/1901404?dark=true"
                width="552"
                height="167"
                style={{
                  borderRadius: "8px",
                }}
              >
                <a href="https://kilian-le-calvez.itch.io/thelegendofclouds">
                  The Legend of Clouds by Kilian
                </a>
              </iframe>
            ),
          },
        ],
      } as LinksBlockData,
    },
  ],
} as TimelineData;

export default legendOfCloudsData;
