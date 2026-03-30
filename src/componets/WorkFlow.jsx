import React from "react";

const WorkFlow = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] mt-10 text-white">
      <div className="text-center justify-center space-y-5 py-12">
        <h1 className="text-3xl font-bold ">
          Ready to Transform Your Workflow?
        </h1>
        <p>
          Join thousands of professionals who are already using Digitools to
          work smarter.Start your free trial today.
        </p>
        <div className="flex gap-4 justify-center items-center font-bold">
          <button className="px-5 py-2 rounded-full text-purple-600 bg-white">
            Explore Products
          </button>
          <button className="px-5 py-2 rounded-full bg-none border border-white">
            View Pricing
          </button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default WorkFlow;
