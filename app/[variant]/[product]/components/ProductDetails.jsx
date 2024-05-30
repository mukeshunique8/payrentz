import React from "react";

export default function ProductDetails() {
  return (
    <div className="w-[50%] fixed right-0">
      <div className="w-full flex flex-col justify-start items-start">
        <h3 className="md:pl-[20px] py-[15px] text-b1 text-[24px] md:text-[32px] font-extrabold ">
          Laptop i5 Core
        </h3>
        <div className="w-full bg-lblue rounded-[10px] flex flex-col justify-start">
          <h3 className="font-bold text-blue text-[14px] underline underline-offset-2 self-end flex py-[20px]">
            Compare Tenures
          </h3>
        </div>
      </div>
    </div>
  );
}
