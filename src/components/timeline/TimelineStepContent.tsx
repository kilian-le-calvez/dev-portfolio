import React from "react";
import { TimelineData } from "./Timeline";

interface TimelineStepContentProps {
  data: TimelineData;
  isActive: boolean;
}

function TimelineStepContent({ data, isActive }: TimelineStepContentProps) {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden transition-all duration-500
        ${isActive ? "neon-glow glass scale-[1.02]" : "glass hover:scale-[1.01]"}
        ml-0 md:ml-20 min-h-[180px] shadow-lg flex flex-row
      `}
    >
      {/* Left: Text Content */}
      <div className="w-1/2 relative z-10 flex flex-col items-center justify-center text-center px-1 py-8 space-y-2">
        <h3
          className={`
            text-2xl font-bold tracking-wide
            ${isActive ? "text-foreground" : "text-muted-foreground"}
          `}
        >
          {data.title}
        </h3>

        <div
          className={`
            text-sm font-mono
            ${isActive ? "text-neon-blue neon-text" : "text-muted-foreground"}
          `}
        >
          {data.year}
        </div>

        <p
          className={`
            text-sm max-w-md
            ${isActive ? "text-foreground/80" : "text-muted-foreground/60"}
          `}
        >
          {data.subtitle}
        </p>

        <div
          className={`
            h-1 w-32 rounded-full transition-all duration-500
            ${
              isActive
                ? "bg-gradient-to-r from-neon-blue to-neon-purple"
                : "bg-muted group-hover:w-1/3"
            }
          `}
          style={{
            marginTop: "16px",
          }}
        />
      </div>

      {/* Right: Background Image */}
      <div className="w-1/2 relative h-auto min-h-[180px]">
        {data.thumbnail && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${data.thumbnail})`,
              }}
            />
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-0" />
          </>
        )}
      </div>
    </div>
  );
}

export default TimelineStepContent;
