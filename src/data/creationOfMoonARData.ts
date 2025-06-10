import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/Timeline";

const creationOfMoonARData = {
  id: "October-January2024-2025-MoonAR",
  year: "October-January 2024-2025",
  title: "Creation of Moon AR",
  subtitle: "Educational AR Experience",
  status: "completed",
  content: [
    {
      id: "project-October-January2024-2025-MoonAR",
      type: "project",
      data: {
        title: "Creation of the Moon - Augmented Reality",
        description: [
          "This was a group project at school where we had to design an educational AR application. The goal was to visually explain a scientific phenomenon—in our case, the formation of the Moon—using an immersive and interactive approach.",
          "We began with brainstorming and a storyboard to define the narrative and animation flow. The project involved surface detection, physics-based destruction, and interactive particle systems.",
          "We created dynamic visual effects including explosion, debris movement, and attraction mechanics. The animation system was driven by JSON keyframes, enabling light-weight transitions without full physics simulation.",
          "We used Unity's AR Foundation and deployed the application on both Android and iOS devices. Task tracking was handled via Jira, and UVCS was used for cloud synchronization.",
          "While it was a group assignment, I personally handled the majority of the development work—from AR setup to animation systems and UI—allowing me to gain experience across the full technical scope of the project. Everything you see reflects the skills I acquired during the process.",
        ],
        technologies: ["Unity", "AR Foundation", "C#", "JSON", "UVCS", "Jira"],
        status: "completed",
        highlights: [
          "AR animations and interactions built around Moon creation",
          "Custom JSON-driven animation replay system",
          "Cross-platform mobile build for Android and iOS",
          "Storyboard and task-based project organization",
        ],
        image: "image/AR-CreationOfMoon-Screenshot-3.jpeg",
      } as ProjectBlockData,
    },
    {
      id: "skills-October-January2024-2025-MoonAR",
      type: "skills",
      data: {
        title: "Development Challenges",
        skills: [
          { name: "Unity", difficulty: 35, category: "AR Development" },
          {
            name: "Animation Keyframing",
            difficulty: 20,
            category: "Systems Design",
          },
          {
            name: "UX & Interaction",
            difficulty: 25,
            category: "Mobile AR UI",
          },
        ],
      } as SkillsBlockData,
    },
    {
      id: "text-October-January2024-2025-MoonAR",
      type: "text",
      data: {
        content:
          "This project showed me how AR can make complex topics easier to understand. Designing the animation system in JSON helped me see the value in optimizing for mobile, and working with a storyboard improved our visual storytelling.",
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
            src: "video/AR-CreationOfMoon-Demo.mp4",
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
