import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { PiXLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#101727]">
        <div className="container mx-auto text-white flex-row md:flex justify-between p-10">
          {/* digitools section */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">DigiTools</h2>
            <p>
              Premium digital tools for creators, <br /> professionals, and
              businesses. Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>

          {/* product */}
          <div className="list-none space-y-3">
            <h2 className="font-bold text-2xl">Products</h2>
            <li>
              {" "}
              <a href=""></a>Features
            </li>
            <li>
              {" "}
              <a href=""></a>Pricing{" "}
            </li>
            <li>
              {" "}
              <a href=""></a>Templates{" "}
            </li>
            <li>
              {" "}
              <a href=""></a>Integrations
            </li>
          </div>
          {/* Company */}
          <div className="list-none space-y-3">
            <h2 className="text-2xl font-bold">Company</h2>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
          </div>
          {/* Resources */}
          <div className="list-none space-y-3">
            <h2 className="text-2xl font-bold">Resources</h2>
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </div>
          {/* Social Links */}
          <div className="space-y-5">
            <h2 className="text-2xl font-bold">Social Links</h2>
            <div className="flex gap-3 items-center">
              <FaYoutube className="p-3 w-12 h-12 border border-white rounded-full"></FaYoutube>
              <FaFacebook className="p-3 w-12 h-12 border border-white rounded-full"></FaFacebook>
              <PiXLogoLight className="p-3 w-12 h-12 border border-white rounded-full"></PiXLogoLight>
            </div>
          </div>
        </div>

        {/* boder section */}

        <div className="conatiner mx-auto px-15 py-8">
          <hr className="border border-1 border-gray-700" />
          <div className="flex-row md:flex justify-between text-white gap-6 my-4">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="flex gap-2">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
