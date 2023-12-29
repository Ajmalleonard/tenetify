import Image from "next/image";
import React from "react";
import FeatureBar from "./FeatureBar";
import { FEATURES } from "@/constants";

function Feutures() {
  return (
    <section className="my-20 h-auto flex flex-col lg:mx-20 ">
      <div className="flexCenter">
        <div className="flex flex-col items-start space-y-5">
          <h2 className="bold-40 my-5">Our Features</h2>
        </div>
      </div>
      <section className=" bg-slate-50 2xl:max-container md:w-full flex flex-grow h-full py-2 rounded-5xl px-2 bg-no-repeat bg-cover bg-center relative justify-end gap-2">
        <div className="flex  xl:w-[9%] md:w-[10%] lg:min-w-[200px] xl:mr-[300px]">
          <Image
            src="/phone.png"
            width={440}
            height={1000}
            alt="phone"
            className="feature-phone "
          />
        </div>
        <div className="  md:w-[90%] max-auto">
          <ul className="mt-10 grid md:grid-rows-2 lg:grid-cols-2 gap-20">
            {FEATURES.map((feture) => (
              <FeatureBar
                icon={feture.icon}
                title={feture.title}
                details={feture.description}
                color={feture.variant}
                key={feture.title}
              />
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}

export default Feutures;
