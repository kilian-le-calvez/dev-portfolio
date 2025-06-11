import { ContentBlock } from "./ContentBlock";
import { TimelineData } from "./timeline/Timeline";
import React from "react";

interface ContentPanelProps {
  data: TimelineData;
}

export const ContentPanel = ({ data }: ContentPanelProps) => {
  return (
    <div className={`h-full transition-all duration-500`}>
      <div className="h-full overflow-y-auto p-8">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
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
                className={`animate-fade-in`}
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
