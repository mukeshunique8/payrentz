"use client";
import React, { useContext, useEffect } from "react";
import Hero from "./components/Hero";
import Display from "./components/Display";
import Promise from "./components/Promise";
import Category from "./components/Category";
import Explore from "./components/Explore";
import RentAppliances from "./components/RentAppliances";
import ClientChronicles from "./components/ClientChronicles";
import FAQ from "./components/FAQ";
import { AppContext } from "../app/contexts/AppContext";
import BASEURL from "./utils/API";

export default function Page() {
  const { showLocationModal, pincode, city, variantAll } = useContext(AppContext);

  const rentAppliances = variantAll?.filter((item) => {
    return item?.category_detail?.identity === "Appliances";
  });

  return (
    <div className={`w-full relative mx-auto bg-white ${showLocationModal ? "blur-background" : ""}`}>
      <Hero />
      <div className="flex">
        <Display slider={true} style="overflow-x-scroll no-scrollbar" ads={variantAll} />
      </div>
      <Promise />
      <Category />
      <Explore />
      <RentAppliances data={rentAppliances} />
      <ClientChronicles />
      <FAQ />
    </div>
  );
}
