"use client";
import { useEffect, useState, useContext } from "react";
import BASEURL from "../API";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Button from "../UI Elements/Button";
import { AppContext } from "../contexts/AppContext";
import RoundImageCard from "../UI Elements/RoundImageCard";
import { v4 as uuidv4 } from "uuid"; // To generate a unique browser ID

export default function Location({ onClose }) {
  const {
    pincode,
    setPincode,
    city,
    setCity,
    showLocationModal,
    setShowLocationModal,
  } = useContext(AppContext);

  localStorage.setItem("city", city);

  const [localPincode, setLocalPincode] = useState(pincode || "");
  const [error, setError] = useState(null);
  const [locations, setLocations] = useState([]);
  const [detectedLocation, setDetectedLocation] = useState(pincode);

  const availableLocations = locations.map((location) =>
    location.pincode_detail.toString()
  );

  console.log();
  useEffect(() => {
    const initialize = async () => {
      const storedPincode = localStorage.getItem("pincode");
      const storedBrowserId = localStorage.getItem("browser_id");
      const storedGuestId = localStorage.getItem("guest_uuid");
     

      const browserId = storedBrowserId || uuidv4();
      const pincodeToUse = storedPincode || pincode; // Default pincode if not set

      if (!storedBrowserId) {
        localStorage.setItem("browser_id", browserId);
      }

      if (!storedGuestId) {
        try {
          const response = await BASEURL.post('/web/guest/create/', {
            browser_id: browserId,
            pincode: pincodeToUse,
          });

          if (response.data.status === "success") {
       
            localStorage.setItem("guest_uuid", response.data.data.guest_uuid);
            localStorage.setItem("pincode", pincodeToUse);
            
            setPincode(pincodeToUse);
          } else {
            console.error("Error creating guest ID:", response.data);
          }
        } catch (error) {
          console.error('Error creating guest ID:', error);
        }
      }
    };

    const fetchData = async () => {
      try {
        const response = await BASEURL.get("web/home/city/");
        const cityList = response.data.data.results;
        const locations = cityList.map((city) => ({
          pincode_detail: city.pincode_detail,
          city: city.identity,
          imgsrc: city.identity === "Chennai" ? "/chennai.jpg" : "/covai.jpg",
          imgalt: city.identity,
        }));
        setLocations(locations);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
    initialize();
  }, []);

  function getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          getReadableLocation(lat, long);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  async function getReadableLocation(lat, long) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}&zoom=10&addressdetails=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data && data.address) {
        setDetectedLocation(data?.address?.postcode);
      } else {
        console.error("No results found");
      }
    } catch (error) {
      console.error("Error during reverse geocoding:", error);
    }
  }

  const handleLocation = (e) => {
    const code = e.target.value;
    if (/^\d*$/.test(code)) {
      setLocalPincode(code);
      setError(null);
    } else {
      setError("Pincode should contain only numbers.");
    }
  };

  const handleProceed = async (e) => {
    if (e) e.preventDefault();
    if (/^\d{6}$/.test(localPincode)) {
      if (availableLocations.includes(localPincode)) {
        const matchedLocation = locations.find(
          (location) => location.pincode_detail.toString() === localPincode
        );
        if (matchedLocation) {
          setPincode(localPincode);
          setCity(matchedLocation.city);
          localStorage.setItem("city", matchedLocation.city);
          localStorage.setItem("pincode", localPincode);
          setError("Service is available");

          setShowLocationModal(false); // Close modal on user confirmation
        } else {
          setError("Service is not available");
        }
      } else {
        setError("Service is not available");
      }
    } else {
      setError("Please enter a valid 6-digit pincode.");
    }
  };

  const toggleSelection = (selectedCity, pincode) => {
    setCity(selectedCity);
    setPincode(pincode);
    localStorage.setItem("city", selectedCity);
    localStorage.setItem("pincode", pincode);
    setLocalPincode(pincode); // Update local pincode state for manual changes
    setError(null); // Clear any previous error when city is selected

    setShowLocationModal(false); // Close modal on city selection
  };

  const renderLocation = locations.map((location, index) => (
    <RoundImageCard
      key={index}
      hover=" hover:scale-110 hover:transition-all hover:duration-700"
      imgSizes=" w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
      name={location.city}
      imgalt={location.imgalt}
      imgsrc={location.imgsrc}
      imgGrad={city === location.city}
      textStyle={
        city === location.city
          ? "text-[12px] md:text-[14px] text-red"
          : "text-[12px] md:text-[14px] text-b1"
      }
      imgStyle={city === location.city ? "bg-[#ED1F28] bg-opacity-40" : ""}
      imgsrc2={city === location.city ? "/Tick.svg" : ""}
      imgsrc2Sizes="w-[18px] h-[12px] md:w-[21px] md:h-[14px]"
      onClick={() => toggleSelection(location.city, location.pincode_detail)}
    />
  ));

  return showLocationModal ? (
    <div className="w-full rounded-[20px] bg-white p-[20px] md:p-[60px] max-w-[1153px] gap-[53px] mx-auto justify-center items-center flex flex-col md:flex-row relative">
      <button className="absolute top-4 right-4 text-black" onClick={onClose}>
        <IoMdClose color="gray" size={20} />
      </button>

      <div className="w-full hidden md:flex md:w-1/2">
        <div className="relative w-full h-[300px] md:w-[480px] md:h-[380px]">
          <Image
            className="cursor-pointer"
            src="/LocationImage.svg"
            alt="Location"
            fill
            sizes="100%"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 gap-[10px] md:gap-[30px] flex justify-start items-start flex-col">
        <h3 className="text-red font-bold md:text-[24px] md:leading-[28px]">
          Choose your location
        </h3>

        <div className="flex flex-col gap-[10px]">
          <h3 className="text-black font-semibold md:text-[18px] md:leading-[21px]">
            Enter PIN code
          </h3>

          <div className="flex justify-start pt-[10px] gap-[10px] items-center">
            <input
              value={localPincode} // Bind value to state
              onChange={handleLocation}
              className="p-[13px] border-[#E6E7E9] border-[1px] rounded-[5px] text-b1 no-spinner"
              type="text"
              placeholder={pincode}
              name="pincode"
              id="pincode"
            />
            <Button onClick={handleProceed} value="Proceed" />
          </div>
          {error ? (
            <p className="text-red py-2 font-extrabold text-base">{error}</p>
          ) : (
            <p className="text-green-800 py-2 font-extrabold text-base">
              Service is available
            </p>
          )}
          <p
            onClick={getUserLocation}
            className="cursor-pointer text-[12px] text-red underline"
          >
            Detect my location
          </p>
        </div>

        <div className="flex flex-col justify-start items-start w-full border-[#DBDBDB] gap-[20px] border-t-[1px] pt-[30px]">
          <h3 className="text-black font-semibold md:text-[18px] md:leading-[21px]">
            Pick your city
          </h3>

          <div className="flex justify-start gap-[40px]">{renderLocation}</div>
        </div>
      </div>
    </div>
  ) : null;
}
