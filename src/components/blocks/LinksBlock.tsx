import React from "react";

interface LinkItem {
  title: string;
  url: string;
  description?: string;
  type?: "github" | "demo" | "download" | "external" | "itchio";
  itchioEmbed?: React.ReactNode; // Now allows JSX
}

export interface LinksBlockData {
  title?: string;
  links: LinkItem[];
}

interface LinksBlockProps {
  data: LinksBlockData;
}

export const LinksBlock = ({ data }: LinksBlockProps) => {
  const getLinkStyles = (type?: string) => {
    switch (type) {
      case "github":
        return "border-neon-green hover:bg-neon-green/10 hover:text-neon-green";
      case "demo":
        return "border-neon-blue hover:bg-neon-blue/10 hover:text-neon-blue";
      case "download":
        return "border-neon-purple hover:bg-neon-purple/10 hover:text-neon-purple";
      case "itchio":
        return "border-neon-pink hover:bg-neon-pink/10 hover:text-neon-pink";
      default:
        return "border-muted hover:bg-white/5 hover:text-foreground";
    }
  };

  return (
    <div className="space-y-4">
      {data?.title && (
        <h3 className="text-2xl font-bold text-foreground">{data.title}</h3>
      )}

      {data?.links.map((link, index) => {
        if (link.type === "itchio" && link.itchioEmbed) {
          return (
            <div key={index} className="rounded-lg w-full flex justify-center">
              {link.itchioEmbed}
            </div>
          );
        }

        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 ${getLinkStyles(
              link.type
            )}`}
          >
            <div className="flex items-center gap-3">
              <div>
                <h4 className="font-semibold">{link.title}</h4>
                {link.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {link.description}
                  </p>
                )}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};
