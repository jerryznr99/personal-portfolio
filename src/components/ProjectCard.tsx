import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type ProjectCardProps = {
  href?: string;
  title?: string;
  description?: string;
  result?: string;
};

const ProjectCard = ({
  href,
  title,
  description,
  result,
}: ProjectCardProps) => {
  return (
    <a
      href={href} // Replace with your link
      target="_blank"
      rel="noopener noreferrer"
      className="relative h-[144px] w-1/3 rounded-[28px] border-[1.2px] border-[#00000012] bg-white transform transition-transform duration-300 hover:scale-95 hover:shadow-lg"
    >
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className="absolute top-7 right-6 text-gray-500 opacity-50"
      />
      <div className="flex flex-col mx-[1.5em] mt-6">
        <div className="opacity-75 text-[1.125em]">{title}</div>
        <div className="opacity-55 text-[1em]">{description}</div>
      </div>
      <div className="flex px-[1.5em] pt-[1em] items-center justify-between w-full">
        <div className="text-xs rounded-lg bg-blue-100 text-blue-800 py-1.5 px-3">
          {result}
        </div>
        <div className="text-blue-600 text-sm">View Project</div>
      </div>
    </a>
  );
};

export default ProjectCard;
