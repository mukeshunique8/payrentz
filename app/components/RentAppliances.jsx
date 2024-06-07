import React from "react";
import Card from '../UI Elements/Card'
import Display from "./Display";

export default function RentAppliances({data}) {
  
  return (
    <div className="w-full flex-col   max-w-[1440px] mx-auto justify-center items-center flex">
      <div className=" flex flex-col justify-center items-center gap-[20px] md:gap-[30px] mt-[30px]  md:mt-[80px] md:mx-[70px] ">
        <h2 className="text-blue  text-[18px] md:text-[22px] lg:text-[28px] font-extrabold">
          {" "}
          Rent Appliances{" "}
        </h2>

       

        
      </div>
      <Display  slider={true}  style="overflow-x-scroll  no-scrollbar" ads={data} />
    </div>
  );
}
