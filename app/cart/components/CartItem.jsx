import React, { useContext, useState } from "react";
import Image from "next/image";
import { Select } from "@chakra-ui/react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { AppContext } from "../../contexts/AppContext";
import { tenureChange } from "../../cartUtils"; // Import the tenureChange function
import BASEURL from "../../API"; // Import your BASEURL configuration

function CartItem({ item }) {
  const { cart, setCart, removeFromCart } = useContext(AppContext);
  const [selectedTenure, setSelectedTenure] = useState(item.tenure);
  const guest_uuid = localStorage.getItem("guest_uuid");

  const fetchCartData = async () => {
    try {
      const response = await BASEURL.get(`web/cart/list/?guest_uuid=${guest_uuid}`);
      setCart(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // const handleQuantityChange = async (change) => {
  //   const newQuantity = item.quantity + change;
  //   if (newQuantity >= 1 && newQuantity <= 3) {
  //     try {
  //       const response = await BASEURL.post("web/cart/update/", {
  //         uuid: item.uuid,
  //         guest_uuid: guest_uuid,
  //         quantity: newQuantity,
  //         tenure: selectedTenure
  //       });
  //       if (response.data.status === "success") {
  //         fetchCartData(); // Refresh cart data after successful update
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  const handleQuantityChange = (change) => {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1 && newQuantity <= 3) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.uuid === item.uuid
            ? { ...cartItem, quantity: newQuantity }
            : cartItem
        )
      );
    }
  };
  const handleTenureChange = async (event) => {
    const newTenure = event.target.value;
    setSelectedTenure(newTenure);
    await tenureChange(guest_uuid, { value: newTenure }, fetchCartData);
  };

  return (
    <div className="flex w-full sm:border-none pb-4 sm:pb-0 border-b-[2px] border-gray gap-[20px] justify-start items-start">
      <div className="relative w-[130px] h-[116px]">
        <Image
          className="object-cover rounded-[3px]"
          src={item?.image || "/PH_Card_Image.jpg"}
          alt={item?.identity}
          fill
          sizes="100%"
        />
      </div>

      <div className="w-full flex flex-col gap-[10px]">
        <p className="text-[10px] cursor-pointer md:text-[18px] font-bold text-b1 md:leading-[21px] truncate text-ellipsis overflow-hidden">
          {item?.identity}
        </p>
        <p className="text-[14px] cursor-pointer md:text-[24px] font-extrabold text-b2 md:leading-[28px]">
          ₹{item?.rent}
          <span className="text-[11px] md:text-[16px] font-medium text-b3">
            /month
          </span>
        </p>
        <p className="font-medium text-base text-b2">
          Refundable Deposit:{" "}
          <span className="font-bold text-base text-b2">₹{item?.deposit}</span>
        </p>
        {item?.deliveryTime && (
          <p className="font-medium text-base text-b2">
            Delivery in{" "}
            <span className="font-bold underline underline-offset-2 text-base text-blue">
              {item?.deliveryTime}
            </span>
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-start justify-start lg:items-center gap-[20px] sm:gap-[35px] w-full ">
          <div className="flex justify-start gap-[13px] items-center">
            <h3 className="font-semibold text-base text-b2">Quantity</h3>
            <div className="flex gap-[10px] justify-center items-center">
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={item.quantity === 1}
                className={`${item.quantity === 1 ? "text-gray-500" : "text-black"}`}
              >
                <CiCircleMinus color={item.quantity === 1 ? "gray" : "black"} size={25} />
              </button>
              <div className="w-[40px] border-[1px] border-gray rounded-[5px] h-[30px] flex justify-center items-center">
                <p>{item?.quantity}</p>
              </div>
              <button
                onClick={() => handleQuantityChange(1)}
                disabled={item.quantity === 3}
                className={`${item.quantity === 3 ? "text-gray-500" : "text-black"}`}
              >
                <CiCirclePlus color={item.quantity === 3 ? "gray" : "black"} size={25} />
              </button>
            </div>
          </div>
          <div className="flex justify-start gap-[13px] items-center">
            <h3 className="font-semibold text-base text-b2">Tenure</h3>
            <Select
              variant="outline"
              value={selectedTenure}
              onChange={handleTenureChange}
              placeholder="Select tenure"
              icon={<></>}
            >
              <option value="12">12+ months</option>
              <option value="6">6+ months</option>
              <option value="3">3+ months</option>
              <option value="1">1 month+</option>
            </Select>
          </div>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item)}
        className="text-b1 right-[10px] absolute lg:relative hover:font-extrabold hover:transition-all hover:duration-75 hover:text-red"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
