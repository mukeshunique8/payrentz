// Badge.jsx
import React from "react";

export default function Badge2({
  text,
  style = "px-[5px] py-[4px] rounded-[5px] bg-[#2B5CAB] text-[10px] font-bold leading-[11px]",
}) {
  return (
    <div
      className={` flex justify-center items-center ${style}`}
    >
      <p className="font-bold text-[7px] md:text-[14px]">{text}</p>
    </div>
  );
}
