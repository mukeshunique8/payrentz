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
      imageUrl: '/DisplayAd1.svg',
      title: 'Front Load Washing Machine',
      price: 650,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      imageUrl: '/DisplayAd2.svg',
      title: 'Washing Machine (7kg)',
      price: 500,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      imageUrl: '/DisplayAd3.svg',
      title: 'Washing Machine (7kg)',
      price: 500,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      imageUrl: '/DisplayAd1.svg',
      title: 'Washing Machine (7kg)',
      price: 500,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
  ];
  return (
    <div  className="">
      <Navbar />
      <Navbar2 />
      <Path />
      <FixedLayout/>
      <div className="w-full px-[20px] md:hidden flex justify-center items-center">
            <PinCode />
          </div>
     
      <Switches />
      <Display ads={adsData1} />

      <Footer />
      <div className="fixed bottom-0 md:hidden">
      <BottomBar/>
      </div>
    </div>
  );
}
