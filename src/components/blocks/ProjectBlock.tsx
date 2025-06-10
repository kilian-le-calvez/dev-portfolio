import React from "react";

export interface ProjectBlockData {
  title: string;
  description: string[];
  technologies: string[];
  image?: string;
  status: "completed" | "in-progress" | "planned";
  highlights?: string[];
}

interface ProjectBlockProps {
  data: ProjectBlockData;
}

export const ProjectBlock = ({ data }: ProjectBlockProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-neon-green border-neon-green";
      case "in-progress":
        return "text-neon-blue border-neon-blue";
      case "planned":
        return "text-neon-purple border-neon-purple";
      default:
        return "text-muted-foreground border-muted";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {data.title}
          </h3>
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
              data.status
            )}`}
          >
            {data.status.replace("-", " ").toUpperCase()}
          </span>
        </div>
      </div>

      {data.image && (
        <div className="relative rounded-lg overflow-hidden glass">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      <p className="text-muted-foreground leading-relaxed">
        {data.description.map((line, index) => (
          <span key={index} className="block mb-2">
            {line}
          </span>
        ))}
      </p>

      {data.highlights && data.highlights.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-neon-blue">
            Key Highlights:
          </h4>
          <ul className="space-y-1">
            {data.highlights.map((highlight, index) => (
              <li
                key={index}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 bg-neon-blue rounded-full mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {data.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-muted/30 text-sm font-mono rounded-full text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
