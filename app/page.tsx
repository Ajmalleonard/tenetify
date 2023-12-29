import Camp from "@/components/Camp";
import FeaturedTours from "@/components/FeaturedTours";
import Feutures from "@/components/Feutures";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Feedback from "@/components/Navs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <FeaturedTours />
      <Guide />
      <Feutures />
      <GetApp />
    </>
  );
}
