"use client";
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pincode, setPincode] = useState("600001");
  const [city, setCity] = useState("Chennai");
  const [showLocationModal, setShowLocationModal] = useState(null);

  useEffect(() => {
    const savedPincode = localStorage.getItem("pincode");
    const savedCity = localStorage.getItem("city");

    if (savedPincode) setPincode(savedPincode);
    if (savedCity) setCity(savedCity);

    // Only hide the modal if both pincode and city are found in localStorage
    if (savedPincode && savedCity) {
      setShowLocationModal(false);
    } else {
      setShowLocationModal(true);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        pincode,
        setPincode: (value) => {
          setPincode(value);
          localStorage.setItem("pincode", value);
        },
        city,
        setCity: (value) => {
          setCity(value);
          localStorage.setItem("city", value);
        },
        showLocationModal,
        setShowLocationModal,
      }}
    >
      {showLocationModal !== null && children}
    </AppContext.Provider>
  );
};
