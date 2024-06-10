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
  const guest_uuid =   typeof window !== "undefined" ? localStorage.getItem("guest_uuid") : null;

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
