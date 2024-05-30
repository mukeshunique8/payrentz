"use client";
import React, { useState, useContext } from "react";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Display from "./components/Display";
import Promise from "./components/Promise";
import Category from "./components/Category";
import Explore from "./components/Explore";
import RentAppliances from "./components/RentAppliances";
import ClientChronicles from "./components/ClientChronicles";
import FAQ from "./components/FAQ";
import Location from "./components/Location";
import { useRouter } from "next/navigation";
import { AppContext } from "../app/contexts/AppContext";

export default function Page() {
  const {showLocationModal, setShowLocationModal} = useContext(AppContext);

  function handleCloseLocation() {
    setShowLocationModal(false);
  }
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
    <div className={`w-full relative mx-auto bg-white ${showLocationModal ? 'blur-background' : ''}`}>
      {showLocationModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80">
          <Location onClose={handleCloseLocation} />
        </div>
      )}
      <Navbar />
      <Navbar2 />
      <Hero />
      <Display ads={adsData1} />
      <Promise />
      <Category />
      <Explore />
      <RentAppliances />
      <ClientChronicles />
      <FAQ />
      <Footer />
    </div>
  );
}
