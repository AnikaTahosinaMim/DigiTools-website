import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div>
      <div className="flex  justify-between shadow-sm p-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] text-transparent bg-clip-text">
          DigiTools
        </h1>
        <div className="flex gap-3 list-none">
          <ul className="flex gap-3 font-semibold">
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <p>
            <CiShoppingCart></CiShoppingCart>
          </p>
          <p className="font-semibold">Login</p>
          <button className="text-sm font-bold bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] rounded-full px-4 py-2 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
