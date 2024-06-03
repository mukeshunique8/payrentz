import React from "react";
import Card from '../UI Elements/Card'
import Display from "./Display";

export default function RentAppliances() {
  const ads = [
    {
      productId: 4,
      imageUrl: '/4.webp',
      title: 'LED Smart Tv',
      price: 1800,
      badgeText: 'Special Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      productId: 5,
      imageUrl: '/5.webp',
      title: 'Air Conditioner',
      price: 1200,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      productId: 12,
      imageUrl: '/12.webp',
      title: 'Microwave oven',
      price: 400,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      productId: 13,
      imageUrl: '/13.webp',
      title: '43 LED Smart TV',
      price: 1134,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
  ];
  return (
    <div className="w-full flex-col   max-w-[1440px] mx-auto justify-center items-center flex">
      <div className=" flex flex-col justify-center items-center gap-[20px] md:gap-[30px] mt-[30px]  md:mt-[80px] md:mx-[70px] ">
        <h2 className="text-blue text-[18px] md:text-[22px] lg:text-[28px] font-extrabold">
          {" "}
          Rent Appliances{" "}
        </h2>

       

        
      </div>
      <Display ads={ads} />
    </div>
  );
}
