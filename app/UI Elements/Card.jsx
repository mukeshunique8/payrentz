// Card.jsx
import React from "react";
import Image from "next/image";
import Badge from "./Badge";

export default function Card({ imageUrl, title, price, badgeText, badgeColor, badgeBgColor,onclick }) {
  return (
    <div onClick={onclick} className="min-w-[153px]   self-start rounded-[5px]  overflow-hidden  md:min-w-[295px] flex flex-col justify-start gap-[10px] items-center">
      <div className="relative rounded-[5px]  cursor-pointer  w-[153px] h-[153px] md:w-[295px] md:h-[263px] ">
        <Image
          className="object-contain hover:scale-105  transition-all duration-500 cursor-pointer rounded-[5px] "
          src={imageUrl}
          alt={title}
          fill
          sizes="100%"
        />
      </div>

      <div className="flex flex-col w-full cursor-pointer items-start justify-center gap-[10px] md:gap-[10px]">
        <Badge text={badgeText} color={badgeColor} bgColor={badgeBgColor} />

        <div className="w-full">
          <p className=" text-[10px] cursor-pointer md:text-[18px] font-bold text-b1 md:leading-[21px] truncate text-ellipsis overflow-hidden">
            {title}
          </p>
          <p className="text-[14px] cursor-pointer md:text-[24px] font-extrabold text-b2 md:leading-[28px]">
            ₹{price}<span className="text-[11px] md:text-[16px] font-medium text-b3">/month</span>
          </p>
        </div>
      </div>
    </div>
  );
}
