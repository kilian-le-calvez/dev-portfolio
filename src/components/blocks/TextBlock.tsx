import React from "react";

export interface TextBlockData {
  title?: string;
  content: string;
  highlight?: boolean;
}

interface TextBlockProps {
  data: TextBlockData;
}

export const TextBlock = ({ data }: TextBlockProps) => {
  return (
    <div className="space-y-4">
      {data.title && (
        <h3 className="text-2xl font-bold text-foreground">{data.title}</h3>
      )}
      <div
        className={`prose prose-invert max-w-none ${
          data.highlight ? "text-neon-blue" : "text-muted-foreground"
        }`}
      >
        <p className="leading-relaxed">{data.content}</p>
      </div>
    </div>
  );
};
