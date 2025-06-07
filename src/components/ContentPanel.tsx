import { ContentBlock } from "./ContentBlock";
import { TimelineData } from "./Timeline";
import React from "react";

interface ContentPanelProps {
  data: TimelineData;
  isVisible: boolean;
}

export const ContentPanel = ({ data, isVisible }: ContentPanelProps) => {
  return (
    <div
      className={`h-full transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-50 translate-x-4"
      }`}
    >
      <div className="h-full overflow-y-auto p-8">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-12 animate-slide-in-left">
            <div className="text-sm font-mono text-neon-blue mb-2 neon-text">
              {data.year}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              {data.title}
            </h1>
            <p className="text-xl text-muted-foreground">{data.subtitle}</p>
          </div>

          {/* Content Blocks */}
          <div className="space-y-8">
            {data.content.map((block, index) => (
              <div
                key={block.id}
                className={`animate-slide-in-right`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ContentBlock block={block} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
