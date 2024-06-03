import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext"; // Adjust the import path as necessary

export default function AddressForm() {
  const { address, updateAddress } = useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateAddress({ ...address, [name]: value });
  };
// console.log(address);
  return (
    <div className="grid grid-cols-2 gap-x-[30px] gap-y-[20px] justify-center w-full items-center">
      <div className='flex flex-col gap-[10px] justify-start items-start w-full'>
        <label className='font-semibold text-base leading-[18px] text-[#000000]' htmlFor="addressLine1">Address Line 1<span className="text-red text-[20px] text-start">*</span></label>
        <input type="text" name="addressLine1" value={address.addressLine1} onChange={handleChange} className='w-full justify-center items-center px-[10px] py-[12px] border-[1px] border-gray rounded-[5px]' />
      </div>
      <div className='flex flex-col gap-[10px] justify-start items-start w-full'>
        <label className='font-semibold text-base leading-[18px] text-[#000000]' htmlFor="addressLine2">Address Line 2<span className="text-red text-[20px] text-start">*</span></label>
        <input type="text" name="addressLine2" value={address.addressLine2} onChange={handleChange} className='w-full justify-center items-center px-[10px] py-[12px] border-[1px] border-gray rounded-[5px]' />
      </div>
      <div className='flex flex-col gap-[10px] justify-start items-start w-full'>
        <label className='font-semibold text-base leading-[18px] text-[#000000]' htmlFor="city">City<span className="text-red text-[20px] text-start">*</span></label>
        <input type="text" name="city" value={address.city} onChange={handleChange} className='w-full justify-center items-center px-[10px] py-[12px] border-[1px] border-gray rounded-[5px]' />
      </div>
      <div className='flex flex-col gap-[10px] justify-start items-start w-full'>
        <label className='font-semibold text-base leading-[18px] text-[#000000]' htmlFor="state">State<span className="text-red text-[20px] text-start">*</span></label>
        <input type="text" name="state" value={address.state} onChange={handleChange} className='w-full justify-center items-center px-[10px] py-[12px] border-[1px] border-gray rounded-[5px]' />
      </div>
      <div className='flex flex-col gap-[10px] justify-start items-start w-full'>
        <label className='font-semibold text-base leading-[18px] text-[#000000]' htmlFor="pincode">Pincode<span className="text-red text-[20px] text-start">*</span></label>
        <input type="text" name="pincode" value={address.pincode} onChange={handleChange} className='w-full justify-center items-center px-[10px] py-[12px] border-[1px] border-gray rounded-[5px]' />
      </div>
      <div className='flex flex-col gap-[10px] justify-start items-start w-full'>
        <div className='flex w-full justify-between'>
          <label className='font-semibold text-base leading-[18px] text-[#000000]' htmlFor="googleMapLink">Google Map Location Link<span className="text-red text-[20px] text-start">*</span></label>
          <p className='font-semibold text-[14px] underline underline-offset-2 text-gray'>Pick Different Location</p>
        </div>
        <input type="text" name="googleMapLink" value={address.googleMapLink} onChange={handleChange} className='w-full justify-center items-center px-[10px] py-[12px] border-[1px] border-gray rounded-[5px]' />
      </div>
    </div>
  );
}
