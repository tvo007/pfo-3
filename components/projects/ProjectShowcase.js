import React from 'react';

const ProjectShowcase = ({data: {imageSrc, name, desc, url, github, tech}}) => {
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
      <div className="py-20 bg-gray-900 radius-for-skewed">
        <div className="container mx-auto px-4 ">
          <div className="relative flex">
            <div className="hidden xl:absolute inset-y-0 left-0 -ml-6 xl:flex items-center" />
            <div className="w-full xl:w-4/5 xl:ml-auto">
              <img
                className="md:max-w-xl xl:max-w-4xl mx-auto relative object-cover rounded"
                src={imageSrc}
                alt=""
              />
              <div className="xl:hidden mt-12 text-center" />
              <div className="xl:absolute top-0 left-0 mt-12 xl:mt-20 max-w-xl mx-auto xl:mx-0 p-6 xl:py-24 rounded bg-gray-800 border-gray-50 shadow-md ">
                <span className="font-bold text-purple-600">
                  Featured Project
                </span>
                <h2 className="text-5xl font-bold font-heading text-white">
                  {name}
                </h2>
                <p className="max-w-xs mx-auto text-gray-500 leading-loose">
                  {desc}
                </p>
                <p className="max-w-xs mx-auto text-green-400 leading-loose">
                  {tech.map (item => <span className="pr-3">{item} </span>)}
                </p>
              </div>
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
