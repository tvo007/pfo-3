import Image from "next/image";
import React from "react";
import lines from "../assets/elements/lines.svg";

const ImageOverlay = () => {
  return (
    <div className="w-full h-[105vh] absolute -mt-[14rem] sm:-mt-[15rem] lg:-mt-[17rem] left-0">
      <Image
        src={lines}
        className="w-[120%] object-cover clip-custom"
        layout="fill"
      />
    </div>
  );
};

export default ImageOverlay;
