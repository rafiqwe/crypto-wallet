import React from "react";

const TopFooterText = () => {
  return (
    <div className="w-full h-full relative text-white px-10">
      <div className="w-full h-full flex items-center flex-col mx-auto justify-center">
        <h3 className="md:text-5xl text-4xl md:w-1/2 w-full font-semibold text-center">
          Experience Bitcoin like never before with Wallet
        </h3>
        <div className="flex items-center  ">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`w-20 h-20 rounded-2xl mt-8 bg-gray-300  ${
                index % 2 === 0 ? "rotate-2" : "-rotate-2"
              }`}
            ></div>
          ))}
        </div>
        <p className="font-bold text-lg pt-6 font-sans">Also available on browser</p>
      </div>
    </div>
  );
};

export default TopFooterText;
