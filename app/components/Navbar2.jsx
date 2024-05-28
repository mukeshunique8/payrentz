import React from "react";

export default function Navbar2() {
  const Appliances = [
    "Refrigerators",
    "Washing Machines",
    "Mattresses",
    "Cots",
    "Air Conditioners",
    "Sofas",
    "Televisions",
    "Laptops",
  ];

  const renderAppliances = Appliances.map((list, index) => (
    <div className="text-white  md:text-[14px] text-[12px] font-bold">
      <p className="w-full text-nowrap">{list}</p>
    </div>
  ));

  return (
    <div className="w-full  mx-auto flex justify-center items-center bg-blue py-[12px]">
      <div className="md:gap-[30px] gap-[20px] flex max-w-[1440px] no-scrollbar overflow-x-auto px-5  ">
        {renderAppliances}
      </div>
    </div>
  );
}
