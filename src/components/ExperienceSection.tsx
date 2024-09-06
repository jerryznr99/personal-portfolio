import React, { useState, useEffect } from "react";
import ExperienceRow from "@/components/ExperienceRow";

type ExperienceSectionProps = {
  background?: string;
};

const ExperienceSection = ({ background }: ExperienceSectionProps) => {
  const [topLeftRadius, setTopLeftRadius] = useState(700);
  const [bottomLeftRadius, setBottomLeftRadius] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        let scrollProgressTop = 1 - sectionTop / windowHeight;
        scrollProgressTop = Math.min(Math.max(scrollProgressTop, 0), 1);
        const newTopLeftRadius = 700 * (1 - scrollProgressTop);
        setTopLeftRadius(newTopLeftRadius);

        let scrollProgressBottom = sectionBottom / windowHeight;
        scrollProgressBottom = Math.min(Math.max(scrollProgressBottom, 0), 1);
        const newBottomLeftRadius = 700 * (1 - scrollProgressBottom);
        setBottomLeftRadius(newBottomLeftRadius);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-end items-center w-full h-[150vh]">
      <div
        id="experience-section"
        className="flex flex-col w-1/2 h-full p-[20%_5%] ml-auto"
        style={{
          background: background,
          borderTopLeftRadius: `${topLeftRadius}px`,
          borderBottomLeftRadius: `${bottomLeftRadius}px`,
          transition: "border-radius 0.0s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="text-lg font-bold leading-relaxed mt-8 mb-6 text-[#333332]">
          Work Experience
        </div>
        <ExperienceRow
          href={"https://www.clinicode.app/"}
          img={"/clinicode.png"}
          company={"Clinicode"}
          role={"Co-founder & PM"}
          year={"Sep 2023 - Present"}
        />
        <ExperienceRow
          href={"https://hellokeepsake.com/"}
          img={"/keepsake.png"}
          company={"Keepsake"}
          role={"Software Engineer Intern"}
          year={"May 2024 - Aug 2024"}
        />
        <ExperienceRow
          href={"https://descyphy.usc.edu/"}
          img={"/usc.jpg"}
          company={"USC Cyber-Physical Systems Design Lab"}
          role={"AI Research Assistant"}
          year={"Aug 2023 - July 2024"}
        />
        <ExperienceRow
          href={"https://www.raiseachild.org/"}
          img={"/raiseachild.png"}
          company={"RaiseAChild"}
          role={"Full-Stack Developer"}
          year={"Sep 2023 - May 2024"}
        />
        <ExperienceRow
          href={"https://utopialabs.com/"}
          img={"/utopia.jpg"}
          company={"Utopia Labs"}
          role={"Software Engineer Intern"}
          year={"May 2023 - Aug 2023"}
        />
      </div>
    </div>
  );
};

export default ExperienceSection;
