import { PEOPLE_URL } from "@/constants";
import { url } from "inspector";
import Image from "next/image";

interface campProps {
  bgImage: string;
  title: string;
  subtitle: string;
  peopleJoined?: string;
}

const Camps = ({ bgImage, title, subtitle, peopleJoined }: campProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] bg-no-repeat bg-cover lg:rounded-r-5xl xl:rounded-5xl ${bgImage}`}
    >
      <div className="flex flex-col items-start lg:px-16 lg:py-5 p-6 justify-between h-full w-full">
        <div className="flexCenter gap-4 ">
          <div className=" rounded-full bg-green-50 p-5">
            <Image height={28} width={28} src={"/folded-map.svg"} alt={"map"} />
          </div>
          <div className="flex flex-col items-start gap-1">
            <h4 className="bold-16 text-white  ">{title}</h4>
            <p className="regular-10 text-white">{subtitle}</p>
          </div>
        </div>{" "}
        <div className="flex gap-2 items-center">
          {" "}
          <div className="flex -space-x-4">
            {PEOPLE_URL.map((url) => (
              <Image src={url} key={url} width={52} height={52} alt="Person" />
            ))}
          </div>
          <p className="text-white font-bold ">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

function Camp() {
  return (
    <div className=" my-6 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-10 xl:mb-20  rounded-2xl lg:justify-center lg:items-center items-start">
      <div className="flex justify-start items-start hide-scrollbar h-[400px] w-full gap-3 overflow-x-auto lg:h-[600px] xl:[750px]">
        <Camps
          bgImage="bg-bg-img-1"
          title="Serengeti Safari"
          subtitle="Endless Plain"
          peopleJoined="50+ Joined"
        />
        <Camps
          bgImage={"bg-bg-img-2"}
          title={"Tarangire National Park"}
          subtitle={"Home of Elephants"}
          peopleJoined="20+ Joined"
        />
      </div>
      <div className="flex mt-10 md:w-[60%] sm:w-full lg:w-[700px] lg:h-[450px] lg:-mt-60 xl:-60 p-5">
        <div className="bg-green-50 h-full w-full rounded-3xl flex flex-col items-start lg:p-20 lg:opacity-90 backdrop-blur-sm backdrop-filter backdrop-blur-8  p-10 text-center text-white justify-center gap-3">
          <h2 className=" text-[30px] text-start lg:text-[60px] leading-[60px] ">
            <span className="font-bold">Feeling Lost</span> and Not knowing the
            Way?
          </h2>
          <p className="lg:max-w-[600px] max-w-[300px] md:max-w-[400px] text-[12px] lg:text-[15px] md:text-[15px] text-start">
            Technology uses augmented reality as a guide to your hiking trail in
            the forest to the top of the mountain. Already supported by the
            latest technology without an internet connection
          </p>
        </div>
      </div>
    </div>
  );
}

export default Camp;
