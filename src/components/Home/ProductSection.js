import React from "react";
import products from "../../data/ProductData";

export const ProductSection = () => {
    console.log(products)
  return (
    <div className="">
      <div>
        <div className="flex justify-center">
          <h2 className="text-secondary text-[18px] font-semibold italic">
            Find the perfect pillow for you.
          </h2>
        </div>
        <div className="flex justify-center">
          <h2 className="text-primary text-[36px] font-semibold ">
          What kind of sleeper are you?
          </h2>
        </div>
        <div className="mt-10">
            <ul className="flex justify-center gap-10 text-primary font-light">
                <li><button>Back Sleeper</button></li>
                <li><button>Side Sleeper</button></li>
                <li><button>Stomach Sleeper</button></li>
                <li><button>All Positions Sleeper</button></li>
            </ul>
        </div>
         <div className="flex justify-center gap-5 pt-10">
            {products.map((product) => (
                <div key={product.id}>
                    <div className="w-full">
                        <img src={product.imgSrc}></img>
                        <h2 className="text-[#122230] text-[17px] text-wrap">{product.headingTxt}</h2>
                        <p className="text-[#646F78] text-[13px]">{product.support}</p>
                        <p className="text-primary font-semibold">From ${product.price}</p>
                    </div>
                </div>
            ))}
         </div>
         <div className="flex justify-center mt-10">
            <button className='bg-transparent hover:bg-[#406C93] text-[#406C93] font-medium hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-[13px]'>SHOP ALL BACK SLEEPER PILLOWS</button>
         </div>
      </div>
    </div>
  );
};
