import Image from "next/image";
import React from "react";

interface details {
  icon: string;
  title: string;
  details: string;
  color: string;
}

function FeatureBar({ icon, title, details, color }: details) {
  return (
    <div className="flex flex-col mx-5   border-green-50 ">
      <div
        className={`flexCenter p-5 rounded-full w-[70px] h-[70px] md:w-[70px] md:h-[70px]  lg:w-[120px] ${color}`}
      >
        <Image src={icon} width={30} height={30} alt="feature icon" />
      </div>
      <h2 className="sm:bold-20 py-3 lg:bold-20 font-bold text-medium ">
        {title}
      </h2>
      <p className="lg:text-[13px] lg:max-w-[400px] md:max-w-[600px]">
        {details}
      </p>
      <div className=" hidden xl:flex my-5 w-full h-[3px] bg-green-50 rounded-full"></div>
    </div>
  );
}

export default FeatureBar;
