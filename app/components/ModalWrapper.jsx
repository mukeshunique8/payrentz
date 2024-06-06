"use client";

import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Location from "./Location";
import Login from "./Login";

const ModalWrapper = ({ children }) => {
  const {
    showModal,
    setShowModal,
    showLocationModal,
    setShowLocationModal,
    showLoginModal,
    setShowLoginModal,
  } = useContext(AppContext);

  function handleCloseLocation() {
    setShowModal(false);
    setShowLocationModal(false);
    setShowLoginModal(false);
  }

  return (
    <div className={`w-full relative mx-auto bg-white ${showModal ? 'blur-background' : ''}`}>
      {showLocationModal && (
        <div className="fixed bottom-0 inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80">
          <Location onClose={handleCloseLocation} />
        </div>
      )}
      {showLoginModal && (
        <div className="fixed bottom-0 inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80">
          <Login onClose={handleCloseLocation} />
        </div>
      )}
      {children}
    </div>
  );
};

export default ModalWrapper;
