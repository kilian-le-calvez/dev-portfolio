import React from "react";
import { LinksBlockData } from "../components/blocks/LinksBlock";
import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { TimelineData } from "../components/timeline/Timeline";

const legendOfCloudsData = {
  id: "January-February-2023",
  year: "S1 2023",
  title: "The Legend of Clouds",
  subtitle: "Handmade 2D Platformer Game Jam",
  status: "completed",
  thumbnail: "image/Screenshot_TLOC_2.png",
  content: [
    {
      id: "project-January-February-2023",
      type: "project",
      data: {
        title: "The Legend of Clouds",
        description: [
          "The Legend of Clouds is a fully handmade 2D platformer created for My First Game Jam: Winter 2023. I built the entire game over the span of one month during vacation, with no work or school—just full focus and passion.",
          "You play as a young child who must overcome trials across different levels in a cloudy world, progressively acquiring powers to master the clouds and ultimately face a banished god threatening the world.",
          "I handled everything myself: I made the sprites and 2D animations in GIMP, composed the music and sound effects in FL Studio (many recorded with a microphone), and wrote the story and voiceovers.",
          "This was my first complete game project, and I gave it everything—working day and night, barely sleeping. It received very positive feedback from other game jam participants and remains one of my proudest accomplishments.",
        ],
        technologies: ["Unity", "GIMP", "FL Studio", "C#", "Microphone"],
        status: "completed",
        highlights: [
          "Fully handmade 2D platformer built in one month",
          "Original soundtrack and SFX recorded with microphone",
          "All sprite and animation work done in GIMP",
          "Narrative design with custom story and voiceovers",
          "Well-received on Itch.io with positive feedback from players",
        ],
        image: "image/Screenshot_TLOC_3.png",
      } as ProjectBlockData,
    },
    {
      id: "skills-January-February-2023",
      type: "skills",
      data: {
        title: "Skills Demonstrated",
        skills: [
          { name: "Unity", difficulty: 50, category: "2D Development" },
          { name: "GIMP", difficulty: 60, category: "2D Art / Animation" },
          {
            name: "FL Studio",
            difficulty: 40,
            category: "Audio / Music",
          },
          {
            name: "Narrative Design",
            difficulty: 30,
            category: "Storytelling / Voice Acting",
          },
        ],
      } as SkillsBlockData,
    },
    {
      id: "text-January-February-2023",
      type: "text",
      data: {
        title: "Why This Project Matters",
        content:
          "The Legend of Clouds is where I proved to myself I could build an entire game on my own—from gameplay to art, music, and story. It marked a turning point in my creative journey. Every aspect of the game was crafted with love and dedication, and completing it made me realize the joy and challenge of bringing ideas to life in a playable world.",
        highlight: true,
      } as TextBlockData,
    },
    {
      id: "media-January-February-2023",
      type: "media",
      data: {
        items: [
          {
            type: "image",
            src: "image/Screenshot_TLOC_2.png",
            alt: "The Legend of Clouds Screenshot 2",
            caption: "The Legend of Clouds - Screenshot Gameplay 2",
          },
          {
            type: "image",
            src: "image/Screenshot_TLOC_3.png",
            alt: "The Legend of Clouds Screenshot 3",
            caption: "The Legend of Clouds - Screenshot Gameplay 3",
          },
          {
            type: "image",
            src: "image/Screenshot_TLOC_4.png",
            alt: "The Legend of Clouds Screenshot 4",
            caption: "The Legend of Clouds - Screenshot Gameplay 4",
          },
          {
            type: "image",
            src: "image/Screenshot_TLOC_5.png",
            alt: "The Legend of Clouds Screenshot 5",
            caption: "The Legend of Clouds - Screenshot Gameplay 5",
          },
          {
            type: "youtube",
            src: "https://www.youtube.com/watch?v=ZK8lyD_yh94",
            thumbnail: "https://img.youtube.com/vi/ZK8lyD_yh94/hqdefault.jpg",
            alt: "Game Trailer",
            caption: "The Legend of Clouds - Trailer / Gameplay",
          },
          {
            type: "image",
            src: "image/Screenshot_TLOC_1.png",
            alt: "The Legend of Clouds Screenshot 1",
            caption: "The Legend of Clouds - Screenshot Gameplay 1",
          },
        ],
      } as MediaBlockData,
    },

    //Links block
    {
      id: "links-January-February-2023",
      type: "links",
      data: {
        title: "Play the Game",
        links: [
          {
            title: "Play on Itch.io",
            url: "https://matthew-rougeaux.itch.io/the-legend-of-clouds",
            description: "Experience the full game on Itch.io",
            type: "itchio",
            itchioEmbed: (
              <iframe
                title="The Legend of Clouds on Itch.io"
                src="https://itch.io/embed/1901404?dark=true"
                width="552"
                height="167"
                style={{
                  borderRadius: "8px",
                }}
              >
                <a href="https://kilian-le-calvez.itch.io/thelegendofclouds">
                  The Legend of Clouds by Kilian
                </a>
              </iframe>
            ),
          },
        ],
      } as LinksBlockData,
    },
  ],
} as TimelineData;

export default legendOfCloudsData;
