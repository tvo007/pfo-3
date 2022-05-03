import React from 'react';

const HeroSection = () => {
  return (
    <section className="skewed-top-left">
      <div className="skew skew-top mr-for-radius ">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius ">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div className="py-20 bg-gray-50 radius-for-skewed h-[100vh]">
        <div className="container mx-auto px-4 ">
          <div className="max-w-xl mx-auto text-center">
            <a className="mb-6 inline-block text-3xl font-bold leading-none" />
            <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading">
              So much more than a business analytics tool
            </h2>
            <p className="max-w-md mx-auto mb-6 text-gray-500 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
            <a className="inline-block py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200 cursor-pointer">
              View My Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
