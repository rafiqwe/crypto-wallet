import React from "react";

const TopExplore = () => {
  return (
    <div className="w-full h-full text-white pt-25 ">
      <div className="flex items-center flex-col gap-5 md:flex-row justify-between w-full ">
        <div className="basis-1/2">
          <h1 className="text-5xl font-bold">
            Your ultimate Bitcoin wallet, packed with features to simplify your
            crypto journey
          </h1>
        </div>
        <div className="basis-1/2 flex items-center w-full justify-end gap-5 flex-col ">
          <p className="text-lg text-gray-400 font-semibold w-100 ">
            From advanced tools to seamless navigation, we’ve designed
            everything to elevate your Bitcoin experience.
          </p>
          <button className="px-7 py-3 rounded-2xl bg-orange-500 text-white font-bold shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] cursor-pointer">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopExplore;
