"use client"
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Display from "../components/Display";
import Filter from "./components/Filter";
import Path from "./components/Path";

export default function Page() {
  const adsData = [
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
      title: 'Refrigerator',
      price: 800,
      badgeText: 'New Arrival',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      imageUrl: '/DisplayAd1.svg',
      title: 'Microwave Oven',
      price: 200,
      badgeText: 'Special Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      imageUrl: '/DisplayAd2.svg',
      title: 'Air Conditioner',
      price: 1200,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      imageUrl: '/DisplayAd3.svg',
      title: 'Dishwasher',
      price: 700,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      imageUrl: '/DisplayAd3.svg',
      title: 'Electric Kettle',
      price: 50,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      imageUrl: '/DisplayAd2.svg',
      title: 'Vacuum Cleaner',
      price: 300,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      imageUrl: '/DisplayAd1.svg',
      title: 'Blender',
      price: 100,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      imageUrl: '/DisplayAd2.svg',
      title: 'Toaster',
      price: 30,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      imageUrl: '/DisplayAd1.svg',
      title: 'Coffee Maker',
      price: 150,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      imageUrl: '/DisplayAd3.svg',
      title: 'Food Processor',
      price: 400,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      imageUrl: '/DisplayAd3.svg',
      title: 'Rice Cooker',
      price: 80,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      imageUrl: '/DisplayAd1.svg',
      title: 'Slow Cooker',
      price: 120,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      imageUrl: '/DisplayAd2.svg',
      title: 'Air Fryer',
      price: 250,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      imageUrl: '/DisplayAd1.svg',
      title: 'Grill',
      price: 350,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      imageUrl: '/DisplayAd2.svg',
      title: 'Juicer',
      price: 200,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      imageUrl: '/DisplayAd2.svg',
      title: 'Induction Cooktop',
      price: 180,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      imageUrl: '/DisplayAd3.svg',
      title: 'Electric Grill',
      price: 220,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      imageUrl: '/DisplayAd2.svg',
      title: 'Water Purifier',
      price: 400,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    }
  ];
  


  return (
    <div >
     
      <Navbar />
      <Navbar2 />
      <Path/>
      <Filter/>
      
      <Display  ads={adsData} />
      
      <Footer />
    </div>
  );
}
