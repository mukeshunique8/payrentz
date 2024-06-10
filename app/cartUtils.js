// cartUtils.js
import BASEURL from "./API"; // Adjust the import according to your project structure

export const addCartItems = async (
  item,
  guest_uuid,
  selectedTenure,
  fetchCartData,
  toaster2
) => {
  try {
    const response = await BASEURL.post("web/add-to-cart/", {
      uuid: item?.uuid, // variant uuid or accessories uuid or combo uuid
      guest_uuid: guest_uuid,
      change: "add", // remove or delete
      tenure: selectedTenure.value,
      type: item?.data_type,
    });
    // console.log(response.data);
    await fetchCartData();
    toaster2();
  } catch (err) {
    console.log(err);
  }
};

export const removeCartItems = async (
  item,
  guest_uuid,
  selectedTenure,
  fetchCartData,
  toaster1
) => {
  try {
    const response = await BASEURL.post("web/add-to-cart/", {
      uuid: item?.uuid, // variant uuid or accessories uuid or combo uuid
      guest_uuid: guest_uuid,
      change: "delete", // remove or delete
      tenure: selectedTenure.value,
      type: item?.data_type,
    });
    // console.log(response.data);
    await fetchCartData();
    toaster1();
  } catch (err) {
    console.log(err);
  }
};

export const tenureChange = async (
  
  guest_uuid,
  selectedTenure,
  fetchCartData,
  toaster1
) => {  
    console.log("trying");
  try {
    const response = await BASEURL.post(
      `web/cart/change-tenure/${guest_uuid}/`,
      {
        guest_id: guest_uuid,
        tenure: 3,
      }
      );
    console.log(response.data.data);
    await fetchCartData();
  } catch (err) {
    console.log(err);
  }
};
