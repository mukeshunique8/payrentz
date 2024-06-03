import React from "react";
import Image from "next/image";

export default function RoundImageCard({
  imgsrc,
  imgalt,
  name,
  imgSizes = "w-[83px] h-[83px] md:w-[135px] md:h-[135px]",
  textStyle = "text-[12px] md:text-[18px] text-b1",
  imgStyle = "",
  imgGrad,
  imgsrc2,
  imgsrc2Sizes = "",
  imgContent,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer  justify-start items-center flex-col gap-[10px] md:gap-[22px]"
    >
      <div className={`relative cursor-pointer overflow-hidden  ${imgSizes}`}>
        <Image
          className="object-cover hover:scale-110 hover:transition-all hover:duration-300 rounded-full"
          src={imgsrc}
          alt={imgalt}
          fill
          sizes="100%"
        />

        {imgGrad && (
          <div
            className={`absolute inset-0 flex justify-center items-center rounded-full ${imgStyle}`}
          >
            {imgsrc2 && (
              <div className={`relative ${imgsrc2Sizes}`}>
                <Image
                  className="object-cover rounded-full"
                  src={imgsrc2}
                  alt={imgalt}
                  fill
                  sizes="100%"
                />
              </div>
            )}
            {imgContent && (
              <div className="flex justify-center items-center">
                <p className=" cursor-pointer text-white font-bold text-[12px] md:text-[24px]">
                  +{imgContent}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <p
        className={`${textStyle} cursor-pointer text-center overflow-hidden text-ellipsis md:text-nowrap font-bold`}
      >
        {name}
      </p>
    </div>
  );
}
