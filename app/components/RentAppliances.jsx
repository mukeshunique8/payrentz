import React from "react";
import Card from '../UI Elements/Card'
import Display from "./Display";

export default function RentAppliances() {
  const ads = [
    {
      productId: 10,
      imageUrl: '/10.webp',
      title: 'TreadMill',
      price: 2000,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      productId: 11,
      imageUrl: '/11.webp',
      title: 'Wooden Sofa',
      price: 150,
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
