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

function AutoParts() {
  interface Part {
    id: string;
    name: string;
    price: number;
    availability: string;
  }

  const partsData: Part[] = [
    { id: "1", name: "Air Filter", price: 1200, availability: "In Stock" },
    { id: "2", name: "Brake Pads", price: 3000, availability: "In Stock" },
    { id: "3", name: "Car Battery", price: 8500, availability: "Out of Stock" },
    { id: "4", name: "Spark Plug", price: 450, availability: "In Stock" },
    { id: "5", name: "Oil Filter", price: 900, availability: "In Stock" },
    { id: "6", name: "Headlight", price: 5000, availability: "Limited Stock" },
    { id: "7", name: "Radiator", price: 12000, availability: "In Stock" },
    { id: "8", name: "Bumper", price: 15000, availability: "In Stock" },
    {
      id: "9",
      name: "Exhaust Pipe",
      price: 7500,
      availability: "Out of Stock",
    },
    { id: "10", name: "Wiper Blades", price: 1200, availability: "In Stock" },
  ];

  return (
    <div className="px-20 py-10 bg-[#F2F3F3]">
      <Tabs defaultValue="Sub Category">
        <TabsList>
          <TabsTrigger value="Sub Category">Sub Category</TabsTrigger>
          <TabsTrigger value="Make">Make</TabsTrigger>
          <TabsTrigger value="Model">Model</TabsTrigger>
        </TabsList>
        <TabsContent value="Sub Category">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-5 gap-4 py-5 items-center">
                  {partsData.slice(0, 5).map((part) => (
                    <div
                      key={part.id}
                      className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                    >
                      <Image
                        src="/battery.png"
                        alt={part.name}
                        width={1000}
                        height={1000}
                        className="h-24 w-56 object-cover rounded-md"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-blue-800">
                          {part.name}
                        </h3>
                        <p className="text-sm text-green-600">
                          Price: PKR {part.price.toLocaleString()}
                        </p>
                        <p
                          className={`text-sm font-semibold ${
                            part.availability === "In Stock"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {part.availability}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-5 gap-4 py-5 items-center">
                  {partsData.slice(0, 5).map((part) => (
                    <div
                      key={part.id}
                      className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                    >
                      <Image
                        src="/battery.png"
                        alt={part.name}
                        width={1000}
                        height={1000}
                        className="h-24 w-56 object-cover rounded-md"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-blue-800">
                          {part.name}
                        </h3>
                        <p className="text-sm text-green-600">
                          Price: PKR {part.price.toLocaleString()}
                        </p>
                        <p
                          className={`text-sm font-semibold ${
                            part.availability === "In Stock"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {part.availability}
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
        <TabsContent value="Make">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-5 gap-4 py-5 items-center">
                  {partsData.slice(0, 5).map((part) => (
                    <div
                      key={part.id}
                      className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                    >
                      <Image
                        src="/battery.png"
                        alt={part.name}
                        width={1000}
                        height={1000}
                        className="h-24 w-56 object-cover rounded-md"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-blue-800">
                          {part.name}
                        </h3>
                        <p className="text-sm text-green-600">
                          Price: PKR {part.price.toLocaleString()}
                        </p>
                        <p
                          className={`text-sm font-semibold ${
                            part.availability === "In Stock"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {part.availability}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-5 gap-4 py-5 items-center">
                  {partsData.slice(0, 5).map((part) => (
                    <div
                      key={part.id}
                      className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                    >
                      <Image
                        src="/battery.png"
                        alt={part.name}
                        width={1000}
                        height={1000}
                        className="h-24 w-56 object-cover rounded-md"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-blue-800">
                          {part.name}
                        </h3>
                        <p className="text-sm text-green-600">
                          Price: PKR {part.price.toLocaleString()}
                        </p>
                        <p
                          className={`text-sm font-semibold ${
                            part.availability === "In Stock"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {part.availability}
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
        <TabsContent value="Model">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="grid grid-cols-5 gap-4 py-5 items-center">
                  {partsData.slice(0, 5).map((part) => (
                    <div
                      key={part.id}
                      className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                    >
                      <Image
                        src="/battery.png"
                        alt={part.name}
                        width={1000}
                        height={1000}
                        className="h-24 w-56 object-cover rounded-md"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-blue-800">
                          {part.name}
                        </h3>
                        <p className="text-sm text-green-600">
                          Price: PKR {part.price.toLocaleString()}
                        </p>
                        <p
                          className={`text-sm font-semibold ${
                            part.availability === "In Stock"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {part.availability}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-5 gap-4 py-5 items-center">
                  {partsData.slice(0, 5).map((part) => (
                    <div
                      key={part.id}
                      className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-gray-500 duration-500"
                    >
                      <Image
                        src="/battery.png"
                        alt={part.name}
                        width={1000}
                        height={1000}
                        className="h-24 w-56 object-cover rounded-md"
                      />
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-blue-800">
                          {part.name}
                        </h3>
                        <p className="text-sm text-green-600">
                          Price: PKR {part.price.toLocaleString()}
                        </p>
                        <p
                          className={`text-sm font-semibold ${
                            part.availability === "In Stock"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {part.availability}
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

export default AutoParts;
