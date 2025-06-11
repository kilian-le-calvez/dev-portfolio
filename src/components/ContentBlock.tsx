import { LinksBlock } from "./blocks/LinksBlock";
import { MediaBlock } from "./blocks/MediaBlock/MediaBlock";
import { ProjectBlock } from "./blocks/ProjectBlock";
import { SeparatorBlock } from "./blocks/SeparatorBlock";
import { SkillsBlock } from "./blocks/SkillsBlock";
import { TextBlock } from "./blocks/TextBlock";
import { ContentBlock as ContentBlockType } from "./timeline/Timeline";
import React from "react";

interface ContentBlockProps {
  block: ContentBlockType;
}

export const ContentBlock = ({ block }: ContentBlockProps) => {
  const renderBlock = () => {
    switch (block.type) {
      case "text":
        return <TextBlock data={block.data} />;
      case "media":
        return <MediaBlock data={block.data} />;
      case "links":
        return <LinksBlock data={block.data} />;
      case "project":
        return <ProjectBlock data={block.data} />;
      case "skills":
        return <SkillsBlock data={block.data} />;
      case "separator":
        return <SeparatorBlock />;
      default:
        return null;
    }
  };

  return (
    <div className="glass rounded-lg p-6 hover:bg-white/5 transition-all duration-300">
      {renderBlock()}
    </div>
  );
};
