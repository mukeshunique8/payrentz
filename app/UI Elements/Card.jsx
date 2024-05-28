// Card.jsx
import React from "react";
import Image from "next/image";
import Badge from "./Badge";

export default function Card({ imageUrl, title, price, badgeText, badgeColor, badgeBgColor }) {
  return (
    <div className="w-[153px]  md:w-[295px] flex flex-col justify-start gap-[10px] items-center">
      <div className="relative  w-[153px] h-[153px] md:w-[295px] md:h-[263px] ">
        <Image
          className="object-cover rounded-[5px] "
          src={imageUrl}
          alt={title}
          fill
          sizes="100%"
        />
      </div>

      <div className="flex flex-col w-full items-start justify-center gap-[10px] md:gap-[10px]">
        <Badge text={badgeText} color={badgeColor} bgColor={badgeBgColor} />

        <div className="w-full">
          <p className=" text-[10px] md:text-[18px] font-bold text-b1 md:leading-[21px] truncate text-ellipsis overflow-hidden">
            {title}
          </p>
          <p className="text-[14px] md:text-[24px] font-extrabold text-b2 md:leading-[28px]">
            ₹{price}<span className="text-[11px] md:text-[16px] font-medium text-b3">/month</span>
          </p>
        </div>
      </div>
    </div>
  );
}
