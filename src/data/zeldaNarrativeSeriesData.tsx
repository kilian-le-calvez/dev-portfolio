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
  subtitle: {
    en: "Storytelling Through Gameplay & Video Editing",
    fr: "Narration à travers le gameplay et le montage vidéo",
  },
  status: "completed",
  thumbnail: "https://img.youtube.com/vi/AiTBAxgmfMI/hqdefault.jpg",
  content: [
    {
      id: "project-January-June-2024",
      type: "project",
      data: {
        title: {
          en: "Legend of Link : Narrative Series",
          fr: "Legend of Link : Série narrative",
        },
        image: "https://img.youtube.com/vi/7u5QqVldZy8/hqdefault.jpg",
        description: [
          {
            en: "A personal storytelling project reimagining *Tears of the Kingdom* as a narrative-driven video series.",
            fr: "Un projet personnel de narration réimaginant *Tears of the Kingdom* comme une série vidéo axée sur la narration.",
          },
          {
            en: "Combined gameplay capture, voiceovers, pacing control, music syncing, and visual rhythm into a cohesive serialized format.",
            fr: "Capture de gameplay, voix off, gestion du rythme, synchronisation musicale et rythme visuel intégrés dans un format sériel cohérent.",
          },
          {
            en: "Published on YouTube as a multi-part dramatic retelling of Link's journey.",
            fr: "Publié sur YouTube comme une relecture dramatique en plusieurs parties du voyage de Link.",
          },
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
        title: {
          en: "Storytelling in Hyrule",
          fr: "Narration à Hyrule",
        },
        content: {
          en: "During the first half of 2024, I created a YouTube series based on The Legend of Zelda: Tears of the Kingdom. Instead of just gameplay, I built an evolving narrative—writing voiceovers, crafting pacing and tension, and weaving a storyline around Link’s journey. It became more than just a playthrough; it was my creative playground for world-building, narration, music timing, and visual storytelling.",
          fr: "Durant le premier semestre 2024, j’ai créé une série YouTube basée sur The Legend of Zelda: Tears of the Kingdom. Plutôt que de simplement jouer, j’ai construit une narration évolutive — écriture de voix off, gestion du rythme et de la tension, et création d’un récit autour du voyage de Link. Ce n’était plus une simple partie, mais un terrain de jeu créatif pour le world-building, la narration, le timing musical et la mise en scène visuelle.",
        },
        highlight: true,
      } as TextBlockData,
    },
    {
      id: "skills-January-June-2024",
      type: "skills",
      data: {
        title: {
          en: "Creative & Technical Skills",
          fr: "Compétences créatives et techniques",
        },
        skills: [
          {
            name: {
              en: "Narrative Design",
              fr: "Conception narrative",
            },
            difficulty: 40,
            category: {
              en: "Storytelling",
              fr: "Narration",
            },
          },
          {
            name: {
              en: "Video Editing",
              fr: "Montage vidéo",
            },
            difficulty: 50,
            category: {
              en: "Post-production",
              fr: "Post-production",
            },
          },
          {
            name: {
              en: "Voice Acting",
              fr: "Voix off / doublage",
            },
            difficulty: 35,
            category: {
              en: "Audio",
              fr: "Audio",
            },
          },
          {
            name: {
              en: "YouTube Content Creation",
              fr: "Création de contenu YouTube",
            },
            difficulty: 45,
            category: {
              en: "Media / Online",
              fr: "Médias / En ligne",
            },
          },
          {
            name: {
              en: "Thumbnail Design",
              fr: "Création de vignettes",
            },
            difficulty: 30,
            category: {
              en: "Visual Design",
              fr: "Design visuel",
            },
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
        title: {
          en: "Watch the Series",
          fr: "Voir la série",
        },
        links: [
          {
            title: {
              en: "Zelda Narrative Series (YouTube)",
              fr: "Série narrative Zelda (YouTube)",
            },
            url: "https://www.youtube.com/watch?v=P-QsLm8kpbM&list=PL-your-playlist-id",
            description: {
              en: "Full playlist of the Tears of the Kingdom narrative series",
              fr: "Playlist complète de la série narrative Tears of the Kingdom",
            },
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
