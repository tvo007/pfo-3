import Image from "next/image";
import React from "react";
import projects from "../../data/projects";
import ProjectShowcase from "./ProjectShowcase";
import TopSkew from "../TopSkew";
import BottomSkew from "../BottomSkew";

const ProjectsSection = () => {
  const { trickify, mugbucket, gizmos, studio37, ilira } = projects;
  return (
    <section id="projects" className=" bg-gray-50">
      <TopSkew />
      <div className="py-20 bg-gray-900  min-h-[50vh] relative z-50">
        <div className="container mx-auto max-w-3xl">
          <div className="flex flex-row justify-start items-center px-4 pb-16">
            <h2 className="text-xl  font-bold font-heading text-white">
              PROJECTS
            </h2>
            <div class="mx-8 h-0.5 w-full max-w-md rounded bg-gray-100"></div>
          </div>
          <ProjectShowcase data={trickify} isReversed />
          <ProjectShowcase data={ilira} />
          <ProjectShowcase data={mugbucket} isReversed />
          <ProjectShowcase data={gizmos} />
          {/* <ProjectShowcase data={studio37} /> */}

          <div />
        </div>
      </div>
      <BottomSkew />
    </section>
  );
};

export default ProjectsSection;
