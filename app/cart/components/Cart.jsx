import React, { useContext } from "react";
import Image from "next/image";
import Button from "../../UI Elements/Button";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegCompass } from "react-icons/fa";
import { TbCube } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { AppContext } from "../../contexts/AppContext"; // Adjust the import path as necessary
import CartItem from "./CartItem";

export default function Cart() {
  const { cart } = useContext(AppContext);

  return (
    <div className="w-full max-w-[1440px] mx-auto md:px-[60px] px-[20px] flex justify-center items-center">
      <div className="flex justify-center items-start w-full gap-[20px]">
        <div className="w-full md:w-[60%] pt-[104px]">
          {/* Accordians */}
          <div className="flex w-full cursor-pointer justify-start items-start flex-col">
            <div className="flex flex-col cursor-pointer gap-[12px] w-full py-[20px] border-b-[1px] border-gray">
              <div className="flex gap-[12px] justify-start items-center">
                <HiOutlineShoppingCart size={25} />
                <h3 className="text-[#2D2D2D] cursor-pointer text-[20px] font-bold leading-[23px]">
                  Your Cart
                </h3>
              </div>
              <div className="flex w-full flex-col gap-[20px] mt-[40px]">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="flex cursor-pointer justify-start items-center gap-[12px] w-full py-[20px] border-b-[1px] border-gray">
              <FaRegCompass size={25} />
              <h3 className="text-[#2D2D2D] cursor-pointer text-[20px] font-bold leading-[23px]">
                Address
              </h3>
            </div>
            <div className="flex cursor-pointer justify-start items-center gap-[12px] w-full py-[20px] border-b-[1px] border-gray">
              <TbCube size={25} />
              <h3 className="text-[#2D2D2D] cursor-pointer text-[20px] font-bold leading-[23px]">
                Accessories
              </h3>
            </div>
            <div className="flex cursor-pointer justify-start items-center gap-[12px] w-full py-[20px] border-b-[1px] border-gray">
              <MdPayment size={25} />
              <h3 className="text-[#2D2D2D] cursor-pointer text-[20px] font-bold leading-[23px]">
                Payment
              </h3>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[40%] flex flex-col justify-center items-center gap-[10px] pt-[104px]">
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
          <div className="flex gap-[20px] px-[20px] py-[12px] border-gray border-[1px] rounded-[5px] w-full bg-[#F7FAFC]">
            <div className="flex flex-col gap-[30px] w-full">
              <h3 className="text-red font-bold text-2xl">Order Summary</h3>
              <div className="flex flex-col gap-[20px] pb-[20px] border-gray border-b-[1px] w-full">
                <div className="w-full flex justify-between">
                  <h3 className="text-b1 text-base leading-[18px]">
                    Subtotal ({cart.length} items)
                  </h3>
                  <p className="text-b1 font-semibold text-base leading-[18px]">
                    ₹ {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                  </p>
                </div>
                <div className="w-full flex justify-between">
                  <h3 className="text-b1 text-base leading-[18px]">Taxes (GST)</h3>
                  <p className="text-b1 font-semibold text-base leading-[18px]">
                    ₹ {((cart.reduce((total, item) => total + item.price * item.quantity, 0) * 0.18).toFixed(2))}
                  </p>
                </div>
                <div className="w-full flex justify-between">
                  <h3 className="text-b1 text-base leading-[18px]">Delivery & Installation Charges</h3>
                  <p className="text-b1 font-semibold text-base leading-[18px]">Free</p>
                </div>
                <div className="w-full flex justify-between">
                  <h3 className="text-b1 text-base leading-[18px]">Refundable Deposit</h3>
                  <p className="text-b1 font-semibold text-base leading-[18px]">
                    ₹ {cart.reduce((total, item) => total + item.deposit, 0).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between pb-[30px] text-b2 font-extrabold text-[18px] leading-[21px]">
                <h3 className="font-medium">Total Payable</h3>
                <p className="font-extrabold">
                  ₹ {(cart.reduce((total, item) => total + item.price * item.quantity, 0) +
                    cart.reduce((total, item) => total + item.deposit, 0) +
                    cart.reduce((total, item) => total + item.price * item.quantity, 0) * 0.18).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="py-[10px] w-full">
            <Button
              style="text-white font-extrabold bg-red text-[18px] rounded-[5px] py-[20px] px-[20px] md:text-[18px]"
              value="Continue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
