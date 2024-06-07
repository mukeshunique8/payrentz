import { createContext, useState, useEffect } from "react";
import BASEURL from "../API";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pincode, setPincode] = useState("600012");
  const [city, setCity] = useState("Chennai");
  const [showModal, setShowModal] = useState(null);
  const [showLocationModal, setShowLocationModal] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(null);
  const [cart, setCart] = useState([]);
  const guest_uuid =
    typeof window !== "undefined" ? localStorage.getItem("guest_uuid") : null;

  const state = city !== "Banglore" ? "Tamil Nadu" : "Karnataka";
  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    city: city,
    state: state,
    pincode: pincode,
    googleMapLink: "",
  });

  const fetchCartData = async () => {
    try {
      const response = await BASEURL.get(
        `web/cart/list/?guest_uuid=${guest_uuid}`
      );
      setCart(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(cart);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedPincode = localStorage.getItem("pincode");
      const savedCity = localStorage.getItem("city");

      if (savedPincode) setPincode(savedPincode);
      if (savedCity) setCity(savedCity);

      if (savedPincode && savedCity) {
        setShowLocationModal(false);
      } else {
        setShowLocationModal(true);
      }

      fetchCartData();
    }
  }, []);

  // const addToCart = async (item) => {
  //   const existingItemIndex = cart.findIndex(
  //     (cartItem) => cartItem.id === item.id
  //   );
  //   if (existingItemIndex !== -1) {
  //     // Item already exists, update quantity and tenure
  //     const updatedCart = [...cart];
  //     updatedCart[existingItemIndex].quantity += item.quantity;
  //     updatedCart[existingItemIndex].tenure = item.tenure; // Update tenure if needed
  //     setCart(updatedCart);
  //   } else {
  //     // Item doesn't exist, add it to the cart
  //     setCart([...cart, item]);
  //   }

  //   try {
  //     await BASEURL.post("web/add-to-cart/", {
  //       uuid: item.id,
  //       guest_uuid: guest_uuid,
  //       change: "add",
  //       tenure: item.tenure,
  //       type: item.type,
  //     });
  //     fetchCartData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const updateCartItem = async (itemId, newQuantity, newTenure) => {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === itemId
  //         ? { ...item, quantity: newQuantity, tenure: newTenure }
  //         : item
  //     )
  //   );

  //   try {
  //     await BASEURL.post("web/add-to-cart/", {
  //       uuid: itemId,
  //       guest_uuid: guest_uuid,
  //       change: "update",
  //       tenure: newTenure,
  //       quantity: newQuantity,
  //     });
  //     fetchCartData();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const removeFromCart = async (removeItem) => {
   
    try {
      await BASEURL.post("web/add-to-cart/", {
        uuid: removeItem.uuid,
        guest_uuid: guest_uuid,
        change: "delete",
        tenure: removeItem.tenure,
        type: removeItem?.type.toLowerCase(),
      });
      setCart((prevCart) =>
        prevCart.filter((item) => item.uuid !== removeItem.uuid)
      );
      console.log(cart);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSetPincode = (value) => {
    setPincode(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("pincode", value);
    }
    if (value) setShowLocationModal(false);
  };

  const handleSetCity = (value) => {
    setCity(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("city", value);
    }
  };

  const updateAddress = (newAddress) => {
    setAddress(newAddress);
  };

  return (
    <AppContext.Provider
      value={{
        pincode,
        setPincode: handleSetPincode,
        city,
        setCity: handleSetCity,
        showModal,
        setShowModal,
        showLocationModal,
        setShowLocationModal,
        cart,
        setCart,
        // addToCart,
        // updateCartItem,
        removeFromCart,
        address,
        updateAddress,
        showLoginModal,
        setShowLoginModal,
      }}
    >
      {showLocationModal !== null && children}
    </AppContext.Provider>
  );
};
