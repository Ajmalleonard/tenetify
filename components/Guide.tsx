import Image from "next/image";
import Hero from "./Hero";

function Guide() {
  return (
    <div>
      <div className="2xl:max-container  lg:p-10 p-2 flex flex-col items-center gap-5 ">
        <div className="flex flex-col w-full ">
          <div className="relative flex lg:justify-between w-full flex-col lg:flex-row lg:space-x-10 ">
            <div className="flex flex-col  ">
              <Image
                className="lg:absolute left-[250px] "
                src="/camp.svg"
                alt="camp"
                width={33}
                height={33}
              />
              <p className="text-start text-green-50 lg:text-[20px] lg:w-[300px] lg:mt-0 mt-2 ">
                WE ARE HERE FOR YOU
              </p>
              <h2 className="lg:text-[30px] font-bold xl:max-w-[600px] md:text-5xl  text-3xl">
                Guide Your To Easy Path
              </h2>
            </div>
            <p className="xl:max-w-[700px] md:max-w-[800px] ">
              Only with marmara application you'll no longer get lost and get
              lost again,because we already support offline mode when there's no
              network connection in the field. Invert your family, relatives and
              friends to have fun together in the wilderness with this valley
              and reach the top of mountain.
            </p>
          </div>
        </div>
        <div className="flexCenter relative  2xl:max-container  w-full">
          <Image
            src="/boat.png"
            width={1440}
            height={580}
            alt={"boat"}
            className="w-full h-[500px]  lg:rounded-2xl object-center object-cover hover:object-fill"
          />
          <div className="absolute flex shadow-md rounded-3xl py-5 px-5 bg-slate-100 lg:top-40  gap-3 lg:left-10   ">
            <Image
              src="/meter.svg"
              width={14}
              height={158}
              className="h-full w-auto "
              alt={"meter"}
            />
            <div className="flex items-start justify-between flex-col ">
              <div className="flex flex-col space-y-5">
                <div className="flexBetween w-full gap-2 ">
                  <p className="regular-14">Destination</p>
                  <p className="text-green-50">45min</p>
                </div>
                <p className="font-[600] text-[15px]">Bwawani Staff</p>
              </div>
              <div className="flex flex-col items-start justify-start ">
                <p className="regular-14">Start track</p>
                <p className="font-[600] text-[15px]">Dar es Salaam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
