import React from "react";
import { useRouter } from "next/navigation";
import { AppContext } from "../contexts/AppContext";

export default function Navbar2() {
  const Appliances = [
    "Refrigerators",
    "Washing Machines",
    "Mattresses",
    "Cots",
    "Air Conditioners",
    "Sofas",
    "Televisions",
    "Laptops",
  ];
const router = useRouter()
  function handleRoute(list) {
    if (list === "Cots" ||  list === "Sofas"||list === "Mattresses") {

      router.push(`/Furniture`);
    }else
    router.push(`/Appliances`);
    // console.log("cli");
   }
 


  const renderAppliances = Appliances.map((list, index) => (
    <div onClick={()=>handleRoute(list)} className="text-white cursor-pointer  md:text-[14px] text-[12px] font-bold">
      <p className="w-full  cursor-pointer text-nowrap">{list}</p>
    </div>
  ));

  return (
    <div className="w-full  mx-auto flex justify-center items-center bg-blue py-[12px]">
      <div className="md:gap-[30px] gap-[20px] flex max-w-[1440px] no-scrollbar overflow-x-auto px-5  ">
        {renderAppliances}
      </div>
    </div>
  );
}
