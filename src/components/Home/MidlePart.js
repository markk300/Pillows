import React from "react";
import Bed from "../../assets/Icons/Group 18.png";
import Delivery from "../../assets/Icons/Group 15.png";
import Return from "../../assets/Icons/Group 16.png";
import LowPrice from "../../assets/Icons/Group 21.png";

export const MidlePart = () => {
  return (
    <div className="flex justify-center">
      <div className=" sm:flex gap-20 ">
        <div className="flex mb-5 gap-5 items-center">
          <img src={Bed} alt="first img" />
          <p className="text-xs text-primary font-semibold">50 Day Sleep Better Guarantee</p>
        </div>
        <div className="flex mb-5 gap-5 items-center">
          <img src={Delivery} alt="second img" />
          <p className="text-xs  text-primary font-semibold">Fastest Delivery</p>
        </div>
        <div className="flex mb-5 gap-5 items-center">
          <img src={Return} alt="third img" />
          <p className="text-xs  text-primary font-semibold">Free Returns & Exchanges</p>
        </div>
        <div className="flex mb-5 gap-5 items-center">
          <img src={LowPrice} alt="forth img" />
          <p className="text-xs  text-primary font-semibold">Low Price Guarantee</p>
        </div>
      </div>
    </div>
  );
};
