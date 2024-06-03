import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "../../UI Elements/Button";
import { useParams, useSearchParams } from "next/navigation";

export default function Path() {
  const [showFilter, setShowFilter] = useState(false);
  const { variant ,product} = useParams();
  const productName= decodeURI(product)
  
  const router = useRouter();
  const path = usePathname();
  const pathname = decodeURI(path)
  
// console.log();


  const handleHome = () => {
    router.push(`/`);
  };

  const handleShowFilter = () => {
    setShowFilter((prev) => !prev);
  };

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

  const generateBreadcrumbs = () => {
    const pathArray = pathname.split('/').filter(segment => segment);
   
    const pathComponents = pathArray.map((segment, index) => {
      const isLast = index === pathArray.length - 1;
    //   console.log(isLast);
      const href = `/${pathArray.slice(0, index + 1).join('/')}`;

      return (
        <div key={index} className="flex   items-center gap-[10px]">
          {!isLast ? (
            <h3
              onClick={() => router.push(href)}
              className="cursor-pointer"
            >
              {segment}
            </h3>
          ) : (
            <h3 className="text-gray-500 cursor-pointer">{segment}</h3>
          )}
          {!isLast && (
            <div className="relative w-[6px] h-[10px] md:w-[7px] md:h-[12px]">
              <Image
                className="object-cover rounded-[5px]"
                src="/pathArrow.svg"
                alt="pathArrow"
                fill
                sizes="100%"
              />
            </div>
          )}
        </div>
      );
    });

    return pathComponents;
    
  };

  return (
    <div className="flex w-full mx-auto justify-center items-center max-w-[1440px]">
      <div className="w-full md:px-[60px] flex flex-col justify-center items-center md:items-start md:justify-start">
        {/* Path Detail */}
        <div className="flex  flex-wrap text-[16px] w-full border-t-0 border-l-0 border-r-0 border-[1px] border-b-gray md:px-0 px-[20px] py-[25px] md:pt-[30px] md:pb-[20px] leading-[18px] font-medium justify-between items-center text-b3">
          <div className="flex truncate  gap-[10px]">
            <h3 onClick={handleHome} className="cursor-pointer">
              Home
            </h3>
            <div className="flex truncate items-center gap-[10px]">
              <div className="relative w-[6px] h-[10px] md:w-[7px] md:h-[12px]">
                <Image
                  className="object-cover rounded-[5px]"
                  src="/pathArrow.svg"
                  alt="pathArrow"
                  fill
                  sizes="100%"
                />
              </div>
              {generateBreadcrumbs()}
            </div>
          </div>
          <div className="hidden ">{renderFilterButton}</div>
        </div>
      </div>
    </div>
  );
}
