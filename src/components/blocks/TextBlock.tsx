import React from "react";
import { useLocale } from "../context/LocaleContext";
import { TranslationString } from "./Translation";

export interface TextBlockData {
  title?: TranslationString;
  content: TranslationString;
  highlight?: boolean;
}

interface TextBlockProps {
  data: TextBlockData;
}

export const TextBlock = ({ data }: TextBlockProps) => {
  const { locale } = useLocale();

  return (
    <div className="space-y-4">
      {data.title && (
        <h3 className="text-2xl font-bold text-foreground">
          {data.title[locale]}
        </h3>
      )}
      <div
        className={`prose prose-invert max-w-none ${
          data.highlight ? "text-neon-blue" : "text-muted-foreground"
        }`}
      >
        <p className="leading-relaxed">{data.content[locale]}</p>
      </div>
    </div>
  );
};
