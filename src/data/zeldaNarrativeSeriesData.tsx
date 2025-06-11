import { TimelineData } from "../components/timeline/Timeline";
import { MediaBlockData } from "../components/blocks/MediaBlock/MediaBlock";
import { TextBlockData } from "../components/blocks/TextBlock";
import { SkillsBlockData } from "../components/blocks/SkillsBlock";
import { LinksBlockData } from "../components/blocks/LinksBlock";
import { ProjectBlockData } from "../components/blocks/ProjectBlock";
import React from "react";
type MediaItem = { type: "image"; src: string };

function generateMediaItems(): MediaItem[] {
  const miniatures: MediaItem[] = Array.from({ length: 9 }, (_, i) => ({
    type: "image",
    src: `image/legend-of-link/miniature-${i + 1}.png`,
  }));

  const screenshots: MediaItem[] = Array.from({ length: 32 }, (_, i) => ({
    type: "image",
    src: `image/legend-of-link/screenshot-${i + 1}.png`,
  }));

  const result: MediaItem[] = [];

  // Split screenshots into N + 1 parts (for N miniatures)
  const groups: MediaItem[][] = Array.from(
    { length: miniatures.length + 1 },
    () => []
  );
  screenshots.forEach((screenshot, i) => {
    const groupIndex = Math.floor(
      (i * (miniatures.length + 1)) / screenshots.length
    );
    groups[groupIndex].push(screenshot);
  });

  // Interleave miniature then its group of screenshots
  groups.forEach((group, i) => {
    if (i < miniatures.length) result.push(miniatures[i]);
    result.push(...group);
  });

  return result;
}

const zeldaNarrativeSeriesData = {
  id: "January-June-2024",
  year: "S1 2024",
  title: "Legend of Link",
  subtitle: "Storytelling Through Gameplay & Video Editing",
  status: "completed",
  thumbnail: "https://img.youtube.com/vi/AiTBAxgmfMI/hqdefault.jpg",
  content: [
    {
      id: "project-January-June-2024",
      type: "project",
      data: {
        title: "Legend of Link : Narrative Series",
        image: "https://img.youtube.com/vi/7u5QqVldZy8/hqdefault.jpg",
        description: [
          "A personal storytelling project reimagining *Tears of the Kingdom* as a narrative-driven video series.",
          "Combined gameplay capture, voiceovers, pacing control, music syncing, and visual rhythm into a cohesive serialized format.",
          "Published on YouTube as a multi-part dramatic retelling of Link's journey.",
        ],
        technologies: [
          "DaVinci Resolve",
          "YouTube Studio",
          "OBS Studio",
          "Audacity",
          "GIMP",
        ],
        status: "completed",
      } as ProjectBlockData,
    },
    {
      id: "text-January-June-2024",
      type: "text",
      data: {
        title: "Storytelling in Hyrule",
        content:
          "During the first half of 2024, I created a YouTube series based on The Legend of Zelda: Tears of the Kingdom. Instead of just gameplay, I built an evolving narrative—writing voiceovers, crafting pacing and tension, and weaving a storyline around Link’s journey. It became more than just a playthrough; it was my creative playground for world-building, narration, music timing, and visual storytelling.",
        highlight: true,
      } as TextBlockData,
    },
    {
      id: "skills-January-June-2024",
      type: "skills",
      data: {
        title: "Creative & Technical Skills",
        skills: [
          {
            name: "Narrative Design",
            difficulty: 40,
            category: "Storytelling",
          },
          {
            name: "Video Editing",
            difficulty: 50,
            category: "Post-production",
          },
          { name: "Voice Acting", difficulty: 35, category: "Audio" },
          {
            name: "YouTube Content Creation",
            difficulty: 45,
            category: "Media / Online",
          },
          {
            name: "Thumbnail Design",
            difficulty: 30,
            category: "Visual Design",
          },
        ],
      } as SkillsBlockData,
    },
    {
      id: "media-January-June-2024",
      type: "media",
      data: {
        customNextInTime: 3,
        items: generateMediaItems(),
      } as MediaBlockData,
    },
    {
      id: "links-January-June-2024",
      type: "links",
      data: {
        title: "Watch the Series",
        links: [
          {
            title: "Zelda Narrative Series (YouTube)",
            url: "https://www.youtube.com/watch?v=P-QsLm8kpbM&list=PL-your-playlist-id",
            description:
              "Full playlist of the Tears of the Kingdom narrative series",
            type: "itchio",
            itchioEmbed: (
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/videoseries?si=ANXWcmtyp8jBnTn_&amp;list=PLdotycnuOpRXY-T8iGKqIK979EAvmVp-2"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            ),
          },
        ],
      } as LinksBlockData,
    },
  ],
} as TimelineData;

export default zeldaNarrativeSeriesData;
