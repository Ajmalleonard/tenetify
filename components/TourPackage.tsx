import React from "react";
import Image from "next/image";

interface tourCrops {
  image: string;
  alt: string;
  title: string;
  details: string;
  minwidth: string;
  height: string;
}

function TourPackage({
  image,
  alt,
  title,
  details,
  height,
  minwidth,
}: tourCrops) {
  return (
    <div
      className={`${minwidth} ${height} rounded-5xl justify-between  flex flex-col items-center bg-slate-50 overflow-hidden relative`}
    >
      <Image
        src={image}
        alt={alt}
        width={400}
        height={600}
        className="rounded-t-5xl min-h-[60%] w-full object-cover z-0 "
      />
      <div className="flexCenter rounded-2xl absolute z-20 shadow-lg w-[80%] h-[100px] bottom-[200px]"></div>

      <div className="bg-greenish-50 flex justify-end items-center flex-col w-full h-[40%]">
        <div className="flex flex-col w-[80%] h-[80%] items-start justify-start ">
          <h4
            className="font-bold text-green-50 
          "
          >
            {title}
          </h4>
          <p className=" text-start">{details.substring(0, 130) + "..."}</p>
        </div>
      </div>
    </div>
  );
}

export default TourPackage;
