"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Display from "../components/Display";
import Filter from "./components/Filter";
import Path from "./components/Path";
import BASEURL from "../API";
import {useRouter ,useParams,useSearchParams } from "next/navigation";


export default function Page() {
  const [variantAll, setVariantAll] = useState([]);
  console.log(variantAll);
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const filters= filter?.split(",")

  console.log(filters)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BASEURL.get("web/variant/list-all/");
        const data = response.data.data.results;
        

        // console.log(data);
        setVariantAll(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  
  
  const filteredVariants = variantAll.filter((item) =>
    filters?.includes(item?.sub_category?.identity)
  );

  return (
    <div >
     
     
      <Path/>
      <Filter/>
      
      <Display  ads={filters?filteredVariants:variantAll} />
     
    </div>
  );
}
