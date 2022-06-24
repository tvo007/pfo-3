import React from 'react';

const ListColumn = ({name1, name2, name3}) => {
  return (
    <ul className="text-gray-500 font-bold">
      <li className="flex mb-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-green-400"
          viewBox="5 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span className='text-sm'>{name1}</span>
      </li>
      <li className="flex mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-green-400"
          viewBox="5 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span className='text-sm'>{name2}</span>
      </li>
      <li className="flex mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-green-400"
          viewBox="5 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span className='text-sm'>{name3}</span>
      </li>
    </ul>
  );
};

export default ListColumn;
