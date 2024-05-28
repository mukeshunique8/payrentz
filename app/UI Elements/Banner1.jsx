import React from 'react';
import Image from 'next/image';
import Button from "../UI Elements/Button";


export default function Banner1() {
  return (
    <div className="relative w-full h-[190px] md:h-[360px]    ">
      <Image
        className="object-cover rounded-[10px]"
        src="/BannerImage1.svg"
        alt="BannerImage1"
        fill
        sizes="100%"
      />

      <div className='absolute top-[50%] left-[50%] w-full -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center text-white '>

        <h2 className='lg:text-[60px] font-extrabold '>Create a great home.</h2>
        <h2 className='lg:text-[24px] font-semibold '>Customized rental solutions for you.</h2>

        <Button value="Explore Products"/>

      </div>
    </div>
  );
}
