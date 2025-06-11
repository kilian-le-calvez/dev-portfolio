import React from "react";

export type Locale = "fr" | "en";

export const translations = {
  fr: {
    title: "Kilian LE CALVEZ",
    subtitle: "Développeur XR / VR / Game Dev",
    contactTitle: "Contact",
    contact: {
      email: "kilianlecalvez.dev@gmail.com",
      phone: "06 46 61 89 39",
      linkedin: "LinkedIn Profile",
      cv: "Télécharger CV",
    },
    aboutTitle: "À propos",
    aboutDescription: (
      <>
        Passionné par la réalité virtuelle et les expériences immersives, je
        conçois et développe des applications VR/AR et jeux vidéo avec Unity, C#
        et Blender. Rigoureux et autonome, je mène mes projets de la conception
        à la livraison, en combinant créativité et expertise technique.
        <br />
        <br />
        Découvrez mes projets complets et démonstrations sur mon portfolio .
      </>
    ),
  },
  en: {
    title: "Kilian LE CALVEZ",
    subtitle: "XR / VR Developer / Game Dev",
    contactTitle: "Contact",
    contact: {
      email: "kilianlecalvez.dev@gmail.com",
      phone: "+33 6 46 61 89 39",
      linkedin: "LinkedIn Profile",
      cv: "Download CV",
    },
    aboutTitle: "About",
    aboutDescription: (
      <>
        Passionate about virtual reality and immersive experiences, I design and
        develop VR/AR applications and video games with Unity, C#, and Blender.
        Rigorous and autonomous, I lead my projects from concept to delivery,
        combining creativity and technical expertise.
        <br />
        <br />
        Check out my complete projects and demos on my portfolio .
      </>
    ),
  },
};
