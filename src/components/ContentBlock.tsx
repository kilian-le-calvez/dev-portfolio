import { LinksBlock, LinksBlockData } from "./blocks/LinksBlock";
import { MediaBlock, MediaBlockData } from "./blocks/MediaBlock/MediaBlock";
import { ProjectBlock, ProjectBlockData } from "./blocks/ProjectBlock";
import { SeparatorBlock } from "./blocks/SeparatorBlock";
import { SkillsBlock, SkillsBlockData } from "./blocks/SkillsBlock";
import { TextBlock, TextBlockData } from "./blocks/TextBlock";
import { ContentBlock as ContentBlockType } from "./timeline/Timeline";
import React from "react";

interface ContentBlockProps {
  block: ContentBlockType;
}

export const ContentBlock = ({ block }: ContentBlockProps) => {
  const renderBlock = () => {
    switch (block.type) {
      case "text":
        return <TextBlock data={block.data as TextBlockData} />;
      case "media":
        return <MediaBlock data={block.data as MediaBlockData} />;
      case "links":
        return <LinksBlock data={block.data as LinksBlockData} />;
      case "project":
        return <ProjectBlock data={block.data as ProjectBlockData} />;
      case "skills":
        return <SkillsBlock data={block.data as SkillsBlockData} />;
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
