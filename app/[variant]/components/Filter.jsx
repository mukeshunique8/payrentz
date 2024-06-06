import React, { useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import RoundImageCard from "../../UI Elements/RoundImageCard";
import Button from "../../UI Elements/Button";

export default function Filter() {
  const { variant } = useParams();
  const router = useRouter();

  const searchParams = useSearchParams();
  const params = useParams();
  const category =params.variant
  const filter = searchParams.get("filter");
  const filters = filter ? filter.split(",") : ["All"];
  // console.log(filters);

  // Initialize selectedItems with filters
  const [selectedItems, setSelectedItems] = useState(filters);

  const [showAll, setShowAll] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

 // Define RentItems with categories
 const RentItems = [
  { name: "Refrigerator", imgsrc: "/CatRef.svg", imgalt: "CatRef", category: "appliances" },
  { name: "Air Conditioner", imgsrc: "/CatAir.svg", imgalt: "Air Conditioners", category: "appliances" },
  { name: "Television", imgsrc: "/CatTel.svg", imgalt: "Televisions", category: "appliances" },
  { name: "Washing Machine", imgsrc: "/CatWash.svg", imgalt: "Washing Machines", category: "appliances" },
  { name: "Microwave", imgsrc: "/CatWash.svg", imgalt: "Microwave", category: "appliances" },
  { name: "Dining Table", imgsrc: "/CatMat.svg", imgalt: "Dining Table", category: "furniture" },
  { name: "Sofa", imgsrc: "/CatSofa.svg", imgalt: "Sofa", category: "Sofa" },
  { name: "Mattress", imgsrc: "/CatMat.svg", imgalt: "Mattresses", category: "furniture" },
  { name: "Iron Cot", imgsrc: "/CatCot.svg", imgalt: "Iron Cot", category: "furniture" },
  { name: "Coffee Table", imgsrc: "/CatCot.svg", imgalt: "Coffee Table", category: "furniture" },
  { name: "Wooden Cot", imgsrc: "/CatCot.svg", imgalt: "Wooden Cot", category: "furniture" },
  { name: "TV Unit", imgsrc: "/CatTVUnit.webp", imgalt: "TV Unit", category: "furniture" },
  { name: "Exercise Bike", imgsrc: "/CatBike.webp", imgalt: "Exercise Bike", category: "fitness" },
  // { name: "Treadmill", imgsrc: "/CatTread.web", imgalt: "Treadmill", category: "combo" },
  // { name: "Treadmill", imgsrc: "/CatTread.web", imgalt: "Treadmill", category: "combo" },
  // { name: "Treadmill", imgsrc: "/CatTread.web", imgalt: "Treadmill", category: "combo" },
  // { name: "Treadmill", imgsrc: "/CatTread.web", imgalt: "Treadmill", category: "combo" },
];

  // Filter items based on the category from URL params
  const filteredItems = RentItems.filter(item => item.category === category);
  // console.log(filteredItems);

  const handleShowAll = () => {
    setShowAll(prev => !prev);
  };

  const handleShowFilter = () => {
    setShowFilter(prev => !prev);
  };

  const toggleSelection = (name) => {
    let updatedSelectedItems;
    
    if (name === "All") {
      updatedSelectedItems = selectedItems.includes("All") ? [] : ["All"];
    } else {
      if (selectedItems.includes(name)) {
        updatedSelectedItems = selectedItems.filter(item => item !== name);
      } else {
        updatedSelectedItems = selectedItems.includes("All") ? [name] : [...selectedItems, name];
      }

      // Check if all individual items are selected
      const allItemsSelected = filteredItems.every(item => updatedSelectedItems.includes(item.name));
      if (allItemsSelected) {
        updatedSelectedItems = ["All"];
      }
    }
      // Default to the first item if nothing is selected
      if (updatedSelectedItems.length === 0 && filteredItems.length > 0) {
        updatedSelectedItems = [filteredItems[0].name];
      }

    setSelectedItems(updatedSelectedItems);
    console.log(updatedSelectedItems);

    // Construct the query string based on the updated selected items
    const selectedQuery = updatedSelectedItems.includes("All") ? "" : `filter=${updatedSelectedItems.join(",")}`;
    router.push(`/${variant}?${selectedQuery}`);
  };

  const renderCategory = filteredItems.slice(0, showAll ? filteredItems.length : 3).map((item, index) => (
    <RoundImageCard
      key={index}
      hover=" hover:scale-110 hover:transition-all hover:duration-700"
      imgsrc={item.imgsrc}
      imgalt={item.imgalt}
      name={item.name}
      imgSizes="w-[46px] h-[46px] md:w-[52px] md:h-[52px]"
      textStyle={selectedItems.includes(item.name) ? "text-[12px] md:text-[14px] text-red" : "text-[12px] md:text-[14px] text-b1"}
      imgGrad={selectedItems.includes(item.name)}
      imgStyle={selectedItems.includes(item.name) ? "bg-[#ED1F28] bg-opacity-40" : ""}
      imgsrc2={selectedItems.includes(item.name) ? "/Tick.svg" : ""}
      imgsrc2Sizes="w-[18px] h-[12px] md:w-[21px] md:h-[14px]"
      onClick={() => toggleSelection(item.name)}
    />
  ));

  const renderFilterButton = (
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
    {filteredItems.length >1 &&
      <div className="w-full md:px-[60px] flex flex-col justify-center items-center md:items-start md:justify-start">
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center md:gap-[30px] md:w-full w-[90%] border-t-0 border-l-0 border-r-0 border-[1px] overflow-scroll no-scrollbar border-b-gray py-[20px]">
          <div className="flex md:flex-wrap justify-start items-start gap-[20px] md:gap-[30px]">
            <RoundImageCard
              imgsrc="/CatRef.svg"
              imgalt="CatRef"
              name="All"
              imgSizes="w-[46px] h-[46px] md:w-[52px] md:h-[52px]"
              textStyle={selectedItems.includes("All") ? "text-[12px] md:text-[14px] text-red" : "text-[12px] md:text-[14px] text-b1"}
              imgStyle={selectedItems.includes("All") ? "bg-[#ED1F28] bg-opacity-40" : ""}
              imgsrc2={selectedItems.includes("All") ? "/Tick.svg" : ""}
              imgsrc2Sizes="w-[18px] h-[12px] md:w-[21px] md:h-[14px]"
              imgGrad={selectedItems.includes("All")}
              onClick={() => toggleSelection("All")}
            />
            {renderCategory}
            {filteredItems.length>3 &&
            
            <RoundImageCard
              imgsrc="/CatRef.svg"
              imgalt="CatRef"
              name={showAll ? "Show less" : "See all"}
              imgSizes="w-[46px] h-[46px] md:w-[52px] md:h-[52px]"
              textStyle="text-[12px] md:text-[14px] text-b1 underline underline-offset-[3px]"
              imgStyle="bg-black bg-opacity-40"
              imgGrad={true}
              onClick={handleShowAll}
              imgContent={showAll ? "" : filteredItems.length-3}
            />
          }
          </div>

          {/* <div className="hidden md:flex">{renderFilterButton}</div> */}
        </div>
      </div>
  }
    </div>
  );
}
