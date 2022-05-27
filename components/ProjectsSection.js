import React from 'react';
import projects from '../data/projects';

const Item = ({data: {imageSrc, name, desc}}) => {
  return (
    <div className="relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="relative h-80 mb-5 mx-auto rounded-lg group">
        <img
          className="h-80 w-full relative h-full rounded-lg object-cover"
          src={imageSrc}
          alt=""
        />
        {/**hover component */}
        <div className="opacity-0 hover:opacity-100 hover:transition-all hover:duration-500 transition-all duration-300 ease-in-out">

          <div className="absolute inset-0 bg-white opacity-75 rounded-lg" />
          <div className="absolute inset-0 p-6 flex flex-col items-start">
            <p className="mb-[1.5rem] text-xl lg:text-2xl text-black font-bold">
              {name}
            </p>
            <p className="mb-auto text-xl lg:text-2xl text-black font-bold">
              {desc}
            </p>
            <div className="w-full flex flex-row justify-between">

              <a className="cursor-pointer inline-block py-2 px-4 border-2 border-transparent
            hover:border-purple-500 bg-transparent text-black hover:bg-white shadow-2xl
             hover:transition-all transition-all duration-500 ease-in-out rounded-l-xl rounded-t-xl 
            font-bold leading-loose">
                View Live
              </a>
              <a className="cursor-pointer inline-block py-2 px-4 border-2 border-transparent
            hover:border-purple-500 bg-transparent text-black hover:bg-white shadow-2xl
             hover:transition-all transition-all duration-500 ease-in-out rounded-l-xl rounded-t-xl 
            font-bold leading-loose">
                View Github
              </a>
            </div>
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
    <section
      id="projects"
      className="skewed-top-left skewed-bottom-right bg-gray-50"
    >

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

            <Item
              data={mugbucket}
              imageSrc={mugbucket.imageSrc}
              desc={mugbucket.desc}
              name={mugbucket.name}
            />

            <Item
              data={trickify}
              imageSrc={trickify.imageSrc}
              desc={trickify.desc}
              name={trickify.name}
            />

            <Item
              data={gizmos}
              imageSrc={gizmos.imageSrc}
              desc={gizmos.desc}
              name={gizmos.name}
            />

          </div>

        </div>
      </div>
      <BottomSkew />

    </section>
  );
};

export default ProjectsSection;
