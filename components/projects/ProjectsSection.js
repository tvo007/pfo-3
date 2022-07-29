import Image from "next/image";
import React from "react";
import projects from "../../data/projects";
import ProjectShowcase from "./ProjectShowcase";
import TopSkew from "../TopSkew";
import BottomSkew from "../BottomSkew";

const ProjectsSection = () => {
  const { trickify, mugbucket, gizmos, studio37 } = projects;
  return (
    <section
      id="projects"
      className="skewed-top-left skewed-bottom-right bg-gray-50 "
    >
      <TopSkew />
      <div className="py-20 bg-gray-900 radius-for-skewed min-h-[100vh] relative z-50">
        <div className="container px-4 mx-auto max-w-4xl ">
          <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
            <div className="text-center lg:text-left">
              <span className="font-bold text-purple-600 text-lg">
                Here are some of my featured
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white">
                Projects.
              </h2>
            </div>
          </div>
          {/* <div className="flex flex-wrap -mx-4 mb-4">

            <Item data={mugbucket} />

            <Item data={trickify} />

            <Item data={gizmos} />

          </div> */}
          <ProjectShowcase data={trickify} />
          <ProjectShowcase data={mugbucket} />
          <ProjectShowcase data={studio37} />
          <ProjectShowcase data={gizmos} />

          <div />
        </div>
      </div>
      <BottomSkew />
    </section>
  );
};

export default ProjectsSection;
