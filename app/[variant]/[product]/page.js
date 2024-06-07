"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import Filter from "../components/Filter";
import Path from "../components/Path";
import Switches from "./components/Switches";
import Display from "../../components/Display";
import ImageGallery from "./components/ImageGallery";
import ProductDetails from "./components/ProductDetails";
import FixedLayout from "./components/FixedLayout";
import BottomBar from "../../UI Elements/BottomBar";
import PinCode from "../../UI Elements/PinCode";
import BASEURL from "../../API";
import { useRouter, useParams, useSearchParams } from "next/navigation";

export default function Page() {
  const [variantAll, setVariantAll] = useState([]);
  const [item, setItem] = useState(null);
  const [itemDetails, setItemDetails] = useState(null);
  const [error, setError] = useState(null);
  const [cartAPI,setCartAPI] = useState()

  const { variant, product } = useParams();
  const itemName = product;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BASEURL.get("web/variant/list-all/");
        const data = response.data.data.results;
        setVariantAll(data);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch variants");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const foundItem = variantAll.find((item) => item.slug === itemName);
    setItem(foundItem);
  }, [variantAll, itemName]);

  useEffect(() => {
    if (item && item.slug) {
      const fetchItemDetails = async () => {
        try {
          const response = await BASEURL.get(`web/variant/detail/${item.slug}/`);
          const itemDetails = response.data;
          setItemDetails(itemDetails);
        } catch (err) {
          console.log(err);
          setError("Failed to fetch item details");
        }
      };
      fetchItemDetails();
    }
  }, [item]);

  // console.log(itemDetails);

  // useEffect(()=>{
  //   const  fetchCart = async()=>{

    
  //     try{
  //       const response = await BASEURL.get("web/cart/list/")
  //       setCartAPI(response.data)
  //       console.log(cartAPI);
          
  //     }catch(err){
  //       console.log(err);
  //     }
  
  //   }

  //   fetchCart();
  // },[])


 

  return (
    <div className="relative">
      <Path />
      <FixedLayout item={itemDetails} />

      <div className="w-full px-[20px] md:hidden flex justify-center items-center">
        <PinCode />
      </div>

      {/* <Switches /> */}
      <div className="flex flex-col max-w-[1440px] mx-auto overflow-hidden justify-center items-start pt-[20px] lg:pt-[40px]">
        <h2 className="font-extrabold md:px-[60px] px-[20px] text-blue text-[16px] lg:text-[24px]">
          People Also Rented
        </h2>
        <div>
          <Display slider={true} style="overflow-x-scroll no-scrollbar" ads={variantAll} />
        </div>
      </div>

      <div className="fixed w-full bottom-0 md:hidden">
        <BottomBar />
      </div>
    </div>
  );
}
