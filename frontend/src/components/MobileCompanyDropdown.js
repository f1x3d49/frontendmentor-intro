import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ReactComponent as ADown } from "../images/icon-arrow-down.svg";
import { ReactComponent as AUp } from "../images/icon-arrow-up.svg";

export default function MobileCompanyDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={() => setOpen(!open)}
          className=" flex gap-2 items-center hover:cursor-pointer hover:text-ablack"
        >
          <h2>Company</h2>
          {open ? (
            <AUp className="stroke-mgray active:stroke-red-500" />
          ) : (
            <ADown className="stroke-mgray hover:stroke-ablack" />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="relative flex justify-center right-0 top-0 z-10 w-36  bg-awhite focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={
                    (active ? "bg-awhite text-blue-900" : "text-mgray",
                    " flex gap-3 px-4 py-2 text-sm font-medium")
                  }
                >
                  History
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={
                    (active ? "bg-awhite text-gray-900" : "text-mgray",
                    "flex gap-3 px-4 py-2 text-sm font-medium")
                  }
                >
                  Our Team
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={
                    (active ? "bg-awhite text-gray-900" : "text-mgray",
                    "flex gap-3 px-4 py-2 text-sm font-medium")
                  }
                >
                  Blog
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
