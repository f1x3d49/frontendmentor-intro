import React from "react";
import { ReactComponent as Audiophile } from "../images/client-audiophile.svg";
import { ReactComponent as Databiz } from "../images/client-databiz.svg";
import { ReactComponent as Meet } from "../images/client-meet.svg";
import { ReactComponent as Maker } from "../images/client-maker.svg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5 w-full h-full bg-center">
      <header className="bg-mobile md:bg-desktop md:order-last w-full md:h-[85%] h-2/4 md:bg-contain bg-no-repeat bg-top bg-cover"></header>
      <div className="flex flex-col md:items-start md:mt-0 md:h-[85%] items-center mt-5">
        <h1 className="text-4xl md:text-6xl md:truncate  font-extrabold text-ablack md:mt-28">
          Make remote work
        </h1>
        <p className="text-base text-mgray mt-5 px-10 text-center md:text-left line-clamp-3">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="text-awhite bg-ablack mt-5 px-4 py-2 h-[20%] font-medium rounded-lg">
          Learn more
        </button>
        <div className="flex justify-center mt-5 w-full gap-4">
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
