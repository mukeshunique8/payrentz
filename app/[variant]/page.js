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
      productId: 6,
      imageUrl: '/6.webp',
      title: 'Dishwasher',
      price: 700,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      productId: 7,
      imageUrl: '/7.webp',
      title: 'Electric Kettle',
      price: 50,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      productId: 8,
      imageUrl: '/8.webp',
      title: 'Wooden Cot',
      price: 300,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      productId: 9,
      imageUrl: '/9.jpg',
      title: 'Queen Mattress',
      price: 100,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
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
    {
      productId: 14,
      imageUrl: '/14.webp',
      title: 'Wooden Coffee Table',
      price: 120,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      productId: 15,
      imageUrl: '/15.webp',
      title: '4 seater Dinning Table',
      price: 1250,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      productId: 16,
      imageUrl: '/16.webp',
      title: 'Fitness Bike',
      price: 350,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      productId: 17,
      imageUrl: '/17.webp',
      title: 'Single Door Refrigerator',
      price: 200,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      productId: 18,
      imageUrl: '/18.webp',
      title: 'Doubel Door Refrigerator',
      price: 180,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    },
    {
      productId: 19,
      imageUrl: '/19.webp',
      title: 'Electric Grill',
      price: 220,
      badgeText: 'Best Seller',
      badgeColor: 'text-red',
      badgeBgColor: 'bg-lblue'
    },
    {
      productId: 20,
      imageUrl: '/20.webp',
      title: 'Water Purifier',
      price: 400,
      badgeText: 'Limited Time Offer',
      badgeColor: 'text-white',
      badgeBgColor: 'bg-red'
    }
  ];
  
  


  return (
    <div >
     
     
      <Path/>
      <Filter/>
      
      <Display  ads={adsData} />
     
    </div>
  );
}
