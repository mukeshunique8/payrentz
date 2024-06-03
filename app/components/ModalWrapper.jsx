"use client";

import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Location from "./Location";

const ModalWrapper = ({ children }) => {
  const { showLocationModal, setShowLocationModal } = useContext(AppContext);

  function handleCloseLocation() {
    setShowLocationModal(false);
  }

  return (
    <div className={`w-full relative mx-auto bg-white ${showLocationModal ? 'blur-background' : ''}`}>
      {showLocationModal && (
        <div className="fixed bottom-0 inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80">
          <Location onClose={handleCloseLocation} />
        </div>
      )}
      {children}
    </div>
  );
};

export default ModalWrapper;
