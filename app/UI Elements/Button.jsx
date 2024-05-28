import React from "react";

export default function Button({value}) {
  return (
    <div className="min-w-[77px] md:text-[18px] text-center flex justify-center items-center text-[8px] cursor-pointer min-h-[30px] py-[7px] px-[20px] gap-[10px] rounded-[5px] text-white bg-red">
      <a href="">{value}</a>
    </div>
  );
}
