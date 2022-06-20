import Image from 'next/image';
import React from 'react';

const TechCard = ({src, name}) => {
  return (
    <div className="inline-flex = w-[10rem] p-3 rounded-xl font-bold text-sm border-0 shadow-lg hover:bg-white duration-300">
      <div>

        <Image src={src} height={35} width={35} />
      </div>
      <div className="pl-2 pt-4 lg:pt-3">

        <p>{name}</p>
      </div>
    </div>
  );
};

export default TechCard;
