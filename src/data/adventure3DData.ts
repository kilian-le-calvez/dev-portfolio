import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/timeline/Timeline";

const adventure3DData = {
  id: "January-?2025",
  year: "S1-? 2025",
  title: "Adventure 3D",
  subtitle: {
    en: "Zelda-inspired World Building",
    fr: "Création de monde inspirée de Zelda",
  },
  status: "future",
  thumbnail: "image/Adventure3D-Screenshot-1.png",
  content: [
    {
      id: "project-January-?2025",
      type: "project",
      data: {
        title: { en: "Adventure3D", fr: "Adventure3D" },
        description: [
          {
            en: "Adventure3D is a personal project inspired by The Legend of Zelda: Ocarina of Time. The idea is to recreate the nostalgic feeling of exploration in a handcrafted low-poly environment.",
            fr: "Adventure3D est un projet personnel inspiré par The Legend of Zelda: Ocarina of Time. L'idée est de recréer la sensation nostalgique d'exploration dans un environnement low-poly fait à la main.",
          },
          {
            en: "I began the project in January 2025 and continued into February before pausing due to school and apprenticeship commitments. It's currently on hold, but I plan to resume development later.",
            fr: "J'ai commencé le projet en janvier 2025 et poursuivi jusqu'en février avant de le mettre en pause à cause des engagements scolaires et d'apprentissage. Il est actuellement en suspens, mais je prévois de reprendre le développement plus tard.",
          },
          {
            en: "The project is entirely built from scratch: I create my own 3D assets using Blender and integrate them into Unity. So far, I have a functional character with walk/run animations, a third-person camera system, and destructible elements like crates and pots.",
            fr: "Le projet est entièrement construit de zéro : je crée mes propres assets 3D avec Blender et les intègre dans Unity. Jusqu'à présent, j'ai un personnage fonctionnel avec des animations de marche/course, un système de caméra à la troisième personne, et des éléments destructibles comme des caisses et des pots.",
          },
          {
            en: "The environment includes a grassy hill, two large stylized trees, and a circular path — aiming to be visually simple yet immersive. All assets follow a baked, low-poly, simple-texture aesthetic to reflect the retro feel of Ocarina of Time.",
            fr: "L'environnement comprend une colline herbeuse, deux grands arbres stylisés, et un chemin circulaire — visant à être visuellement simple mais immersif. Tous les assets suivent une esthétique low-poly avec textures simples pour refléter le style rétro d'Ocarina of Time.",
          },
          {
            en: "I don't have a full design document or final vision yet, but I’ve sketched a small playable zone for a short but impactful gameplay experience.",
            fr: "Je n'ai pas encore de document de conception complet ni de vision finale, mais j'ai esquissé une petite zone jouable pour une expérience de jeu courte mais marquante.",
          },
        ],
        technologies: ["Unity", "Blender", "C#", "YouTube"],
        status: "in-progress",
        highlights: [
          {
            en: "Custom low-poly assets modeled in Blender",
            fr: "Assets low-poly personnalisés modélisés dans Blender",
          },
          {
            en: "Third-person camera system",
            fr: "Système de caméra à la troisième personne",
          },
          {
            en: "Destructible object mechanics",
            fr: "Mécaniques d'objets destructibles",
          },
          {
            en: "Playable character with animations",
            fr: "Personnage jouable avec animations",
          },
          {
            en: "Hand-crafted map layout inspired by Zelda games",
            fr: "Carte conçue à la main inspirée des jeux Zelda",
          },
        ],
        image: "image/Adventure3D-Screenshot-1.png",
      } as ProjectBlockData,
    },
    {
      id: "skills-January-?2025",
      type: "skills",
      data: {
        title: { en: "Skills Demonstrated", fr: "Compétences démontrées" },
        skills: [
          {
            name: { en: "Unity", fr: "Unity" },
            difficulty: 30,
            category: { en: "3D Development", fr: "Développement 3D" },
          },
          {
            name: { en: "Blender", fr: "Blender" },
            difficulty: 75,
            category: {
              en: "3D Modeling / Animation",
              fr: "Modélisation 3D / Animation",
            },
          },
          {
            name: { en: "YouTube devlogs", fr: "Devlogs YouTube" },
            difficulty: 15,
            category: { en: "Communication", fr: "Communication" },
          },
        ],
      } as SkillsBlockData,
    },
    {
      id: "text-January-?2025",
      type: "text",
      data: {
        title: {
          en: "Why This Project Matters",
          fr: "Pourquoi ce projet compte",
        },
        content: {
          en: "Adventure3D is my personal tribute to the emotional impact of childhood exploration games. Even though it's still in early development, it's where I experiment with modeling, level design, and immersive mechanics. Building everything from scratch helps me grow across multiple disciplines—from code to art direction.",
          fr: "Adventure3D est mon hommage personnel à l'impact émotionnel des jeux d'exploration de l'enfance. Bien qu'il soit encore en développement initial, c'est là que j'expérimente la modélisation, le level design et les mécaniques immersives. Construire tout de zéro m'aide à progresser dans plusieurs disciplines—from le code à la direction artistique.",
        },
        highlight: true,
      } as TextBlockData,
    },
    {
      id: "media-January-?2025",
      type: "media",
      data: {
        items: [
          {
            type: "image",
            src: "image/Adventure3D-Screenshot-1.png",
            alt: "Screenshot 1",
            caption: {
              en: "First playable area with destructible objects",
              fr: "Première zone jouable avec des objets destructibles",
            },
          },
          {
            type: "image",
            src: "image/Adventure3D-Screenshot-2.png",
            alt: "Screenshot 2",
            caption: {
              en: "First playable area with destructible objects",
              fr: "Première zone jouable avec des objets destructibles",
            },
          },
          {
            type: "image",
            src: "image/Adventure3D-Map.jpg",
            alt: "World Map",
            caption: {
              en: "Map sketch of the first explorable area",
              fr: "Croquis de la première zone explorée",
            },
          },
          {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=kUXZseB1Jj8",
            thumbnail: "https://img.youtube.com/vi/kUXZseB1Jj8/hqdefault.jpg",
            alt: "Devlog 1",
            caption: {
              en: "Devlog 1 - Starting the world and character setup",
              fr: "Devlog 1 - Début de la création du monde et du personnage",
            },
          },
          {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=3Ugd34tAWsg",
            thumbnail: "https://img.youtube.com/vi/3Ugd34tAWsg/hqdefault.jpg",
            alt: "Devlog 2",
            caption: {
              en: "Devlog 2 - Destructible objects and environmental design",
              fr: "Devlog 2 - Objets destructibles et design environnemental",
            },
          },
        ],
      } as MediaBlockData,
    },
  ],
} as TimelineData;

export default adventure3DData;
