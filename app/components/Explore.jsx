import React from "react";
import Image from "next/image";
import Button from "../UI Elements/Button";

export default function Explore() {
  return (
    <div className="w-full   max-w-[1440px] mx-auto justify-center items-center flex">
      <div className="w-full relative overflow-hidden   mx-[20px] my-[30px] md:mx-[150px]  flex flex-col justify-center items-center ">
        <div className=" w-full rounded-[10px]  flex  justify-end mt-[35px] md:mt-[83px] bg-gradient-to-b from-blue to-[#154593] ">
          <div className="absolute top-[0px] left-0 md:top-[40px] lg:top-[15px]  lg:left-[10%] w-[140px] h-[139px] md:w-[240px] md:h-[220px] lg:w-[312px] lg:h-[309px]">
            <Image
              className="object-contain "
              src="/girlOnChair.svg"
              alt="girlOnChair"
              fill
              sizes="100%"
            />
          </div>

          <div className="flex flex-col  w-3/5 justify-end items-start md:py-[47px] py-[17px] ml-[140px] md:ml-[240px] mr-[10px] md:gap-[20px] gap-[6px] ">
            <div>
              <h2 className="text-white text-[12px] md:text-[20px] lg:text-[32px] font-extrabold">
                Modern chairs for your living room.
              </h2>
              <h2 className="text-white text-[8px] md:text-[14px] lg:text-[24px] ">
                Contemporary style chairs, starting from ₹850.
              </h2>
            </div>
           <div>
           <Button value="Explore Furniture" />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
