import React from "react";

export interface ProjectProps {
  videoUrl: string;
  backgroundImg: string;
  id: string;
  link: string;
}

export interface TextPanelProps {
  text: string;
  id: string;
  link: string;
}

export function Project({ videoUrl, backgroundImg, id, link }: ProjectProps) {
  return (
    <div id={id} className="relative w-screen h-screen max-w-full">
      <img
        className="absolute left-0 z-[-1] h-screen min-w-full"
        src={backgroundImg}
        alt="bg img"
      />
      <div className="flex flex-col items-center justify-center w-screen h-screen max-w-full">
        <iframe
          title="the legend of clouds"
          width="600"
          height="340"
          frameBorder={0}
          src={videoUrl}
          allowFullScreen
        ></iframe>
      </div>
      <a
        href={`/#${link}`}
        className="absolute bottom-[50px] px-2 py-1 text-white cursor-pointer hover:bg-white hover:text-black rounded-2xl transition-all duration-1000"
      >
        Next
      </a>
    </div>
  );
}

export function TextPanel({ text, link, id }: TextPanelProps) {
  return (
    <div
      id={id}
      className="relative w-screen h-screen max-w-full bg-black flex flex-col items-center justify-center"
    >
      <div className="text-white text-[30px] font-bold">{text}</div>
      <a
        href={`/#${link}`}
        className="absolute bottom-[50px] px-2 py-1 text-white cursor-pointer hover:bg-white hover:text-black rounded-2xl transition-all duration-1000"
      >
        Next
      </a>
    </div>
  );
}

export function ContactPanel() {
  return (
    <div
      id="contactpanel"
      className="relative w-screen h-screen max-w-full bg-black flex flex-col items-center justify-center"
    >
      <div className="text-white text-[30px] font-bold">Games link</div>
      <div className="w-[100px] h-[100px]"></div>
      <div className="flex flex-row justify-center">
        <iframe
          frameBorder="0"
          src="https://itch.io/embed/1901404?linkback=true&amp;dark=true"
          width="552"
          height="167"
        >
          <a href="https://kilian-le-calvez.itch.io/thelegendofclouds">
            The Legend of Clouds by Kilian
          </a>
        </iframe>
        <div className="w-[100px] h-[100px]"></div>
        <iframe
          frameBorder="0"
          src="https://itch.io/embed/1948399?linkback=true&amp;dark=true"
          width="552"
          height="167"
        >
          <a href="https://kilian-le-calvez.itch.io/soft-drinks-only">
            Soft Drinks Only by Kilian
          </a>
        </iframe>
      </div>
      <div className="w-[100px] h-[100px]"></div>
      <div className="text-white text-[30px] font-bold">Contacts</div>
      <div className="w-[100px] h-[100px]"></div>
      <a href="mailto:kilianlecalvez.dev@gmail.com" className="text-white">
        Mail: kilianlecalvez.dev@gmail.com
      </a>
      <a href="tel:+33646618939" className="text-white">
        Phone: 0646618939
      </a>
    </div>
  );
}
