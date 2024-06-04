"use client";
import {  useEffect } from "react";
import BASEURL from "../API"
import React, { useState, useContext } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Button from "../UI Elements/Button";
import { AppContext } from "../contexts/AppContext";
import RoundImageCard from "../UI Elements/RoundImageCard";

export default function Location({ onClose }) {

  // useEffect(()=>{
  //   const fetchData  = async () =>{
  //     try{
  //       const repsonse = await BASEURL.get('web/home/city/')
  //       const cityList = repsonse.data.data.results
  //       console.log(cityList)
  //     }catch(err){
  //       console.log(err);
  //     }
  //   }
  //   fetchData()
  // },[])


  const { pincode, setPincode, city, setCity, showLocationModal, setShowLocationModal } = useContext(AppContext);
  const [localPincode, setLocalPincode] = useState(pincode);
  const [error, setError] = useState(null);

  console.log(pincode);
  const handleLocation = (e) => {
    const code = e.target.value;
    if (/^\d*$/.test(code)) {
      setLocalPincode(code);
      setError(null); // Clear error message if input is valid
    } else {
      setError("Pincode should contain only numbers.");
    }
  };

  const handleProceed = (e) => {
    if (e) e.preventDefault(); // Prevent default behavior if triggered by an event
    if (/^\d{6}$/.test(localPincode)) {
      setPincode(localPincode);
      setShowLocationModal(false);
    } else {
      setError("Please enter a valid 6-digit pincode.");
    }
  };

  const locations = [
    {pincode_detail:"600012", city: "Chennai", imgsrc: "/chennai.jpg", imgalt: "Chennai", },
    {pincode_detail:"670001", city: "Coimbatore", imgsrc: "/covai.jpg", imgalt: "Coimbatore" },
    {pincode_detail:"560002", city: "Banglore", imgsrc: "/banglore.jpg", imgalt: "Banglore" },
  ];

  const toggleSelection = (selectedCity,pincode) => {
    setCity(selectedCity);
    setPincode(pincode);
    localStorage.setItem("city", selectedCity);
    localStorage.setItem("pincode", pincode);
  };

  const renderLocation = locations.map((location, index) => (
    <RoundImageCard
      key={index}
      imgSizes=" w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
      name={location.city}
      imgalt={location.imgalt}
      imgsrc={location.imgsrc}
      imgGrad={city === location.city}
      textStyle= {city === location.city ?"text-[12px] md:text-[14px] text-red":"text-[12px] md:text-[14px] text-b1"}
      imgStyle={city === location.city ? "bg-[#ED1F28] bg-opacity-40" : ""}
      imgsrc2={city === location.city ? "/Tick.svg" : ""}
      imgsrc2Sizes="w-[18px] h-[12px] md:w-[21px] md:h-[14px]"
      onClick={() => toggleSelection(location.city,location.pincode_detail)}
    />
  ));

  return (
    <div className="w-full rounded-[20px] bg-white p-[20px] md:p-[60px] max-w-[1153px] gap-[53px] mx-auto justify-center items-center flex flex-col md:flex-row relative">
      <button className="absolute top-4 right-4 text-black" onClick={onClose}>
        <IoMdClose color="gray" size={20} />
      </button>

      <div className="w-full hidden md:flex md:w-1/2">
        <div className="relative w-full h-[300px] md:w-[480px] md:h-[380px]">
          <Image className="cursor-pointer" src="/LocationImage.svg" alt="Location" fill sizes="100%" />
        </div>
      </div>
      <div className="w-full md:w-1/2 gap-[10px] md:gap-[30px] flex justify-start items-start flex-col">
        <h3 className="text-red font-bold md:text-[24px] md:leading-[28px]">Choose your location</h3>

        <div className="flex flex-col gap-[10px]">
          <h3 className="text-black font-semibold md:text-[18px] md:leading-[21px]">Enter PIN code</h3>

          <div className="flex justify-start pt-[10px] gap-[10px] items-center">
            <input
              onChange={handleLocation}
              className="p-[13px] border-[#E6E7E9] border-[1px] rounded-[5px] text-[#DBDBDB] no-spinner"
              type="text"
              placeholder={pincode}
              name="pincode"
              id="pincode"
             
            />
            <Button onClick={handleProceed} value="Proceed" />
          </div>
          {error && <p className="italic text-red text-sm">{error}</p>}
          <p className="cursor-pointer text-[12px] text-red underline">Detect my location</p>
        </div>

        <div className="flex flex-col justify-start items-start w-full border-[#DBDBDB] gap-[20px] border-t-[1px] pt-[30px]">
          <h3 className="text-black font-semibold md:text-[18px] md:leading-[21px]">Pick your city</h3>

          <div className="flex justify-start gap-[40px]">{renderLocation}</div>
        </div>
      </div>
    </div>
  );
}
