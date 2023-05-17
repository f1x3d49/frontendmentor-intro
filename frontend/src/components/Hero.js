import React from "react";
import { ReactComponent as Audiophile } from "../images/client-audiophile.svg";
import { ReactComponent as Databiz } from "../images/client-databiz.svg";
import { ReactComponent as Meet } from "../images/client-meet.svg";
import { ReactComponent as Maker } from "../images/client-maker.svg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5 w-full h-full bg-center">
      <header className="bg-mobile md:bg-desktop md:order-last w-full md:h-[85%] h-2/4 md:bg-contain bg-no-repeat bg-top bg-cover"></header>
      <div className="flex flex-col md:items-start md:mt-0 gap-8 md:h-[85%] md:ml-24 items-center mt-5">
        <h1 className="text-4xl md:text-7xl  md:w-[93%] font-extrabold tracking-wide text-ablack md:mt-20">
          Make remote work
        </h1>
        <p className="text-base text-mgray mt-5  md:w-3/4 md:px-0 px-10 md:tracking-wide text-center md:text-left md:line-clamp-3">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="text-awhite bg-ablack mt-5 px-4 py-2 md:h-12 md:w-1/3 h-[20%] font-medium rounded-xl border-2 border-ablack active:bg-awhite active:text-ablack">
          Learn more
        </button>
        <div className="flex justify-between mt-5 md:mt-24 w-full gap-4">
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
    </div>
  );
};

export default Hero;
