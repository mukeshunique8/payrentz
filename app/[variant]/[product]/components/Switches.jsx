import React, { useRef, useState } from "react";
import Accordions from "../../../UI Elements/Accordians";

export default function Switches({ item }) {
  console.log(item?.description);

  const [activeSection, setActiveSection] = useState("description");
  const descriptionRef = useRef(null);
  const specsRef = useRef(null);
  const faqRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    switch (section) {
      case "description":
        scrollToSection(descriptionRef);
        break;
      case "specs":
        scrollToSection(specsRef);
        break;
      case "faq":
        scrollToSection(faqRef);
        break;
      default:
        break;
    }
  };
  const specs = [
    {
      title: "Product Name",
      spec: item?item.identity:"",
    },
    {
      title: "Configuration",
      spec: item?item.Configuration:"",
    },
    {
      title: "Screen Size",
      spec: item?item.Screen:"",
    },
    {
      title: "Brand",
      spec: item?item.Brand:"",
    },
    {
      title: "Color",
      spec: item?item.Color:"",
    },
    {
      title: "Transport",
      spec: item?item.Transport:"",
    },
  ];

  const data = [
    {
      Id: 1,
      Question: "What is the minimum rental period?",
      Answer:
        "Yes, you need to sign the Terms and Conditions provided along with the application form.",
    },
    {
      Id: 2,
      Question: "Is there an agreement?",
      Answer:
        "PayRentz products can be rented for a minimum period of 3 months. PayRentz products can be rented for a minimum,",
    },

    {
      Id: 3,
      Question: "How can I terminate the agreement ?",
      Answer:
        "The rental contract gets terminated on completion of the original rental duration agreed (subject to minimum rental period of 3 months) . The contract can also be terminated by either of the parties by giving 15 days notice . Notwithstanding the above, if the rent amount payable and due remains unpaid for more than 15 days from the due date, the rental contract stands automatically terminated. In such a case, the client is expected to arrange to return the products forthwith and facilitate PayRentz team to take possession of the products so given on rent.",
    },
    {
      Id: 4,
      Question: "How much rent do I need to pay and when?",
      Answer:
        "Clients are encouraged to pay rent for the products on or before 7th of every month. Kindly refer to the product categories listed along with rent details in the website. Rent will be communicated without any ambiguity at the time of delivery and it will be documented in the application form.",
    },
  ];

  const renderSpecs = specs.map((item, index) => (
    <div
      key={index}
      className={`w-full flex py-[20px] pl-[30px] justify-start items-center gap-[40px] lg:gap-[100px]
            ${index % 2 == 0 ? "bg-lblue" : "bgwhite   "}
        `}
    >
      <h3 className="text-base w-[30%] font-extrabold leading-[18px] text-b1">
        {item.title}
      </h3>
      <h3 className="text-base w-[70%] font-medium leading-[18px] text-b1">
        {item.spec}
      </h3>
    </div>
  ));
  return (
    <div className="w-full mx-auto   max-w-[1440px] flex flex-col justify-center items-start ">
      <div className="w-full flex flex-col justify-center">
        <div className="lg:flex hidden px-[10px] border-b-[1px] border-blue justify-between items-center py-[20px] font-semibold text-base leading-[18px]">
          <h3
            onClick={() => handleSectionClick("description")}
            className={`cursor-pointer ${
              activeSection === "description" && "text-blue font-bold"
            }`}
          >
            Description
          </h3>
          <h3
            onClick={() => handleSectionClick("specs")}
            className={`cursor-pointer ${
              activeSection === "specs" && "text-blue font-bold"
            }`}
          >
            Specifications
          </h3>
          <h3
            onClick={() => handleSectionClick("faq")}
            className={`cursor-pointer ${
              activeSection === "faq" && "text-blue font-bold"
            }`}
          >
            Frequently Asked Questions
          </h3>
        </div>

        <div
          ref={descriptionRef}
          className="flex flex-col border-b-[1px] border-blue justify-center items-start py-[20px]  gap-[20px] lg:gap-[30px]  lg:py-[40px]"
        >
          <h2 className="font-extrabold text-blue text-[16px] lg:text-[24px]">
            Description
          </h2>

          <div className="font-medium text-b1 text-[14px] lg:text-[16px]">
            {item?.description ? (
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            ) : (
              <p>
                PayRentz offers high-quality electronic devices and appliances
                on rental with complete service backup. Our products are
                designed for portability, power, and efficiency, making them
                ideal for both personal and professional use. Whether you need a
                laptop with powerful configurations, home appliances, or other
                electronic devices, PayRentz ensures you get the best equipment
                with standard configurations and customization options
                available. Renting from PayRentz means no heavy investments,
                easy upgrades, and comprehensive service support, including
                delivery, pickup, installation, and maintenance.
              </p>
            )}
          </div>
        </div>
        <div
          ref={specsRef}
          className="flex flex-col border-b-[1px] border-blue justify-center items-start py-[20px]  gap-[20px] lg:gap-[30px]  lg:py-[40px]"
        >
          <h2 className="font-extrabold text-blue text-[16px] lg:text-[24px]">
            Specifications
          </h2>

          <div className="flex w-full flex-col">{renderSpecs}</div>
        </div>

        <div
          ref={faqRef}
          className="flex flex-col border-b-[1px] border-blue justify-center items-start py-[20px]  gap-[20px] lg:gap-[30px]  lg:py-[40px]"
        >
          <h2 className="font-extrabold text-blue text-[16px] lg:text-[24px]">
            Frequently Asked Questions
          </h2>

          <div className="flex w-full flex-col">
            <Accordions
              BtnStyles=" border-b-[1px] border-[#D5D9E0]"
              QueStyles="text-start text-[14px] font-extrabold lg:text-[18px] py-[5px] text-blue lg:text-black leading-[21px] lg:font-bold"
              AnsStyles="text-[12px] lg:text-[16px] py-[20px]  text-[#2D2D2D] lg:leading-[30px] font-medium"
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
