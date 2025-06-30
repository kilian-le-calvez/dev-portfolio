import { TimelineData } from "../components/timeline/Timeline";

const spaceVRData: TimelineData = {
  id: "February-July2025",
  year: "S1 2025",
  title: "Space VR",
  subtitle: {
    en: "VR Survival Game in Space",
    fr: "Jeu de survie VR dans l'espace",
  },
  status: "current",
  thumbnail: "image/SpaceVR-Screenshot-1.png",
  content: [
    {
      id: "project-February-July2025",
      type: "project",
      data: {
        title: {
          en: "SpaceVR: Survival & Repair",
          fr: "SpaceVR : Survie et Réparations",
        },
        description: [
          {
            en: "As part of a school project at Epitech Paris, I joined a team of 5 to develop a VR game set aboard a damaged spaceship. The player must perform various survival and repair tasks using immersive interactions.",
            fr: "Dans le cadre d’un projet scolaire à Epitech Paris, j’ai rejoint une équipe de 5 personnes pour développer un jeu VR se déroulant à bord d’un vaisseau spatial endommagé. Le joueur doit y effectuer diverses tâches de survie et de réparation via des interactions immersives.",
          },
          {
            en: "My main contribution involves designing and implementing realistic repair mechanics for damaged electrical systems: removing a panel, fixing wires, and reattaching the cover with screws. This includes physically-based interactions built for Meta Quest 3.",
            fr: "Ma contribution principale concerne la conception et l’implémentation de mécaniques de réparation réalistes pour les systèmes électriques : retirer un panneau, réparer des câbles, revisser le couvercle. Cela inclut des interactions physiques pensées pour le Meta Quest 3.",
          },
          {
            en: "We use Unity as the main development environment, integrating asset store packages with some adjustments made in Blender when needed.",
            fr: "Nous utilisons Unity comme environnement principal de développement, en intégrant des assets de l’Asset Store, parfois modifiés avec Blender.",
          },
        ],
        technologies: ["Unity", "C#", "Meta Quest 3", "Blender"],
        status: "in-progress",
        highlights: [
          {
            en: "Developing realistic VR interactions for repairing spaceship components",
            fr: "Développement d’interactions VR réalistes pour réparer des éléments du vaisseau",
          },
          {
            en: "Hands-on experience with Meta Quest 3 and Unity VR toolkits",
            fr: "Expérience pratique avec le Meta Quest 3 et les outils VR de Unity",
          },
          {
            en: "Blender tweaks to adapt asset store models to project needs",
            fr: "Ajustements sous Blender pour adapter les modèles aux besoins du projet",
          },
        ],
        image: "image/SpaceVR-Screenshot-1.png",
      },
    },
    {
      id: "skills-February-July2025",
      type: "skills",
      data: {
        title: {
          en: "Challenges & Learning Areas",
          fr: "Défis & Axes d’Apprentissage",
        },
        skills: [
          {
            name: {
              en: "Unity",
              fr: "Unity",
            },
            difficulty: 70,
            category: { en: "VR Development", fr: "Développement VR" },
          },
          {
            name: {
              en: "Interaction Design",
              fr: "Conception d'Interactions",
            },
            difficulty: 50,
            category: { en: "User Experience", fr: "Expérience Utilisateur" },
          },
          {
            name: { en: "Blender", fr: "Blender" },
            difficulty: 10,
            category: {
              en: "3D Asset Adjustment",
              fr: "Ajustement d'Assets 3D",
            },
          },
        ],
      },
    },
    {
      id: "text-February-July2025",
      type: "text",
      data: {
        content: {
          en: "This project is teaching me how demanding VR interaction design can be — combining spatial logic, physics, and user experience. It's also helping me grow more comfortable working in teams with clear division of tasks.",
          fr: "Ce projet me montre à quel point le design d'interactions en VR peut être exigeant — mêlant logique spatiale, physique et expérience utilisateur. Il m’aide aussi à mieux collaborer en équipe avec une répartition claire des tâches.",
        },
      },
    },
    {
      id: "media-February-July2025",
      type: "media",
      data: {
        items: [
          {
            type: "image",
            src: "image/SpaceVR-Screenshot-1.png",
            alt: "SpaceVR Screenshot 1",
          },
          {
            type: "image",
            src: "image/SpaceVR-Screenshot-2.png",
            alt: "SpaceVR Screenshot 2",
          },
          {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=i6IxhUV2ZfU",
            alt: "SpaceVR Demo Video",
          },
        ],
      },
    },
  ],
};

export default spaceVRData;
