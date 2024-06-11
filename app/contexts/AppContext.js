import { createContext, useState, useEffect } from "react";
import BASEURL from "../utils/API";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [showModal, setShowModal] = useState(null);
  const [showLocationModal, setShowLocationModal] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(null);
  const [cart, setCart] = useState([]);
  const [variantAll, setVariantAll] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  const state = city !== "Banglore" ? "Tamil Nadu" : "Karnataka";
  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    city: city,
    state: state,
    pincode: pincode,
    googleMapLink: "",
  });

  // console.log(address);
  const fetchCartData = async (guestId) => {
    try {
      const response = await BASEURL.get(`web/cart/list/?guest_uuid=${guestId}`);
      setCart(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchVariantData = async () => {
    try {
      const response = await BASEURL.get("web/variant/list-all/");
      setVariantAll(response.data.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const initialize = async () => {
      if (typeof window !== "undefined") {
        let storedBrowserId = localStorage.getItem("browser_id");
        let storedGuestId = localStorage.getItem("guest_uuid");
        const storedPincode = localStorage.getItem("pincode");
        const storedCity = localStorage.getItem("city");

        if (!storedBrowserId) {
          storedBrowserId = uuidv4();
          localStorage.setItem("browser_id", storedBrowserId);
        }

        if (!storedGuestId) {
          try {
            const response = await BASEURL.post("/web/guest/create/", {
              browser_id: storedBrowserId,
              pincode: storedPincode || "600012", // Default pincode
            });

            if (response.data.status === "success") {
              storedGuestId = response.data.data.guest_uuid;
              localStorage.setItem("guest_uuid", storedGuestId);
            } else {
              console.error("Error creating guest ID:", response.data);
            }
          } catch (error) {
            console.error("Error creating guest ID:", error);
          }
        }

        setPincode(storedPincode || "600012");
        setCity(storedCity || "Chennai");

        if (!storedPincode || !storedCity) {
          setShowLocationModal(true);
        }

        if (storedGuestId) {
          await fetchCartData(storedGuestId);
        }
        await fetchVariantData();

        setIsInitialized(true);
      }
    };

    initialize();
  }, []);

  const handleSetPincode = (value) => {
    setPincode(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("pincode", value);
    }
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

  if (!isInitialized) {
    return null; // Show a loading indicator or nothing until initialization is complete
  }

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
        variantAll,
        setVariantAll,
        showLoginModal,
        setShowLoginModal,
        address,
        updateAddress,
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
