"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Accordions({data,QueStyles,BtnStyles,AnsStyles}) {
  

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
            className={`${BtnStyles} flex w-full py-[10px] justify-between items-center  `}
          >
            <h2 className={`${QueStyles} cursor-pointer`}>
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
            <p className={AnsStyles}>
              {item.Answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
