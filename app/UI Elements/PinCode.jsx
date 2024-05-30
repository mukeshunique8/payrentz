import React from 'react'
import Button from './Button'

export default function PinCode() {
  return (
    <div className="w-full flex flex-col  gap-[10px] items-start justify-start py-[30px] ">
            <h3 className=" text-[#858585] text-[12px] md:text-[15px] font-semibold">
              Enter your PIN code to check availability of product in your
              location
            </h3>
            <div className="flex w-full justify-start items-center gap-[10px]">
              <input
                className="p-[10px] md:w-[245px] w-[160px] border-[#E6E7E9] border-[1px] rounded-[5px] text-[#DBDBDB]"
                type="text"
                placeholder="600001"
                name="pincode"
                id="pincode"
              />
              <Button
                value="Check availability"
                style="md:px-[20px] px-[12px] text-nowrap rounded-[5px] border-[1px] border-b1 py-[10px] font-bold text-base leading-[18px] text-b1"
              />
            </div>
            <h3 className='text-[#2FB344] text-[12px] font-semibold leading-[14px]'>Product available!</h3>
          </div>
  )
}
