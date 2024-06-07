import React, { useContext } from "react";
import Button from "./Button";
import { AppContext } from "../contexts/AppContext";
import BASEURL from "../API";

export default function BottomBar({item, addCartItems,removeCartItems  }) {
  const { cart, addToCart, removeFromCart } = useContext(AppContext);
  const guest_uuid = localStorage.getItem("guest_uuid");
  // console.log(guest_uuid);

  
  const isInCart = item ? cart.some((cartItem) => cartItem.uuid === item.uuid) : false;

  // console.log(isInCart);

  const handleToggleCart = () => {
    if (isInCart) {
      // removeFromCart(item.id);
      removeCartItems()
    } else {
      addCartItems();
      // addToCart(item);
    }
  };

  return (
    <div className="w-full md:gap-[10px] border-red flex justify-center items-center">
      <Button
        value="Rent Now"
        style="md:px-[50px] w-full px-[50px] py-[20px] border-[2px] text-nowrap border-red md:rounded-[5px] border-[1px] font-bold text-[18px] leading-[21px] text-white bg-red"
      />
      <Button
        value={isInCart ? "Remove from Cart" : "Add to Cart"}
        style="md:px-[50px] w-full px-[50px] py-[20px] border-[2px] text-nowrap border-red md:rounded-[5px] border-[1px] font-bold text-[18px] leading-[21px] text-red bg-white"
        onClick={handleToggleCart}
      />
    </div>
  );
}
