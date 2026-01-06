import React from "react";
import AppsIcon from "../UI/AppsIcon";

const TopFooterText = () => {
  return (
    <div className="w-full h-full relative text-white px-10 z-20">
      <div className="w-full h-full flex items-center flex-col mx-auto justify-center">
        <h3 className="md:text-5xl text-4xl md:w-1/2 w-full font-semibold text-center">
          Experience Bitcoin like never before with Wallet
        </h3>
        <AppsIcon bgColor="bg-white"/>
        <p className="font-bold text-lg pt-6 font-sans">Also available on browser</p>
      </div>
    </div>
  );
};

export default TopFooterText;
