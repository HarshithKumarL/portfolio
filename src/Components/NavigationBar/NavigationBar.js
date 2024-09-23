import React from "react";
import "./NavigationBar.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

function NavigationBar() {
  return (
    <div className="w-full top-[40px] pt-6 pb-6 flex flex-wrap items-center justify-between lg:justify-between">
      <div className="uppercase text-lg md:text-xl">
        <a href="#0">
          <span>Harshith</span>
        </a>
      </div>

      <div className="flex justify-between space-x-4 md:space-x-6 items-center">
        <div className="border w-8 h-8 md:w-9 md:h-9 flex justify-center items-center rounded-full text-lg md:text-md transition-all duration-300 hover:border-gray-500">
          <FaGithub />
        </div>
        <div className="border w-8 h-8 md:w-9 md:h-9 flex justify-center items-center rounded-full text-lg md:text-md transition-all duration-300 hover:border-gray-500">
          <FaLinkedinIn />
        </div>
        <div className="border w-8 h-8 md:w-9 md:h-9 flex justify-center items-center rounded-full text-lg md:text-md transition-all duration-300 hover:border-gray-500">
          <GrProjects />
        </div>
      </div>

      <div className="mt-4 lg:mt-0">
        <a href="#0">
          <span className="text-sm md:text-md font-light uppercase tracking-[1px] md:tracking-[2px] inline-block">
            harshith0506@gmail.com
          </span>
        </a>
      </div>
    </div>
  );
}

export default NavigationBar;
