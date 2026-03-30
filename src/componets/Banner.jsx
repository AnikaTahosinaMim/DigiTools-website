import React from "react";
import { IoTriangleSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto my-8 p-4">
        {/* img and text  */}
        <div className="flex-row md:flex items-center justify-between">
          <div>
            <div className="flex  items-center">
              <span className="px-2 py-1 bg-[#E1E7FF] rounded-full ">
                <img src="/assets/Ractangle 3.png" alt="" />
                <p className="bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] text-transparent bg-clip-text">
                  New: AI-Powered Tools Available
                </p>
              </span>
            </div>
            <div className="space-y-3">
              <h1 className="text-[62px] font-extrabold">
                Supercharge Your <br /> Digital Workflow
              </h1>
              <p className="text-[#627382]">
                Access premium AI tools, design assets, templates, and
                productivity <br /> software—all in one place. Start creating
                faster today. <br /> Explore Products
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
            <img src="/public/assets/banner.png" alt="" />
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
          <div>
            <h1 className="text-4xl font-bold text-white">200+</h1>
            <p className="text-[#FFFFFF] font-medium text-[24px]">
              Premium Tools
            </p>
          </div>
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
