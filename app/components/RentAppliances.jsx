import React from "react";
import Card from '../UI Elements/Card'

export default function RentAppliances() {
  const ads = [
    {
      imageUrl: "/DisplayAd1.svg",
      title: "Front Load Washing Machine",
      price: 650,
      badgeText: "Best Seller",
      badgeColor: "text-red",
      badgeBgColor: "bg-lblue",
    },
    {
      imageUrl: "/DisplayAd2.svg",
      title: "Washing Machine (7kg)",
      price: 500,
      badgeText: "Limited Time Offer",
      badgeColor: "text-white",
      badgeBgColor: "bg-red",
    },
    {
      imageUrl: "/DisplayAd3.svg",
      title: "Washing Machine (7kg)",
      price: 500,
      badgeText: "Best Seller",
      badgeColor: "text-red",
      badgeBgColor: "bg-lblue",
    },
    {
      imageUrl: "/DisplayAd1.svg",
      title: "Washing Machine (7kg)",
      price: 500,
      badgeText: "Limited Time Offer",
      badgeColor: "text-white",
      badgeBgColor: "bg-red",
    },
  ];
  return (
    <div className="w-full   max-w-[1440px] mx-auto justify-center items-center flex">
      <div className=" flex flex-col justify-center items-center gap-[20px] md:gap-[30px] my-[35px]  md:my-[80px] md:mx-[70px] ">
        <h2 className="text-blue text-[18px] md:text-[22px] lg:text-[28px] font-extrabold">
          {" "}
          Rent Appliances{" "}
        </h2>

        <div className="flex flex-wrap w-full justify-center items-center gap-[20px] md:gap-[40px]">
          {ads.map((ad, index) => (
            <Card
              key={index}
              imageUrl={ad.imageUrl}
              title={ad.title}
              price={ad.price}
              badgeText={ad.badgeText}
              badgeColor={ad.badgeColor}
              badgeBgColor={ad.badgeBgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
