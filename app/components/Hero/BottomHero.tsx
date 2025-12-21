import Image from "next/image";
import React from "react";
import glow from "@/public/images/Glow.png";
import device from "@/public/images/Device.png";
import image1 from "@/public/images/Image-01.png";
import image2 from "@/public/images/Image-02.png";
import image3 from "@/public/images/Image-03.png";
import image4 from "@/public/images/Image-04.png";
import image5 from "@/public/images/Image-05.png";
import image6 from "@/public/images/Image-06.png";

const BottomHero = ({
  ImagesRef,
  BottomRef,
}: {
  ImagesRef: React.RefObject<HTMLDivElement | null>;
  BottomRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const Images = [image1, image2, image3, image4, image5, image6];
  return (
    <div ref={BottomRef} className="relative -top-32">
      <div className="h-[110vh] relative flex justify-center items-center">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <div className="w-full h-full blur-[100px] rounded-full z-1 overflow-hidden">
            <Image
              src={glow}
              alt="glow image"
              fill
              className="object-contain rounded-full"
            />
          </div>
        </div>

        {/* Floating Images (separated from blur) */}
        <div
          ref={ImagesRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-10 hidden md:block"
        >
          {Images.map((imag, index) => {
            const positions = [
              "top-30 right-10",
              "top-1/2 right-10 -translate-y-1/2",
              "bottom-30 right-10",
              "top-1/2 left-10 -translate-y-1/2",
              "top-30 left-10",
              "bottom-30 left-10",
            ];

            return (
              <div
                key={index}
                className={`absolute w-60 h-60 ${positions[index] || "hidden"}`}
              >
                <Image
                  src={imag}
                  fill
                  alt="items image"
                  className="object-contain"
                />
              </div>
            );
          })}
        </div>

        {/* Device Image */}
        <div className="relative w-screen h-[107vh] max-w-[1200px] z-20">
          <Image
            src={device}
            alt="device image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
