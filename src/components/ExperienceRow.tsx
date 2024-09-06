import React from "react";

type ExperienceRowProps = {
  href?: string;
  img?: string;
  company?: string;
  role?: string;
  year?: string;
};

const ExperienceRow = ({
  href,
  img,
  company,
  role,
  year,
}: ExperienceRowProps) => {
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-3">
          <a
            href={href}
            className="flex items-center space-x-3"
            target="_blank"
          >
            <img className="w-6 h-6 rounded" src={img} alt={company} />
            <p className="max-w-[168px] text-gray-500">{company}</p>
          </a>
          <p className="text-gray-400">{role}</p>
        </div>
        <p className="text-gray-400">{year}</p>
      </div>
      <hr className="mt-4" />
    </>
  );
};

export default ExperienceRow;
