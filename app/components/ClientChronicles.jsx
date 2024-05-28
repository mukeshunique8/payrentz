import React from "react";
import Image from "next/image";

export default function ClientChronicles() {

    const Feeds = [
        {
            title: "“We used PayRentz to furnish our temporary space, and it was a breeze. The process was seamless. Highly recommended!”",
            name:"Balaji",
            since:"Has been renting from 2020"
        },
        {
            title: "PayRentz exceeded our expectations with top-notch furniture at affordable prices. The process, from selection to delivery, was straightforward. Grateful for the excellent service!",
            name:"Prakash",
            since:"Has been renting from 2021"
        }
    ];

    const renderFeeds = Feeds.map((feed, index) => (
        <div key={index} className="border-[1px] border-white border-r-0 border-t-0 border-b-0 pl-[30px] py-[12px] gap-[20px]">
            <p className="text-white font-medium text-[20px] leading-[23px]">{feed.title}</p>
            <div className="flex flex-col justify-start items-start pt-[20px] text-white">
                <p className="font-semibold text-[24px]">{feed.name}</p>
                <p className="font-medium text-[16px]">{feed.since}</p>
            </div>
        </div>
    ));

    const renderFirstFeed = (
        <div className="border-[3px] border-white border-r-0 border-t-0 border-b-0 pl-[23px]  py-[12px] ">
            <div>
            <p className="text-white font-medium italic text-[16px]">{Feeds[0].title}</p>
            </div>
            <div className="flex flex-col justify-start items-start pt-[20px] text-white">
                <p className="font-semibold text-[16px]">{Feeds[0].name}</p>
                <p className="font-medium text-[12px]">{Feeds[0].since}</p>
            </div>
        </div>
    );

    return (
        <div className="w-full max-w-[1440px] mx-auto flex justify-center items-center">
            <div className="w-full flex md:flex-row flex-col justify-center items-center rounded-[5px] md:rounded-[20px] bg-blue gap-[57px] px-[22px] py-[30px] mx-[20px] md:mx-[60px] md:px-[68px] md:pt-[50px] md:pb-[70px]">
                {/* Left Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-start items-center gap-[68px]">
                    <div className="w-full hidden md:flex flex-col ">
                        <h2 className="text-white text-[48px] leading-[50px] font-extrabold">Client Chronicles:</h2>
                        <h2 className="text-white text-[40px] leading-[50px] font-extrabold">Unveiling Customer Journey</h2>
                    </div>
                    <div className="w-full md:hidden flex flex-col  ">
                    <h2 className="text-white text-[22px] text-center leading-[23px] pb-[30px] font-extrabold">See what our customers are saying!</h2>

                    {renderFirstFeed }

                    </div>
                    <div className="relative w-[290px] h-[97px] sm:w-[360px] sm:h-[147px] lg:w-[582px] lg:h-[194px]">
                        <Image
                            className="object-contain"
                            src="/Group.svg"
                            alt=""
                            fill
                            sizes="100%"
                        />
                    </div>
                </div>
                {/* Right Side */}
                <div className="w-1/2 hidden md:flex flex-col justify-start items-start gap-[40px]">
                    {renderFeeds}
                </div>
            </div>
        </div>
    );
}
