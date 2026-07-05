import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/UI/Card";

interface TimelineItemProps {
  step: string;
  title: string;
  description: string;
  isEven: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  step,
  title,
  description,
  isEven,
}) => {
  return (
    <div className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? "md:flex-row-reverse" : ""}`}>
      {/* Circle Marker */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-8 w-8 rounded-full border-4 border-white bg-primary-600 dark:border-zinc-950 shadow-md z-10 flex items-center justify-center text-[10px] text-white font-bold">
        {step}
      </div>

      {/* Content Spacer for Alignments */}
      <div className="w-full md:w-1/2" />

      {/* Content Card */}
      <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
        <Card hoverEffect className="relative border-zinc-100 bg-white shadow-sm p-6 dark:border-zinc-900 dark:bg-zinc-950">
          <CardHeader className="p-0">
            <span className="text-[10px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
              Passo {step}
            </span>
            <CardTitle className="mt-1 text-lg font-bold text-zinc-900 dark:text-white">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {description}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default TimelineItem;
