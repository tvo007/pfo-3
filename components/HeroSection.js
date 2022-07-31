import React, { useContext, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useIntersectionObserver } from "../lib/hooks";
import NavContext from "../lib/NavContext";
import ImageOverlay from "./ImageOverlay";

const HeroSection = () => {
  const ref = useRef();
  const onScreen = useIntersectionObserver(ref, { threshold: 0.4 });
  const { setIsVisible } = useContext(NavContext);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    } else if (!onScreen) {
      setIsVisible(false);
    }

    // return () => {
    //   second
    // }
  }, [onScreen]);
  return (
    <section id="home" ref={ref}>
      <div className="skewed-top-left ">
        <div className="skew skew-top ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 10 10 0 10 10" />
          </svg>
        </div>
        <div className="pt-16 2xl:pt-36 bg-gray-50 radius-for-skewed h-[90vh]">
          <ImageOverlay />
          <div className="container mx-auto px-4 h-[70vh] relative ">
            <div className="max-w-2xl mx-auto text-center h-full -z-50">
              <a className="mb-6 inline-block text-3xl font-bold leading-none" />
              <h2 className="mb-1 text-3xl lg:text-5xl font-bold font-heading">
                Hello, I&apos;m Tim Vo,
              </h2>
              <h2 className="mb-4 text-3xl lg:text-5xl font-bold font-heading">
                Full Stack Web Developer.
              </h2>
              <p className="max-w-md mx-auto mb-6 text-gray-500 leading-loose">
                I enjoy using React with some backend magic to solve problems
                and bring ideas to life!
              </p>
              <ScrollLink
                to={"projects"}
                spy={true}
                smooth={true}
                duration={1200}
                className="inline-block py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold leading-loose rounded-l-xl rounded-t-xl transition duration-200 cursor-pointer"
              >
                View My Works
              </ScrollLink>

              <div className="pt-36 2xl:pt-52 absolute left-[50%] -translate-x-2/4">
                <ScrollLink
                  to={"about"}
                  spy={true}
                  smooth={true}
                  duration={1200}
                >
                  <div className="animate-bounce bg-white p-2 w-10 h-10 shadow-lg rounded-full flex items-center cursor-pointer ">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </div>
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

//https://bennettfeely.com/clippy/
