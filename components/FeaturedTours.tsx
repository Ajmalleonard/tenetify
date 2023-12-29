import React from "react";
import TourPackage from "./TourPackage";
import { FeaturedPackages } from "@/constants";

const packSize = {
  minheight: "min-h-[600px]",
  minwidth: "min-h-[600px]",
};

function FeaturedTours() {
  return (
    <div className="max-container h-[650px] py-10 my-[100px]  flex items-center justify-center ">
      <div className="flex justify-start items-start hide-scrollbar h-[400px] w-full gap-3 overflow-x-auto  lg:h-[600px] xl:[750px]">
        {FeaturedPackages.map((tour, index) => (
          <TourPackage
            image={tour.bg}
            alt={tour.title.split(" ").join("-").toLowerCase()}
            title={tour.title}
            details={tour.discription}
            key={tour.title}
            minwidth={packSize.minheight}
            height={packSize.minwidth}
          />
        ))}
      </div>
    </div>
  );
}
export default FeaturedTours;
