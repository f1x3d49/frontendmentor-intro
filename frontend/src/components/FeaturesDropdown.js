import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ReactComponent as ADown } from "../images/icon-arrow-down.svg";
import { ReactComponent as AUp } from "../images/icon-arrow-up.svg";

export default function FeaturesDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          onClick={() => setOpen(!open)}
          className="p-4 flex gap-1 items-center hover:cursor-pointer hover:text-ablack"
        >
          <h2>Features</h2>
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
        <Menu.Items className="absolute flex flex-col justify-center items-center right-2 z-10 w-36 rounded-md bg-awhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={
                    (active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm")
                  }
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={
                    (active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm")
                  }
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={
                    (active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm")
                  }
                >
                  License
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
