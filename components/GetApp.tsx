import React from "react";
import Button from "./Button";
import { Image } from "react-bootstrap";

function GetApp() {
  return (
    <section className="get-app-section lg:mt-[250PX] xl:mt-10">
      <div className="flex flex-col justify-center items-center pt-5 pb-20">
        <div className="get-app flex flex-col lg:flex-row  items-center justify-center">
          <div className=" items-center justify-center flex flex-col w-full p-5 md:justify-center gap-4 md:items-start">
            <h2 className="bold-32  lg:text-[70px] lg:max-w-[500px] md:max-w-[500px] md:text-[60px]">
              Get Now For Free
            </h2>
            <p className="my-5 regular-16">Available on IOS and Android</p>
            <div className="flex gap-3 flex-col lg:flex-row md:flex-row">
              <Button
                type={"button"}
                label={"PlayStore"}
                title={"Download the App"}
                icon={"/playstore.svg"}
                variant={"bg-green-50 text-[20px] px-[60px] py-5 w-[300px]"}
                ratio={30}
                color={"dark:invert"}
              />
              <Button
                type={"button"}
                label={"AppStore"}
                title={"Download the App"}
                icon={"/apple.svg"}
                variant={
                  "bg-white text-green-50 text-[20px] px-[60px] py-5 w-[300px]"
                }
                ratio={30}
              />
            </div>
          </div>
          <Image
            src="/phones.png"
            alt="phone"
            width={500}
            height={1200}
            className="xl:h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default GetApp;
