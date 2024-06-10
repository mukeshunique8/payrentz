import React, { useContext, useState } from "react";
import Button from "./Button";
import BASEURL from "../API";
import { AppContext } from "../contexts/AppContext";

export default function PinCode() {
  const { pincode } = useContext(AppContext);
  const [isCheck, setIsCheck] = useState(false);
  const [error, setError] = useState("");
  const [verifyPincode, setVerifyPincode] = useState("");
  const [loading,setLoading] =useState(false)

  const handleInput = (e) => {
    const inputPincode = e.target.value;
    if (/^\d*$/.test(inputPincode)) {
      setVerifyPincode(inputPincode);
      setError("");
    } else {
      setError("Pincode should contain only numbers.");
    }
  };

  const pincodeVerify = async (pincode) => {
    try {
      const response = await BASEURL.post("web/pincode/verify/", {
        pincode:pincode,
      });
      const result = response.data.status;

      if (result === "success") {
        setIsCheck(true);
        setError("");
        setLoading(false)

      } else {
        setIsCheck(false);
        setError("Currently not serviced");
        setLoading(false)

      }
    } catch (err) {
      setIsCheck(false);
      setError("Currently not serviced");
      console.error(err);
      setLoading(false)
    }
  };

  const handleVerification = () => {
    setLoading(true)
    if (verifyPincode) {
      pincodeVerify(verifyPincode);
    } else {
      setLoading(false)
      setError("Please enter a pincode.");
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 items-start justify-start sm:justify-center pt-8 lg:py-8">
      <h3 className="text-gray-600 text-sm md:text-base font-semibold">
        Enter your PIN code to check availability of product in your location
      </h3>
      <div className="flex w-full justify-start items-center gap-2">
        <input
          onChange={handleInput}
          className="p-2 md:w-60 w-40 border border-gray-300 rounded text-gray-500"
          type="text"
          placeholder={pincode || "600001"}
          name="pincode"
          id="pincode"
          value={verifyPincode}
        />
        <Button
          onClick={handleVerification}
          value={loading?"Check availability  ....":"Check availability"}
          style="md:px-5 px-3 text-nowrap rounded border border-blue-500 py-2 font-bold text-base leading-5 text-blue-500"
        />
      </div>
      {isCheck && (
        <h3 className="text-green-500 text-sm font-semibold leading-4">
          Product is available in your location.
        </h3>
      )}
      {error && (
        <h3 className="text-red text-sm font-semibold leading-4">
          {error}
        </h3>
      )}
    </div>
  );
}
