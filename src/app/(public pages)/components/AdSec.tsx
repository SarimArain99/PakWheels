import React from "react";

function AdSec() {
  return (
    <div className="py-10 px-20">
      <h1 className="text-center text-3xl font-semibold pb-10">
        Sell Your Car on PakWheels and Get the Best Price
      </h1>
      <div className="flex justify-around items-center">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl text-blue-900 font-semibold">
            Post your Ad on PakWheels
          </h2>
          <div>
            <p>&#9989; Post your Ad for Free in 3 Easy Steps</p>
            <p>&#9989; Get Genuine offers from Verified Buyers</p>
            <p>&#9989; Sell your car Fast at the Best Price</p>
          </div>
          <button className="bg-[#b73439] text-white p-4 w-44 rounded-md">
            Post an Ad
          </button>
        </div>
        <p className="text-3xl text-blue-900">OR</p>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl text-blue-900 font-semibold">
            Try PakWheels Sell It For Me
          </h2>
          <div>
            <p>&#9989; Dedicated Sales Expert to Sell your Car</p>
            <p>&#9989; We Bargain for you and share the Best Offer</p>
            <p>&#9989;We ensure Safe & Secure Transaction</p>
          </div>
          <button className="bg-[#518ECB] text-white p-4 w-44 rounded-xl">
            Register Your Car
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdSec;
