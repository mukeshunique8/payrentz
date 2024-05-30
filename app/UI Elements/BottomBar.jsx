import React from "react";
import Button from "./Button";

export default function BottomBar() {
  return (
    <div className="w-full md:gap-[10px]  border-red flex justify-center items-center">
      <Button
        value="Rent Now"
        style="md:px-[100px] px-[50px] py-[20px]  border-[2px] text-nowrap  border-red md:rounded-[5px] border-[1px] font-bold text-[18px] leading-[21px] text-white bg-red"
      />
      <Button
        value="Add To Cart"
        style="md:px-[100px] px-[50px] py-[20px] border-[2px] text-nowrap border-red md:rounded-[5px] border-[1px]  font-bold text-[18px] leading-[21px] text-red bg-white"
      />
    </div>
  );
}
