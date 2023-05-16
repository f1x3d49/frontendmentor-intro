import React from "react";
import { ReactComponent as Audiophile } from "../images/client-audiophile.svg";
import { ReactComponent as Databiz } from "../images/client-databiz.svg";
import { ReactComponent as Meet } from "../images/client-meet.svg";
import { ReactComponent as Maker } from "../images/client-maker.svg";

const Hero = () => {
  return (
    <div className="flex flex-col w-full h-full bg-center">
      <header className="bg-mobile w-full h-2/4 bg-no-repeat bg-top bg-cover"></header>
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-4xl font-extrabold text-ablack ">
          Make remote work
        </h1>
        <p className="text-base text-mgray mt-5 px-10 text-center line-clamp-3">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="text-awhite bg-ablack mt-5 px-4 py-2 h-[20%] font-medium rounded-lg">
          Learn more
        </button>
        <div className="flex">
          <Databiz className="px-2" />
          <Audiophile className="px-2" />
          <Meet className="px-2" />
          <Maker className="px-2" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
