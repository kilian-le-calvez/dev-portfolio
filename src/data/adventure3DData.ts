import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/Timeline";

const adventure3DData = {
  id: "January-?2025",
  year: "January-? 2025",
  title: "Adventure3D",
  subtitle: "Zelda-inspired World Building",
  status: "future",
  content: [
    {
      id: "project-January-?2025",
      type: "project",
      data: {
        title: "Adventure3D",
        description: [
          "Adventure3D is a personal project inspired by The Legend of Zelda: Ocarina of Time. The idea is to recreate the nostalgic feeling of exploration in a handcrafted low-poly environment.",
          "I began the project in January 2025 and continued into February before pausing due to school and apprenticeship commitments. It's currently on hold, but I plan to resume development later.",
          "The project is entirely built from scratch: I create my own 3D assets using Blender and integrate them into Unity. So far, I have a functional character with walk/run animations, a third-person camera system, and destructible elements like crates and pots.",
          "The environment includes a grassy hill, two large stylized trees, and a circular path — aiming to be visually simple yet immersive. All assets follow a baked, low-poly, simple-texture aesthetic to reflect the retro feel of Ocarina of Time.",
          "I don't have a full design document or final vision yet, but I’ve sketched a small playable zone for a short but impactful gameplay experience.",
        ],
        technologies: ["Unity", "Blender", "C#", "YouTube"],
        status: "in-progress",
        highlights: [
          "Custom low-poly assets modeled in Blender",
          "Third-person camera system",
          "Destructible object mechanics",
          "Playable character with animations",
          "Hand-crafted map layout inspired by Zelda games",
        ],
        image: "image/Adventure3D-Screenshot-1.png",
      } as ProjectBlockData,
    },
    {
      id: "skills-January-?2025",
      type: "skills",
      data: {
        title: "Skills Demonstrated",
        skills: [
          { name: "Unity", difficulty: 30, category: "3D Development" },
          {
            name: "Blender",
            difficulty: 75,
            category: "3D Modeling / Animation",
          },
          {
            name: "YouTube devlogs",
            difficulty: 15,
            category: "Communication",
          },
        ],
      } as SkillsBlockData,
    },
    {
      id: "text-January-?2025",
      type: "text",
      data: {
        title: "Why This Project Matters",
        content:
          "Adventure3D is my personal tribute to the emotional impact of childhood exploration games. Even though it's still in early development, it's where I experiment with modeling, level design, and immersive mechanics. Building everything from scratch helps me grow across multiple disciplines—from code to art direction.",
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
            caption: "First playable area with destructible objects",
          },
          {
            type: "image",
            src: "image/Adventure3D-Screenshot-2.png",
            alt: "Screenshot 2",
            caption: "First playable area with destructible objects",
          },
          {
            type: "image",
            src: "image/Adventure3D-Map.jpg",
            alt: "World Map",
            caption: "Map sketch of the first explorable area",
          },
          {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=kUXZseB1Jj8",
            thumbnail: "https://img.youtube.com/vi/kUXZseB1Jj8/hqdefault.jpg",
            alt: "Devlog 1",
            caption: "Devlog 1 - Starting the world and character setup",
          },
          {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=3Ugd34tAWsg",
            thumbnail: "https://img.youtube.com/vi/3Ugd34tAWsg/hqdefault.jpg",
            alt: "Devlog 2",
            caption: "Devlog 2 - Destructible objects and environmental design",
          },
        ],
      } as MediaBlockData,
    },
  ],
} as TimelineData;

export default adventure3DData;
