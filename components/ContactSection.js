import Image from 'next/image';
import React from 'react';
import facebook from '../assets/social/facebook-purple.svg';
import instagram from '../assets/social/instagram-purple.svg';
import twitter from '../assets/social/twitter-purple.svg';

const ContactSection = () => {
  return (
    <section>
      <div className="skew skew-top mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 10 0 10" />
        </svg>
      </div>
      <div className="skew skew-top ml-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 10 10 0 10 10" />
        </svg>
      </div>
      <div className="py-20 bg-gray-50 radius-for-skewed min-h-[100vh]">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Contact
            </h2>
            <p className="text-gray-500 leading-loose">
              Got any question? Let’s talk about it.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full md:w-1/2 lg:w-1/2">
                  <h3 className="mb-2 text-3xl lg:text-4xl font-bold">
                    Office
                  </h3>
                  <p className="text-gray-400">359 Hidden Valley</p>
                  <p className="text-gray-400">Road, NY</p>
                </div>
                <div className="mb-12 w-full md:w-1/2">
                  <h3 className="mb-2 text-3xl lg:text-4xl font-bold">
                    Contacts
                  </h3>
                  <p className="text-gray-400">hallo@gamil.com</p>
                </div>
                <div className="w-full md:w-1/3 lg:w-full">
                  <h3 className="mb-2 text-3xl lg:text-4xl font-bold">
                    Socials
                  </h3>
                  <div className="flex">
                    <a className="mr-3">
                      <Image src={facebook} alt="" />
                    </a>
                    <a className="mr-3">
                      <Image src={twitter} alt="" />
                    </a>
                    <a>
                      <Image src={instagram} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="max-w-md lg:mx-auto">
                <form action="">

                  <div className="mb-4">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-white rounded outline-none"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-white rounded outline-none"
                      type="text"
                      placeholder="Message..."
                    />
                  </div>
                  <div className="mb-4" />
                  <div className="flex justify-between items-center">
                    <label />
                    <button className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-pink-600 hover:bg-pink-700 text-gray-50 font-bold leading-loose transition duration-200">
                      Get Started
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skew skew-bottom mr-for-radius">
        <svg
          className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
          viewBox="0 0 10 10"
          preserveAspectRatio="none"
        >
          <polygon fill="currentColor" points="0 0 10 0 0 10" />
        </svg>
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

export default ContactSection;
