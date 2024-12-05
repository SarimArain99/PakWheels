import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="px-20 bg-[#000811] text-white">
      <div className="flex items-center justify-between pt-2 border-b border-gray-800 pb-1">
        <div className="flex items-center ">
          <svg
            className="h-5 w-5 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />{" "}
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
          <h1>Download App via SMS</h1>
        </div>
        <div className="flex items-center gap-3">
          <h2 className="text-red-600 font-serif font-semibold">اردو</h2>
          <p className="opacity-30">|</p>
          <h2>SignUp</h2>
          <p className="opacity-30">|</p>
          <h2>SignIn</h2>
        </div>
      </div>
      <div className="flex justify-between items-center pt-3">
        <Image
          src="/logo.png"
          alt="PakWheels"
          height={1000}
          width={1000}
          className="w-40 h-10"
        />
        <div className="flex gap-4 items-center">
          <select className="bg-transparent">
            <option>Used Cars</option>
          </select>
          <select className="bg-transparent">
            <option>New Cars</option>
          </select>
          <select className="bg-transparent">
            <option>Bikes</option>
          </select>
          <select className="bg-transparent">
            <option>Auto Store</option>
          </select>
          <p>Videos</p>
          <p>Forums</p>
          <p>Blogs</p>
          <select className="bg-transparent">
            <option>More</option>
          </select>
        </div>
        <button className="bg-[#b73439] text-white p-4 w-36 rounded-xl">
          <select className="bg-transparent">
            <option>Post an Ad</option>
          </select>
        </button>
      </div>
    </div>
  );
}

export default Header;
