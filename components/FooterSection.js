import Image from 'next/image';
import React from 'react';
import facebook from '../assets/social/facebook-purple.svg';
import instagram from '../assets/social/instagram-purple.svg';
import twitter from '../assets/social/twitter-purple.svg';

const FooterSection = () => {
  return (
    <section id='footer'>
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
      <div className="py-20 bg-gray-50 radius-for-skewed">
        <div className="max-w-md mx-auto text-center">
          <a className="inline-block mb-6 mx-auto text-3xl font-bold leading-none" />
          <p className="mb-6 text-sm font-semibold text-gray-400">
            © 2022. All rights reserved.
          </p>
          <div className="flex space-x-2 lg:space-x-4 justify-center">
            <a>
              <Image src={facebook} alt="" />
            </a>
            <a>
              <Image src={twitter} alt="" />
            </a>
            <a>
              <Image src={instagram} alt="" />
            </a>
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

export default FooterSection;
