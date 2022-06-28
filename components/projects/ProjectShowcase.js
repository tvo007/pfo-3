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
        <div className="container mx-auto px-4  ">
          <div className="relative flex">
            <div className="hidden xl:absolute inset-y-0 left-0 -ml-6 xl:flex items-center" />
            <div className="w-full xl:w-4/5 xl:ml-auto">
              <img
                className="md:max-w-xl xl:max-w-4xl mx-auto relative object-cover rounded"
                src={imageSrc}
                alt=""
              />
              <div className="xl:hidden mt-12 text-center" />
              <div className="xl:absolute top-0 left-0 mt-12 xl:mt-20 max-w-xl mx-auto xl:mx-0 p-6 xl:py-10 rounded bg-gray-800 border-gray-50 shadow-md ">

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
                  {tech.map ((item, index) => (
                    <span key={index} className="pr-3">{item} </span>
                  ))}
                </p>
                <div className="mt-10 pt-10">
                  <div className="flex flex-row space-x-4 justify-end">
                    <a href={url || '/'}>

                      <p className="text-white leading-loose">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </p>
                    </a>

                    <a href={github || '/'}>
                      <p className=" text-black leading-loose">
                        <svg
                          className="h-6 w-6 invert"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={0.1}
                        >
                          <g data-name="Layer 2">
                            <rect width="24" height="24" opacity="0" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.24 22a1 1 0 0 1-1-1v-2.6a2.15 2.15 0 0 0-.54-1.66 1 1 0 0 1 .61-1.67C17.75 14.78 20 14 20 9.77a4 4 0 0 0-.67-2.22 2.75 2.75 0 0 1-.41-2.06 3.71 3.71 0 0 0 0-1.41 7.65 7.65 0 0 0-2.09 1.09 1 1 0 0 1-.84.15 10.15 10.15 0 0 0-5.52 0 1 1 0 0 1-.84-.15 7.4 7.4 0 0 0-2.11-1.09 3.52 3.52 0 0 0 0 1.41 2.84 2.84 0 0 1-.43 2.08 4.07 4.07 0 0 0-.67 2.23c0 3.89 1.88 4.93 4.7 5.29a1 1 0 0 1 .82.66 1 1 0 0 1-.21 1 2.06 2.06 0 0 0-.55 1.56V21a1 1 0 0 1-2 0v-.57a6 6 0 0 1-5.27-2.09 3.9 3.9 0 0 0-1.16-.88 1 1 0 1 1 .5-1.94 4.93 4.93 0 0 1 2 1.36c1 1 2 1.88 3.9 1.52a3.89 3.89 0 0 1 .23-1.58c-2.06-.52-5-2-5-7a6 6 0 0 1 1-3.33.85.85 0 0 0 .13-.62 5.69 5.69 0 0 1 .33-3.21 1 1 0 0 1 .63-.57c.34-.1 1.56-.3 3.87 1.2a12.16 12.16 0 0 1 5.69 0c2.31-1.5 3.53-1.31 3.86-1.2a1 1 0 0 1 .63.57 5.71 5.71 0 0 1 .33 3.22.75.75 0 0 0 .11.57 6 6 0 0 1 1 3.34c0 5.07-2.92 6.54-5 7a4.28 4.28 0 0 1 .22 1.67V21a1 1 0 0 1-.94 1z"
                            />
                          </g>
                        </svg>
                      </p>
                    </a>
                  </div>
                </div>

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
