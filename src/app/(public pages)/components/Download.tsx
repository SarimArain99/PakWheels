import Image from "next/image";
import React from "react";

function Download() {
  return (
    <div className="bg-[#f2f3f3] px-20 py-10 flex justify-between items-center">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-3xl font-bold text-blue-900">
          Get The PakWheels App
        </h1>
        <p className="max-w-96">
          Buy & Sell Cars, Bikes and Auto Parts faster and better using our App
        </p>
        <div className="flex">
          <Image
            src="/play.svg"
            alt=""
            width={1000}
            height={1000}
            className="h-16 w-40"
          />
          <Image
            src="/apple.svg"
            alt=""
            width={1000}
            height={1000}
            className="h-16 w-40"
          />
          <Image
            src="/huawei.svg"
            alt=""
            width={1000}
            height={1000}
            className="h-16 w-40"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-x-5">
        <Image
          src="/qr.svg"
          alt=""
          width={1000}
          height={1000}
          className="h-20 w-20"
        />
        <h2 className="max-w-28">Scan the QR to get the App</h2>
      </div>
      <div>
        <Image src="/phone.png" alt="" width={1000} height={1000} className="w-72 h-64"/>
      </div>
    </div>
  );
}

export default Download;
