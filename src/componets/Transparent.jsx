import React from "react";
import { FaCheck } from "react-icons/fa";

const Transparent = () => {
  return (
    <div>
      <div>
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Simple, Transparent Pricing</h1>
          <p className="text-[#627382] font-medium">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        {/* card section */}
        <div className="flex-row md:flex justify-center items-center gap-6">
          <div className="bg-zinc-100 rounded-lg border  my-5 md:my-0 border-zinc-300 shadow-lg py-4 text-left px-10 space-y-3">
            <h2 className="text-xl font-bold">Starter</h2>
            <p className="text-[#627382]">Perfect for getting started</p>
            <p className="text-2xl font-bold">
              $0 <span className="text-[#627382] ">/month</span>
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500"></FaCheck> Access to 10 free
                tools
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500"></FaCheck>
                Basic templates
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500"></FaCheck>
                Community support
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500"></FaCheck>1 project per
                month
              </p>
            </div>
            <button className="w-full py-2 rounded-full  text-white bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] font-bold">
              Get Started Free
            </button>
          </div>
          <div className="bg-gradient-to-r  my-8 md:my-0 from-[#4F39F6] relative  to-[#9514FA] text-white rounded-lg border border-zinc-300 shadow-lg py-4 text-left px-10 space-y-3">
            <div className="rounded-full">
                <button className="px-3 py-1 text-amber-500 -top-5 right-18 rounded-full absolute bg-amber-200">Most Popular</button>
            </div>
            <h2 className="text-xl font-bold">Starter</h2>
            <p className="text-[#627382]">Perfect for getting started</p>
            <p className="text-2xl font-bold">
              $0 <span className="text-[#627382] ">/month</span>
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500"></FaCheck> Access to 10 free
                tools
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500"></FaCheck>
                Basic templates
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500"></FaCheck>
                Community support
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500"></FaCheck>1 project per
                month
              </p>
            </div>
            <button className="w-full py-2 rounded-full  text-white bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] font-bold">
              Get Started Free
            </button>
          </div>
          <div className="bg-zinc-100  my-5 md:my-0 rounded-lg border border-zinc-300 shadow-lg py-4 text-left px-10 space-y-3">
            <h2 className="text-xl font-bold">Starter</h2>
            <p className="text-[#627382]">Perfect for getting started</p>
            <p className="text-2xl font-bold">
              $0 <span className="text-[#627382] ">/month</span>
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500"></FaCheck> Access to 10 free
                tools
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500"></FaCheck>
                Basic templates
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500"></FaCheck>
                Community support
              </p>
              <p className="flex items-center gap-2">
                <FaCheck className="text-green-500"></FaCheck>1 project per
                month
              </p>
            </div>
            <button className="w-full py-2 rounded-full  text-white bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] font-bold">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparent;
