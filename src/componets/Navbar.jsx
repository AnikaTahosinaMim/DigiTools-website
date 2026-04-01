import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({ carts }) => {
  return (
    <div>
      <div className="flex-row md:flex  justify-between shadow-sm p-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#4F39F6]  to-[#9514FA] text-transparent bg-clip-text">
          DigiTools
        </h1>
        <div className="flex gap-3 list-none">
          <ul className="flex-2 md:flex gap-3 font-semibold">
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
          <div className="relative">
            <CiShoppingCart></CiShoppingCart>
            {carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {carts.length}
              </span>
            )}
            <span></span>
          </div>
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
