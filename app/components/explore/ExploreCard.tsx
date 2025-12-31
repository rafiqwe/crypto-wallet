import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ExploreCardProps {
  card: {
    image: string | StaticImageData;
    title: string;
    des: string;
    icons?: ReactNode;
    author?: string;
  };
}

const ExploreCard = ({ card }: ExploreCardProps) => {
  return (
    <div className="relative h-full w-full border border-gray-600 p-7 flex flex-col items-center justify-center rounded-4xl borgr">
      <div className="w-full h-70">
        <Image
          src={card.image}
          alt={card.title}
          //   fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="w-full h-full ">
        <h4 className="text-2xl mt-5">{card.icons}</h4>
        <h2 className="font-semibold text-2xl my-3">{card.title}</h2>
        <p className="text-gray-400 font-semibold">{card.des}</p>
        {card.author && (
          <p className="text-gray-400 font-semibold">{card.author}</p>
        )}
      </div>
    </div>
  );
};

export default ExploreCard;
