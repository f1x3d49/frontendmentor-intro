import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import Logo from "../images/logo.svg";
import { ReactComponent as ADown } from "../images/icon-arrow-down.svg";
import { ReactComponent as AUp } from "../images/icon-arrow-up.svg";
import { ReactComponent as Hamburger } from "../images/icon-menu.svg";
import { ReactComponent as Close } from "../images/icon-close-menu.svg";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  return (
    <div className="flex justify-between items-center max-w-[1440px] h-24 text-md text-mgray">
      <div className="flex justify-between items-center gap-4">
        <img
          src={Logo}
          alt="logo"
          className="w-auto h-auto object-cover hover:cursor-pointer"
        />
        <ul className="hidden md:flex select-none">
          <li className="p-4 flex gap-1 justify-center items-center hover:cursor-pointer hover:text-ablack">
            <h2>Features</h2>
            <ADown />
          </li>
          <li className="p-4 flex gap-1 justify-center items-center hover:cursor-pointer hover:text-ablack">
            <h2>Company</h2>
            <ADown />
          </li>
          <li className="p-4 hover:cursor-pointer hover:text-ablack">
            Careers
          </li>
          <li className="p-4 hover:cursor-pointer hover:text-ablack">About</li>
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
              <h2>Features</h2>
              <ADown />
            </li>
            <li className=" flex gap-2 items-center">
              <h2>Company</h2>
              <ADown />
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
