// Card.jsx
import React, { useState } from "react";
import Image from "next/image";
import Badge from "./Badge";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


export default function AccessoriesCard({
  imageUrl,
  title,
  price,
  badgeText,
  badgeColor,
  badgeBgColor,
  onclick,
  para,
}) {
  const [isFav, setIsFav] = useState(false);
  function handleFav() {
    setIsFav((prev) => !prev);
  }

  return (
    <div className="w-[153px] rounded-[5px] relative  overflow-hidden  md:w-[256px]  flex flex-col justify-start gap-[10px] items-center">
      <div className="relative rounded-[5px]  cursor-pointer  w-[153px] h-[153px] md:w-[256px] md:h-[226px] ">
        <Image
          className="object-cover hover:scale-105  transition-all duration-500 cursor-pointer rounded-[5px] "
          src={imageUrl}
          alt={title}
          fill
          sizes="100%"
        />
      </div>

      <div className="flex flex-col w-full cursor-pointer items-start justify-center gap-[10px] md:gap-[10px]">
        <Badge text={badgeText} color={badgeColor} bgColor={badgeBgColor} />

        <div className="w-full gap-[10px] flex flex-col">
          <p className=" text-[11px] cursor-pointer md:text-[15px] font-bold text-b1 md:leading-[17px] truncate text-ellipsis overflow-hidden">
            {title}
          </p>
          <p className="text-[11px] cursor-pointer md:text-[20px] font-extrabold text-b2 md:leading-[23px]">
            ₹{price}
          </p>
          <p className="flex font-bold text-[11px] leading-[12px] text-[#858585] ">
            {para}
          </p>
        </div>
      </div>
      <div className="w-full">
        <Button
          value="Add To Cart"
          style="text-white w-full bg-blue text-[8px] rounded-[5px] py-[7px] px-[20px] md:text-[18px]"
          onClick={onclick}
        />
      </div>
      <div onClick={handleFav} className={`${isFav?" ":"bg-white"} absolute rounded-full p-1 top-[15px] right-[15px]`}>
        {isFav ? (
          <FaHeart  size={25} color="#EA0A5B" />
        ) : (
          <CiHeart size={25} color="black" />
        )}
      </div>
    </div>
  );
}
