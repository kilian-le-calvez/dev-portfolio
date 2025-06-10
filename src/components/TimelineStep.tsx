import React from "react";
import { TimelineData } from "./Timeline";
import { Check, Loader2, Clock } from "lucide-react";

interface TimelineStepProps {
  data: TimelineData;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export const TimelineStep = ({
  data,
  index,
  isActive,
  onClick,
}: TimelineStepProps) => {
  const getStatusStyles = () => {
    switch (data.status) {
      case "completed":
        return "border-neon-green text-neon-green";
      case "current":
        return "border-neon-blue text-neon-blue";
      case "future":
        return "border-muted-foreground/50 text-muted-foreground";
      default:
        return "border-muted-foreground text-muted-foreground";
    }
  };

  const getStatusIcon = () => {
    switch (data.status) {
      case "completed":
        return <Check size={14} strokeWidth={2} />;
      case "current":
        return <Loader2 size={14} strokeWidth={2} className="animate-spin" />;
      case "future":
        return <Clock size={14} strokeWidth={2} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative cursor-pointer transition-all duration-500 transform-gpu snap-start ${
        isActive ? "scale-105" : "hover:scale-102"
      }`}
      onClick={onClick}
    >
      {/* Timeline Dot with Icon */}
      <div
        className={`
          w-6 h-6 rounded-full border-2 flex items-center justify-center bg-background transition-all duration-300
          ${getStatusStyles()}
          ${isActive ? "scale-110" : ""}
          mb-4 md:mb-0 md:absolute md:left-5
        `}
      >
        {getStatusIcon()}
      </div>

      {/* Content Card */}
      <div
        className={`
          p-6 rounded-lg glass transition-all duration-500
          ${isActive ? "neon-glow transform" : "hover:bg-white/5"}
          ml-0 md:ml-20
        `}
      >
        <div
          className={`
            text-sm font-mono mb-2 transition-colors duration-300
            ${isActive ? "text-neon-blue neon-text" : "text-muted-foreground"}
          `}
        >
          {data.year}
        </div>

        <h3
          className={`
            text-xl font-bold mb-1 transition-colors duration-300
            ${isActive ? "text-foreground" : "text-muted-foreground"}
          `}
        >
          {data.title}
        </h3>

        <p
          className={`
            text-sm transition-colors duration-300
            ${isActive ? "text-foreground/80" : "text-muted-foreground/60"}
          `}
        >
          {data.subtitle}
        </p>

        {/* Visual indicator */}
        <div
          className={`
            mt-4 h-1 rounded-full transition-all duration-500
            ${
              isActive
                ? "bg-gradient-to-r from-neon-blue to-neon-purple w-full"
                : "bg-muted w-0 group-hover:w-1/3"
            }
          `}
        />
      </div>
    </div>
  );
};
