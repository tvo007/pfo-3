import React from 'react';

const BurgerButton = ({handleClick}) => {
  return (
    <div className={'p-5 lg:p-3'}>
      {/**visible for mobile */}
      {/* 
        show if mobile  VV
        */}
      {
        <button
          className="navbar-burger flex items-center text-gray-400 fixed ml-[-2.5rem] lg:ml-[-5rem] mt-[-2rem] lg:mt-[-2.5rem]"
          onClick={handleClick}
        >
          <svg
            className="block h-5 w-5 lg:h-6 lg:w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      }

      {/**vv should be visible only on desktop viewports */}
      {/* {isVisible &&
            <button
              className="navbar-burger flex items-center text-gray-400 ml-[-2rem] fixed"
              onClick={() => setIsOpen (true)}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>} */}
    </div>
  );
};

export default BurgerButton;
