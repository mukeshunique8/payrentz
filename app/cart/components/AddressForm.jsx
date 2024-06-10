import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext"; // Adjust the import path as necessary

export default function AddressForm({ errors }) {
  const { address, updateAddress, pincode } = useContext(AppContext);
  const [detectedLocation, setDetectedLocation] = useState(pincode);
  const [pickedLocation, setPickedLocation] = useState(pincode);
  console.log(detectedLocation);
  console.log(pickedLocation);
  console.log(address);

  useEffect(() => {
    function getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const googleLink = generateGoogleMapsLink(lat, long);
            updateAddress({...address,googleMapLink: googleLink })
            setPickedLocation(googleLink);
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }
    function generateGoogleMapsLink(latitude, longitude) {
      return `https://www.google.com/maps?q=${latitude},${longitude}`;
    }
    getUserLocation();
  }, [detectedLocation]);

  // async function getReadableLocation(lat, long) {
  //   const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}&zoom=10&addressdetails=1`;

  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     if (data && data.address) {
  //       setDetectedLocation(data?.address?.postcode);
  //     } else {
  //       console.error("No results found");
  //     }
  //   } catch (error) {
  //     console.error("Error during reverse geocoding:", error);
  //   }
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateAddress({ ...address, [name]: value });
  };
  const handleLocation = () => {
    console.log("NO");
  };

  return (
    <div className="flex flex-col md:grid grid-cols-2 gap-x-[30px] gap-y-[20px] justify-center w-full items-center">
      <div className="flex flex-col gap-[10px] justify-start items-start w-full">
        <label
          className="font-semibold text-base leading-[18px] text-[#000000]"
          htmlFor="addressLine1"
        >
          Address Line 1
          <span className="text-red text-[20px] text-start">*</span>
        </label>
        <input
          type="text"
          name="addressLine1"
          value={address.addressLine1}
          onChange={handleChange}
          className={`w-full justify-center items-center px-[10px] py-[12px] border-[1px] ${
            errors.addressLine1 ? "border-red" : "border-gray"
          } rounded-[5px]`}
        />
        {errors.addressLine1 && (
          <p className="text-red text-sm">{errors.addressLine1}</p>
        )}
      </div>
      <div className="flex flex-col gap-[10px] justify-start items-start w-full">
        <label
          className="font-semibold text-base leading-[18px] text-[#000000]"
          htmlFor="addressLine2"
        >
          Address Line 2
          <span className="text-red text-[20px] text-start">*</span>
        </label>
        <input
          type="text"
          name="addressLine2"
          value={address.addressLine2}
          onChange={handleChange}
          className={`w-full justify-center items-center px-[10px] py-[12px] border-[1px] ${
            errors.addressLine2 ? "border-red" : "border-gray"
          } rounded-[5px]`}
        />
        {errors.addressLine2 && (
          <p className="text-red text-sm">{errors.addressLine2}</p>
        )}
      </div>
      <div className="flex flex-col gap-[10px] justify-start items-start w-full">
        <label
          className="font-semibold text-base leading-[18px] text-[#000000]"
          htmlFor="city"
        >
          City<span className="text-red text-[20px] text-start">*</span>
        </label>
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
          className={`w-full justify-center items-center px-[10px] py-[12px] border-[1px] ${
            errors.city ? "border-red" : "border-gray"
          } rounded-[5px]`}
        />
        {errors.city && <p className="text-red text-sm">{errors.city}</p>}
      </div>
      <div className="flex flex-col gap-[10px] justify-start items-start w-full">
        <label
          className="font-semibold text-base leading-[18px] text-[#000000]"
          htmlFor="state"
        >
          State<span className="text-red text-[20px] text-start">*</span>
        </label>
        <input
          type="text"
          name="state"
          value={address.state}
          onChange={handleChange}
          className={`w-full justify-center items-center px-[10px] py-[12px] border-[1px] ${
            errors.state ? "border-red" : "border-gray"
          } rounded-[5px]`}
        />
        {errors.state && <p className="text-red text-sm">{errors.state}</p>}
      </div>
      <div className="flex flex-col gap-[10px] justify-start items-start w-full">
        <label
          className="font-semibold text-base leading-[18px] text-[#000000]"
          htmlFor="pincode"
        >
          Pincode<span className="text-red text-[20px] text-start">*</span>
        </label>
        <input
          type="text"
          name="pincode"
          value={address.pincode}
          onChange={handleChange}
          className={`w-full justify-center items-center px-[10px] py-[12px] border-[1px] ${
            errors.pincode ? "border-red" : "border-gray"
          } rounded-[5px]`}
        />
        {errors.pincode && <p className="text-red text-sm">{errors.pincode}</p>}
      </div>
      <div className="flex flex-col gap-[10px] justify-start items-start w-full">
        <div className="flex w-full justify-between">
          <label
            className="font-semibold text-base leading-[18px] text-[#000000]"
            htmlFor="googleMapLink"
          >
            Google Map Location Link
            <span className="text-red text-[20px] text-start">*</span>
          </label>
          <p
            onClick={handleLocation}
            className="font-semibold text-[14px] underline underline-offset-2 text-gray"
          >
            Pick Different Location
          </p>
        </div>
        <input
          type="text"
          name="googleMapLink"
          placeholder={address.googleMapLink}
          value={address.googleMapLink}
          // value={pickedLocation?.pickedLocation}
          onChange={handleChange}
          className={`w-full justify-center text-[12px] items-center px-[10px] py-[12px] border-[1px] ${
            errors.googleMapLink ? "border-red" : "border-gray"
          } rounded-[5px]`}
        />
        {errors.googleMapLink && (
          <p className="text-red text-sm">{errors.googleMapLink}</p>
        )}
      </div>
    </div>
  );
}
