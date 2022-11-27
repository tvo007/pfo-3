import React from "react";
import ProjectLinks from "./ProjectLinks";

const MobileProjectDetails = ({
  name,
  desc,
  tech,
  url,
  github,
  isReversed,
}) => {
  const revStyle = isReversed ? "md:pl-8" : "md:pr-8";

  return (
    <div className={`w-full rounded flex flex-col  pb-4 ${revStyle} -mt-2`}>
      <p className="  text-green-400 leading-loose">
        {tech.map((item, index) => (
          <span key={index} className="pr-2">
            {item}{" "}
          </span>
        ))}
      </p>

      <div className="">
        <h2 className="text-3xl font-bold font-heading text-white">{name}</h2>
      </div>
      <div className="">
        <p className=" text-gray-300 leading-loose text-base pb-4">{desc}</p>
        <div className="hidden md:flex md:flex-row ">
          <ProjectLinks url={url} github={github} />
        </div>
      </div>
    </div>
  );
};

export default MobileProjectDetails;
