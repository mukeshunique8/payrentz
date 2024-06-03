import React from "react";

export default function GoogleMap() {
  return (
    <div className="flex justify-center w-full rounded-[10px] items-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62201.02614945984!2d80.19865400000002!3d12.999706400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1717394796286!5m2!1sen!2sin"
        width="850"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
