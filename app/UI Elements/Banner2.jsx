import React from 'react';
import Image from 'next/image';

const Banner2 = ({ titleSmall, titleLarge, imageSrc, reverse, rating, grad }) => {
  return (
    <div
      className={`w-full h-[108px] md:h-[170px]   justify-center items-center md:gap-4 rounded-[4px] lg:rounded-[10px] ${grad} ${
        reverse ? 'flex flex-col lg:flex-row-reverse ' : 'flex flex-col lg:flex-row '
      }`}
    >
      {/* <div className="flex flex-col pt-[10px] lg:py-[45px]  text-[#F3F7FF] font-extrabold">
        {rating ? (
          <div className="flex flex-row justify-center items-center gap-[8px]  lg:gap-3 lg:flex-col">
            <h2 className="text-[13px] md:text-[24px]">{titleSmall}</h2>
            <div className="flex justify-center gap-[4px]  lg:gap-2 items-center">
              <p className="text-[13px] lg:text-[20px] font-extrabold">4.8</p>

              <div className='relative w-[30px] h-[5px] lg:w-[89px] lg:h-[15px]'>
              <Image
                className="object-cover"
                src="/Ratings.svg"
                alt="Ratings"
               fill
               sizes='100%'
              />

              </div>
             
              <p className="text-[14px] font-normal">(159)</p>
            </div>
          </div>
        ) : (
          <div className="flex  flex-row justify-center items-center lg:justify-start lg:items-start gap-x-1   lg:flex-col">
            <h2 className="text-[13px] leading-[15px]  lg:text-[24px] lg:leading-[28px]">{titleSmall}</h2>
            <h2 className="text-[20px] leading-[23px] lg:text-[48px] lg:leading-[56px]">{titleLarge}</h2>
          </div>
        )}
      </div> */}
      <div className="relative  object-center w-full h-[108px] lg:w-[427px] lg:h-[170px] rounded-[10px] ">
        <Image
          className="rounded-[4px] object-cover"
          src={imageSrc}
          alt=""
          fill
          sizes="100%"
        />
      </div>
    </div>
  );
};

export default Banner2;
