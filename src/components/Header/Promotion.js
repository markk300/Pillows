import React from "react";
import VeteranIcon from "../../assets/Icons/veteran icon.png";

const Promotion = () => {
  let offerOne = 'Buy 2 of the same pillow Save'
  let offerTWO = 'Buy 4 of the same pillow Save'
  let percentOne = 5+'%';
  let precentTwo = 10+'%';
  return (
    <div className="bg-promotion text-center md:h-[40px] sm:flex items-center md:justify-between">
      
        <button className="text-center sm:flex items-center md:pl-5">
          <img src={VeteranIcon} alt="veteran icon " className="w-8 md:w-7 md:mr-3 inline-block" />
          <p className="text-base text-primary sm:text-xs md:text-sm md:font-semibold  ">Veteran Owned Business</p>
        </button>
      
      <div>
        <p className="rotating-text text-xs md:text-sm text-primary ">
          <b>BUY MORE SAVE MORE.</b>{offerOne} {percentOne}.{offerTWO} {precentTwo}. <button className="underline">See Details.</button>
        </p>
      </div>
      <div>
        <button className="pr-5 text-primary text-xs md:text-sm font-medium">Contact Us</button>
      </div>
    </div>
  );
};

export default Promotion;