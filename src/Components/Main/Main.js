import React from "react";
import "./Main.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

function Main() {
  return (
    <div className="min-h-screen">
      <div className="grid-container">
        <div className="column1">
          <div className="h-3/4 my-12 mx-8 border border-gray-500 rounded-sm">
            <div className="pt-10 px-10">
              <img
                src="https://www.sakshi.com/gallery_images/2024/09/5/Vijay%20GOAT%20Movie%20HD%20Images_%20%284%29.jpg"
                alt="profile_img"
                className="w-auto mx-auto rounded-sm"
              />
            </div>
            <div className="mt-8 text-center text-black">
              <h5 className="text-2xl text-white">Harshith Kumar</h5>
              <p className="uppercase text-[#ddd]">Available for Freelance</p>
            </div>
            <div className="flex w-full justify-around px-12 mt-5">
              <div className="icon-container">
                <FaGithub />
              </div>
              <div className="icon-container">
                <FaLinkedinIn />
              </div>
              <div className="icon-container">
                <GrProjects />
              </div>
            </div>
          </div>
        </div>
        <div className="column2 flex flex-col justify-start px-8">
          <h1 className="text-4xl md:text-7xl text-left leading-snug pt-12">
            Hello I'm<span className="text-[#c8f31d]"> Harshith Kumar</span>,
            Front-end React Developer
            <span> Based in Bengaluru.</span>
          </h1>
          <div className="mt-12 flex space-x-10 items-center flex-wrap">
            <div className="flex items-center mb-6">
              <h2 className="text-[70px]">2</h2>
              <p className="text-[#ddd] font-sans text-[15px] leading-7 pl-5">
                Years <br /> of Experience
              </p>
            </div>
            <div className="flex items-center mb-6 pr-12">
              <h2 className="text-[70px] relative flex items-center">
                15
                <span className="text-[35px] absolute top-1/2 transform -translate-y-1/2 ml-20">
                  +
                </span>
              </h2>
              <p className="text-[#ddd] font-sans text-[15px] leading-7 pl-10">
                Personal <br /> projects
              </p>
            </div>
            <div className="butn-presv">
              <a href="#0" className="butn butn-md skew">
                <span>Download C.V</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
