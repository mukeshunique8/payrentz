import React from "react";
import Button from "./Button";
import Badge2 from "./Badge2";

export default function TenureCard({ tenure, onClick, selected }) {
  return (
    <div onClick={onClick}
      className={`flex relative cursor-pointer flex-col justify-center items-center bg-white md:gap-[20px] w-[160px]  md:min-h-[170px] md:w-[130px]  md:pt-[25px] pb-[15px] pt-[15px]  rounded-[5px] ${
        selected ? "border-red border-[2px]" : "border-gray border-[1px]"
      }`}
    >
      <div className="px-[25px] cursor-pointer flex flex-col justify-center items-center">
        <p className="text-b1 font-semibold text-[12px] md:text-[15px] md:leading-[17px] cursor-pointer">
          {tenure.months}
        </p>
        <div className="flex md:flex-col flex-row justify-center text-center items-center cursor-pointer">
          <p className="md:pt-[10px] text-b1 font-bold text-[22px]  md:text-[28px] md:leading-[32px] cursor-pointer">
            {tenure.price}
          </p>
          <p className="text-b3 font-medium text-[12px] cursor-pointer">
            /month
          </p>
        </div>
      </div>
      <div className="hidden md:flex">
        <Button
          style="text-red bg-white py-[7px] px-[10px]  font-bold border-red border-[1px] text-[8px] rounded-[10px] md:text-[14px]"
          value="Pick Tenure"
        />
      </div>
      {tenure.badge && (
        <div className="absolute -top-[10px]">
          <Badge2
            text="Most Picked"
            style="px-[5px] py-[4px] text-white rounded-[5px] bg-[#2B5CAB] text-[10px] font-bold leading-[11px]"
          />
        </div>
      )}
    </div>
  );
}
