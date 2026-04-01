import React from "react";
import { FaStroopwafel } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
import { LiaBugSolid } from "react-icons/lia";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto my-8 p-4">
        {/* img and text  */}
        <div className="flex-row md:flex items-center justify-between">
          <div>
            <div className="flex  items-center">
              <span className="px-2 py-1 flex items-center gap-2 bg-[#E1E7FF] rounded-full ">
                <LiaBugSolid className=" text-[#4F39F6]"></LiaBugSolid>
                <p className="bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] text-transparent bg-clip-text">
                  New: AI-Powered Tools Available
                </p>
              </span>
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl md:text-[62px] font-extrabold">
                Supercharge Your <br /> Digital Workflow
              </h1>
              <p className="text-[#627382] text-center md:text-start">
                Access premium AI tools, design assets, templates <br />, and 
                productivity software—all in one place. <br /> Start creating
                
                faster today. Explore Products
              </p>
              <div className="flex items-center gap-3">
                <button className="px-4 font-bold text-white py-2 rounded-full bg-gradient-to-r from-[#4F39F6]  to-[#9514FA]">
                  Explore Products
                </button>
                <button className="px-4 flex items-center font-bold text  py-2 rounded-full bg-gradient-to-r from-[#4F39F6] border border-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
                  <IoTriangleSharp className="text-[#4F39F6] gap-2"></IoTriangleSharp>{" "}
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
          <div>
            <img className="my-5 md:my-0" src={banner} alt="" />
          </div>
        </div>
      </div>

      {/* tools sections */}
      <div className=" mx-auto items-center bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] py-8 px-10">
        <div className="flex-1 md:flex justify-between  mx-auto max-w-[1100px]">
          <div>
            <h1 className="text-4xl font-bold text-white">50K+</h1>
            <p className="text-[#FFFFFF] font-medium text-[24px]">
              Active Users
            </p>
          </div>
          <div className="h-0 md:h-16 items-center flex md:w-[1px] bg-white/50"></div>

          <div>
            <h1 className="text-4xl font-bold text-white">200+</h1>
            <p className="text-[#FFFFFF] font-medium text-[24px]">
              Premium Tools
            </p>
          </div>
          <div className="h-0 md:h-16 items-center flex md:w-[1px] bg-white/50"></div>
          <div>
            <h1 className="text-4xl font-bold text-white">4.9</h1>
            <p className="text-[#FFFFFF] font-medium text-[24px]">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
