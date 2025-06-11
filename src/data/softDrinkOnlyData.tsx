import React from "react";
import { LinksBlockData } from "../components/blocks/LinksBlock";
import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/timeline/Timeline";

const softDrinkOnlyData = {
  id: "February-March-2023",
  year: "S1 2023",
  title: "Soft Drinks Only",
  subtitle: "Nightclub Simulation Game Jam",
  status: "completed",
  thumbnail: "image/SoftDrinksOnly-Screenshot-2.png",
  content: [
    {
      id: "project-February-March-2023",
      type: "project",
      data: {
        title: "Soft Drinks Only",
        description: [
          "Soft Drinks Only is a nightclub simulation game built in just two weeks as my second game jam project, right after The Legend of Clouds. It was a challenge to prove that I could scope and finish another full game under tighter constraints.",
          "In the game, you manage a nightclub where pixel-art-style guests want to dance, eat, and drink. Each visitor has basic needs: if they don’t dance, they get bored and leave; if they don’t eat, they might die; and if they drink alcohol, it lowers their boredom and hunger—but too much causes fights and chaos.",
          "Your goal is to keep the party going as long as possible. The game features procedurally generated maps based on difficulty and size settings, along with a homemade radio soundtrack to match the dark, neon nightclub aesthetic.",
          "I also had to implement behavior algorithms so each character reacts in real-time to their needs, which made the development technically more challenging despite the smaller scope.",
        ],
        technologies: [
          "Unity",
          "C#",
          "GIMP",
          "FL Studio",
          "Procedural Generation",
        ],
        status: "completed",
        highlights: [
          "Two-week solo game jam project",
          "Procedural map generation based on difficulty",
          "Real-time simulation with AI behavior logic",
          "Original pixel-style visuals and club soundtrack",
          "Unique 'soft chaos' strategy gameplay loop",
        ],
        image: "image/SoftDrinksOnly-Screenshot-1.png",
      } as ProjectBlockData,
    },
    {
      id: "skills-February-March-2023",
      type: "skills",
      data: {
        title: "Skills Demonstrated",
        skills: [
          {
            name: "Unity",
            difficulty: 50,
            category: "Simulation / Bots Algorithms",
          },
          {
            name: "Procedural Generation",
            difficulty: 40,
            category: "Game Design",
          },
          { name: "GIMP", difficulty: 35, category: "2D Art / Pixel Art" },
          { name: "FL Studio", difficulty: 20, category: "Audio / Music" },
        ],
      } as SkillsBlockData,
    },
    {
      id: "text-February-March-2023",
      type: "text",
      data: {
        title: "Why This Project Matters",
        content:
          "softDrinkOnly was my attempt to quickly scope and execute a simulation game within two weeks, applying lessons from my previous project while exploring a new genre. It taught me how to balance player control with emergent behavior and AI logic, and helped me grow in procedural level design and simplified production pipelines.",
        highlight: true,
      } as TextBlockData,
    },
    {
      id: "media-February-March-2023",
      type: "media",
      data: {
        items: [
          {
            type: "image",
            src: "image/Screenshot_SDO_1.png",
            alt: "softDrinkOnly Screenshot 1",
          },
          {
            type: "image",
            src: "image/SoftDrinksOnly-Screenshot-1.png",
            alt: "softDrinkOnly Screenshot 1",
          },
          {
            type: "image",
            src: "image/SoftDrinksOnly-Screenshot-2.png",
            alt: "softDrinkOnly Screenshot 2",
          },
          {
            type: "image",
            src: "image/SoftDrinksOnly-Screenshot-3.png",
            alt: "softDrinkOnly Screenshot 3",
          },

          {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=zF5Fqemjghg",
            thumbnail: "https://img.youtube.com/vi/zF5Fqemjghg/hqdefault.jpg",
            alt: "softDrinkOnly Gameplay",
            caption: "Gameplay trailer for softDrinkOnly",
          },
        ],
      } as MediaBlockData,
    },
    {
      id: "link-February-March-2023",
      type: "links",
      data: {
        links: [
          {
            title: "Play softDrinkOnly",
            url: "https://kilian-le-calvez.itch.io/soft-drinks-only",
            description: "Experience the nightclub simulation game on Itch.io",
            type: "itchio",
            itchioEmbed: (
              <iframe
                title="Soft Drinks Only on Itch.io"
                src="https://itch.io/embed/1948399?bg_color=000000&fg_color=ffffff&link_color=fa5c5c&border_color=333333"
                width="552"
                height="167"
                style={{
                  borderRadius: "8px",
                }}
              >
                <a href="https://kilian-le-calvez.itch.io/soft-drinks-only">
                  Soft Drinks Only by Kilian
                </a>
              </iframe>
            ),
          },
        ],
      } as LinksBlockData,
    },
  ],
} as TimelineData;

export default softDrinkOnlyData;
