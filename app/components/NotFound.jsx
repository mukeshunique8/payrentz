import React from "react";
import { MdOutlineFindReplace } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="relative w-full  mx-auto justify-center items-center gap-5 max-w-[1440px] pt-[25px] pb-[35px] ">
      <div className="flex  flex-col justify-center items-center p-4">
        <MdOutlineFindReplace color="gray" size={60} />

        <p className="text-gray font-extrabold text-xl">No Results Found</p>
      </div>
    </div>
  );
}
