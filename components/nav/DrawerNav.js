import React from "react";
import { Link as ScrollLink } from "react-scroll";

const DrawerNav = ({ isDrawerOpen, closeDrawerHandler }) => {
  return (
    <div
      className={`${
        !isDrawerOpen && "hidden"
      } navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-[100]`}
    >
      <div
        className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        onClick={closeDrawerHandler}
      />
      <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
        <div className="flex items-center mb-8">
          <a className="mr-auto text-3xl font-bold leading-none" />
          <button className="navbar-close" onClick={closeDrawerHandler}>
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
                to={"home"}
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
                to={"about"}
                spy={true}
                smooth={true}
                offset={100}
                duration={1200}
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
              >
                About
              </ScrollLink>
            </li>
            <li className="mb-1 cursor-pointer">
              <ScrollLink
                activeClass="active"
                to={"projects"}
                spy={true}
                smooth={true}
                offset={0}
                duration={1200}
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
              >
                Projects
              </ScrollLink>
            </li>
            <li className="mb-1 cursor-pointer">
              <ScrollLink
                activeClass="active"
                to={"contact"}
                spy={true}
                smooth={true}
                offset={-50}
                duration={1200}
                className="block p-4 text-sm font-semibold text-gray-400 hover:bg-purple-50 hover:text-purple-600 rounded"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        {/* <div className="mt-auto">

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
        </div> */}
      </nav>
    </div>
  );
};

export default DrawerNav;
