import React from "react";
import Image from "next/image";

export default function ImageGallery() {
const images = ["/lap1.svg","/lap2.svg","/lap3.svg","/lap4.svg"]
const renderImages = images.map((image,index)=>(
    <div className="relative w-[336px] h-[336px] md:w-[310px] md:h-[310px] ">
        
        <Image
          className="object-cover cursor-pointer rounded-[5px] "
          src={image}
          alt={image+index}
          fill
          sizes="100%"
        />

    </div>
))

  return (
    <div className="w-[50%] grid grid-cols-2 justify-start items-start gap-[20px] ">
        {renderImages}

    </div>
  )
}
