"use client";
import React, { useContext, useEffect, useState } from "react";
import Hero from "./components/Hero";
import Display from "./components/Display";
import Promise from "./components/Promise";
import Category from "./components/Category";
import Explore from "./components/Explore";
import RentAppliances from "./components/RentAppliances";
import ClientChronicles from "./components/ClientChronicles";
import FAQ from "./components/FAQ";
import { AppContext } from "../app/contexts/AppContext";
import BASEURL from "./API";

export default function Page() {
  const { showLocationModal,setShowLocationModal } = useContext(AppContext);
  const [variantAll, setVariantAll] = useState([]);

  useEffect(() => {

    const storedPincode = localStorage.getItem("pincode");
    const storedBrowserId = localStorage.getItem("browser_id");
    const storedGuestId = localStorage.getItem("guest_uuid");
   
  setShowLocationModal(!(storedPincode && storedGuestId && storedBrowserId));

    const fetchData = async () => {
      try {
        const response = await BASEURL.get("web/variant/list-all/");
        const data = response.data.data.results;

        // const variantAll = data.map((item) => ({
        //   category:item.category_detail.id,
        //   category:item.category_detail.id,
        //   productId: item.id,
        //   imageUrl: "/1.jpg",
        //   title: item.identity,
        //   price: 650,
        //   badgeText: "Best Seller",
        //   badgeColor: "text-red",
        //   badgeBgColor: "bg-lblue",
        // }));

        // console.log(data);
        setVariantAll(data);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  
  return (
    <div
      className={`w-full relative mx-auto bg-white ${
        showLocationModal ? "blur-background" : ""
      }`}
    >
      <Hero />
      <div className="flex ">

      <Display slider={true} style="overflow-x-scroll no-scrollbar" ads={variantAll} />
      </div>
      <Promise />
      <Category />
      <Explore />
      <RentAppliances data={variantAll} />
      <ClientChronicles />
      <FAQ />
    </div>
  );
}
