import React from "react";
import Image from "next/image";
import RoundImageCard from "../UI Elements/RoundImageCard"
import { useRouter } from "next/navigation";

export default function Category() {

  const RentItems = [
    { name: "Refrigerator", imgsrc: "/CatRef.svg", imgalt: "CatRef", category: "appliances" },
    { name: "Air Conditioner", imgsrc: "/CatAir.svg", imgalt: "Air Conditioners", category: "appliances" },
    { name: "Television", imgsrc: "/CatTel.svg", imgalt: "Televisions", category: "appliances" },
    { name: "Washing Machine", imgsrc: "/CatWash.svg", imgalt: "Washing Machines", category: "appliances" },
    { name: "Microwave", imgsrc: "/CatWash.svg", imgalt: "Microwave", category: "appliances" },
    { name: "Dining Table", imgsrc: "/CatMat.svg", imgalt: "Dining Table", category: "furniture" },]

  const router = useRouter()
  function handleRoute(item) {
    if (item === "Wooden Cot" ||  item === "Sofa"||item === "Mattress") {
      console.log(item.name)
      router.push(`/furniture?filter=${item}`);
    }else
    router.push(`/appliances?filter=${item}`);
    // console.log("cli");
    console.log(item)
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
