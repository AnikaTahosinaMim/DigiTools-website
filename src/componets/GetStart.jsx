import React from "react";
import userImg from "../assets/user.png";
import pacKage from "../assets/package.png";

import rocket from "../assets/user.png";

const GetStart = () => {
  return (
    <div className="bg-zinc-100 ">
      <div className="py-10 my-10">
        <div className="text-center my-8">
          <h1 className="font-bold text-4xl ">Get Started in 3 Steps</h1>
          <p className="text-[#627382] font-medium">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>
        {/* card */}
        <div className="flex-row md:flex my-5 md:my-0 pb-10 justify-evenly">
          <div className="bg-white shadow-lg  my-5 md:my-0 p-5 space-y-2 rounded-lg text-center items-center justify-center">
            <div className="flex justify-end">
              <p className="bg-[#4F39F6] px-2 py-1 rounded-full ">01</p>
            </div>
            <div className="">
              <img
                className="p-2 mx-auto mt-6 h-18 w-18 rounded-full bg-zinc-200 border border-zinc-200"
                src={userImg}
                alt=""
              />
            </div>
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card <br /> required to get
              started.
            </p>
          </div>
          <div className="bg-white shadow-lg  my-5 md:my-0 p-5 space-y-2 rounded-lg text-center items-center justify-center">
            <div className="flex justify-end  my-5 md:my-0">
              <p className="bg-[#4F39F6] px-2 py-1 rounded-full ">01</p>
            </div>
            <div className="">
              <img
                className="p-2 mx-auto mt-6 h-18 w-18 rounded-full bg-zinc-200 border border-zinc-200"
                src={pacKage}
                alt=""
              />
            </div>
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card <br /> required to get
              started.
            </p>
          </div>
          <div className="bg-white shadow-lg  p-5 space-y-2 rounded-lg text-center items-center justify-center">
            <div className="flex justify-end">
              <p className="bg-[#4F39F6] px-2 py-1 rounded-full ">01</p>
            </div>
            <div className="">
              <img
                className="p-2 mx-auto mt-6 h-18 w-18 rounded-full bg-zinc-200 border border-zinc-200"
                src={rocket}
                alt=""
              />
            </div>
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card <br /> required to get
              started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
