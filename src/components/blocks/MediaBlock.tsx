import React from "react";
import { useState } from "react";

interface MediaBlockData {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  thumbnail?: string;
}

interface MediaBlockProps {
  data: MediaBlockData;
}

export const MediaBlock = ({ data }: MediaBlockProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="space-y-4">
      <div className="relative rounded-lg overflow-hidden glass">
        {data.type === "image" ? (
          <img
            src={data.src}
            alt={data.alt || ""}
            className={`w-full h-auto transition-all duration-500 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          <video
            src={data.src}
            poster={data.thumbnail}
            controls
            className="w-full h-auto rounded-lg"
            onLoadedData={() => setIsLoaded(true)}
          />
        )}

        {!isLoaded && (
          <div className="absolute inset-0 bg-muted/20 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-neon-blue border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {data.caption && (
        <p className="text-sm text-muted-foreground italic text-center">
          {data.caption}
        </p>
      )}
    </div>
  );
};
