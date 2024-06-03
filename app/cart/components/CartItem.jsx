import React, { useContext } from "react";
import Image from "next/image";
import { Select } from "@chakra-ui/react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { AppContext } from "../../contexts/AppContext";

function CartItem({ item }) {
  const { updateCartItem, removeFromCart } = useContext(AppContext);

  console.log(item.tenure);
  const handleQuantityChange = (change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1 && newQuantity <= 3) {
      updateCartItem(item.id, newQuantity, item.tenure);
    }
  };

  const handleTenureChange = (event) => {
    updateCartItem(item.id, item.quantity, event.target.value);
  };

  return (
    <div className="flex w-full gap-[20px] justify-start items-start">
      <div className="relative w-[130px] h-[116px]">
        <Image
          className="object-cover rounded-[3px]"
          src={item.imgSrc}
          alt={item.title}
          fill
          sizes="100%"
        />
      </div>

      <div className="w-full flex flex-col gap-[10px]">
        <p className="text-[10px] cursor-pointer md:text-[18px] font-bold text-b1 md:leading-[21px] truncate text-ellipsis overflow-hidden">
          {item.title}
        </p>
        <p className="text-[14px] cursor-pointer md:text-[24px] font-extrabold text-b2 md:leading-[28px]">
          ₹{item.price}
          <span className="text-[11px] md:text-[16px] font-medium text-b3">
            /month
          </span>
        </p>
        <p className="font-medium text-base text-b2">
          Refundable Deposit:{" "}
          <span className="font-bold text-base text-b2">₹{item.deposit}</span>
        </p>
        <p className="font-medium text-base text-b2">
          Delivery in{" "}
          <span className="font-bold underline underline-offset-2 text-base text-blue">
            {item.deliveryTime}
          </span>
        </p>
        <div className="flex justify-start items-center gap-[35px] w-full ">
          <div className="flex justify-start gap-[13px] items-center">
            <h3 className="font-semibold text-base text-b2">Quantity</h3>
            <div className="flex gap-[10px] justify-center items-center">
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={item.quantity === 1}
                className={`${
                  item.quantity === 1 ? "text-gray-500" : "text-black"
                }`}
              >
                <CiCircleMinus color={item.quantity === 1 ? "gray" : "black"} size={25} />
              </button>
              <div className="w-[40px] border-[1px] border-gray rounded-[5px] h-[30px] flex justify-center items-center">
                <p>{item.quantity}</p>
              </div>
              <button
                onClick={() => handleQuantityChange(1)}
                disabled={item.quantity === 3}
                className={`${
                  item.quantity === 3 ? "text-gray-500" : "text-black"
                }`}
              >
                <CiCirclePlus color={item.quantity === 3 ? "gray" : "black"} size={25} />
              </button>
            </div>
          </div>
          <div className="flex justify-start gap-[13px] items-center">
            <h3 className="font-semibold text-base text-b2">Tenure</h3>
            <Select
              variant="outline"
              value={item.tenure}
              onChange={handleTenureChange}
             placeholder={item.tenure}
              icon={<></>}
            >
              <option value="12+ months">12+ months</option>
              <option value="6+ months">6+ months</option>
              <option value="3+ months">3+ months</option>
              <option value="1 month+">1 month+</option>
            </Select>
          </div>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-b1 hover:font-extrabold hover:transition-all hover:duration-75  hover:text-red"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
