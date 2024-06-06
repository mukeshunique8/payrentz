import React from "react";
import Image from "next/image";
import RoundImageCard from "../UI Elements/RoundImageCard"
import { useRouter } from "next/navigation";

export default function Category() {

  const RentItems = [
    {
      name: "Refrigerators",
      imgsrc: "/CatRef.svg",
      imgalt: "CatRef",
    },
    
    {
      name: "Washing Machines",
      imgsrc: "/CatWash.svg",
      imgalt: "Washing Machines",
    },
    {
      name: "Mattresses",
      imgsrc: "/CatMat.svg",
      imgalt: "Mattresses",
    },
    
    {
      name: "Cots",
      imgsrc: "/CatCot.svg",
      imgalt: "Cots",
    },
    {
      name: "Air Conditioners",
      imgsrc: "/CatAir.svg",
      imgalt: "Air Conditioners",
    },
    {
      name: "Televisions",
      imgsrc: "/CatTel.svg",
      imgalt: "Televisions",
    },
  ];

  const router = useRouter()
  function handleRoute(item) {
    if (item === "Cots" ||  item === "Sofas"||item === "Mattresses") {

      router.push(`/Furniture`);
    }else
    router.push(`/Appliances`);
    // console.log("cli");
   }
 

  const renderCategory = RentItems.map((item, index) => (
    <RoundImageCard
    onClick={()=>handleRoute(item.name)}
    hover=" hover:scale-110 hover:transition-all hover:duration-700"
      key={index}
      imgsrc={item.imgsrc}
      imgalt={item.imgalt}
      name={item.name}

      imgSizes="w-[83px] h-[83px] md:w-[135px] md:h-[135px]"
      textStyle="text-[12px] md:text-[18px] text-b1" 

    
    />
  ));

  return (
    <div className="w-full mx-auto max-w-[1440px] flex justify-center items-center">
      <div className=" mx-[20px] my-[30px] lg:mx-[60px] md:my-[50px] flex flex-col justify-center items-center gap-[20px] md:gap-[60px] ">
        <div className="flex justify-center items-center">
          <p className="text-blue text-[18px] font-extrabold md:hidden">
            Shop by Category
          </p>
          <p className="text-blue text-[28px] font-extrabold hidden md:flex">
            Rent by Category
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-[20px] md:gap-[60px]">
            {renderCategory}
        </div>
      </div>
    </div>
  );
}
