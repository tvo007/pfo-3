import Image from "next/image";
import React from "react";
import lines from "../assets/elements/lines.svg";
import TopSkew from "./TopSkew";

const ImageOverlay = () => {
  return (
    <div className="w-full h-[95vh] absolute -mt-[11rem] left-0 -z-20">
      <Image src={lines} className="w-[120%] object-cover" layout="fill" />
    </div>
  );
};

export default ImageOverlay;
