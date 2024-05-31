"use client";
import React, { useContext } from "react";
import Hero from "./components/Hero";
import Display from "./components/Display";
import Promise from "./components/Promise";
import Category from "./components/Category";
import Explore from "./components/Explore";
import RentAppliances from "./components/RentAppliances";
import ClientChronicles from "./components/ClientChronicles";
import FAQ from "./components/FAQ";
import { AppContext } from "../app/contexts/AppContext";

export default function Page() {
  const { showLocationModal } = useContext(AppContext);

  const adsData1 = [
    {
      productId: 1,
      imageUrl: '/1.jpg',
      title: 'Front Load Washing Machine',
      price: 650,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      productId: 2,
      imageUrl: '/2.webp',
      title: 'Washing Machine (7kg)',
      price: 500,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      productId: 3,
      imageUrl: '/3.webp',
      title: 'Refrigerator',
      price: 800,
      badgeText: 'New Arrival',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      productId: 4,
      imageUrl: '/4.webp',
      title: 'LED Smart Tv',
      price: 1800,
      badgeText: 'Special Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    
    
  ];

  return (
    <div className={`w-full relative mx-auto bg-white ${showLocationModal ? 'blur-background' : ''}`}>
      <Hero />
      <Display ads={adsData1} />
      <Promise />
      <Category />
      <Explore />
      <RentAppliances />
      <ClientChronicles />
      <FAQ />
    </div>
  );
}
