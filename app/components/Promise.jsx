import Image from "next/image";
import React from "react";

export default function Promise() {
  const items = [
    {
      imgSrc: "/PromiseDel.svg",
      imgalt: "PromiseDel",
      desc: "2-day delivery",
    },
    {
      imgSrc: "/PromiseMaint.svg",
      imgalt: "PromiseMaint",
      desc: "Service support for 6 months",
    },
    {
      imgSrc: "/PromiseVerified.svg",
      imgalt: "PromiseVerified",
      desc: "Secure transactions",
    },
  ];

  const renderItems = items.map((item, index) => (
    <div className="flex flex-col text-center  justify-center items-center">
      <div className="relative w-[44px] md:w-[36px] h-[36px] ">
        <Image
          className=" "
          src={item.imgSrc}
          alt={item.imgalt}
          fill
          sizes="100%"
        />
      </div>
      <p className="md:text-[14px] text-[14px] font-bold text-b1">
        {item.desc}
      </p>
    </div>
  ));

  return (
    <div className=" w-full mx-auto justify-center items-center max-w-[1440px] ">
      <div className=" flex flex-col rounded-[10px] mx-[20px] md:flex-row px-[20px] py-[20px] md:py-[28px] gap-[20px] md:gap-0  bg-[#f3f7ff]">
        <div className="w-full md:w-[40%] flex justify-center items-center">
          <h2 className="hidden md:flex md:font-extrabold md:text-[30px] md:leading-[35px] text-red">
            payrentz promise
          </h2>
          <h2 className=" md:hidden flex font-extrabold text-[16px] text-blue">
            With PayRentz, you get
          </h2>
        </div>

        <div className="w-full md:w-[60%] flex justify-center gap-[30px] md:justify-evenly items-center ">
          {renderItems}
        </div>
      </div>
    </div>
  );
}
