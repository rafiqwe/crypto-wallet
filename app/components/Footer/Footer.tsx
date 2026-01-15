import Image from "next/image";
import FallingStar from "./FallingStar";
import FooterStars from "./FooterStars";
import TopFooterText from "./TopFooterText";
import FooterBottomImage from "@/public/images/footer bg.png";
import ActualFooter from "./ActualFooter";

const Footer = () => {
  return (
    <div className="px-2  mt-10 relative w-full h-full  ">
      <div className="overflow-hidden relative w-full h-full bg-black rounded-4xl">
        <div className="w-full ">
          <div className="w-full mx-auto overflow-hidden flex relative items-center justify-center">
            <FooterStars />
            <div className="absolute   -left-50 -top-30 z-10 w-full h-200">
              <FallingStar />
            </div>
          </div>
        </div>
        <TopFooterText />
        <div className="w-full mx-auto h-200 md:h-full absolute md:-bottom-30 -bottom-10 ">
          <Image
            src={FooterBottomImage}
            alt="footer bottom image"
            sizes="100vw"
            fill
          />
        </div>
        <ActualFooter />
      </div>
    </div>
  );
};

export default Footer;
