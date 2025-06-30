import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/timeline/Timeline";

const test3DData = {
  id: "July2023",
  year: "S2 2023",
  title: "First 3D Project",
  subtitle: {
    en: "Exploration of 3D",
    fr: "Exploration de la 3D",
  },
  status: "completed",
  thumbnail: "image/Test3D-Screenshot-1.png",
  content: [
    {
      id: "project-July2023",
      type: "project",
      data: {
        title: {
          en: "Exploration of 3D",
          fr: "Exploration de la 3D",
        },
        description: [
          {
            en: "This project was my first exploration into 3D development. I created all the assets myself, including two basic characters modeled in Blender. The main character was inspired by my earlier 2D game The Legend of Clouds, which I developed during a one-month game jam.",
            fr: "Ce projet a été ma première exploration du développement 3D. J'ai créé tous les assets moi-même, y compris deux personnages basiques modélisés dans Blender. Le personnage principal s'inspire de mon jeu 2D précédent, The Legend of Clouds, que j'ai développé durant un game jam d'un mois.",
          },
          {
            en: "To bring a colorful, cartoon-like universe into 3D, I designed and modeled a small environment featuring a house, a fountain, and an additional character displayed. While the focus was primarily on 3D modeling, I also gained initial experience with basic 3D movement and camera control in Unity.",
            fr: "Pour donner vie à un univers coloré et cartoon en 3D, j'ai conçu et modélisé un petit environnement comprenant une maison, une fontaine et un personnage supplémentaire. Bien que l'accent ait été mis sur la modélisation 3D, j'ai également acquis une première expérience des déplacements 3D et du contrôle de caméra dans Unity.",
          },
        ],
        technologies: ["Unity", "C#", "Blender"],
        status: "completed",
        highlights: [
          {
            en: "Self-made 3D assets including characters and environment",
            fr: "Assets 3D faits maison, incluant les personnages et l’environnement",
          },
          {
            en: "First experience with 3D movement and camera control",
            fr: "Première expérience des déplacements 3D et du contrôle de caméra",
          },
        ],
        image: "image/Test3D-Thumbnail.png",
      } as ProjectBlockData,
    },
    {
      id: "skills-July2023",
      type: "skills",
      data: {
        title: {
          en: "Perceived Difficulty (Learning Journey)",
          fr: "Difficulté perçue (Parcours d’apprentissage)",
        },
        skills: [
          {
            name: { en: "Unity", fr: "Unity" },
            difficulty: 5,
            category: {
              en: "3D Development",
              fr: "Développement 3D",
            },
          },
          {
            name: {
              en: "Blender",
              fr: "Blender",
            },
            difficulty: 20,
            category: {
              en: "3D Modeling / Animation",
              fr: "Modélisation / Animation 3D",
            },
          },
        ],
      } as SkillsBlockData,
    },
    {
      id: "text-July2023",
      type: "text",
      data: {
        content: {
          en: "In this project, I hardly learned that modelising takes a lot of time, and that I need to be more patient.",
          fr: "Dans ce projet, j’ai bien appris que la modélisation prend beaucoup de temps et que je dois faire preuve de plus de patience.",
        },
      } as TextBlockData,
    },
    {
      id: "media-July2023",
      type: "media",
      data: {
        items: [
          {
            type: "image",
            src: "image/Test3D-Screenshot-1.png",
            alt: "Test 3D Image-1",
          },
          {
            type: "image",
            src: "image/Test3D-Screenshot-2.png",
            alt: "Test 3D Image-2",
          },
          {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=XEjImOYYLLY",
            alt: "Test 3D Video",
          },
        ],
      } as MediaBlockData,
    },
  ],
} as TimelineData;

export default test3DData;
