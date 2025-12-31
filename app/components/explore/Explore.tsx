"use client";
import { useRef } from "react";
import ExploreCards from "./ExploreCards";
import TopExplore from "./TopExplore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ExploreBottomText from "./ExploreBottomText";
import ExploreCoin from "./ExploreCoin";
gsap.registerPlugin(ScrollTrigger);
const Expolore = () => {
  const exploreRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: exploreRef.current,
      start: "top 140%",
      end: "bottom 80%",
      markers: true,
      scrub: true,
      animation: gsap.fromTo(
        exploreRef.current,
        {
          scale: 0.5,
          opacity: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      ),
    });
  });
  return (
    <div ref={exploreRef} className="w-full h-full  px-2 relative">
      <div className="w-full h-full px-10 pb-40 bg-black rounded-3xl flex flex-col gap-12">
        <TopExplore />
        <ExploreCards />
        <ExploreBottomText />
        <ExploreCoin />
      </div>
    </div>
  );
};

export default Expolore;
