import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

function Bikes() {
  let bikesData: { id: string; name: string; price: number; city: string }[] = [
    { id: "1", name: "Yamaha YBR 125", price: 320000, city: "Lahore" },
    { id: "2", name: "Suzuki GS 150", price: 290000, city: "Karachi" },
    { id: "3", name: "Honda CB 150F", price: 350000, city: "Islamabad" },
    { id: "4", name: "Kawasaki Ninja 300", price: 800000, city: "Faisalabad" },
    {
      id: "5",
      name: "Royal Enfield Classic",
      price: 450000,
      city: "Rawalpindi",
    },
    { id: "6", name: "KTM Duke 200", price: 500000, city: "Peshawar" },
    { id: "7", name: "Benelli TNT 150", price: 380000, city: "Multan" },
    {
      id: "8",
      name: "Harley-Davidson",
      price: 950000,
      city: "Quetta",
    },
    { id: "9", name: "Suzuki Hayabusa", price: 2500000, city: "Sialkot" },
    { id: "10", name: "Honda CBR 500R", price: 1200000, city: "Hyderabad" },
  ];

  return (
    <div className="px-20 py-10 bg-[#f2f3f3]">
        <h1 className="text-3xl font-bold">Popular New Bikes</h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="grid grid-cols-5 gap-4 py-5 items-center">
              {bikesData.slice(0, 5).map((bike) => (
                <div
                  key={bike.id}
                  className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                >
                  <Image
                    src="/bike.png"
                    alt={bike.name}
                    width={1000}
                    height={1000}
                    className="h-28 w-60 object-cover rounded-md"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-blue-800">
                      {bike.name}
                    </h3>
                    <p className="text-sm text-green-600">
                      Price: PKR {bike.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                      {bike.city}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-5 gap-4 py-5 items-center">
              {bikesData.slice(5, 10).map((bike) => (
                <div
                  key={bike.id}
                  className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                >
                  <Image
                    src="/bike.png"
                    alt={bike.name}
                    width={1000}
                    height={1000}
                    className="h-28 w-60 object-cover rounded-md"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-blue-800">
                      {bike.name}
                    </h3>
                    <p className="text-sm text-green-600">
                      Price: PKR {bike.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                      {bike.city}
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

export default Bikes;
