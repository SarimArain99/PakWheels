import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Managed() {
  interface Type {
    id: string;
    name: string;
    price: number;
    city: string;
  }
  let carsData: Type[] = [
    { id: "1", name: "Honda Civic", price: 1500000, city: "Karachi" },
    { id: "2", name: "Suzuki Alto", price: 800000, city: "Lahore" },
    { id: "3", name: "Toyota Corolla", price: 2000000, city: "Islamabad" },
    { id: "4", name: "Toyota Fortuner", price: 3500000, city: "Rawalpindi" },
    { id: "5", name: "Honda City", price: 2500000, city: "Faisalabad" },
    { id: "6", name: "Suzuki Swift", price: 3000000, city: "Multan" },
    { id: "7", name: "Kia Picanto", price: 1800000, city: "Quetta" },
    { id: "8", name: "Toyota Prado", price: 4000000, city: "Peshawar" },
    { id: "9", name: "Tesla Model 3", price: 4500000, city: "Hyderabad" },
    { id: "10", name: "Toyota Prius", price: 3000000, city: "Sialkot" },
  ];

  return (
    <div className="px-20 py-10 bg-[#F2F3F3]">
      <h1 className="text-3xl font-bold pb-10 text-gray-700">
        Managed by PakWheels
      </h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="grid grid-cols-5 gap-4 py-5 items-center">
              {carsData.slice(0, 5).map((car) => (
                <div
                  key={car.id}
                  className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                >
                  <Image
                    src="/sportCar.png"
                    alt={car.name}
                    width={1000}
                    height={1000}
                    className="h-20 w-56 object-cover rounded-md transform scale-x-[-1]"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-blue-800">{car.name}</h3>
                    <p className="text-sm text-green-600">
                      Price: PKR {car.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                      {car.city}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-5 gap-4 py-5">
              {carsData.slice(5, 10).map((car) => (
                <div
                  key={car.id}
                  className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                >
                  <Image
                    src="/sportCar.png"
                    alt={car.name}
                    width={1000}
                    height={1000}
                    className="h-20 w-56 object-cover rounded-md transform scale-x-[-1]"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-blue-800">{car.name}</h3>
                    <p className="text-sm text-green-600">
                      Price: PKR {car.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                      {car.city}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Managed;
