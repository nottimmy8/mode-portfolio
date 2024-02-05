import React from "react";
import profile from "../../public/photo.png";

function Hero() {
  return (
    <div className="  min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-dark dark:text-white duration-200 flex justify-center items-center  ">
      <div className="container mx-auto pb-8 sm:pb-0">
        {/* text-content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className=" flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 lg:order-1 ">
            <h2 className="font-bold text-4xl">Hello, I'm Iaroslav,</h2>
            <div>
              <h2 className="font-bold text-4xl mt-1 gradiant-text">
                frontend developer
              </h2>
            </div>
            <div>
              <p className="mt-4 text-gray-400">
                Former digital-marketing specialist, seeking to apply competent
                development skills with focus on collaboration, communication,
                and passion
              </p>
            </div>
          </div>
          {/* img section */}
          <div className="order-1  lg:order-2  min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
            <img src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
