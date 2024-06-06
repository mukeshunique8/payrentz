import React from "react";
import Image from "next/image";
import Accordions from "../UI Elements/Accordians";

export default function FAQ() {
  const data = [
    {
      Id: 1,
      Question: "What is the minimum rental period?",
      Answer:
        "PayRentz products can be rented for a minimum period of 3 months. PayRentz products can be rented for a minimum,",
    },
    {
      Id: 2,
      Question: "Is there an agreement?",
      Answer:
        "PayRentz products can be rented for a minimum period of 3 months. PayRentz products can be rented for a minimum,",
    },
    {
      Id: 3,
      Question: "What is considered a good page load time?",
      Answer:
        "PayRentz products can be rented for a minimum period of 3 months. PayRentz products can be rented for a minimum,",
    },
    {
      Id: 4,
      Question: "How can I terminate the agreement ?",
      Answer:
        "PayRentz products can be rented for a minimum period of 3 months. PayRentz products can be rented for a minimum,",
    },
    {
      Id: 5,
      Question: "How much rent do I need to pay and when?",
      Answer:
        "PayRentz products can be rented for a minimum period of 3 months. PayRentz products can be rented for a minimum,",
    },
    {
      Id: 6,
      Question: "How much rent do I need to pay and when?",
      Answer:
        "PayRentz products can be rented for a minimum period of 3 months. PayRentz products can be rented for a minimum,",
    },
  ];
  return (
    <div id="FAQs" className="w-full max-w-[1440px]  mx-auto flex justify-center items-center">
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
          <Accordions
            BtnStyles=" border-b-[1px] border-[#D5D9E0]"
            QueStyles="text-start text-[14px] font-extrabold md:text-[18px]  py-[5px] text-blue leading-[21px] md:font-bold"
            AnsStyles="text-[12px] md:text-[16px] py-[20px]  text-[#2D2D2D] md:leading-[30px] font-medium"
            data={data}
          />
        </div>
      </div>
    </div>
  );
}
