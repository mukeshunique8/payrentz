"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Accordions() {
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

  const [accordionOpen, setAccordionOpen] = useState(null);

  function handleAccordion(id) {
    setAccordionOpen((prevId) => (prevId === id ? null : id));
  }

  return (
    <div className="flex flex-col gap-[20px]">
      {data.map((item) => (
        <div
          className=" w-full flex flex-col justify-center  "
          key={item.Id}
        >
          <button
            onClick={() => handleAccordion(item.Id)}
            className="flex w-full py-[10px] justify-between items-center    border-b border-[#D5D9E0]"
          >
            <h2 className="text-start text-[14px] font-extrabold md:text-[18px]  text-blue leading-[21px] md:font-bold">
              {item.Question}
            </h2>

            {accordionOpen === item.Id ?( <div className="relative  w-[20px] h-[16px] md:w-[13px] md:h-[7px]">
              <Image
                className="cursor-pointer"
                src="/downArrow.svg"
                alt="Vector"
                fill
                sizes="100%"
              />
            </div>) :( <div className="relative  w-[16px] h-[20px] md:w-[7px] md:h-[13px]">
              <Image
                className="cursor-pointer"
                src="/rightArrow.svg"
                alt="Vector"
                fill
                sizes="100%"
              />
            </div>)}

           
          </button>
          <div
            className={`${
              accordionOpen === item.Id
                ? "max-h-[1000px]  duration-500 ease-in-out overflow-hidden"
                : "max-h-0  duration-500 ease-in-out overflow-hidden"
            }`}
          >
            <p className="text-[12px] md:text-[16px] py-[10px]  text-[#556987] md:leading-[30px] font-medium">
              {item.Answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
