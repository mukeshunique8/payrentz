import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const companyLinks = ["Home", "About Us", "Blog", "FAQs"];
const categoryLinks = [
  "Rent Appliances",
  "Rent Furniture",
  "Rent Fitness Equipment",
  "Rental Packages",
];
const socialLinks = [
  { src: "/FooterTwitter.svg", alt: "FooterTwitter", width: 20, height: 20 },
  { src: "/FooterFb.svg", alt: "FooterFb", width: 20, height: 20 },
  { src: "/FooterInsta.svg", alt: "FooterInsta", width: 20, height: 20 },
];
const policyLinks = ["Disclaimer", "Terms & Conditions", "Privacy Policy"];

export default function Footer() {
  const router = useRouter();

  const handleLinks = (link) => {
    if (link === "Home") {
      router.push(`/`);
    } else if (link === "About Us") {
      router.push(`/about`);
    } else if (link === "Blog") {
      router.push(`/blog`);
    } else if (link === "FAQs") {
      router.push(`/faq`);
    }
  };
  const handleCat = (link) => {
    if (link === "Rent Appliances") {
      router.push(`/appliances`);
    } else if (link === "Rent Furniture") {
      router.push(`/furniture`);
    } else if (link === "Rent Fitness Equipment") {
      router.push(`/fitness`);
    } else if (link === "Rental Packages") {
      router.push(`/combo`);
    }
  };
  
  return (
    <div className="w-full px-[20px] md:px-[60px] bg-b1 flex mx-auto items-center justify-center ">
      <div className="max-w-[1440px] pt-[50px] pb-[30px] w-full flex flex-col justify-center items-start">
        <div className="flex flex-col md:flex-row items-center w-full justify-between pb-[30px]">
          {/* Left Side Footer */}
          <div className="flex md:w-[40%] flex-col justify-start items-center md:items-start gap-[20px] ">
            <Image
              src="/FooterLogo.svg"
              alt="FooterLogo"
              width={177}
              height={45}
            />
            <h2 className="text-[20px] text-white font-bold">Contact us at</h2>
            <div className="text-[18px] flex flex-col gap-[10px] justify-center items-start text-white font-medium">
              <div className="flex gap-[15px]">
                <Image
                  src="/FooterMail.svg"
                  alt="FooterMail"
                  width={22}
                  height={18}
                />
                <p>hello@payrentz.com</p>
              </div>
              <div className="flex gap-[15px]">
                <Image
                  src="/FooterPhone.svg"
                  alt="FooterPhone"
                  width={20}
                  height={20}
                />
                <p>+91 89395 81818</p>
              </div>
            </div>
          </div>

          {/* Right Side Footer */}
          <div className="flex md:w-[60%] pt-[60px] md:pt-0 items-center justify-center md:justify-between gap-4 ">
            <div className="flex flex-col gap-[25px] text-center md:text-start">
              <h2 className="text-[20px] text-white font-bold">Company</h2>
              <div className="flex flex-col md:grid md:grid-cols-2 text-[16px] lg:gap-[30px] gap-[20px] text-white font-medium">
                {companyLinks.map((link, index) => (
                  <a className="cursor-pointer hover:scale-95 transition-all  duration-500" onClick={() => handleLinks(link)} key={index}>
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[25px] text-center md:text-start">
              <h2 className="text-[20px] text-white font-bold">Categories</h2>
              <div className="flex flex-col md:grid md:grid-cols-2 text-[16px] lg:gap-[30px] gap-[20px] text-white font-medium">
                {categoryLinks.map((link, index) => (
                  <a  className="cursor-pointer hover:scale-95 transition-all  duration-500 " onClick={()=>handleCat(link)} key={index}>{link}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-[1px] py-[22px] border-l-0 border-r-0 border-t-[#DBDBDB] border-b-[#DBDBDB] flex md:flex-row flex-col gap-y-[30px] justify-between items-center">
          <div className="flex gap-[10px]">
            {socialLinks.map((link, index) => (
              <Image
              className="cursor-pointer"
                key={index}
                src={link.src}
                alt={link.alt}
                width={link.width}
                height={link.height}
              />
            ))}
          </div>
          <div className="flex gap-[10px] lg:gap-[20px]">
            {policyLinks.map((link, index) => (
              <p key={index} className="text-[14px] cursor-pointer text-white font-medium">
                {link}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full py-[20px] flex items-center justify-center md:justify-start">
          <p className="text-[10px] md:text-[14px] text-white font-medium ">
            © Copyrights 2023 PayRentz.com
          </p>
        </div>
      </div>
    </div>
  );
}
