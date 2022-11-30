import React from "react";
import MobileProjectDetails from "./MobileProjectDetails";
import ProjectLinks from "./ProjectLinks";

const ProjectShowcase = ({
  data: { imageSrc, name, desc, url, github, tech },
  isReversed,
}) => {
  const revStyle = isReversed ? "md:flex-row-reverse" : "md:flex-row";
  return (
    <div className="pb-16">
      <div className="bg-gray-900">
        <div className=" mx-4 ">
          <div className="relative flex">
            {/* <div className="hidden xl:absolute inset-y-0 left-0 -ml-6 xl:flex items-center" /> */}
            <div
              className={`w-full flex flex-col 
              ${revStyle}
              }`}
            >
              {/* <div className="xl:hidden mt-12 text-center" /> */}
              <MobileProjectDetails
                name={name}
                desc={desc}
                url={url}
                github={github}
                tech={tech}
                isReversed={isReversed}
              />
              <img
                className="md:max-w-md mx-auto relative object-cover pb-4"
                src={imageSrc}
                alt=""
              />
              <div className="md:hidden">
                <ProjectLinks url={url} github={github} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
