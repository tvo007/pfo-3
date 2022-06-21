import Image from 'next/image';
import React from 'react';

import reactIcon from '../assets/images/react-original.svg';
import cssIcon from '../assets/images/css3-plain.svg';
import expressIcon from '../assets/images/express-original.svg';
import htmlIcon from '../assets/images/html5-plain.svg';
import jsIcon from '../assets/images/javascript-original.svg';
import reduxIcon from '../assets/images/redux-original.svg';
import pgIcon from '../assets/images/postgresql-plain.svg';
import nodeIcon from '../assets/images/nodejs-original.svg';
import nestIcon from '../assets/images/nestjs-plain.svg';
import nextIcon from '../assets/images/nextjs-original.svg';
import TechCard from './about/TechCard';

const AboutSection = () => {
  //testing framer motion stuff
  return (
    <section id="about">
      {/* <FloatingNav /> */}
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      {/* {onScreen && <h2>Testing observer hook. If you see this, it works.</h2>} */}
      <div className="py-20 bg-gray-50 radius-for-skewed min-h-[100vh]">
        <div className="container mx-auto px-4">
          <div className="flex flex-row flex-wrap items-center -mx-4">
            {/**content */}
            <div className="mb-12 w-full lg:w-1/2 px-4 ">
              <div className="max-w-md">

                <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                  About Me.
                </h2>
                <p className="mb-6 max-w-md text-gray-600 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.ssss ssssssss Pellentesque efficitur nisl sodales egestas lobortis.ssssss
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.ssssssssssssssssss
                </p>
                <p className="mb-6 max-w-md text-gray-600 leading-loose">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                

                {/* <div className="flex flex-col justify-start items items-start py-10">

                  <button className="inline-block py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200 cursor-pointer">
                    My Resume
                  </button>
                 
                </div> */}
                {/**more about me */}
                <div className="flex-col space-y-5  w-[90vw] lg:w-[30rem]">
                <div className="">
                  <span className="text-gray-600 font-heading max-w-sm">
                    Here are a few technologies I&apos;ve been working with recently:
                  </span>
                </div>
                <div className="flex space-x-3">

                  <TechCard src={htmlIcon} name="HTML" />
                  <TechCard src={cssIcon} name="CSS" />
                  <TechCard src={jsIcon} name="Javascript" />

                </div>
                <div className="flex space-x-3">
                  <TechCard src={nodeIcon} name={'NodeJs'} />
                  <TechCard src={reactIcon} name="React" />
                  <TechCard src={expressIcon} name="Express" />

                </div>
                <div className="flex space-x-3">
                  <TechCard src={reduxIcon} name="Redux" />
                  <TechCard src={nextIcon} name="Next" />
                  <TechCard src={pgIcon} name="PostgresQL" />

                </div>

              </div>

             

              </div>
              {/**tech div */}

            </div>
            <div className="px-4  lg:min-h-[40vh] flex flex-col">
            <div className="flex flex-col pt-20">
                  <span className="text-2xl">Got an idea?</span>
                  <span className="text-2xl">
                    Let&apos;s make something special.
                  </span>

                </div>

                <div className="flex flex-col justify-start items-end py-8 ">

                  <button className="inline-block py-2 px-6 bg-gray-800 hover:bg-black text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200 cursor-pointer">
                    Contact me
                  </button>
                  {/* <button className="inline-block py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200 cursor-pointer">
  Contact Me
</button> */}
                </div>
              {/* <div className="flex-col space-y-5  w-[90vw] lg:w-[30rem]">
                <div className="">
                  <span className="text-2xl font-heading">
                    Here are a few technologies I&apos;ve been working with recently:
                  </span>
                </div>
                <div className="flex space-x-5">

                  <TechCard src={htmlIcon} name="HTML" />
                  <TechCard src={cssIcon} name="CSS" />
                  <TechCard src={jsIcon} name="Javascript" />

                </div>
                <div className="flex space-x-5">
                  <TechCard src={nodeIcon} name={'NodeJs'} />
                  <TechCard src={reactIcon} name="React" />
                  <TechCard src={expressIcon} name="Express" />

                </div>
                <div className="flex space-x-5">
                  <TechCard src={reduxIcon} name="Redux" />
                  <TechCard src={nextIcon} name="Next" />
                  <TechCard src={pgIcon} name="PostgresQL" />

                </div>

              </div> */}

            </div>
            {/* <div className="w-full lg:w-1/2">
              <div className="mb-4 flex flex-wrap items-end">
                <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3" />
                <div className="w-full lg:w-1/3 px-3" />
              </div>
              <div className="flex flex-wrap items-start">
                <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3" />
                <div className="w-full lg:w-2/3 px-3" />
              </div>
            </div> */}
            {/**tech buttons */}

          </div>

        </div>

      </div>

      <div className="skew skew-bottom ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 10 10" />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
