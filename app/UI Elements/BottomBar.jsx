import React, { useContext } from "react";
import Button from "./Button";
import { AppContext } from "../contexts/AppContext";

export default function BottomBar({ item }) {
  const { cart, addToCart, removeFromCart } = useContext(AppContext);

  const isInCart = item ? cart.some((cartItem) => cartItem.id === item.id) : false;

  const handleToggleCart = () => {
    if (isInCart) {
      removeFromCart(item.id);
    } else {
      addToCart(item);
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
