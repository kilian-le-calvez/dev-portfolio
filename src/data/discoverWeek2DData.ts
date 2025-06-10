import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/Timeline";

const part240123 = [
  {
    id: "project-January2023-24-01-23",
    type: "project",
    data: {
      title: "Day 1: First Contact",
      description: [
        "My very first time using Unity. I made a simple platformer character with a red hat and a single-frame sprite that flips when changing direction (inspired by Paper Mario’s style).",
        "Basic jump (just upward movement), basic level, no real gameplay — but it was the start.",
      ],
      highlights: [
        "First time using Unity",
        "First time creating a 2D character",
        "First time using C# for game development",
      ],
      technologies: ["Unity", "C#"],
      status: "completed",
      image: "image/24-01-23-Screenshot-1.png",
    } as ProjectBlockData,
  },
  {
    id: "skills-January2023-24-01-23",
    type: "skills",
    data: {
      title: "Perceived Difficulty (Learning Journey)",
      skills: [{ name: "Unity", difficulty: 2, category: "2D Development" }],
    } as SkillsBlockData,
  },
  {
    id: "media-January2023",
    type: "media",
    data: {
      items: [
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=_WuB0BUnosA",
          alt: "Test 3D Video",
        },
        {
          type: "image",
          src: "image/24-01-23-Screenshot-1.png",
          alt: "Test 3D Image-1",
        },
      ],
    } as MediaBlockData,
  },
];

const part250123 = [
  {
    id: "project-January2023-25-01-23",
    type: "project",
    data: {
      title: "Day 2: Top-Down Shooter Exploration",
      description: [
        "Tried something new with a top-down perspective. Built a mini shooter where the player rotates with the mouse, can shoot laser bullets, and spawn destructible boxes.",
        "Handled object lifetimes and aimed shooting logic for the first time. Not quite a game, but much closer than Day 1.",
      ],
      highlights: [
        "First time using a top-down view",
        "Basic shooting mechanic and mouse aiming",
        "Dynamic object instantiation and destruction",
      ],
      technologies: ["Unity", "C#"],
      status: "completed",
      image: "image/25-01-23-Screenshot-1.png",
    } as ProjectBlockData,
  },
  {
    id: "skills-January2023-25",
    type: "skills",
    data: {
      title: "Perceived Difficulty (Learning Journey)",
      skills: [{ name: "Unity", difficulty: 5, category: "2D Development" }],
    } as SkillsBlockData,
  },
  {
    id: "media-January2023-25",
    type: "media",
    data: {
      items: [
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=Lk1i1hLuwlA",
          alt: "Top-down shooter video",
        },
        {
          type: "image",
          src: "image/25-01-23-Screenshot-1.png",
          alt: "Top-down shooter screenshot",
        },
      ],
    } as MediaBlockData,
  },
];

const part260123 = [
  {
    id: "project-January2023-26-01-23",
    type: "project",
    data: {
      title: "Day 3: Platformer Evolution",
      description: [
        "Improved on the platformer idea with proper animations for walking, jumping, falling, and dying.",
        "Added spike hazards and player lives. A single-screen level, but now feels like a real game slice.",
      ],
      highlights: [
        "Sprite-based animation system",
        "Simple hazard interaction",
        "Game-feel refinement",
      ],
      technologies: ["Unity", "C#"],
      status: "completed",
      image: "image/26-01-23-Screenshot-1.png",
    } as ProjectBlockData,
  },
  {
    id: "skills-January2023-26",
    type: "skills",
    data: {
      title: "Perceived Difficulty (Learning Journey)",
      skills: [{ name: "Unity", difficulty: 8, category: "2D Development" }],
    } as SkillsBlockData,
  },
  {
    id: "media-January2023-26",
    type: "media",
    data: {
      items: [
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=wLTp-upcmjI",
          alt: "Platformer evolution video",
        },
        {
          type: "image",
          src: "image/26-01-23-Screenshot-1.png",
          alt: "Platformer evolution screenshot",
        },
      ],
    } as MediaBlockData,
  },
];

const part270123 = [
  {
    id: "project-January2023-27-01-23",
    type: "project",
    data: {
      title: "Day 4: Fruit Ninja Spear Game",
      description: [
        "My first original concept: a spear that cuts fruits flying from both sides.",
        "Rotated with the mouse, the spear destroys fruits and avoids bombs. Includes score system, HUD, lives, and best score menu.",
      ],
      highlights: [
        "First original concept",
        "Object interaction and scoring system",
        "Mouse-controlled rotation logic",
      ],
      technologies: ["Unity", "C#"],
      status: "completed",
      image: "image/27-01-23-Screenshot-1.png",
    } as ProjectBlockData,
  },
  {
    id: "skills-January2023-27",
    type: "skills",
    data: {
      title: "Perceived Difficulty (Learning Journey)",
      skills: [{ name: "Unity", difficulty: 12, category: "2D Development" }],
    } as SkillsBlockData,
  },
  {
    id: "media-January2023-27",
    type: "media",
    data: {
      items: [
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=2Lm6NammZE0",
          alt: "Fruit ninja spear game video",
        },
        {
          type: "image",
          src: "image/27-01-23-Screenshot-1.png",
          alt: "Fruit ninja spear game screenshot",
        },
      ],
    } as MediaBlockData,
  },
];

const part280123 = [
  {
    id: "project-January2023-28-01-23",
    type: "project",
    data: {
      title: "Day 5: Multi-Level Platformer",
      description: [
        "Designed a cartoon-style platformer with running and jumping animations.",
        "Created two different levels and a playable level selector with a clear game loop.",
      ],
      highlights: [
        "Multi-scene setup and level transitions",
        "Improved animations and movement",
        "Designed a level hub",
      ],
      technologies: ["Unity", "C#"],
      status: "completed",
      image: "image/28-01-23-Screenshot-1.png",
    } as ProjectBlockData,
  },
  {
    id: "skills-January2023-28",
    type: "skills",
    data: {
      title: "Perceived Difficulty (Learning Journey)",
      skills: [{ name: "Unity", difficulty: 14, category: "2D Development" }],
    } as SkillsBlockData,
  },
  {
    id: "media-January2023-28",
    type: "media",
    data: {
      items: [
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=AyFgsfn3uXw",
          alt: "Multi-level platformer video",
        },
        {
          type: "image",
          src: "image/28-01-23-Screenshot-1.png",
          alt: "Multi-level platformer screenshot",
        },
      ],
    } as MediaBlockData,
  },
];

const part290123 = [
  {
    id: "project-January2023-29-01-23",
    type: "project",
    data: {
      title: "Day 6: Cozy Handmade Platformer",
      description: [
        "Focused on crafting all art assets by hand: backgrounds, player sprite, idle and walk animations.",
        "Added a hidden room in the map for exploration. Cozy and full of personality.",
      ],
      highlights: [
        "All handmade assets",
        "Smooth custom animations",
        "Discovering Tilemap system",
      ],
      technologies: ["Unity", "C#", "Gimp"],
      status: "completed",
      image: "image/29-01-23-Screenshot-1.png",
    } as ProjectBlockData,
  },
  {
    id: "skills-January2023-29",
    type: "skills",
    data: {
      title: "Perceived Difficulty (Learning Journey)",
      skills: [
        { name: "Unity", difficulty: 12, category: "2D Development" },
        { name: "Gimp", difficulty: 25, category: "2D Development" },
      ],
    } as SkillsBlockData,
  },
  {
    id: "media-January2023-29",
    type: "media",
    data: {
      items: [
        {
          type: "youtube",
          src: "https://www.youtube.com/watch?v=_BzmqtTIYZc",
          alt: "Cozy platformer video",
        },
        {
          type: "image",
          src: "image/29-01-23-Screenshot-1.png",
          alt: "Cozy platformer screenshot",
        },
      ],
    } as MediaBlockData,
  },
];

// You can now compose the full content like this:
const discoverWeek2DData = {
  id: "January2023",
  year: "January 2023",
  title: "Discover Week 2D",
  subtitle: "A One-Week Deep Dive into 2D Game Development",
  status: "completed",
  content: [
    {
      id: "text-January2023-24-01-23",
      type: "text",
      data: {
        content:
          "Challenge myself to go all-in on Unity 2D development for one focused week — with the aim of building a strong enough foundation to tackle a full solo game jam project.",
      } as TextBlockData,
    },
    {
      id: "separator-January2023-24-01-23",
      type: "separator",
      data: {},
    },
    ...part290123,
    {
      id: "separator-January2023-25-01-23",
      type: "separator",
      data: {},
    },
    ...part280123,
    {
      id: "separator-January2023-26-01-23",
      type: "separator",
      data: {},
    },
    ...part270123,
    {
      id: "separator-January2023-27-01-23",
      type: "separator",
      data: {},
    },
    ...part260123,
    {
      id: "separator-January2023-28-01-23",
      type: "separator",
      data: {},
    },
    ...part250123,
    {
      id: "separator-January2023-29-01-23",
      type: "separator",
      data: {},
    },
    ...part240123,
  ],
} as TimelineData;

export default discoverWeek2DData;
