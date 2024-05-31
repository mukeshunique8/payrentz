import React from "react";
import Image from "next/image";
import TenureCard from "../../../UI Elements/TenureCard";
import RoundImageCard from "../../../UI Elements/RoundImageCard";
import Button from "../../../UI Elements/Button";
import BottomBar from "../../../UI Elements/BottomBar";
import { useKeenSlider } from "keen-slider/react";
import PinCode from "../../../UI Elements/PinCode";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";


export default function FixedLayout() {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });

  const { variant ,product} = useParams();
  const searchParams  = useSearchParams()

  const productName= decodeURI(product)
  const productPrice = searchParams.get("price")
  const productID = searchParams.get("id")
  const productImg = searchParams.get("img")

  const router = useRouter();
  console.log(variant,decodeURI(product));
  console.log(productID);
  const cartItem ={
    id: productID,
    imgSrc: productImg,
    title: productName,
    price: productPrice,
    deposit: 2000,
    deliveryTime: "2-3 days after KYC",
    quantity: 1,
    tenure: "12+ months"
  }

  console.log();
  const images = ["/lap1.svg", "/lap2.svg", "/lap3.svg", "/lap4.svg"];
  const renderImages = images.map((image, index) => (
    <div
      key={index}
      className="relative keen-slider__slide w-[336px] h-[336px] md:w-[300px] md:h-[300px]"
    >
      <Image
        className="object-contain cursor-pointer rounded-[5px]"
        src={image}
        alt={`image-${index}`}
        fill
        sizes="100%"
      />
    </div>
  ));

  const tenures = [
    {
      months: "12+ months",
      price: "₹1800",
    },
    {
      months: "6+ months",
      price: "₹2000",
      badge: true,
    },
    {
      months: "3+ months",
      price: "₹2000",
    },
    {
      months: "1 month",
      price: "₹3000",
    },
  ];

  const renderTenures = tenures.map((tenure, index) => (
    <TenureCard key={index} tenure={tenure} />
  ));

  const terms = [
    {
      img: "/termVan.svg",
      term: "Secure Transaction",
    },
    {
      img: "/termTools.svg",
      term: "Secure Transaction",
    },
    {
      img: "/termSecure.svg",
      term: "2-day delivery",
    },
    {
      img: "/termVan.svg",
      term: "2-day delivery",
    },

    {
      img: "/termTools.svg",
      term: "Secure Transaction",
    },
  ];

  const renderTerms = terms.map((term, index) => (
    <RoundImageCard
      key={index}
      imgsrc={term.img}
      name={term.term}
      imgSizes="w-[44px] h-[44px] md:w-[70px] md:h-[70px]"
      textStyle="font-semibold text-[10px] md:text-[11px] text-b1"
    />
  ));

  return (
    <div className="w-full relative bg-lblue md:bg-transparent flex flex-col md:flex-row max-w-[1440px] gap-[30px] mx-auto px-[20px] py-[30px] md:px-[60px]">
      {/* Left Side: Images */}
      <div className="w-full hidden  items-center justify-center md:w-[50%] md:grid md:grid-cols-2 md:justify-start md:items-start md:gap-[20px]">
        {renderImages}
      </div>
      <div
        ref={sliderRef}
        className="w-full no-scrollbar  overflow-scroll  keen-slider justify-start flex md:hidden"
      >
        {renderImages}
      </div>

      {/* Right Side: Fixed Content */}
      <div className="md:w-[620px] w-full flex  md:relative">
        <div className="w-full flex flex-col justify-start items-start   ">
          <h3 className="md:pl-[20px] pb-[15px] text-b1 text-[24px] md:text-[32px] font-extrabold">
            Laptop i5 Core
          </h3>
          <div className="w-full bg-lblue rounded-[10px] md:px-[20px]  md:pb-[30px] flex flex-col justify-start">
            <div className="flex w-full justify-between md:justify-end">
              <h3 className="flex md:hidden font-bold text-b1 text-[18px]  py-[20px]">
                Pick Tenure
              </h3>
              <h3 className="flex  font-bold  text-blue text-[14px] underline underline-offset-2 self-end  py-[20px]">
                Compare Tenures
              </h3>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="md:flex grid grid-cols-2 gap-[10px] w-full flex-wrap justify-between items-center  ">
                {renderTenures}
              </div>
              <div className="flex md:flex-row flex-col items-center justify-center gap-[20px] w-full bg-white border-gray border-[1px] rounded-[5px] px-[10px] py-[25px]">
                <div className="flex items-center w-full md:w-[35%] px-[20px] md:px-0 justify-between flex-row md:flex-col">
                  <div className="flex flex-col md:flex-row items-center md:gap-[10px]   ">
                    <h3 className="font-medium text-b1 text-[12px] md:text-[14px]">
                      Security Deposit
                    </h3>
                    <h3 className="font-bold text-b1 text-[22px] md:text-[20px]">
                      ₹4000
                    </h3>
                  </div>
                  <div className="w-[1px] h-full md:hidden flex border-l-gray border-l-[1px] "></div>
                  <div className="flex flex-col md:flex-row items-center md:gap-[10px] ">
                    <h3 className="font-medium text-b1 text-[12px] md:text-[14px]">
                      Handling Charge
                    </h3>
                    <h3 className="font-bold text-b1  text-[22px] md:text-[20px]">
                      ₹300
                    </h3>
                  </div>
                </div>
                <div className="w-[1px] h-full hidden md:flex border-l-gray border-l-[1px] "></div>

                <div className="flex px-[20px] md:px-0 w-full md:w-[65%] flex-col  text-[#858585] text-[10px] md:text-[12px] gap-[9px] md:gap-[12px] font-medium">
                  <h3>
                    Security Deposit is refundable on return of the product.
                  </h3>
                  <h3>
                    Handling Charge is non-refundable - to cover delivery,
                    pickup, installation & service.
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[13px] md:gap-[30px]">
                {renderTerms}
              </div>
            </div>
          </div>
          <div className="w-full hidden md:flex justify-center items-center">
            <PinCode />
          </div>

          <div className="w-full hidden md:flex justify-center items-center">
            <BottomBar item={cartItem} />
            {/* <BottomBar  /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
