import { useState, useEffect } from "react";
import React from "react";
import { TimelineStep } from "./TimelineStep";
import { ContentPanel } from "./ContentPanel";

export interface TimelineData {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  content: ContentBlock[];
  status: "completed" | "current" | "future";
}

export interface ContentBlock {
  id: string;
  type: "text" | "media" | "links" | "project" | "skills" | "separator";
  data: any;
}

interface TimelineProps {
  data: TimelineData[];
}

const LOCAL_STORAGE_KEY = "activeTimelineStep";

export const Timeline = ({ data }: TimelineProps) => {
  const [activeStep, setActiveStep] = useState(() => {
    const savedStep = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedStep) {
      const step = parseInt(savedStep, 10);
      if (!isNaN(step) && step >= 0 && step < data.length) {
        return step;
      }
    }
    return 0;
  });

  // Save activeStep to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, activeStep.toString());
  }, [activeStep]);

  // Optional: scroll to activeStep on mount or when data changes
  useEffect(() => {
    const element = document.getElementById(`step-${activeStep}`);
    if (element) {
      element.scrollIntoView({ behavior: "auto", block: "center" });
    }
  }, [activeStep, data]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    const element = document.getElementById(`step-${index}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-neon" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-neon delay-1000" />
      </div>

      <div className="flex flex-col md:flex-row h-screen">
        {/* Timeline Navigation */}
        <div
          id="timeline-container"
          className="hide-scrollbar w-full md:w-1/3 h-60 md:h-full overflow-x-auto md:overflow-y-auto scroll-snap-x md:scroll-snap-y flex md:block hide-scrollbar relative z-10"
        >
          <div className="py-20 px-8">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green hidden md:block" />
              {data.map((item, index) => (
                <div
                  key={item.id}
                  id={`step-${index}`}
                  className="scroll-snap-start mb-0 mr-4 md:mb-16 md:mr-0 last:mb-0 last:mr-0"
                >
                  <TimelineStep
                    data={item}
                    index={index}
                    isActive={activeStep === index}
                    onClick={() => handleStepClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div className="flex-1 h-full overflow-hidden">
          <ContentPanel key={data[activeStep].id} data={data[activeStep]} />
        </div>
      </div>
    </div>
  );
};
