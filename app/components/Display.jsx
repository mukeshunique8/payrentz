import React from 'react';
import Card from '../UI Elements/Card';
import { useRouter,useParams,useSearchParams } from "next/navigation";

export default function Display({ ads }) {
  const router = useRouter();
  const params = useSearchParams()
  const {variant} = useParams()

  


  function handleProduct(product){
    if(variant){

      router.push(`/${variant}/${product}`)
    }
    console.log("clicked")
  }
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
            onclick={()=>handleProduct(ad.title)}
          />
        ))}
      </div>
    </div>
  );
}
