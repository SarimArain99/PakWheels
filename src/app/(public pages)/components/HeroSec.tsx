import React from "react";

function HeroSec() {
  return (
    <div className="px-20 flex flex-col items-center justify-center text-center py-32 text-white bg-gradient-to-b from-[#000811] to-[#012D62]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-semibold">Find Used Cars in Pakistan</h1>
          <h2 className="text-2xl">
            With thousands of cars, we have just the right one for you
          </h2>
        </div>

        <div className="flex rounded-lg items-center justify-center text-black">
          <div className="flex gap-40 bg-white p-3 rounded-l-md">
            <input type="text" placeholder="Car Make or Model" className="outline-none" />
            <select name="" id="" className="outline-none">
              <option value="all cities">All Cities</option>
            </select>
            <select name="" id="" className="outline-none">
              <option value="price range">Price Range</option>
            </select>
          </div>
          <button className="bg-[#3EB549] p-2 rounded-r-md w-16 items-center flex justify-center">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
