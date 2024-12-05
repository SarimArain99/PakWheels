import Image from "next/image";
import React from "react";

function BikeBrands() {
  const bikeBrands = [
    { id: "1", name: "Honda" },
    { id: "2", name: "Yamaha" },
    { id: "3", name: "Kawasaki" },
    { id: "4", name: "Suzuki" },
    { id: "5", name: "Ducati" },
    { id: "6", name: "Harley-Davidson" },
    { id: "7", name: "BMW Motorrad" },
    { id: "8", name: "Royal Enfield" },
    { id: "9", name: "KTM" },
    { id: "10", name: "Triumph" },
    { id: "11", name: "Aprilia" },
    { id: "12", name: "MV Agusta" },
    { id: "13", name: "Hero MotoCorp" },
    { id: "14", name: "Bajaj" },
    { id: "15", name: "TVS Motor" },
    { id: "16", name: "Indian Motorcycle" },
    { id: "17", name: "Benelli" },
    { id: "18", name: "Husqvarna" },
    { id: "19", name: "Vespa" },
    { id: "20", name: "Moto Guzzi" },
  ];

  return (
    <div className="px-20 py-10">
      <h1 className="text-3xl font-bold ml-10">New Bikes by Brand</h1>
      <div className="grid grid-cols-5 gap-5 mb-10 p-10">
        {bikeBrands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center flex-col p-2 duration-500"
          >
            <Image
              src="/BMW.png"
              alt=''
              width={1000}
              height={1000}
              className="h-14 w-14 bg-black rounded-full"
            />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BikeBrands;
