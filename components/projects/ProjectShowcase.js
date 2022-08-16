import React from "react";
import MobileProjectDetails from "./MobileProjectDetails";
import ProjectDetails from "./ProjectDetails";
import { useIsExtraLarge } from "../../lib/hooks";

const ProjectShowcase = ({
  data: { imageSrc, name, desc, url, github, tech },
}) => {
  const isExtraLarge = useIsExtraLarge();

  return (
    <div>
      {/* <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div> */}
      <div className="py-16 xl:mb-32 bg-gray-900 radius-for-skewed">
        <div className="container mx-auto ">
          <div className="relative flex">
            <div className="hidden xl:absolute inset-y-0 left-0 -ml-6 xl:flex items-center" />
            <div className="w-full xl:w-4/5 xl:ml-auto">
              <img
                className="sm:max-w-xl  xl:max-w-2xl mx-auto relative object-cover rounded"
                src={imageSrc}
                alt=""
              />
              <div className="xl:hidden mt-12 text-center" />
              {isExtraLarge ? (
                <ProjectDetails
                  name={name}
                  desc={desc}
                  url={url}
                  github={github}
                  tech={tech}
                />
              ) : (
                <MobileProjectDetails
                  name={name}
                  desc={desc}
                  url={url}
                  github={github}
                  tech={tech}
                />
              )}
            </div>

            <div className="hidden xl:absolute inset-y-0 right-0 -mr-8 xl:flex items-center" />
          </div>
        </div>
      </div>
      {/* <div className="skew skew-bottom mr-for-radius">
        <svg
        className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
      </div>
      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div> */}
    </div>
  );
};

export default ProjectShowcase;
