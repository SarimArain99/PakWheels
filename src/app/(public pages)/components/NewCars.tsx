import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function NewCars() {
  interface Type {
    id: string;
    name: string;
    price: number;
    city: string;
  }
  const carsData: Type[] = [
    {
      id: "11",
      name: "Mercedes-Benz",
      price: 8000000,
      city: "Gujranwala",
    },
    { id: "12", name: "Ferrari 488", price: 7000000, city: "Bahawalpur" },
    { id: "13", name: "Toyota Hilux", price: 3500000, city: "Sukkur" },
    { id: "14", name: "Jeep Wrangler", price: 4500000, city: "Abbottabad" },
    { id: "15", name: "Honda Fit", price: 1200000, city: "Sargodha" },
    { id: "16", name: "Nissan Serena", price: 2200000, city: "Sheikhupura" },
    {
      id: "17",
      name: "Toyota Land Cruiser",
      price: 2500000,
      city: "Rahim Yar Khan",
    },
    { id: "18", name: "Volvo V60", price: 3000000, city: "Mardan" },
    { id: "19", name: "Suzuki Cultus", price: 1000000, city: "Gujrat" },
    { id: "20", name: "Lamborghini Huracan", price: 6000000, city: "Mirpur" },
  ];

  return (
    <div className="px-20 py-10 bg-[#F2F3F3]">
      <Tabs defaultValue="popular">
        <TabsList>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="new launched">New Launched</TabsTrigger>
        </TabsList>
        <TabsContent value="popular">
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
                        src="/CardCar3.png"
                        alt={car.name}
                        width={1000}
                        height={1000}
                        className="h-24 w-56 object-cover rounded-md transform scale-x-[-1]"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-blue-800">
                          {car.name}
                        </h3>
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
                <div className="grid grid-cols-5 gap-4 py-5 items-center">
                  {carsData.slice(0, 5).map((car) => (
                    <div
                      key={car.id}
                      className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                    >
                      <Image
                        src="/CardCar3.png"
                        alt={car.name}
                        width={1000}
                        height={1000}
                        className="h-24 w-56 object-cover rounded-md transform scale-x-[-1]"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-blue-800">
                          {car.name}
                        </h3>
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
        </TabsContent>
        <TabsContent value="upcoming">
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
                        src="/CardCar3.png"
                        alt={car.name}
                        width={1000}
                        height={1000}
                        className="h-24 w-56 object-cover rounded-md transform scale-x-[-1]"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-blue-800">
                          {car.name}
                        </h3>
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
                <div className="grid grid-cols-5 gap-4 py-5 items-center">
                  {carsData.slice(0, 5).map((car) => (
                    <div
                      key={car.id}
                      className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                    >
                      <Image
                        src="/CardCar3.png"
                        alt={car.name}
                        width={1000}
                        height={1000}
                        className="h-24 w-56 object-cover rounded-md transform scale-x-[-1]"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-blue-800">
                          {car.name}
                        </h3>
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
        </TabsContent>
        <TabsContent value="new launched">
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
                        src="/CardCar3.png"
                        alt={car.name}
                        width={1000}
                        height={1000}
                        className="h-24 w-56 object-cover rounded-md transform scale-x-[-1]"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-blue-800">
                          {car.name}
                        </h3>
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
                <div className="grid grid-cols-5 gap-4 py-5 items-center">
                  {carsData.slice(0, 5).map((car) => (
                    <div
                      key={car.id}
                      className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                    >
                      <Image
                        src="/CardCar3.png"
                        alt={car.name}
                        width={1000}
                        height={1000}
                        className="h-24 w-56 object-cover rounded-md transform scale-x-[-1]"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-blue-800">
                          {car.name}
                        </h3>
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
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default NewCars;
