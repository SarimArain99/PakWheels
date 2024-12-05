import Image from "next/image";
import React from "react";

function Brands() {
  const brands = [
    { id: "1", name: "Toyota" },
    { id: "2", name: "Honda" },
    { id: "3", name: "Ford" },
    { id: "4", name: "Chevrolet" },
    { id: "5", name: "Nissan" },
    { id: "6", name: "BMW" },
    { id: "7", name: "Mercedes-Benz" },
    { id: "8", name: "Tesla" },
    { id: "9", name: "Audi" },
    { id: "10", name: "Kia" },
    { id: "11", name: "Hyundai" },
    { id: "12", name: "Volkswagen" },
    { id: "13", name: "Subaru" },
    { id: "14", name: "Mazda" },
    { id: "15", name: "Lexus" },
    { id: "16", name: "Jaguar" },
    { id: "17", name: "Land Rover" },
    { id: "18", name: "Porsche" },
    { id: "19", name: "Ferrari" },
    { id: "20", name: "Lamborghini" },
    { id: "21", name: "Toyota" },
    { id: "22", name: "Honda" },
    { id: "23", name: "Ford" },
    { id: "24", name: "Chevrolet" },
    { id: "25", name: "Nissan" },
    { id: "26", name: "BMW" },
    { id: "27", name: "Mercedes-Benz" },
    { id: "28", name: "Tesla" },
    { id: "29", name: "Audi" },
    { id: "30", name: "Kia" },
    { id: "31", name: "Hyundai" },
    { id: "32", name: "Volkswagen" },
    { id: "33", name: "Subaru" },
    { id: "34", name: "Mazda" },
    { id: "35", name: "Lexus" },
    { id: "36", name: "Jaguar" },
    { id: "37", name: "Land Rover" },
    { id: "38", name: "Porsche" },
    { id: "39", name: "Ferrari" },
    { id: "40", name: "Lamborghini" },
  ];

  return (
    <div className="bg-[#f2f3f3] px-20 py-10">
      <h1 className="text-3xl font-bold ml-10">New Cars by Make</h1>
      <div className="grid grid-cols-5 gap-5 mb-10 p-10">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center flex-col p-2 duration-500"
          >
            <Image
              src="/suzuki.png"
              alt="Cars"
              width={1000}
              height={1000}
              className="h-10 w-10"
            />
            <p>{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
