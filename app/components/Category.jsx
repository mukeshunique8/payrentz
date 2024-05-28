import React from "react";
import Image from "next/image";

export default function Category() {
  const RentItems = [
    {
      name: "Refrigerators",
      imgsrc: "/CatRef.svg",
      imgalt: "CatRef",
    },
    
    {
      name: "Washing Machines",
      imgsrc: "/CatWash.svg",
      imgalt: "Washing Machines",
    },
    {
      name: "Mattresses",
      imgsrc: "/CatMat.svg",
      imgalt: "Mattresses",
    },
    
    {
      name: "Cots",
      imgsrc: "/CatCot.svg",
      imgalt: "Cots",
    },
    {
      name: "Air Conditioners",
      imgsrc: "/CatAir.svg",
      imgalt: "Air Conditioners",
    },
    {
      name: "Televisions",
      imgsrc: "/CatTel.svg",
      imgalt: "Televisions",
    },
  ];

  const renderCategory = RentItems.map((item, index) => (
    <div key={index} className="flex justify-start items-center flex-col gap-[10px] md:gap-[22px]">
      <div className="relative  w-[83px] h-[83px]  md:w-[135px] md:h-[135px]  ">
        <Image
          className="object-cover rounded-[50%] "
          src={item.imgsrc}
          alt={item.imgalt}
          fill
          sizes="100%"
        />
      </div>
      <p className="text-b1 text-[12px] md:text-[18px] font-bold">{item.name}</p>
    </div>
  ));

  return (
    <div className="w-full mx-auto max-w-[1440px] flex justify-center items-center">
      <div className=" mx-[20px] my-[30px] lg:mx-[150px] md:my-[50px] flex flex-col justify-center items-center gap-[20px] md:gap-[60px] ">
        <div className="flex justify-center items-center">
          <p className="text-blue text-[18px] font-extrabold md:hidden">
            Shop by Category
          </p>
          <p className="text-blue text-[28px] font-extrabold hidden md:flex">
            Rent by Category
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-[20px] md:gap-[60px]">
            {renderCategory}
        </div>
      </div>
    </div>
  );
}
