import Image from "next/image";
import React from "react";

function Comparinsion() {
  return (
    <div className="px-40 py-10 w-[1150px]">
      <div className="flex  justify-between items-center">
        <h1 className="text-3xl font-semibold my-5">Car Comparisons</h1>
        <h3 className="text-blue-700">All car comparisons</h3>
      </div>
      <div className="relative p-8 border">
        <div className="flex items-center">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/CardCar.png"
              alt="Car 1"
              width={500}
              height={500}
              className="h-40 w-72 object-cover rounded-md"
            />
            <h1 className="text-xl font-bold text-blue-700">Toyota GLI</h1>
          </div>
          <div className="flex flex-col items-center">
            <p className=" rounded-full bg-red-700 p-2 text-white h-10 w-10">
              V/S
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/CardCar.png"
              alt="Car 2"
              width={500}
              height={500}
              className="h-40 w-72 object-cover rounded-md"
            />
            <h1 className="text-xl font-bold text-blue-700">Toyota Altis</h1>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col items-center">
              <h1>Honda Civic</h1>
              <p className=" rounded-full bg-red-700 p-2 text-white h-10 w-10">
                V/S
              </p>
              <h1>Hyundai Sonata</h1>
            </div>
            <div className="h-[1px] bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <h1>Honda Civic</h1>
              <p className=" rounded-full bg-red-700 p-2 text-white h-10 w-10">
                V/S
              </p>
              <h1>Hyundai Sonata</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 items-center">
          <button className=" text-blue-700 font-medium px-20 py-3 border border-blue-700">
            View Comparison
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comparinsion;
