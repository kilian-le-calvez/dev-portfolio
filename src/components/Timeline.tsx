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
  type: "text" | "media" | "links" | "project" | "skills";
  data: any;
}

interface TimelineProps {
  data: TimelineData[];
}

export const Timeline = ({ data }: TimelineProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      const timeout = setTimeout(() => setIsScrolling(false), 150);
      return () => clearTimeout(timeout);
    };

    const container = document.getElementById("timeline-container");
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-neon" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-neon delay-1000" />
      </div>

      <div className="flex h-screen">
        {/* Timeline Navigation */}
        <div
          id="timeline-container"
          className="w-1/3 h-full overflow-y-auto scroll-snap-y hide-scrollbar relative z-10"
        >
          <div className="py-20 px-8">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green" />

              {data.map((item, index) => (
                <div
                  key={item.id}
                  id={`step-${index}`}
                  className="scroll-snap-start mb-16 last:mb-0"
                >
                  <TimelineStep
                    data={item}
                    index={index}
                    isActive={activeStep === index}
                    onClick={() => handleStepClick(index)}
                    isScrolling={isScrolling}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div className="flex-1 h-full overflow-hidden">
          <ContentPanel data={data[activeStep]} isVisible={!isScrolling} />
        </div>
      </div>

      {/* <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style> */}
    </div>
  );
};
