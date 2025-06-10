import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/Timeline";

const test3DData = {
  id: "July2023",
  year: "July 2023",
  title: "First 3D Project",
  subtitle: "Exploration of 3D",
  status: "completed",
  content: [
    {
      id: "project-July2023",
      type: "project",
      data: {
        title: "Exploration of 3D",
        description: [
          "This project was my first exploration into 3D development. I created all the assets myself, including two basic characters modeled in Blender. The main character was inspired by my earlier 2D game The Legend of Clouds, which I developed during a one-month game jam.",
          "To bring a colorful, cartoon-like universe into 3D, I designed and modeled a small environment featuring a house, a fountain, and an additional character displayed. While the focus was primarily on 3D modeling, I also gained initial experience with basic 3D movement and camera control in Unity.",
        ],
        technologies: ["Unity", "C#", "Blender"],
        status: "completed",
        highlights: [
          "Self-made 3D assets including characters and environment",
          "First experience with 3D movement and camera control",
        ],
        image: "image/Test3D-Thumbnail.png",
      } as ProjectBlockData,
    },
    {
      id: "skills-July2023",
      type: "skills",
      data: {
        title: "Perceived Difficulty (Learning Journey)",
        skills: [
          { name: "Unity", difficulty: 5, category: "3D Development" },
          {
            name: "Blender",
            difficulty: 20,
            category: "3D Modeling / Animation",
          },
        ],
      } as SkillsBlockData,
    },
    {
      id: "text-July2023",
      type: "text",
      data: {
        content:
          "In this project, I hardly learned that modelising takes a lot of time, and that I need to be more patient.",
      } as TextBlockData,
    },
    {
      id: "media-July2023",
      type: "media",
      data: {
        items: [
          {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=XEjImOYYLLY",
            alt: "Test 3D Video",
          },
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
        ],
      } as MediaBlockData,
    },
  ],
} as TimelineData;

export default test3DData;
