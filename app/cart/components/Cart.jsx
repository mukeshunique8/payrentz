import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Button from "../../UI Elements/Button";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegCompass } from "react-icons/fa";
import { TbCube } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { AppContext } from "../../contexts/AppContext"; // Adjust the import path as necessary
import CartItem from "./CartItem";
import AddressForm from "./AddressForm"; // Adjust the import path as necessary
import CartAccessories from "./CartAccessories";
import BASEURL from "../../API";

export default function Cart() {
  const { cart, address } = useContext(AppContext);
  const [showCart, setShowCart] = useState(true);
  const [showAddress, setShowAddress] = useState(false);
  const [showAccessories, setShowAccessories] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [addressErrors, setAddressErrors] = useState({});
  const [isPassed, setIsPassed] = useState(false);
  const [summary, setSummary] = useState(null);

  // console.log(cart);
  function handleContinue() {
    if (showCart) {
      setShowCart(false);
      setShowAddress(true);
    } else if (showAddress) {
      const errors = validateAddress(address);
      if (Object.keys(errors).length === 0) {
        setShowAddress(false);
        setShowAccessories(true);
      } else {
        setAddressErrors(errors);
      }
    } else if (showAccessories) {
      setShowAccessories(false);
      setShowPayment(true);
    }
  }

  function handleBack() {
    if (showPayment) {
      setShowPayment(false);
      setShowAccessories(true);
    } else if (showAccessories) {
      setShowAccessories(false);
      setShowAddress(true);
    } else if (showAddress) {
      setShowAddress(false);
      setShowCart(true);
    }
  }
  function validateAddress(address) {
    const errors = {};
    if (!address.addressLine1)
      errors.addressLine1 = "Please enter a valid address line 1.";
    if (!address.addressLine2)
      errors.addressLine2 = "Please enter a valid address line 2.";
    if (!address.city) errors.city = "Please enter a valid city.";
    if (!address.state) errors.state = "Please enter a valid state.";
    if (!address.pincode) errors.pincode = "Please enter a valid pincode.";
    // if (!address.googleMapLink) errors.googleMapLink = "Please enter a valid Google Map link.";
    return errors;
  }
  // console.log(showCart, showAddress, showAccessories, showPayment);

  // console.log(summary);
  const guest_uuid = localStorage.getItem("guest_uuid");
  useEffect(() => {
    const orderSummary = async () => {
      try {
        const response = await BASEURL.get(
          `web/cart/summary/?guest_uuid=${guest_uuid}`
        );
        setSummary(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (guest_uuid) {
      orderSummary();
    }
  }, [guest_uuid, cart]);
  return (
    <div className="w-full max-w-[1440px] mx-auto md:px-[60px] lg:px-[20px]  justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-start w-full gap-[20px]">
        <div className="w-full lg:w-[65%] px-[20px] md:px-0 pt-[40px]">
          {/* Accordions */}
          <div className="flex w-full cursor-pointer justify-start items-start flex-col">
            <div className="flex flex-col cursor-pointer gap-[12px] w-full py-[20px] border-b-[1px] border-gray">
              <div className="flex gap-[12px] justify-start items-center">
                <HiOutlineShoppingCart
                  color={showCart ? "Black" : "#DBDBDB"}
                  size={25}
                />
                <h3
                  className={`${
                    showCart
                      ? "font-bold text-[#2D2D2D]"
                      : "font-medium text-[#CDCDCD]"
                  }  cursor-pointer text-[20px]  leading-[23px]`}
                >
                  Your Cart
                </h3>
              </div>
              {showCart && (
                <div className="flex w-full  flex-col px-[20px] gap-[20px] mt-[40px]">
                  {cart.map((item, index) => (
                    <div className={`  ${index === cart.length-1 ?" border-none":"border-b-[1px] border-gray"}`}>

                      <CartItem key={index} item={item} />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col cursor-pointer gap-[12px] w-full py-[20px] border-b-[1px] border-gray">
              <div className="flex gap-[12px] justify-start items-center">
                <FaRegCompass
                  color={showAddress ? "Black" : "#DBDBDB"}
                  size={25}
                />
                <h3
                  className={`${
                    showAddress
                      ? "font-bold text-[#2D2D2D]"
                      : "font-medium text-[#CDCDCD]"
                  }  cursor-pointer text-[20px]  leading-[23px]`}
                >
                  Address
                </h3>
              </div>
              {showAddress && (
                <div className="flex w-full flex-col px-[20px] gap-[20px] mt-[40px]">
                  <AddressForm errors={addressErrors} />
                </div>
              )}
            </div>
            <div className="flex flex-col cursor-pointer gap-[12px] w-full py-[20px] border-b-[1px] border-gray">
              <div className="flex gap-[12px] justify-start items-center">
                <TbCube
                  color={showAccessories ? "Black" : "#DBDBDB"}
                  size={25}
                />
                <h3
                  className={`${
                    showAccessories
                      ? "font-bold text-[#2D2D2D]"
                      : "font-medium text-[#CDCDCD]"
                  }  cursor-pointer text-[20px]  leading-[23px]`}
                >
                  Accessories
                </h3>
              </div>
              {showAccessories && (
                <div className="flex w-full  ">
                  <CartAccessories />
                </div>
              )}
            </div>
            <div className="flex flex-col cursor-pointer gap-[12px] w-full py-[20px] border-b-[1px] border-gray">
              <div className="flex gap-[12px] justify-start items-center">
                <MdPayment
                  color={showPayment ? "Black" : "#DBDBDB"}
                  size={25}
                />
                <h3
                  className={`${
                    showPayment
                      ? "font-bold text-[#2D2D2D]"
                      : "font-medium text-[#CDCDCD]"
                  }  cursor-pointer text-[20px]  leading-[23px]`}
                >
                  Payment
                </h3>
              </div>
              {showPayment && (
                <div className="flex w-full flex-col px-[20px] gap-[20px] mt-[40px]">
                  <p>Payment</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full bg-white lg:bg-transparent fixed lg:relative bottom-0 lg:w-[35%] flex flex-col justify-center items-center gap-[10px] lg:pt-[104px]">
          <div className="flex gap-[20px] pl-[20px] py-[12px] border-gray border-[1px] rounded-[5px] w-full justify-start">
            <div className="relative w-[60px] h-[60px]">
              <Image src="/van2.svg" alt="van2" fill sizes="100%" />
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-b2 leading-[28px] font-semibold text-[14px]">
                Delivery will be done 2-3 days after KYC.
              </p>
              <p className="text-blue leading-[28px] font-semibold text-[14px]">
                See Required Documents
              </p>
            </div>
          </div>
          <div className="hidden lg:flex gap-[20px] px-[20px] py-[12px] border-gray border-[1px] rounded-[5px] w-full bg-[#F7FAFC]">
            <div className="flex flex-col gap-[30px] w-full">
              <h3 className="text-red font-bold text-2xl">Order Summary</h3>
              <div className="flex flex-col gap-[20px] pb-[20px] border-gray border-b-[1px] w-full">
                {/* <div className="w-full flex justify-between">
                  <h3 className="text-b1 text-base leading-[18px]">
                    Subtotal ({summary?.total_variant_count || 0} items)
                  </h3>
                  <p className="text-b1 font-semibold text-base leading-[18px]">
                    ₹{summary?.total_variant_rent || 0}
                  </p>
                </div> */}
                <div className="w-full flex justify-between">
                  <h3 className="text-b1 text-base leading-[18px]">
                    {`                    Refundable Deposit (${summary?.total_variant_count || 0} items) `} 
                  </h3>
                  <p className="text-b1 font-semibold text-base leading-[18px]">
                    ₹ {summary?.total_variant_deposit || 0}
                  </p>
                </div>
                {/* <div className="w-full flex justify-between">
                  <h3 className="text-b1 text-base leading-[18px]">
                    Taxes (GST)
                  </h3>
                  <p className="text-b1 font-semibold text-base leading-[18px]">
                    ₹{summary?.total_variant_gst || 0}
                  </p>
                </div> */}
                <div className="w-full flex justify-between">
                  <h3 className="text-b1 text-base leading-[18px]">
                    Delivery & Installation Charges
                  </h3>
                  <p className="text-b1 font-semibold text-base leading-[18px]">
                    {summary?.total_variant_handling_charge || 0}
                  </p>
                </div>
                {/* <div className="w-full flex justify-between">
                  <h3 className="text-b1 text-base leading-[18px]">
                    {`                    Refundable Deposit (${summary?.total_variant_count || 0} items) `} 
                  </h3>
                  <p className="text-b1 font-semibold text-base leading-[18px]">
                    ₹ {summary?.total_variant_deposit || 0}
                  </p>
                </div> */}
              </div>
              <div className="w-full flex justify-between pb-[30px] text-b2 font-extrabold text-[18px] leading-[21px]">
                <h3 className="font-medium">Total Payable</h3>
                <p className="font-extrabold">
                  ₹ {summary?.total_payable || 0}
                </p>
              </div>
            </div>
          </div>
          <div className="py-[10px] w-full gap-3 flex">
            {!showCart && (
              <Button
                onClick={handleBack}
                style="text-red border-red border-[1px] w-full font-extrabold bg-white text-[18px] rounded-[5px] py-[20px] px-[20px] md:text-[18px]"
                value="Back"
              />
            )}
            <Button
              onClick={handleContinue}
              style="text-white w-full font-extrabold bg-red text-[18px] rounded-[5px] py-[20px] px-[20px] md:text-[18px]"
              value="Continue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
