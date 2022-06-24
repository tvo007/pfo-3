// import Image from 'next/image';
import React from 'react';

// import reactIcon from '../assets/images/react-original.svg';
// import cssIcon from '../assets/images/css3-plain.svg';
// import expressIcon from '../assets/images/express-original.svg';
// import htmlIcon from '../assets/images/html5-plain.svg';
// import jsIcon from '../assets/images/javascript-original.svg';
// import reduxIcon from '../assets/images/redux-original.svg';
// import pgIcon from '../assets/images/postgresql-plain.svg';
// import nodeIcon from '../assets/images/nodejs-original.svg';
// import nestIcon from '../assets/images/nestjs-plain.svg';
// import nextIcon from '../assets/images/nextjs-original.svg';
// import TechCard from './about/TechCard';
import ListColumn from './ListColumn';

const AboutSection = () => {
  //testing framer motion stuff
  return (
    <section id="about">
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
      <div className=" bg-gray-50 radius-for-skewed min-h-[100vh]">
        <div className="container mx-auto w-[90%] lg:max-w-4xl">
          <div className="flex flex-col flex-wrap ">
            {/**content */}
            <div className="mb-12 w-full px-4 pt-[6rem] ">

              <h2 className="mb-3 text-4xl lg:text-5xl font-bold font-heading">
                About Me.
              </h2>
              <p className="mb-6 max-w-2xl text-gray-600 leading-loose">
                Lorem ipsum dolor sit amet consectetur dddddddd adipisicing elit. Omnis officia inventore eaque explicabo, eligendi impedit reprehenderit harum nulla at minus cumque officiis! Saepe ea incidunt quae commodi consequatur ipsa quidem!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eveniet provident omnis facilis officia, molestiae cum id saepe maxime inventore placeat numquam. Quasi voluptate, omnis nulla optio molestias possimus necessitatibus.
              </p>

              {/* <div className="flex flex-col justify-start items items-start py-10">

                  <button className="inline-block py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200 cursor-pointer">
                    My Resume
                  </button>
                 
                </div> */}
              {/**more about me */}
              <div className="flex-col space-y-5  lg:w-[30rem]">
                <div className="">
                  <span className="text-gray-600 font-heading max-w-sm">
                    Here are a few technologies I&apos;ve been working with recently:
                  </span>
                </div>

                <div className="flex flex-row justify-start items-start space-x-8">

                  <div className="flex">

                    <ListColumn
                      name1={'React'}
                      name2={'Redux'}
                      name3={'Typescript'}
                    />
                  </div>
                  <div className="flex">

                    <ListColumn
                      name1={'Next.js'}
                      name2={'Express'}
                      name3={'Jest'}
                    />
                  </div>
                  <div className="flex">
                    <ListColumn
                      name1={'Git/Github'}
                      name2={'PostgresQL'}
                      name3={'Cypress'}
                    />
                  </div>
                </div>
              </div>

              {/**tech div */}

            </div>
            {/**image goes here */}
            {/* <div className="px-4 lg:min-h-[40vh] flex flex-col pl-[2rem]"> */}
            {/* <div className="relative max-w-lg">
                <div className="relative bg-gray-700">
                  <img
                  className="w-full h-full mb-12 object-cover opacity-50"
                  src="https://res.cloudinary.com/ddj5orpun/image/upload/v1655787127/kevin-canlas-cFFEeHNZEqw-unsplash_1_tfiriu.jpg"
                  alt=""
                  />
                  <div className="">
                  <div className=" inset-0  opacity-75 rounded-lg" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-center items-center pb-[17rem]">
                  
                      <div className="flex flex-col pt-20">
                        <span className="text-2xl text-white">
                        Got an idea?
                        </span>
                        <span className="text-2xl text-white">
                        Let&apos;s make something special.
                        </span>

                        </div>
                        
                      <div className="flex flex-col justify-start items-end py-8">
                      
                      <button className="inline-block py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200 cursor-pointer">
                          Contact me
                        </button>
                      </div>

                      <div className="w-full flex flex-row justify-between relative" />
                    </div>
                  </div>
                </div>
              </div> */}

            {/* <button className="inline-block py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200 cursor-pointer">
  Contact Me
</button> */}
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

            {/* </div> */}
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