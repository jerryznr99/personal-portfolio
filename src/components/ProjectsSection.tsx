import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center px-[1em] gap-[4px]">
      <div className="text-lg font-bold leading-relaxed mb-12 text-[#333332] bg-white px-3 py-1.5 rounded-[28px] border-[1.2px] border-[#00000012]">
        Projects
      </div>
      <div className="flex flex-row w-full max-w-5xl mx-auto gap-[4px]">
        <ProjectCard
          href="https://clinicode.app/"
          title="Clinicode"
          description="AI medical coding startup"
          result="16K in Grant"
        />
        <ProjectCard
          href="https://github.com/jerryznr99/Clarity"
          title="Clarity"
          description="LAHacks 2024"
          result="Top 5"
        />
        <ProjectCard
          href="https://github.com/jerryznr99/Autonomous-Litter-Detection-and-Collection/tree/main"
          title="LIDAR"
          description="Real life Wall-E robot"
          result="95% Accuracy"
        />
      </div>
      <div className="flex flex-row w-full max-w-5xl mx-auto gap-[4px]">
        <ProjectCard
          href="https://github.com/jerryznr99/sneaker-quant-price"
          title="Shoe Price Predictor"
          description="Linear regression with 5 indicators"
          result="97.6% accuracy"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
