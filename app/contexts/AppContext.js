import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pincode, setPincode] = useState("600001");
  const [city, setCity] = useState("Chennai");
  const [showLocationModal, setShowLocationModal] = useState(null);
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if available
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    const savedPincode = localStorage.getItem("pincode");
    const savedCity = localStorage.getItem("city");

    if (savedPincode) setPincode(savedPincode);
    if (savedCity) setCity(savedCity);

    if (savedPincode && savedCity) {
      setShowLocationModal(false);
    } else {
      setShowLocationModal(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // const generateItemId = (productId) => {
  //   return `${productId}_${Date.now()}`;
  // };

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      // Item already exists, update quantity and tenure
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += item.quantity;
      updatedCart[existingItemIndex].tenure = item.tenure; // Update tenure if needed
      setCart(updatedCart);
    } else {
      // Item doesn't exist, add it to the cart
      setCart([...cart, item]);
    }
  };

  const updateCartItem = (itemId, newQuantity, newTenure) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity, tenure: newTenure } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleSetPincode = (value) => {
    setPincode(value);
    localStorage.setItem("pincode", value);
    if (value) setShowLocationModal(false);
  };

  const handleSetCity = (value) => {
    setCity(value);
    localStorage.setItem("city", value);
  };

  return (
    <AppContext.Provider
      value={{
        pincode,
        setPincode: handleSetPincode,
        city,
        setCity: handleSetCity,
        showLocationModal,
        setShowLocationModal,
        cart,
        addToCart,
        updateCartItem,
        removeFromCart,
      }}
    >
      {showLocationModal !== null && children}
    </AppContext.Provider>
  );
};
