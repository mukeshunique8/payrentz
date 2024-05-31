"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Button from "../UI Elements/Button";
import { useRouter } from "next/navigation";
import { AppContext } from "../contexts/AppContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pincode, setPincode,showLocationModal,setShowLocationModal,city,cart  } = useContext(AppContext);

  const navlist = [
    {
      listName: "Appliances",
      src: "/NavAppliances.svg",
      srcAlt: "NavAppliances",
    },
    {
      listName: "Furniture",
      src: "/NavFurniture.svg",
      srcAlt: "NavFurniture",
    },
    {
      listName: "Packages",
      src: "/NavPackages.svg",
      srcAlt: "NavPackages",
    },
  ];

  function handleLocation(){
    setShowLocationModal(true)
    // console.log("clicked");
  }

  const router = useRouter();
  function handleHome() {
    router.push(`/`);
  }

  function handleRoute(category) {
   router.push(`/${category}`);
  }

  
  function handleCart() {
    router.push(`/cart`);
   }


  const renderNavList = navlist.map((list, index) => (
    <div
      key={index}
      className="flex cursor-pointer md:justify-center md:items-center gap-[7px]"
      onClick={()=>handleRoute(list.listName)}
    >
      <div className="relative w-[25px] h-[25px] md:w-[17px] md:h-[17px]">
        <Image src={list.src} alt={list.srcAlt} fill sizes="100%" />
      </div>
      <h2 className="text-b1 cursor-pointer text-[18px] md:text-[14px] font-semibold">
        {list.listName}
      </h2>
    </div>
  ));

  return (
    <div className=" mx-auto  flex justify-center items-center w-full">
      <div className="max-w-[1440px] mx-[20px] md:mx-[60px] my-[15px] w-full flex flex-wrap justify-center items-center">
        <div className="w-1/2 flex justify-start gap-[18px] md:gap-[30px] items-center">
          <div
            className="relative flex lg:hidden w-[24px] h-[17px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src="/NavHam.svg" alt="NavHam" fill sizes="100%" />
          </div>
          <div onClick={handleHome} className="cursor-pointer relative w-[114px] h-[29px] lg:w-[122px] lg:h-[33px]">
            <Image src="/NavpayrentzLogo.svg" alt="AppLogo" fill sizes="100%" />
          </div>
          <div onClick={handleLocation} className="hidden cursor-pointer lg:flex justify-center gap-2 items-center">
            <Image
              src="/Navlocation.svg"
              alt="location"
              width={14}
              height={17}
            />
            <div className="flex flex-col cursor-pointer justify-center items-center">
              <p className="text-b1 cursor-pointer text-[14px] font-semibold">{city}</p>
              <p className="text-b3 cursor-pointer">{pincode}</p>
            </div>
          </div>
          <div className="gap-[30px] hidden lg:flex">{renderNavList}</div>
        </div>

        <div className="w-1/2  flex flex-row-reverse md:flex-row md:justify-end items-center gap-[18px] md:gap-[30px]">
          <div className="py-2  px-4 w-[100px] lg:w-[370px] rounded-[5px] border-[1px] border-b3 hidden lg:flex justify-center items-center">
            <input
              className="w-[80%] focus:outline-none cursor-pointer text-b3"
              type="text"
              placeholder="Search"
            />
            <button className="w-[20%] flex justify-end text-b3">
              <Image
                src="/NavSearch.svg"
                alt="NavSearch"
                width={13}
                height={13}
              />
            </button>
          </div>
          <div onClick={handleCart} className="flex relative cursor-pointer justify-center items-center gap-[7px]">
            <div className="relative cursor-pointer w-[24px] h-[23px] lg:w-[17px] lg:h-[17px]">
              <Image src="NavCart.svg" alt="NavCart" fill sizes="100%" />
            </div>
            <h2 className="hidden cursor-pointer md:flex text-b1 text-[14px] font-semibold">
              Cart
            </h2>
            {cart.length >0 && 
             <div className="absolute -top-[20px] right-0 bg-red rounded-full flex justify-center items-center ">
             <p className="text-[13px] text-white font-semibold px-[8px] py-[2px] ">{cart.length}</p>

           </div>
            }
           
          </div>
          <Button style=" font-bold bg-red text-white  text-[14px] rounded-[5px]  md:text-[14px]" value="Login" />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-lblue flex justify-between z-50   gap-4 px-[20px] pt-[40px] transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex gap-4 flex-col">{renderNavList}</div>
        <div className="" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <IoClose size={25} color="black" />
        </div>
      </div>
    </div>
  );
}
