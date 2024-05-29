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
    <div>
      <Navbar />
      <Navbar2 />
      <Path />
      <FixedLayout/>
     
      <Switches />
      <Display ads={adsData1} />

      <Footer />
    </div>
  );
}
