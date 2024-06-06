"use client";
import React, { useEffect, useState } from "react";

import { useParams, useSearchParams } from "next/navigation";
import BASEURL from "../API";
import Display from "../components/Display";
import Filter from "./components/Filter";
import Path from "./components/Path";

export default function Page() {
  const [variantAll, setVariantAll] = useState([]);

  const searchParams = useSearchParams();
  const params = useParams();
  const category =params.variant
  // console.log(params);
  const filter = searchParams.get("filter");
  const filters = filter?.split(",");

  // console.log(filters)

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
   // Filter variants based on the  =params.variant parameter
   const filteredCategory = variantAll.filter((item) =>
    item?.category_detail?.slug === category
  );

  // console.log(variantAll);
  // console.log(filteredCategory);
  // console.log(filteredVariants);

  return (
    <div>
      <Path />
      <Filter />
      <Display ads={filters?filteredVariants:filteredCategory} />
    </div>
  );
}
