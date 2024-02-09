import React from "react";
import ExpertIcon from "../../assets/Icons/bedding experts icon.png";
import Badge from "../../assets/Icons/satisfaction icon.png";
import Returns from "../../assets/Icons/free exchange and returns icon.png";
export const HereToHelp = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <h2 className="text-primary text-[30px] font-semibold mb-10">
          We’re here to help
        </h2>
      </div>
      <div className="flex flex-col px-10 gap-10 md:px-0 md:flex md:flex-row">
        <div className="flex flex-col justify-center text-center items-center ">
          <img src={ExpertIcon} alt="experts" className="w-16 mb-10" />
          <h2 className="text-[17px] text-primary font-bold mb-3">
            Talk to Our Bedding Experts
          </h2>
          <p className="text-primary text-[16px] font-medium w-[95%]">
            Looking for a particular pillow? Our expert staff can make a
            recommendation to meet your individual sleep needs.
          </p>
        </div>
        <div className="flex flex-col justify-center text-center items-center ">
          <img src={Badge} alt="Badge" className="w-16 mb-10" />
          <h2 className="text-[17px] text-primary font-bold mb-3">
            100% Satisfaction Guarantee
          </h2>
          <p className="text-primary text-[16px] font-medium w-[95%]">
            If a product does not help you Sleep Better, our bedding experts can
            find you a product that will help you Sleep Better Guaranteed!
          </p>
        </div>
        <div className="flex flex-col justify-center text-center items-center ">
          <img src={Returns} alt="Returns" className="w-16 mb-10" />
          <h2 className="text-[17px] text-primary font-bold mb-3">
            Free Exchanges & Returns
          </h2>
          <p className="text-primary text-[16px] font-medium w-[95%]">
            You have up to 90 days to process 3 free shipping exchanges. We want
            you to find that perfect pillow!
          </p>
        </div>
      </div>
    </div>
  );
};
