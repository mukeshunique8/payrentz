import React, { useRef } from "react";
import Card from "../UI Elements/Card";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

export default function Display({ ads, style = "flex-wrap", slider = false }) {
  const router = useRouter();
  const params = useSearchParams();
  const { variant } = useParams();
  const containerRef = useRef(null);

  function handleProduct(ad) {
    if (variant) {
      router.push(
        `/${variant}/${ad.title}?price=${ad.price}&id=${ad.adId}&img=${ad.imageUrl}`
      );
    }
    router.push(`/${ad.category_detail.slug}/${ad.slug}`);
  }

  function scrollLeft() {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft - 300, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  }

  function scrollRight() {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft + 300, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  }

  return (
    <div className="relative w-full  mx-auto justify-center items-center max-w-[1440px] pt-[25px] pb-[35px] md:pt-[37px] md:pb-[50px] px-[10px] lg:px-[60px]">
      <div
        ref={containerRef}
        className={`flex  justify-around items-center gap-[20px] md:gap-[40px] ${style}`}
      >
        {ads.map((ad, index) => (
          <Card
            key={index}
            imageUrl={ad?.image_detail?.[0]?.file || "/PH_Card_Image.jpg"}
            title={ad.identity}
            price={ad.rent_1}
            badgeText="Newly Added"
            badgeColor="text-red"
            badgeBgColor="bg-lblue"
            onclick={() => handleProduct(ad)}
          />
        ))}
      </div>
      {slider && (
        <div>
          <div
            className="absolute hidden md:flex justify-center  items-center left-[2%] top-[45%] z-20 cursor-pointer"
            onClick={scrollLeft}
          >
            <FaChevronCircleLeft color="#DBDBDB" size={60} />
          </div>
          <div
            className="absolute hidden md:flex justify-center items-center right-[2%] top-[45%] z-20 cursor-pointer"
            onClick={scrollRight}
          >
            <FaChevronCircleRight color="#DBDBDB" size={60} />
          </div>
        </div>
      )}
    </div>
  );
}
