import BASEURL from "./API";

export const requestAndSendOTP = async (phoneNumber) => {
  try {
    const response = await BASEURL.post("access/customer/vash-otp/", {
      phone_number: phoneNumber,
    });
    if (response.data.status === "success") {
      const detailID = response.data.data.detail;
      await BASEURL.get(`access/customer/send-otp/${detailID}/`);
      return response.data;
    } else {
      throw new Error("Failed to send OTP");
    }
  } catch (error) {
    console.error("Error requesting and sending OTP:", error);
    throw error;
  }
};

export const validateOTP = async (phoneNumber, otp) => {
  try {
    const response = await BASEURL.post("access/customer/validate-otp/", {
      phone_number: phoneNumber,
      otp: otp,
      guest_uuid:localStorage.getItem("guest_uuid")
    });
    return response.data;
  } catch (error) {
    console.error("Error validating OTP:", error);
    throw error;
  }
};
