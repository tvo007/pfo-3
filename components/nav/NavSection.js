import React from 'react';
import {Link as ScrollLink} from 'react-scroll';

//todo: programmatically account for chaning viewports on the nav button

const NavSection = () => {
  return (
    <section className="overflow-hidden">
      <nav className="relative px-6 py-6 flex justify-between items-center bg-white">
        <a className="text-3xl font-bold leading-none" />
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <ScrollLink
              to={'home'}
              spy={true}
              smooth={true}
              offset={-100}
              duration={1200}
              className="text-sm text-gray-400 hover:text-purple-500 font-bold cursor-pointer"
            >
              Home
            </ScrollLink>
          </li>
          <li className="text-gray-300">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <ScrollLink
              to={'about'}
              spy={true}
              smooth={true}
              offset={50}
              duration={1200}
              className="text-sm text-gray-400 hover:text-purple-500 font-bold cursor-pointer"
            >

              About
            </ScrollLink>
          </li>
          <li className="text-gray-300">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <ScrollLink
              to={'projects'}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1200}
              className="text-sm text-gray-400 hover:text-purple-500 font-bold cursor-pointer"
            >

              Projects
            </ScrollLink>
          </li>
          <li className="text-gray-300">
            <svg
              className="w-4 h-4 current-fill"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <ScrollLink
              to={'contact'}
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
              className="text-sm text-gray-400 hover:text-purple-500 font-bold cursor-pointer"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

      </nav>
      {/* <div
        className={`${!isOpen && 'hidden'} navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={() => setIsOpen (false)}
        />
        <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" />
            <button className="navbar-close" onClick={() => setIsOpen (false)}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1 cursor-pointer">
                <ScrollLink
                  to={'home'}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1200}
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                >
                  Home
                </ScrollLink>
              </li>
              <li className="mb-1 cursor-pointer">
                <ScrollLink
                  activeClass="active"
                  to={'about'}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1200}
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                >
                  About

                </ScrollLink>
              </li>
              <li className="mb-1 cursor-pointer">
                <ScrollLink
                  activeClass="active"
                  to={'projects'}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1200}
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                >
                  Projects
                </ScrollLink>
              </li>
              <li className="mb-1 cursor-pointer">
                <ScrollLink
                  activeClass="active"
                  to={'contact'}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1200}
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
                >
                  Contact
                </ScrollLink>
              </li>

            </ul>
          </div>
          <div className="mt-auto">

            <div className="my-4 text-xs text-center text-gray-400">
              <span>© 2022 All rights reserved.</span>
              <div className="text-center pt-5">
                <a className="inline-block px-1">
                  <Image src={facebook} alt="" />

                </a>
                <a className="inline-block px-1">
                  <Image src={twitter} alt="" />

                </a>
                <a className="inline-block px-1">
                  <Image src={instagram} alt="" />

                </a>
              </div>
            </div>
          </div>
        </nav>
      </div> */}
    </section>
  );
};

export default NavSection;
