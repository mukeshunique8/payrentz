"use client";
import React, { useEffect } from "react";
import AccessoriesDisplay from "../../components/AccessoriesDisplay";
import BASEURL from "../../utils/API";

const adsData1 = [
  {
    productId: 1,
    imageUrl: "/1.jpg",
    title: "Air Conditioner Stand",
    price: 650,
    badgeText: "Best Seller",
    badgeColor: "text-red text-[12px]",
    badgeBgColor: "bg-lblue",
    para: "Commonly bought with Air Conditioner 1 Ton Split",
  },
  {
    productId: 2,
    imageUrl: "/2.webp",
    title: "Washing Machine (7kg)",
    price: 500,
    badgeText: "Limited Time Offer",
    badgeColor: "text-white text-[12px]",
    badgeBgColor: "bg-red",
    para: "Commonly bought with Air Conditioner 1 Ton Split",
  },
  {
    productId: 3,
    imageUrl: "/3.webp",
    title: "Refrigerator",
    price: 800,
    badgeText: "New Arrival",
    badgeColor: "text-red text-[12px]",
    badgeBgColor: "bg-lblue",
    para: "Commonly bought with Air Conditioner 1 Ton Split",
  },
  {
    productId: 4,
    imageUrl: "/4.webp",
    title: "LED Smart Tv",
    price: 1800,
    badgeText: "Special Offer",
    badgeColor: "text-white text-[12px]",
    badgeBgColor: "bg-red",
    para: "Commonly bought with Air Conditioner 1 Ton Split",
  },
];

export default function CartAccessories() {
  useEffect(() => {
    const fetchAccessories = async () => {
      const guest_uuid = localStorage.getItem("guest_uuid");
      if (!guest_uuid) {
        console.error("Guest UUID not found in local storage");
        return;
      }

      try {
        const response = await BASEURL.get(`web/accessory/list/?guest_uuid=${guest_uuid}`);
      } catch (err) {
        console.error("Error fetching accessories:", err);
      }
    };

    fetchAccessories();
  }, []);
  return (
    <div>
      <AccessoriesDisplay ads={adsData1} />
    </div>
  );
}
