
import BASEURL from "./API"; 

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
  item,
  guest_uuid,
  selectedTenure,
  fetchCartData,
  toaster1
) => {
  // console.log("trying");
  // console.log(selectedTenure);
  try {
    const itemType = item.type.toLowerCase();
    // console.log(itemType);
    const response = await BASEURL.put(`web/cart/change-tenure/`, {
      guest_uuid: guest_uuid,
      tenure: selectedTenure,
      type: itemType,
      uuid: item.uuid,
    });
    console.log(response.data.data);
    await fetchCartData();
  } catch (err) {
    console.log(err);
  }
};

export const quantityChange = async (
  item,
  guest_uuid,
  fetchCartData,
  operation
) => {
  try {
    const itemType = item.type.toLowerCase();
    let changeType;
    if (operation === "add") {
      changeType = "add-quantity";
    } else if (operation === "subtract") {
      changeType = "remove";
    }

    const response = await BASEURL.post("web/add-to-cart/", {
      change: changeType,
      guest_uuid: guest_uuid,
      type: itemType,
      uuid: item?.uuid, // variant uuid or accessories uuid or combo uuid
    });
    // console.log(response.data);
    await fetchCartData();
  } catch (err) {
    console.log(err);
  }
};

export const removeFromCart = async (removeItem, guest_uuid,fetchCartData) => {
   
  try {
    await BASEURL.post("web/add-to-cart/", {
      uuid: removeItem.uuid,
      guest_uuid: guest_uuid,
      change: "delete",
      tenure: removeItem.tenure,
      type: removeItem?.type.toLowerCase(),
    });
    await fetchCartData();
    // console.log(cart);
  } catch (err) {
    console.log(err);
  }
};