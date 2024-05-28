// Display.jsx
import React from 'react'
import Card from '../UI Elements/Card'

const ads = [
  {
    imageUrl: '/DisplayAd1.svg',
    title: 'Front Load Washing Machine' ,
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

export default function Display() {
  return (
    <div className='flex w-full mx-auto justify-center items-center max-w-[1440px] pt-[25px] pb-[35px] md:pt-[37px] md:pb-[50px] px-[10px] lg:px-[60px]'>

        <div className='flex flex-wrap w-full justify-center items-center gap-[20px] md:gap-[40px]'>

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
  )
}
