import Image from "next/image";
import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 flex  flex-col py-10 gap-20 md:gap-28 lg:py-20 xl:flex-row  h-[900px]">
      <div className="hero-map" />
      <div className="relative flex z-20 flex-1 flex-col xl:w-1/2 ">
        <Image
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          src="/camp.svg"
          width={50}
          height={50}
          alt="camp"
        />
        <h1 className="bold-52 lg:bold-88 ">Tenetify Travel Gate 2025</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each other of your journeys seeking the satisfaction
          of seeing the incorruptible beauty of the nature. We can help you on
          an advanture around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Image
                  src="/star.svg"
                  key={i}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            200k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type={"button"}
            label={"Download the App"}
            title={"download the app"}
            variant={"btn_green"}
          />
          <Button
            icon="/play.svg"
            type={"button"}
            label={"How We Works"}
            title={"download the app"}
            variant={"border_green_bgwhite "}
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className=" relative bg-green-90 rounded-3xl w-[268px] flex-col gap-8 px-7 py-8 z-20">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="regular-16 text-gray-20">Location</p>
              <Image
                className="hover:cursor-pointer"
                src="/close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </div>
            <p className="bold-20 text-white">Serengeti Park</p>
          </div>
          <div className="flex items-center mt-5 justify-between gap-3">
            <div className="flex flex-col">
              <p className="text-gray-20 regular-16">Distance</p>
              <p className="bold-20 text-white">360.Km</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-20 regular-16">Elevation</p>
              <p className="bold-20 text-white">2.35 km/ph</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
