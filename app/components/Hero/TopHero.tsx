import Image from "next/image";
import hero from "@/public/images/hero-bg-image.png";

const TopHero = ({
  HeroTextRef,
  TopRef,
}: {
  HeroTextRef: React.RefObject<HTMLHeadingElement | null>;
  TopRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div ref={TopRef} className="relative">
      <div className="h-[80vh] pt-10">
        <div className="flex mx-auto items-center justify-center h-full w-1/2 text-center">
          <h1 ref={HeroTextRef} className="text-7xl text-black/80 font-bold">
            Reimagine How You Interact With Bitcoin
          </h1>
        </div>
      </div>
      <div className="top-0 left-0 absolute w-full h-full z-0">
        <Image
          src={hero}
          alt="hero"
          fill
          sizes="width=device-width"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default TopHero;
