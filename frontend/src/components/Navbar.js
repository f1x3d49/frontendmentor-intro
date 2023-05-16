import React, { useState } from "react";
import Logo from "../images/logo.svg";
import { ReactComponent as Hamburger } from "../images/icon-menu.svg";
import { ReactComponent as Close } from "../images/icon-close-menu.svg";
import FeaturesDropdown from "./FeaturesDropdown";
import CompanyDropdown from "./CompanyDropdown";
import MobileFeaturesDropdown from "./MobileFeaturesDropdown";
import MobileCompanyDropdown from "./MobileCompanyDropdown";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  return (
    <div className="flex justify-between items-center pt-5 pb-2 px-5 max-w-[1440px] h-auto text-md text-mgray">
      <div className="flex justify-between items-center gap-4">
        <img
          src={Logo}
          alt="logo"
          className="w-auto h-auto object-cover hover:cursor-pointer"
        />
        <ul className="hidden md:flex md:items-center md:flex-1 select-none">
          <li className="p-2 hover:cursor-pointer">
            <FeaturesDropdown />
          </li>
          <li className="p-2 hover:cursor-pointer">
            <CompanyDropdown />
          </li>
          <li className="p-2 hover:cursor-pointer hover:text-ablack">
            Careers
          </li>
          <li className="p-2 hover:cursor-pointer hover:text-ablack">About</li>
        </ul>
      </div>
      <div></div>

      <div className="hidden md:flex md:justify-between md:items-center md:gap-10 ">
        <button className="hover:cursor-pointer hover:text-ablack">
          Login
        </button>
        <button className="border-2 border-mgray rounded-xl px-4 py-2 hover:border-ablack hover:cursor-pointer hover:text-ablack">
          Register
        </button>
      </div>
      <button onClick={() => setNav(!nav)} className="block md:hidden">
        <Hamburger className="ease-out duration-500" />
      </button>
      {/* Hamburger Menu */}
      <div
        className={
          !nav
            ? "fixed flex flex-col justify-start pt-[25%] right-0 top-0 w-[60%] h-screen border-l border-l-ablack bg-awhite ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <Close
          onClick={() => setNav(!nav)}
          className={
            !nav
              ? "fixed top-6 right-6 ease-in-out duration-500 hover:cursor-pointer"
              : "fixed right-[-100%]"
          }
        />
        <div className="flex flex-col gap-4 p-6">
          <ul className="flex flex-col gap-3 select-none">
            <li className=" flex gap-2 items-center">
              <MobileFeaturesDropdown />
            </li>
            <li className=" flex gap-2 items-center">
              <MobileCompanyDropdown />
            </li>
            <li className=" hover:cursor-pointer hover:text-ablack">Careers</li>
            <li className=" hover:cursor-pointer hover:text-ablack">About</li>
          </ul>
          <div className="flex flex-col gap-3">
            <button className="hover:cursor-pointer hover:text-ablack">
              Login
            </button>
            <button className="border-2 border-mgray rounded-xl px-4 py-2 hover:border-ablack hover:cursor-pointer hover:text-ablack">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
