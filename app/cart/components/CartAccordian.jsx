"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function CartAccordian({ data, QueStyles, BtnStyles, AnsStyles }) {
  // Initial state to open the first section (Your Cart)
  const [accordionOpen, setAccordionOpen] = useState(data[0].Id);
  const [completedSections, setCompletedSections] = useState([]);

  function handleAccordion(id) {
    if (accordionOpen === id) {
      setAccordionOpen(null);
      setCompletedSections((prev) => [...new Set([...prev, id])]);
    } else {
      setAccordionOpen(id);
    }
  }

  function getTextColor(id) {
    if (completedSections.includes(id)) {
      return "text-blue-500"; // Completed section color
    }
    if (accordionOpen === id) {
      return "text-black"; // Open section color
    }
    return "text-gray-500"; // Default color for unopened sections
  }

  return (
    <div className="flex w-full flex-col gap-[20px]">
      {data.map((item) => (
        <div className="w-full flex flex-col justify-start items-start" key={item.Id}>
          <button
            onClick={() => handleAccordion(item.Id)}
            className={`${BtnStyles} flex w-full py-[10px] justify-between items-center`}
          >
            <h2 className={`${QueStyles} cursor-pointer ${getTextColor(item.Id)}`}>
              {item.title}
            </h2>
          </button>
          <div
            className={`${
              accordionOpen === item.Id
                ? "max-h-[1000px] duration-500 ease-in-out overflow-hidden"
                : "max-h-0 duration-500 ease-in-out overflow-hidden"
            }`}
          >
            <p className={AnsStyles}></p>
          </div>
        </div>
      ))}
    </div>
  );
}
