"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Filter from "../components/Filter";
import Path from "../components/Path";
import Switches from "./components/Switches";
import Display from "../../components/Display";
import ImageGallery from "./components/ImageGallery";
import ProductDetails from "./components/ProductDetails";
import FixedLayout from "./components/FixedLayout";
import BottomBar from "../../UI Elements/BottomBar";
import PinCode from "../../UI Elements/PinCode";

export default function Page() {
  const adsData1 = [
    {
      productId: 14,
      imageUrl: "/14.webp",
      title: "Wooden Coffee Table",
      price: 120,
      badgeText: "Limited Time Offer",
      badgeColor: "text-white",
      badgeBgColor: "bg-red",
    },
    {
      productId: 15,
      imageUrl: "/15.webp",
      title: "4 seater Dinning Table",
      price: 1250,
      badgeText: "Best Seller",
      badgeColor: "text-red",
      badgeBgColor: "bg-lblue",
    },
    {
      productId: 16,
      imageUrl: "/16.webp",
      title: "Fitness Bike",
      price: 350,
      badgeText: "Limited Time Offer",
      badgeColor: "text-white",
      badgeBgColor: "bg-red",
    },
    {
      productId: 17,
      imageUrl: "/17.webp",
      title: "Single Door Refrigerator",
      price: 200,
      badgeText: "Best Seller",
      badgeColor: "text-red",
      badgeBgColor: "bg-lblue",
    },
  ];

  return (
    <div className="relative">
      <Path />
      <FixedLayout />
      <div className="w-full px-[20px] md:hidden flex justify-center items-center">
        <PinCode />
      </div>

      {/* <Switches /> */}
      <div className="flex flex-col max-w-[1440px] mx-auto  justify-center items-start pt-[20px] lg:pt-[40px]">
        <h2 className="font-extrabold md:px-[60px] px-[20px] text-blue text-[16px] lg:text-[24px]">
          People Also Rented
        </h2>
        <div>

      <Display ads={adsData1} />
        </div>
      </div>

      <div className="fixed w-full bottom-0 md:hidden">
        <BottomBar />
      </div>
    </div>
  );
}
