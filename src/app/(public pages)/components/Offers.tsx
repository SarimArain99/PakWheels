import Image from "next/image";
import React from "react";

function Offers() {
  interface Offer {
    id: string;
    name: string;
  }
  let offers: Offer[] = [
    { id: "1", name: "Sell It For Me" },
    { id: "2", name: "Verify Auction List" },
    { id: "3", name: "Car Inspection" },
    { id: "4", name: "Online Valuation" },
    { id: "5", name: "Finance Assistance" },
    { id: "6", name: "Instant Buy Offer" },
    { id: "7", name: "Car Warranty" },
    { id: "8", name: "Trade-In Assistance" },
    { id: "9", name: "Certified Pre-Owned Listing" },
    { id: "10", name: "Home Pickup Service" },
  ];
  return (
    <div className="px-20 py-10">
      <h1 className="text-3xl font-bold pb-10">PakWheels Offerings</h1>
      <div className="grid grid-cols-2 gap-5">
        {offers.map((offer) => (
          <div key={offer.id} className="flex border gap-2 items-center ">
            <Image src="/CardCar.png" alt="" height={1000} width={1000} className="h-24 w-44"/>
            <div>
                <h1 className="text-blue-900 text-xl font-semibold">PakWheels</h1>
                <h2 className="font-medium">{offer.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
