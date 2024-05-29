import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import RoundImageCard from "../../UI Elements/RoundImageCard";
import Button from "../../UI Elements/Button";

export default function Filter() {
  const [showAll, setShowAll] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const { variant } = useParams();
  const router = useRouter();
  
  const RentItems = [
    { name: "Refrigerators", imgsrc: "/CatRef.svg", imgalt: "CatRef" },
    { name: "Televisions", imgsrc: "/CatTel.svg", imgalt: "Televisions" },
    { name: "Mattresses", imgsrc: "/CatMat.svg", imgalt: "Mattresses" },
    { name: "Cots", imgsrc: "/CatCot.svg", imgalt: "Cots" },
    { name: "Air Conditioners", imgsrc: "/CatAir.svg", imgalt: "Air Conditioners" },
    { name: "Washing Machines", imgsrc: "/CatWash.svg", imgalt: "Washing Machines" },
  ];

  // Initial state with all items selected
  const [selectedItems, setSelectedItems] = useState(RentItems.map(item => item.name));


  const handleShowAll = () => {
    setShowAll(prev => !prev);
  };

  const handleShowFilter = () => {
    setShowFilter(prev => !prev);
  };

  const toggleSelection = (name) => {
    setSelectedItems(prev => {
      if (prev.includes(name)) {
        return prev.filter(item => item !== name);
      } else {
        return [...prev, name];
      }
    });
  };
  // console.log(selectedItems);

  const toggleSelectAll = () => {
    if (selectedItems.length === RentItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(RentItems.map(item => item.name));
    }
  };

  const renderCategory = RentItems.slice(0, showAll ? RentItems.length : 3).map((item, index) => (
    <RoundImageCard
      key={index}
      imgsrc={item.imgsrc}
      imgalt={item.imgalt}
      name={item.name}
      imgSizes="w-[46px] h-[46px] md:w-[52px] md:h-[52px]"
      textStyle= {selectedItems.includes(item.name)?"text-[12px] md:text-[14px] text-red":"text-[12px] md:text-[14px] text-b1"} 
      imgGrad={selectedItems.includes(item.name)}
      imgStyle={selectedItems.includes(item.name) ? "bg-[#ED1F28] bg-opacity-40" : ""}
      imgsrc2={selectedItems.includes(item.name) ? "/Tick.svg" : ""}
      imgsrc2Sizes="w-[18px] h-[12px] md:w-[21px] md:h-[14px]"
      onClick={() => toggleSelection(item.name)}
    />
  ));

  const renderFitlerbutton = (
    <Button
      onclick={handleShowFilter}
      image={true}
      imgUrl="/ButtonFilter.svg"
      imgSize="w-[9px] h-[9px] md:w-[13px] md:h-[13px]"
      value="Filter"
      style="text-red font-bold bg-white text-[12px] rounded-[5px] border-[1px] border-red md:text-[16px]"
    />
  );

  return (
    <div className="flex w-full mx-auto justify-center items-center max-w-[1440px]">
      <div className="w-full md:px-[60px] flex flex-col justify-center items-center md:items-start md:justify-start">
       

        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center md:gap-[30px] md:w-full w-[90%] border-t-0 border-l-0 border-r-0 border-[1px] overflow-scroll no-scrollbar border-b-gray py-[20px]">
          <div className="flex md:flex-wrap justify-start items-start gap-[20px] md:gap-[30px]">
            <RoundImageCard
              imgsrc="/CatRef.svg"
              imgalt="CatRef"
              name="All"
              imgSizes="w-[46px] h-[46px] md:w-[52px] md:h-[52px]"
              textStyle="text-[12px] md:text-[14px] text-red"
              imgStyle="bg-[#ED1F28] bg-opacity-40"
              imgsrc2="/Tick.svg"
              imgsrc2Sizes="w-[18px] h-[12px] md:w-[21px] md:h-[14px]"
              imgGrad={selectedItems.length === RentItems.length?true:false}
              onClick={toggleSelectAll}
            />
            {renderCategory}
            <RoundImageCard
              imgsrc="/CatRef.svg"
              imgalt="CatRef"
              name={showAll ? "Show less" : "See all"}
              imgSizes="w-[46px] h-[46px] md:w-[52px] md:h-[52px]"
              textStyle="text-[12px] md:text-[14px] text-b1 underline underline-offset-[3px]"
              imgStyle="bg-black bg-opacity-40"
              imgGrad={true}
              onClick={handleShowAll}
              imgContent={showAll?"":RentItems.length}
            />
          </div>

          <div className="hidden md:flex">{renderFitlerbutton}</div>
        </div>
      </div>
    </div>
  );
}
