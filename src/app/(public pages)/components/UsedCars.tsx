import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function UsedCars() {
  interface Type {
    id: string;
    name: string;
  }
  const carsName: Type[] = [
    { id: "1", name: "Two Seater" },
    { id: "2", name: "600cc" },
    { id: "3", name: "Family Cars" },
    { id: "4", name: "SUVs" },
    { id: "5", name: "Sedans" },
    { id: "6", name: "Coupes" },
    { id: "7", name: "Hatchbacks" },
    { id: "8", name: "Convertibles" },
    { id: "9", name: "Electric Cars" },
    { id: "10", name: "Hybrid Cars" },
    { id: "11", name: "Luxury Cars" },
    { id: "12", name: "Sports Cars" },
    { id: "13", name: "Pickup Trucks" },
    { id: "14", name: "Off-Road Vehicles" },
    { id: "15", name: "Compact Cars" },
    { id: "16", name: "Minivans" },
    { id: "17", name: "Diesel Cars" },
    { id: "18", name: "Station Wagons" },
    { id: "19", name: "Economy Cars" },
    { id: "20", name: "Performance Cars" },
  ];

  const make: Type[] = [
    { id: "1", name: "Toyota" },
    { id: "2", name: "Honda" },
    { id: "3", name: "Ford" },
    { id: "4", name: "Chevrolet" },
    { id: "5", name: "Tesla" },
    { id: "6", name: "BMW" },
    { id: "7", name: "Mercedes-Benz" },
    { id: "8", name: "Audi" },
    { id: "9", name: "Nissan" },
    { id: "10", name: "Hyundai" },
  ];

  const carType: Type[] = [
    { id: "1", name: "SUV" },
    { id: "2", name: "Mini Van" },
    { id: "3", name: "Sedan" },
    { id: "4", name: "Coupe" },
    { id: "5", name: "Convertible" },
    { id: "6", name: "Hatchback" },
    { id: "7", name: "Wagon" },
    { id: "8", name: "Pickup Truck" },
    { id: "9", name: "Crossover" },
    { id: "10", name: "Roadster" },
    { id: "11", name: "Luxury Car" },
    { id: "12", name: "Sports Car" },
    { id: "13", name: "Diesel Car" },
    { id: "14", name: "Electric Car" },
    { id: "15", name: "Hybrid Car" },
    { id: "16", name: "Off-Road Vehicle" },
    { id: "17", name: "Microcar" },
    { id: "18", name: "Muscle Car" },
    { id: "19", name: "Performance Car" },
    { id: "20", name: "Classic Car" },
  ];

  return (
    <div className="px-20 bg-[#F2F3F3] py-5">
      <h1 className="text-3xl font-bold text-gray-700 ml-3 mb-5">
        Browse Used Cars
      </h1>

      <Tabs defaultValue="category">
        <TabsList>
          <TabsTrigger value="category">Category</TabsTrigger>
          <TabsTrigger value="city">City</TabsTrigger>
          <TabsTrigger value="make">Make</TabsTrigger>
          <TabsTrigger value="model">Model</TabsTrigger>
          <TabsTrigger value="budget">Budget</TabsTrigger>
          <TabsTrigger value="body type">Body Type</TabsTrigger>
        </TabsList>

        <TabsContent value="category">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-5 gap-5 mb-10">
                  {carsName.slice(0, 10).map((car, id) => (
                    <div
                      key={id}
                      className="bg-white flex items-center flex-col shadow-md hover:shadow-lg hover:shadow-gray-600 shadow-gray-500 p-2 duration-500"
                    >
                      <Image
                        src="/car.png"
                        alt="Cars"
                        width={1000}
                        height={1000}
                      />
                      <p>{car.name}</p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
              <CarouselItem>
                {" "}
                <div className="grid grid-cols-5 gap-5 ">
                  {carsName.slice(10, 20).map((car, id) => (
                    <div
                      key={id}
                      className="bg-white flex items-center flex-col shadow-md hover:shadow-lg hover:shadow-gray-600 shadow-gray-500 p-2 duration-500"
                    >
                      <Image
                        src="/car.png"
                        alt="Cars"
                        width={1000}
                        height={1000}
                      />
                      <p>{car.name}</p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>

        <TabsContent value="city">
          <div className="grid grid-cols-5 gap-6 0ustify-center text-2xl font-semibold">
            <p>Karachi</p>
            <p>Islamabad</p>
            <p>Lahore</p>
            <p>Hydrabad</p>
            <p>Sukkur</p>
            <p>Rawalpindi</p>
            <p>Multan</p>
            <p>Pishawar</p>
            <p>Sialkot</p>
            <p>Faisalabad</p>
          </div>
        </TabsContent>
        <TabsContent value="make">
          <div className="grid grid-cols-5 gap-5 ">
            {make.map((make, id) => (
              <div
                key={id}
                className="bg-white flex items-center flex-col shadow-md hover:shadow-lg hover:shadow-gray-600 shadow-gray-500 p-2 duration-500 h-48 w-52 justify-around"
              >
                <Image
                  src="/yamaha.png"
                  alt="Cars"
                  width={1000}
                  height={1000}
                  className="h-28 w-28"
                />
                <p className="font-bold text-lg">{make.name}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="model">
          <div className="grid grid-cols-5 gap-10 justify-center text-2xl font-semibold">
            <p>Civic</p>
            <p>Corolla</p>
            <p>Mehran</p>
            <p>City</p>
            <p>Cultus</p>
            <p>Alto</p>
            <p>Swift</p>
            <p>Passo</p>
            <p>Wagon R</p>
            <p>Vitz</p>
          </div>
        </TabsContent>
        <TabsContent value="budget">
          <div className="grid grid-cols-5 gap-10 justify-center text-2xl font-semibold">
            <p>10lac</p>
            <p>20lac</p>
            <p>30lac</p>
            <p>50lac</p>
            <p>70lac</p>
            <p>90lac</p>
            <p>1cr</p>
            <p>1.2cr</p>
            <p>1.5cr</p>
            <p>2cr</p>
            <p>More Then 2cr</p>
          </div>
        </TabsContent>
        <TabsContent value="body type">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-5 gap-5 mb-10">
                  {carType.slice(0, 10).map((car, id) => (
                    <div
                      key={id}
                      className="bg-white flex items-center flex-col shadow-md hover:shadow-lg hover:shadow-gray-600 shadow-gray-500 p-2 duration-500 h-48 w-48 justify-around"
                    >
                      <Image
                        src="/body.png"
                        alt="Cars"
                        width={1000}
                        height={1000}
                        className="h-28 w-28"
                      />
                      <p className="font-bold text-lg">{car.name}</p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-5 gap-5 ">
                  {carType.slice(10, 20).map((car, id) => (
                    <div
                      key={id}
                      className="bg-white flex items-center flex-col shadow-md hover:shadow-lg hover:shadow-gray-600 shadow-gray-500 p-2 duration-500 h-48 w-48 justify-around"
                    >
                      <Image
                        src="/body.png"
                        alt="Cars"
                        width={1000}
                        height={1000}
                        className="h-28 w-28"
                      />
                      <p className="font-bold text-lg">{car.name}</p>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default UsedCars;
