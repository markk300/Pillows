import React from "react";
import VeteranIcon from "../../assets/Icons/veteran icon.png";

const Promotion = () => {
  return (
    <div className="bg-promotion text-center md:h-[40px] sm:flex items-center md:justify-between">
      
        <a href="#" className="text-center sm:flex items-center md:pl-5">
          <img src={VeteranIcon} alt="veteran icon " className="w-8 md:w-7 md:mr-3 inline-block" />
          <p className="text-base text-primary sm:text-xs md:text-sm md:font-semibold  ">Veteran Owned Business</p>
        </a>
      
      <div>
        <p className="text-xs md:text-sm text-primary ">
          <b>BUY MORE SAVE MORE.</b> Buy 2 of the same pillow Save 5%. Buy 4 of the
          same pillow Save 10%. <a href="#" className="underline">See Details.</a>
        </p>
      </div>
      <div>
        <a href="#" className="pr-5 text-primary text-xs md:text-sm font-medium">Contact Us</a>
      </div>
    </div>
  );
};

export default Promotion;
