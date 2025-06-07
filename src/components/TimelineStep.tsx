import React from "react";
import { TimelineData } from "./Timeline";

interface TimelineStepProps {
  data: TimelineData;
  index: number;
  isActive: boolean;
  onClick: () => void;
  isScrolling: boolean;
}

export const TimelineStep = ({
  data,
  index,
  isActive,
  onClick,
  isScrolling,
}: TimelineStepProps) => {
  const getStatusStyles = () => {
    switch (data.status) {
      case "completed":
        return "border-neon-green text-neon-green";
      case "current":
        return "border-neon-blue text-neon-blue neon-glow";
      case "future":
        return "border-muted-foreground/50 text-muted-foreground";
      default:
        return "border-neon-blue text-neon-blue";
    }
  };

  return (
    <div
      className={`relative cursor-pointer transition-all duration-500 transform-gpu ${
        isActive ? "scale-105" : "hover:scale-102"
      } ${isScrolling ? "opacity-70" : "opacity-100"}`}
      onClick={onClick}
    >
      {/* Timeline Dot */}
      <div
        className={`absolute left-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${getStatusStyles()} ${isActive ? "animate-pulse-neon scale-125" : ""}`}
      >
        <div
          className={`absolute inset-1 rounded-full transition-all duration-300 ${
            isActive ? "bg-current" : ""
          }`}
        />
      </div>

      {/* Content Card */}
      <div
        className={`ml-16 p-6 rounded-lg glass transition-all duration-500 ${
          isActive ? "neon-glow transform translate-x-2" : "hover:bg-white/5"
        }`}
      >
        <div
          className={`text-sm font-mono mb-2 transition-colors duration-300 ${
            isActive ? "text-neon-blue neon-text" : "text-muted-foreground"
          }`}
        >
          {data.year}
        </div>

        <h3
          className={`text-xl font-bold mb-1 transition-colors duration-300 ${
            isActive ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {data.title}
        </h3>

        <p
          className={`text-sm transition-colors duration-300 ${
            isActive ? "text-foreground/80" : "text-muted-foreground/60"
          }`}
        >
          {data.subtitle}
        </p>

        {/* Visual indicator */}
        <div
          className={`mt-4 h-1 rounded-full transition-all duration-500 ${
            isActive
              ? "bg-gradient-to-r from-neon-blue to-neon-purple w-full"
              : "bg-muted w-0 group-hover:w-1/3"
          }`}
        />
      </div>
    </div>
  );
};
