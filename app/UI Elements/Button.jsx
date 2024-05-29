import React from "react";
import Image from "next/image";

export default function Button({
  value,
  image = false,
  imgUrl = "",
  imgSize="w-[9px] h-[9px] md:w-[13px] md:h-[13px]",
  style = "text-white bg-red text-[8px] rounded-[5px] md:text-[18px]",
  onclick
}) {
  return (
    <div
     onClick={onclick} className={`min-w-[77px] min-h-[30px] flex text-center justify-center items-center cursor-pointer py-[7px] px-[20px] gap-[10px] ${style}`}
    >
      {image && (
        <div className={`relative ${imgSize}`}>
          <Image
            className="object-cover rounded-[5px]"
            src={imgUrl}
            alt="Button Icon"
            fill
            sizes="100%"
          />
        </div>
      )}
      <a href="">{value}</a>
    </div>
  );
}
