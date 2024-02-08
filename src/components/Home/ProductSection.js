import React from "react";
import products from "../../data/ProductData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const ProductSection = () => {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <div>
        <div className="flex justify-center">
          <h2 className="text-secondary text-[18px] font-semibold italic">
            Find the perfect pillow for you.
          </h2>
        </div>
        <div className="flex justify-center">
          <h2 className="text-primary text-[36px] font-semibold text-center ">
            What kind of sleeper are you?
          </h2>
        </div>
        <div className="mt-10">
          <ul className="flex justify-center gap-10 text-primary font-light">
            <li>
              <button>Back Sleeper</button>
            </li>
            <li>
              <button>Side Sleeper</button>
            </li>
            <li>
              <button>Stomach Sleeper</button>
            </li>
            <li>
              <button>All Positions Sleeper</button>
            </li>
          </ul>
        </div>
        <div className="slider-container  pt-10">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id}>
                <div className="">
                  <img src={product.imgSrc} alt={product.headingTxt}></img>
                  <h2 className="text-[#122230] text-[17px] text-wrap">
                    {product.headingTxt}
                  </h2>
                  <p className="text-[#646F78] text-[13px]">
                    {product.support}
                  </p>
                  <p className="text-primary font-semibold">
                    From ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-transparent hover:bg-[#406C93] text-[#406C93] font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-[13px]">
            SHOP ALL BACK SLEEPER PILLOWS
          </button>
        </div>
      </div>
    </div>
  );
};
