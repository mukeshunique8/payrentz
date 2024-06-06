import React, { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Button from "../UI Elements/Button";
import { FaRegEdit } from "react-icons/fa";
import { requestAndSendOTP, validateOTP } from "../auth";
import { AppContext } from "../contexts/AppContext";

export default function Login({ onClose }) {

  const [mobileNumber, setMobileNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [showMobileNumber, setShowMobileNumber] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user,setuser] = useState(true)
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { showLocationModal,
    setShowLocationModal} =useContext(AppContext)

function handleLogOut(){

  const guest_uuid = localStorage.getItem("guest_uuid")
  console.log(guest_uuid);
  localStorage.clear()
  showMobileNumber()
  // C()
  // setShowLocationModal(true)
}

  const validateMobileNumber = (number) => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(number);
  };

  const handleOTP = async () => {
    if (!validateMobileNumber(mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setLoading(true);
    try {
      const response = await requestAndSendOTP(`+91${mobileNumber}`);
      if (response.status === "success") {
        setShowMobileNumber(false);
        setShowOTP(true);
        setError(""); // Clear any previous errors
      } else {
        setError("Failed to request OTP");
      }
    } catch (err) {
      setError("Error requesting OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await validateOTP(`+91${mobileNumber}`, OTP);
      if (response.status === "success") {
        const token = response.data.token;
        localStorage.setItem("token", token);
        setShowMobileNumber(false);
        setuser(true)
        setShowOTP(false);
        // C();
      } else {
        setError("Invalid OTP");
      }
    } catch (err) {
      setError("OTP Validation failed");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setShowMobileNumber(true);
    setShowOTP(false);
  };

  const renderMobileNumber = (
    <div className="flex flex-col gap-[30px] items-start justify-center">
      <h3 className="text-red font-bold md:text-[24px] md:leading-[28px]">
        Let’s get you started!
      </h3>
      <h2 className="text-b2 font-semibold md:text-[20px] md:leading-[28px]">
        Enter your mobile number
      </h2>
      <div className="border-[1px] flex justify-center items-center gap-2 text-center text-[18px] border-gray rounded-[5px] w-full px-3 py-2">
        <p className="text-b1 border-r-[1px] pr-2 border-gray">+91</p>
        <input
          className="focus:outline-none"
          type="tel"
          placeholder="9876543210"
          maxLength={10}
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      {error && <p className="text-red">{error}</p>}
      <div>
        <Button
          style="text-white font-bold bg-red text-[16px] rounded-[5px] py-[7px] px-[20px] md:text-[18px]"
          onClick={handleOTP}
          value={loading ? "Sending..." : "Send OTP"}
          disabled={loading}
        />
      </div>
    </div>
  );

  const renderOTP = (
    <div className="flex flex-col gap-[20px] w-full items-start justify-center">
      <h3 className="text-red font-bold md:text-[24px] md:leading-[28px]">
        Verify with OTP
      </h3>
      <div className="flex flex-col md:flex-row justify-between w-full md:w-[60%] md:items-center">
        <h2 className="text-b2 font-semibold md:text-[20px] md:leading-[28px]">
          Enter OTP
        </h2>
        <p className="flex md:self-end md:justify-center md:items-center gap-2 text-b1 text-[14px]">
          sent to mobile number
          <span className="cursor-pointer" onClick={handleEdit}>
            <FaRegEdit size={20} />
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 text-center text-[18px] rounded-[5px]">
        <input
          autoFocus
          className="focus:outline-blue px-3 py-3 border-gray rounded-[5px]"
          type="tel"
          placeholder="Enter 6-digit OTP"
          maxLength={6}
          value={OTP}
          onChange={(e) => setOTP(e.target.value)}
        />
      </div>
      {error && <p className="text-red">{error}</p>}
      <a className="underline underline-offset-1 text-b1 text-[14px]" href="">
        Resend OTP
      </a>
      <div >
        <Button
          style="text-white font-bold bg-red text-[16px] rounded-[5px] py-[7px] px-[20px] md:text-[18px]"
          onClick={handleSubmit}
          value={loading ? "Submitting..." : "Submit"}
          disabled={loading}
        />
      </div>
    </div>
  );
   const guest_uuid = localStorage.getItem("guest_uuid").split("-")[2]

   console.log(guest_uuid);
  const renderUser = (
   
    <div className="flex flex-col gap-[20px] w-full items-start justify-center">
      <h3 className=" font-bold md:text-[24px] md:leading-[28px]">
       Welcome,<span className="text-blue pl-2">Guest_{guest_uuid}</span> 
      </h3>
      
      <div >
        <Button
          style="text-red font-bold bg-white border-[1px] border-red text-[16px] rounded-[5px] py-[7px] px-[20px] md:text-[18px]"
          onClick={handleLogOut}
          value={ "Logout"}
         
        />
      </div>
    </div>
  );

  return (
    <div className="w-full rounded-[20px] bg-white p-[20px] md:p-[60px] max-w-[1153px] gap-[53px] mx-auto justify-center items-center flex flex-col md:flex-row relative">
      <button className="absolute top-4 right-4 text-black" onClick={onClose}>
        <IoMdClose color="gray" size={20} />
      </button>
      <div className="w-full hidden md:flex md:w-1/2">
        <div className="relative w-full h-[300px] md:w-[480px] md:h-[380px]">
          <Image
            className="cursor-pointer"
            src="/LocationImage.svg"
            alt="Location"
            fill
            sizes="100%"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 gap-[10px] md:gap-[40px] flex justify-start items-start flex-col">
        {showMobileNumber && renderMobileNumber}
        {showOTP && renderOTP}
        {user && renderUser}
      </div>
    </div>
  );
}
