import React from 'react';
import projects from '../data/projects';

const Item = ({imageSrc}) => {
  return (
    <div className="relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="relative h-80 mb-5 mx-auto rounded-lg">
        <img
          className="h-80 w-full relative h-full rounded-lg object-cover"
          src={imageSrc}
          alt=""
        />
        {/**hover component */}
        <div className="opacity-0 hover:opacity-100 ">

          <div className="absolute inset-0 bg-purple-600 opacity-75 rounded-lg" />
          <div className="absolute inset-0 p-6 flex flex-col items-start">
            <span className="text-purple-400">2021</span>
            <p className="mb-auto text-xl lg:text-2xl text-white font-bold">
              Lorem ipsum dolor sit amet consectutar
            </p>
            <a className="inline-block py-2 px-4 border-2 border-purple-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TopSkew = () => {
  return (
    <div className="skew skew-top ml-for-radius">
      <svg
        className="h-8 md:h-12 lg:h-20 w-full text-gray-900 "
        viewBox="0 0 10 10"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0 10 10 0 10 10" />
      </svg>
    </div>
  );
};

const BottomSkew = () => {
  return (
    <div className="skew skew-bottom mr-for-radius">
      <svg
        className="h-8 md:h-12 lg:h-20 w-full text-gray-900"
        viewBox="0 0 10 10"
        preserveAspectRatio="none"
      >
        <polygon fill="currentColor" points="0 0 10 0 0 10" />
      </svg>
    </div>
  );
};

const ProjectsSection = () => {
  const {trickify, mugbucket, gizmos} = projects;
  return (
    <section className="skewed-top-left skewed-bottom-right bg-gray-50">

      <TopSkew />
      <div className="py-20 bg-gray-900 radius-for-skewed min-h-[150vh]">
        <div className="container px-4 mx-auto">
          <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
            <div className="text-center lg:text-left">
              <span className="text-purple-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white">
                My Projects
              </h2>
            </div>

          </div>
          <div className="flex flex-wrap -mx-4 mb-4">

            <Item imageSrc={mugbucket.imageSrc} />

            <Item imageSrc={trickify.imageSrc} />

            <Item imageSrc={gizmos.imageSrc} />

          </div>

        </div>
      </div>
      <BottomSkew />

    </section>
  );
};

export default ProjectsSection;
