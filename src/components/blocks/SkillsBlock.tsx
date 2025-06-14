import React from "react";

interface Skill {
  name: string;
  difficulty: number; // 0 (easy) to 100 (hard)
  category: string;
}

export interface SkillsBlockData {
  title?: string;
  skills: Skill[];
}

interface SkillsBlockProps {
  data: SkillsBlockData;
}

export const SkillsBlock = ({ data }: SkillsBlockProps) => {
  const groupedSkills = data.skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  const getSkillColor = (difficulty: number) => {
    if (difficulty >= 80) return "bg-red-500"; // very hard
    if (difficulty >= 60) return "bg-orange-500"; // hard
    if (difficulty >= 40) return "bg-yellow-500"; // moderate
    return "bg-green-500"; // easy
  };

  return (
    <div className="space-y-6">
      {data.title && (
        <h3 className="text-2xl font-bold text-foreground">{data.title}</h3>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} className="space-y-4">
            <h4 className="text-lg font-semibold text-neon-blue">{category}</h4>

            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Difficulty: {skill.difficulty}%
                    </span>
                  </div>

                  <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-1000 ease-out ${getSkillColor(
                        skill.difficulty
                      )}`}
                      style={{ width: `${skill.difficulty}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
