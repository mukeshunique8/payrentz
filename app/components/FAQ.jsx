import React from "react";
import Image from 'next/image';
import Accordions from "../UI Elements/Accordians";

export default function FAQ() {
  return (
    <div className="w-full max-w-[1440px]  mx-auto flex justify-center items-center">
      <div className="w-full flex flex-col md:flex-row mx-[20px] my-[30px] md:mx-[118px] md:my-[50px] gap-[20px] md:gap-[90px] justify-center items-center ">
        <div className=" w-full  md:w-1/2 flex flex-col gap-[27px]  md:justify-start md:items-start">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start  gap-[13px]">
            <h3 className="text-blue text-[18px] leading-[21px] font-extrabold md:leading-[32px] md:text-[28px]">
              Frequently Asked Questions
            </h3>
            <p className="text-b1 text-[12px] text-center leading-[14px] font-medium md:leading-[18px] md:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit turpis
            </p>
          </div>
          <div className="hidden md:flex relative w-[351px] h-[370px]">
          <Image src="/Faq.svg" fill sizes="100%" />

          </div>
        </div>

        <div className=" w-full  md:w-1/2 rounded-[12px] bg-[#F6FAFF] px-[20px] py-[30px] md:px-[45px] md:py-[50px]">
            <Accordions/>

        </div>
      </div>
    </div>
  );
}
