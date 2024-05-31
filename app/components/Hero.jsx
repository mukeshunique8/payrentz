import React from 'react';
import Banner1 from '../UI Elements/Banner1';
import Banner2 from '../UI Elements/Banner2';

const banners = [
  {
    titleSmall: "Delivered in",
    titleLarge: "2 days!",
    imageSrc: "/b2.svg",
    grad: "bg-gradient-to-b from-gradblue to-gradblue1",
    reverse: false,
    rating: false,
  },
  {
    titleSmall: "Google",
    titleLarge: "Weekly!",
    imageSrc: "/b3.svg",
    grad: "bg-gradient-to-b from-gradred to-gradred1",
    reverse: true,
    rating: true,
  },
];

export default function Hero() {
  return (
    <div className="max-w-[1440px] justify-center items-center px-[20px] lg:px-[60px] pt-[20px] w-full mx-auto flex flex-col lg:flex-row  gap-2 md:gap-4">
      <div className="flex w-full  lg:w-2/3">
        <Banner1 />
      </div>
      <div className=" flex flex-row w-full lg:w-1/3  lg:flex-col gap-[8px] lg:gap-4">
        {banners.map((banner, index) => (
          <Banner2
            key={index}
           
            imageSrc={banner.imageSrc}
           
          />
        ))}
      </div>
    </div>
  );
}
