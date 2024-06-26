import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import TenureCard from "../../../UI Elements/TenureCard";
import RoundImageCard from "../../../UI Elements/RoundImageCard";
import Button from "../../../UI Elements/Button";
import BottomBar from "../../../UI Elements/BottomBar";
import { useKeenSlider } from "keen-slider/react";
import PinCode from "../../../UI Elements/PinCode";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Switches from "./Switches";
import BASEURL from "../../../utils/API";
import { AppContext } from "../../../contexts/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addCartItems, removeCartItems } from "../../../utils/cartUtils"
export default function FixedLayout({ item }) {
  // const notify = () => toast("Item Added To Cart!");
  

  const [loading, setLoading] = useState(false);
  const [sliderRef] = useKeenSlider({
    loop: true,
  });

  // Initialize an empty array to hold the tenures
  let tenures = [];

  // Check each tenure value and add it to the tenures array if it's true
  if (item?.tenure_1) {
    tenures.push({
      months: "1 month+",
      price: "₹" + item?.rent_1,
      value: "1",
    });
  }

  if (item?.tenure_3) {
    tenures.push({
      months: "3+ months",
      price: "₹" + item?.rent_3,
      value: "3",
    });
  }

  if (item?.tenure_6) {
    tenures.push({
      months: "6+ months",
      price: "₹" + item?.rent_6,
      value: "6",
    });
  }

  if (item?.tenure_12) {
    tenures.push({
      months: "12+ months",
      price: "₹" + item?.rent_12,
      badge: true,
      value: "12",
    });
  }

  // Set the initial selectedTenure state to the first available tenure
  const initialTenure = tenures.length > 0 ? tenures[tenures.length - 1] : null;
  const [selectedTenure, setSelectedTenure] = useState(initialTenure);
  const guest_uuid = localStorage.getItem("guest_uuid");

  const { cart, setCart } = useContext(AppContext);

  useEffect(() => {
    setSelectedTenure(initialTenure);
  }, [item]);

  const toaster1 = () => {
    toast.warn("Item removed from cart", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      
    });
  };
  
  const toaster2 = () => {
    toast.success("Item added to cart", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
     
    });
  };

  // console.log(item);


  const handleAddToCart = async () =>{
    await addCartItems(item, guest_uuid, selectedTenure, fetchCartData, () => {
      // Toaster callback function
      // console.log('Item added to cart');
    });
  }

  const handleRemoveFromCart = async () => {
    await removeCartItems(item, guest_uuid, selectedTenure, fetchCartData, () => {
      // Toaster callback function
      // console.log('Item removed from cart');
    });
  };

 

  // const addCartItems = async () => {
  //   try {
  //     const response = await BASEURL.post("web/add-to-cart/", {
  //       uuid: item?.uuid, //varinat uuid or accessories uuid or combo uuid
  //       guest_uuid: guest_uuid,
  //       change: "add", //remove or delete
  //       tenure: selectedTenure.value,
  //       type: item?.data_type,
  //     });
  //     console.log(response.data);
  //     await fetchCartData();
  //     toaster2()
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const removeCartItems = async () => {
  //   try {
  //     const response = await BASEURL.post("web/add-to-cart/", {
  //       uuid: item?.uuid, //varinat uuid or accessories uuid or combo uuid
  //       guest_uuid: guest_uuid,
  //       change: "delete", //remove or delete
  //       tenure: selectedTenure.value,
  //       type: item?.data_type,
  //     });

  //     console.log(response.data);
  //     await fetchCartData();
  //     toaster1()
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const tenureChange = async () => {
  //   try {
  //     const response = await BASEURL.put(`web/cart/change-tenure/`, {
  //       guest_id: guest_uuid,
  //       tenure: selectedTenure.value,
  //     });
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const fetchCartData = async () => {
    try {
      const response = await BASEURL.get(
        `web/cart/list/?guest_uuid=${guest_uuid}`
      );
      setCart(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(cart);
  // console.log(item);
  const image_detail = item?.image_detail;
  const images = image_detail?.map((img) => img?.file);

  const [selectedImage, setSelectedImage] = useState(images?.[0]);

  const renderImages = images?.map((image, index) => (
    <div
      key={index}
      className={`relative keen-slider__slide w-[336px] h-[336px] md:min-w-full md:h-[570px] `}
    >
      <Image
        className="object-contain cursor-pointer rounded-[5px]"
        src={image}
        alt={`image-${index}`}
        fill
        sizes="100%"
      />
    </div>
  ));

  const renderSmallImages = images?.map((image, index) => (
    <div
      key={index}
      className="relative drop-shadow-2xl w-[75px] h-[75px] cursor-pointer"
      onClick={() => setSelectedImage(image)}
    >
      <Image
        className="object-contain rounded-[5px]"
        src={image}
        alt={`image-${index}`}
        fill
        sizes="100%"
      />
    </div>
  ));

  const handleSelect = (tenure) => {
    setSelectedTenure(tenure);
    // tenureChange();
  };

  const renderTenures = tenures.map((tenure, index) => (
    <TenureCard
      key={index}
      tenure={tenure}
      onClick={() => handleSelect(tenure)}
      selected={selectedTenure?.months === tenure?.months}
    />
  ));

  const terms = [
    {
      img: "/termVan.svg",
      term: "Secure Transaction",
    },
    {
      img: "/termTools.svg",
      term: "Secure Transaction",
    },
    {
      img: "/termSecure.svg",
      term: "2-day delivery",
    },
    {
      img: "/termVan.svg",
      term: "2-day delivery",
    },

    {
      img: "/termTools.svg",
      term: "Secure Transaction",
    },
  ];

  const renderTerms = terms.map((term, index) => (
    <RoundImageCard
      key={index}
      imgsrc={term.img}
      name={term.term}
      imgSizes="w-[44px] h-[44px] md:w-[70px] md:h-[70px]"
      textStyle="font-semibold text-[10px] md:text-[11px] text-b1"
    />
  ));

  return (
    <div className="w-full md:bg-transparent relative flex flex-col lg:flex-row max-w-[1440px] lg:gap-[30px] mx-auto md:pt-[20px] md:px-[60px]">
      <ToastContainer
        className="toaster-container"
        position="bottom-center"
        autoClose={3000}
        rtl={false}
        pauseOnFocusLoss
        hideProgressBar={true}
        draggable
        limit={1}
      />

      {/* Left Side: Images */}
      <div className="w-full flex flex-col items-center justify-center lg:w-[50%] place-items-center md:justify-start md:items-center md:gap-[20px]">
        <div
          ref={sliderRef}
          className="w-full relative bg-lblue lg:bg-transparent no-scrollbar pt-[20px] overflow-scroll keen-slider justify-start flex"
        >
          {renderImages}
          <div className="absolute bottom-[5%] left-[50%] -translate-x-[50%] gap-3 hidden md:flex md:gap-[10px]">
            {renderSmallImages}
          </div>
        </div>

        <div className="hidden bg-white justify-center items-center lg:flex">
          <Switches item={item} />
        </div>
      </div>

      {/* Right Side: Fixed Content */}
      <div className="lg:w-[620px] h-fit w-full lg:sticky top-[120px] flex">
        <div className="w-full flex flex-col px-[20px] py-[20px] lg:pt-0 lg:px-0 bg-lblue md:bg-transparent">
          <h3 className="md:pl-[20px] pb-[15px] text-b1 text-[24px] md:text-[32px] font-extrabold">
            {item?.identity ? item.identity : ""}
          </h3>
          <div className="w-full bg-lblue rounded-[10px] md:px-[20px] md:pb-[30px] flex flex-col justify-start">
            <div className="flex w-full justify-between md:justify-end">
              <h3 className="flex md:hidden font-bold text-b1 text-[18px] py-[20px]">
                Pick Tenure
              </h3>
              <h3
                // onClick={notify}
                className="flex cursor-pointer font-bold text-blue text-[14px] underline underline-offset-2 self-end py-[20px]"
              >
                Compare Tenures
              </h3>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="md:flex grid grid-cols-2 place-items-center gap-[10px] w-full flex-wrap flex-row-reverse justify-around items-center">
                {renderTenures}
              </div>
              <div className="flex md:flex-row flex-col items-center justify-center gap-[20px] w-full bg-white border-gray border-[1px] rounded-[5px] px-[10px] py-[25px]">
                <div className="flex items-center w-full md:w-[35%] px-[20px] md:px-0 justify-between flex-row md:flex-col">
                  <div className="flex flex-col md:flex-row items-center md:gap-[10px]">
                    <h3 className="font-medium text-b1 text-[12px] md:text-[14px]">
                      Security Deposit
                    </h3>
                    <h3 className="font-bold text-b1 text-[22px] md:text-[20px]">
                      {`₹${item?.deposit_1 ?? "1000"}`}
                    </h3>
                  </div>
                  <div className="w-[1px] h-full md:hidden flex border-l-gray border-l-[1px]"></div>
                  <div className="flex flex-col md:flex-row items-center md:gap-[10px]">
                    <h3 className="font-medium text-b1 text-[12px] md:text-[14px]">
                      Handling Charge
                    </h3>
                    <h3 className="font-bold text-b1 text-[22px] md:text-[20px]">
                      {`₹${item?.handling_charge ?? "1000"}`}
                    </h3>
                  </div>
                </div>
                <div className="w-[1px] h-full hidden md:flex border-l-gray border-l-[1px]"></div>

                <div className="flex px-[20px] md:px-0 w-full md:w-[65%] flex-col text-[#858585] text-[10px] md:text-[12px] gap-[9px] md:gap-[12px] font-medium">
                  <h3>
                    Security Deposit is refundable on return of the product.
                  </h3>
                  <h3>
                    Handling Charge is non-refundable - to cover delivery,
                    pickup, installation & service.
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-center gap-[13px] md:gap-[30px]">
                {renderTerms}
              </div>
            </div>
          </div>
          <div className="w-full hidden md:flex justify-center items-center">
            <PinCode />
          </div>

          <div className="w-full hidden lg:flex justify-center items-center">
            <BottomBar
              loading={loading}
              item={item}
              addCartItems={handleAddToCart}
              removeCartItems={handleRemoveFromCart}
            />
          </div>
        </div>
      </div>
      <div className="flex bg-white justify-center px-[20px] py-[20px] lg:pt-0 lg:px-0 items-center lg:hidden">
        <Switches item={item} />
      </div>
      <div className="fixed z-50 w-full bottom-0 lg:hidden">
            <BottomBar
              loading={loading}
              item={item}
              addCartItems={handleAddToCart}
              removeCartItems={handleRemoveFromCart}
            />
          </div>
    </div>
  );
}
