import React from "react";
import Project1 from "../../public/project1.png";
import Project2 from "../../public/project2.png";

function Project() {
  return (
    <div className="py-10">
      <div className=" px-10">
        {/*  */}
        <h2>Project</h2>
        <div className="flex flex-col sm:flex-row gap-10 mt-11">
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <img src={Project1} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Furniture store landing page
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Responsive HTML/CSS layout for online furniture store. HTML5, CSS3
              (SCSS)
            </p>
            <div className="flex mt-12 gap-2">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                Live preview
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                Checkout github
              </button>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <img src={Project2} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Designer furniture store landing page
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Responsive HTML/CSS layout for online store of designer furniture.
              HTML5, CSS3 (SCSS)
            </p>
            <div className="flex gap-2 mt-12">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                Live preview
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                Checkout github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
