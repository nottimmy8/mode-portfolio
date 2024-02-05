import React from "react";
import { IoIosMenu } from "react-icons/io";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <div className=" max-w-[1200px] px-4  mx-auto bg-white dark:bg-black dark:text-white duration-200">
      <div className=" py-5">
        <div className=" flex justify-between items-center">
          {/* logo */}
          <div>
            <h1 className=" font-bold ">Timi.Dev</h1>
          </div>
          {/* Nav Items */}
          <div className=" border py-2 px-4 rounded-full shadow-md hidden md:flex">
            <ul className=" flex gap-4">
              <li>
                <a
                  className="flex items-center gap-2 hover:scale-105 hover:text-primary  "
                  href=""
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 hover:scale-105  hover:text-primary "
                  href=""
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 hover:scale-105  hover:text-primary "
                  href=""
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2 hover:scale-105  hover:text-primary "
                  href=""
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* menu Items */}
          <div className=" flex items-center gap-4">
            {/* dark mode */}
            <div className="">
              <DarkMode />
            </div>
            {/* menu */}
            <div className=" border rounded-full p-1">
              <IoIosMenu size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
