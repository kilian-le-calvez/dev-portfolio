import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/timeline/Timeline";

const spaceVRData = {
  id: "February-July2025",
  year: "S1 2025",
  title: "Space VR",
  subtitle: "VR Survival Game in Space",
  status: "current",
  thumbnail: "image/SpaceVR-Screenshot-1.png",
  content: [
    {
      id: "project-February-July2025",
      type: "project",
      data: {
        title: "SpaceVR: Survival & Repair",
        description: [
          "As part of a school project at Epitech Paris, I joined a team of 5 to develop a VR game set aboard a damaged spaceship. The player must perform various survival and repair tasks using immersive interactions.",
          "My main contribution involves designing and implementing realistic repair mechanics for damaged electrical systems: removing a panel, fixing wires, and reattaching the cover with screws. This includes physically-based interactions built for Meta Quest 3.",
          "We use Unity as the main development environment, integrating asset store packages with some adjustments made in Blender when needed.",
        ],
        technologies: ["Unity", "C#", "Meta Quest 3", "Blender"],
        status: "in-progress",
        highlights: [
          "Developing realistic VR interactions for repairing spaceship components",
          "Hands-on experience with Meta Quest 3 and Unity VR toolkits",
          "Blender tweaks to adapt asset store models to project needs",
        ],
        image: "image/SpaceVR-Screenshot-1.png",
      } as ProjectBlockData,
    },
    {
      id: "skills-February-July2025",
      type: "skills",
      data: {
        title: "Challenges & Learning Areas",
        skills: [
          { name: "Unity", difficulty: 70, category: "VR Development" },
          {
            name: "Interaction Design",
            difficulty: 50,
            category: "User Experience",
          },
          {
            name: "Blender",
            difficulty: 10,
            category: "3D Asset Adjustment",
          },
        ],
      } as SkillsBlockData,
    },
    {
      id: "text-February-July2025",
      type: "text",
      data: {
        content:
          "This project is teaching me how demanding VR interaction design can be — combining spatial logic, physics, and user experience. It's also helping me grow more comfortable working in teams with clear division of tasks.",
      } as TextBlockData,
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
            src: "video/SpaceVR-Demo.mp4",
            alt: "SpaceVR Demo Video",
          },
        ],
      } as MediaBlockData,
    },
  ],
} as TimelineData;

export default spaceVRData;
