import React from "react";
import firstCard from "../../assets/firstCard.png";
import secondCard from "../../assets/secondCard.png";
import thirdCard from "../../assets/thirdCard.png";

export const CardSection = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center p-5 gap-5 md:flex md:flex-row md:justify-center md:gap-5 ">
        <div className=" relative ">
          <div className="overflow-hidden">
            <img
              src={firstCard}
              alt="firstCard"
              className="w-[406px] h-[530px] object-cover hover:scale-110 transition-all duration-500 cursor-pointer"
            />
          </div>
          <div className="absolute top-0 px-4 py-3 text-primary  ">
            <h1 className=" font-semibold text-4xl text-[28px] pb-3">
              {" "}
              Pillows{" "}
            </h1>
            <p className="text-[12px] underline font-semibold">SHOP NOW</p>
          </div>
        </div>
        <div className=" relative">
          <div className="overflow-hidden">
            <img
              src={secondCard}
              alt="firstCard"
              className="w-[406px] h-[530px] object-cover object-left-top hover:scale-110 transition-all duration-500 cursor-pointer"
            />
          </div>
          <div className="absolute top-0 px-4 py-3 text-primary  ">
            <h1 className=" font-semibold text-4xl text-[28px] pb-3">
              {" "}
              Sheets & <br></br> Duvet Covers{" "}
            </h1>
            <p className="text-[12px] underline font-semibold">SHOP NOW</p>
          </div>
        </div>
        <div className=" relative">
          <div className="overflow-hidden">
            <img
              src={thirdCard}
              alt="firstCard"
              className="w-[406px] h-[530px] object-cover hover:scale-110 transition-all duration-500 cursor-pointer"
            />
          </div>
          <div className="absolute top-0 px-4 py-3 text-primary  ">
            <h1 className=" font-semibold text-4xl text-[28px] pb-3">
              {" "}
              Comforters{" "}
            </h1>
            <p className="text-[12px] underline font-semibold">SHOP NOW</p>
          </div>
        </div>
      </div>
    </div>
  );
};
