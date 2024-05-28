import React from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Button from "../UI Elements/Button";

export default function Location({ onClose }) {
  const locations = [
    {
      city: "Chennai",
      imgsrc: "/Chennai.svg",
      imgalt: "Chennai",
    },
    {
      city: "Coimbatore",
      imgsrc: "/Chennai.svg",
      imgalt: "Coimbatore",
    },
    {
      city: "Banglore",
      imgsrc: "/Chennai.svg",
      imgalt: "Banglore",
    },
  ];

  const renderLocation = locations.map((location, index) => (
    <div
      key={index}
      className="flex  cursor-pointer justify-start items-center flex-col gap-[10px]"
    >
      <div className="relative  cursor-pointer  w-[40px] h-[40px]  md:w-[80px] md:h-[80px]  ">
        <Image
          className="object-cover rounded-[50%] "
          src={location.imgsrc}
          alt={location.imgalt}
          fill
          sizes="100%"
        />
      </div>
      <p className="text-[#1D1D1D]  cursor-pointer text-[12px] md:text-[14px] font-semibold">
        {location.city}
      </p>
    </div>
  ));

  return (
    <div className="w-full rounded-[20px] bg-white p-[20px] md:p-[60px] max-w-[1153px] gap-[53px] mx-auto justify-center items-center flex flex-col md:flex-row relative">
      <button className="absolute top-4 right-4 text-black" onClick={onClose}>
        <IoMdClose color="gray" size={20} />
      </button>

      <div className=" w-full hidden md:flex md:w-1/2 ">
        <div className="relative w-full h-[300px] md:w-[480px] md:h-[380px]">
          <Image
            className="cursor-pointer"
            src="/LocationImage.svg"
            alt="Location"
            fill
            sizes="100%"
          />
        </div>
      </div>
      <div className=" w-full md:w-1/2 gap-[10px] md:gap-[30px] flex justify-start items-start flex-col">
        <h3 className="text-red font-bold md:text-[24px] md:leading-[28px]">
          Choose your location
        </h3>

        <div className="flex flex-col gap-[10px] ">
          <h3 className="text-black font-semibold md:text-[18px] md:leading-[21px]">
            Enter PIN code
          </h3>

          <div className="flex justify-start pt-[10px] gap-[10px] items-center">
            <input
              className="p-[13px] border-[#E6E7E9] border-[1px] rounded-[5px] text-[#DBDBDB]"
              type="text"
              placeholder="600001"
              name="pincode"
              id="pincode"
            />
            <Button value="Proceed" />
          </div>
          <p className=" cursor-pointer text-[12px] text-red underline">
            Detect my location
          </p>
        </div>

        <div className="flex flex-col justify-start items-start  w-full border-[#DBDBDB]  gap-[20px] border-t-[1px] pt-[30px]">
          <h3 className="text-black font-semibold md:text-[18px] md:leading-[21px]">
            Pick your city
          </h3>

          <div className="flex justify-start  gap-[40px]">{renderLocation}</div>
        </div>
      </div>
    </div>
  );
}
