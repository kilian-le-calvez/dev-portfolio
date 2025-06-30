import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/timeline/Timeline";

const creationOfMoonARData = {
  id: "October-January2024-2025-MoonAR",
  year: "S2 2024",
  title: "Creation of Moon AR",
  subtitle: {
    en: "Educational AR Experience",
    fr: "Expérience AR éducative",
  },
  status: "completed",
  thumbnail: "image/AR-CreationOfMoon-Screenshot-3.jpeg",
  content: [
    {
      id: "project-October-January2024-2025-MoonAR",
      type: "project",
      data: {
        title: {
          en: "Creation of the Moon - Augmented Reality",
          fr: "Création de la Lune - Réalité Augmentée",
        },
        description: [
          {
            en: "This was a group project at school where we had to design an educational AR application. The goal was to visually explain a scientific phenomenon—in our case, the formation of the Moon—using an immersive and interactive approach.",
            fr: "C'était un projet de groupe à l'école où nous devions concevoir une application AR éducative. Le but était d'expliquer visuellement un phénomène scientifique—dans notre cas, la formation de la Lune—avec une approche immersive et interactive.",
          },
          {
            en: "We began with brainstorming and a storyboard to define the narrative and animation flow. The project involved surface detection, physics-based destruction, and interactive particle systems.",
            fr: "Nous avons commencé par un brainstorming et un storyboard pour définir le récit et le déroulement des animations. Le projet impliquait la détection de surface, la destruction basée sur la physique, et des systèmes de particules interactifs.",
          },
          {
            en: "We created dynamic visual effects including explosion, debris movement, and attraction mechanics. The animation system was driven by JSON keyframes, enabling light-weight transitions without full physics simulation.",
            fr: "Nous avons créé des effets visuels dynamiques incluant explosions, mouvements de débris, et mécaniques d'attraction. Le système d'animation était piloté par des images clés JSON, permettant des transitions légères sans simulation physique complète.",
          },
          {
            en: "We used Unity's AR Foundation and deployed the application on both Android and iOS devices. Task tracking was handled via Jira, and UVCS was used for cloud synchronization.",
            fr: "Nous avons utilisé Unity AR Foundation et déployé l'application sur Android et iOS. Le suivi des tâches était assuré via Jira, et UVCS a été utilisé pour la synchronisation cloud.",
          },
          {
            en: "While it was a group assignment, I personally handled the majority of the development work—from AR setup to animation systems and UI—allowing me to gain experience across the full technical scope of the project. Everything you see reflects the skills I acquired during the process.",
            fr: "Bien que ce soit un projet de groupe, j'ai personnellement pris en charge la majorité du développement—from la configuration AR aux systèmes d'animation et à l'interface utilisateur—ce qui m'a permis d'acquérir une expérience complète sur le plan technique. Tout ce que vous voyez reflète les compétences que j'ai développées durant ce projet.",
          },
        ],
        technologies: ["Unity", "AR Foundation", "C#", "JSON", "UVCS", "Jira"],
        status: "completed",
        highlights: [
          {
            en: "AR animations and interactions built around Moon creation",
            fr: "Animations et interactions AR construites autour de la création de la Lune",
          },
          {
            en: "Custom JSON-driven animation replay system",
            fr: "Système de lecture d'animations personnalisé piloté par JSON",
          },
          {
            en: "Cross-platform mobile build for Android and iOS",
            fr: "Build mobile multiplateforme pour Android et iOS",
          },
          {
            en: "Storyboard and task-based project organization",
            fr: "Organisation du projet via storyboard et gestion par tâches",
          },
        ],
        image: "image/AR-CreationOfMoon-Screenshot-3.jpeg",
      } as ProjectBlockData,
    },
    {
      id: "skills-October-January2024-2025-MoonAR",
      type: "skills",
      data: {
        title: {
          en: "Development Challenges",
          fr: "Défis de développement",
        },
        skills: [
          {
            name: {
              en: "Unity",
              fr: "Unity",
            },
            difficulty: 35,
            category: {
              en: "AR Development",
              fr: "Développement AR",
            },
          },
          {
            name: {
              en: "Animation Keyframing",
              fr: "Animation par images clés",
            },
            difficulty: 20,
            category: {
              en: "Systems Design",
              fr: "Conception de systèmes",
            },
          },
          {
            name: {
              en: "UX & Interaction",
              fr: "UX & Interaction",
            },
            difficulty: 25,
            category: {
              en: "Mobile AR UI",
              fr: "Interface utilisateur AR mobile",
            },
          },
        ],
      } as SkillsBlockData,
    },
    {
      id: "text-October-January2024-2025-MoonAR",
      type: "text",
      data: {
        content: {
          en: "This project showed me how AR can make complex topics easier to understand. Designing the animation system in JSON helped me see the value in optimizing for mobile, and working with a storyboard improved our visual storytelling.",
          fr: "Ce projet m'a montré comment la réalité augmentée peut faciliter la compréhension de sujets complexes. Concevoir le système d'animation en JSON m'a permis de voir l'importance de l'optimisation mobile, et travailler avec un storyboard a amélioré notre narration visuelle.",
        },
      } as TextBlockData,
    },
    {
      id: "media-October-January2024-2025-MoonAR",
      type: "media",
      data: {
        items: [
          {
            type: "image",
            src: "image/AR-CreationOfMoon-Screenshot-1.png",
            alt: "Storyboard Screenshot",
          },
          {
            type: "image",
            src: "image/AR-CreationOfMoon-Screenshot-2.jpeg",
            alt: "Explosion Effect Screenshot",
          },
          {
            type: "image",
            src: "image/AR-CreationOfMoon-Screenshot-3.jpeg",
            alt: "UI Interface Screenshot",
          },
          {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=5CQX73GeTdw",
            alt: "AR Demo Video",
          },
          {
            type: "video",
            src: "video/AR-CreationOfMoon-Video-1.mov",
            alt: "AR Gameplay Clip",
          },
        ],
      } as MediaBlockData,
    },
  ],
} as TimelineData;

export default creationOfMoonARData;
