import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const DrawerNav = ({ isDrawerOpen, closeDrawerHandler }) => {
  return (
    <Transition.Root show={isDrawerOpen} as={Fragment}>
      <Dialog
        as="div"
        className="navbar-menu fixed top-0 right-0 bottom-0 w-5/6 max-w-sm z-[100]"
        onClose={closeDrawerHandler}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xs lg:max-w-md">
                  {/* <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={closeDrawerHandler}
                      >
                        <span className="sr-only">Close panel</span>
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
                  </Transition.Child> */}
                  {/**panel styling starts here */}
                  <div className="flex h-full flex-col overflow-hidden bg-white py-6 shadow-xl">
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" />
                        <button
                          className="navbar-close"
                          onClick={closeDrawerHandler}
                        >
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
                        <ul className="">
                          <li className="mb-1 cursor-pointer">
                            <ScrollLink
                              to={"home"}
                              spy={true}
                              smooth={true}
                              offset={-100}
                              duration={1200}
                              className="block p-4 text-lg font-semibold text-gray-400  hover:text-purple-600 rounded text-center transition duration-200"
                              onClick={closeDrawerHandler}
                            >
                              HOME
                            </ScrollLink>
                          </li>
                          <li className="mb-1 cursor-pointer">
                            <ScrollLink
                              onClick={closeDrawerHandler}
                              activeClass="active"
                              to={"about"}
                              spy={true}
                              smooth={true}
                              offset={100}
                              duration={1200}
                              className="block p-4 text-lg font-semibold text-gray-400  hover:text-purple-600 rounded text-center transition duration-200"
                            >
                              ABOUT
                            </ScrollLink>
                          </li>
                          <li className="mb-1 cursor-pointer">
                            <ScrollLink
                              onClick={closeDrawerHandler}
                              activeClass="active"
                              to={"projects"}
                              spy={true}
                              smooth={true}
                              offset={75}
                              duration={1200}
                              className="block p-4 text-lg font-semibold text-gray-400  hover:text-purple-600 rounded text-center transition duration-200"
                            >
                              PROJECTS
                            </ScrollLink>
                          </li>
                          <li className="mb-1 cursor-pointer">
                            <ScrollLink
                              onClick={closeDrawerHandler}
                              activeClass="active"
                              to={"contact"}
                              spy={true}
                              smooth={true}
                              offset={-50}
                              duration={1200}
                              className="block p-4 text-lg font-semibold text-gray-400  hover:text-purple-600 rounded text-center transition duration-200"
                            >
                              CONTACT
                            </ScrollLink>
                          </li>
                        </ul>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DrawerNav;

const oldNav = () => (
  <div
    className={`${
      !isDrawerOpen && "hidden"
    } navbar-menu fixed top-0 right-0 bottom-0 w-5/6 max-w-sm z-[100]`}
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
              className="block p-4 text-sm font-semibold text-gray-400  hover:text-purple-600 rounded"
              onClick={closeDrawerHandler}
            >
              Home
            </ScrollLink>
          </li>
          <li className="mb-1 cursor-pointer">
            <ScrollLink
              onClick={closeDrawerHandler}
              activeClass="active"
              to={"about"}
              spy={true}
              smooth={true}
              offset={100}
              duration={1200}
              className="block p-4 text-sm font-semibold text-gray-400  hover:text-purple-600 rounded"
            >
              About
            </ScrollLink>
          </li>
          <li className="mb-1 cursor-pointer">
            <ScrollLink
              onClick={closeDrawerHandler}
              activeClass="active"
              to={"projects"}
              spy={true}
              smooth={true}
              offset={75}
              duration={1200}
              className="block p-4 text-sm font-semibold text-gray-400  hover:text-purple-600 rounded"
            >
              Projects
            </ScrollLink>
          </li>
          <li className="mb-1 cursor-pointer">
            <ScrollLink
              onClick={closeDrawerHandler}
              activeClass="active"
              to={"contact"}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1200}
              className="block p-4 text-sm font-semibold text-gray-400  hover:text-purple-600 rounded"
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
