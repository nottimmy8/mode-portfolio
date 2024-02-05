import React, { useState, useEffect } from "react";
import { BsBrightnessHighFill, BsBrightnessHigh } from "react-icons/bs";

function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <div className=" relative ">
        {/* Dark */}
        <div
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className="  absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]  transition-all duration-300  "
        >
          <BsBrightnessHighFill size={25} />
        </div>
        {/* light */}
        <div
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
          className="  absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "
        >
          <BsBrightnessHigh size={25} />
        </div>
      </div>
    </div>
  );
}

export default DarkMode;
