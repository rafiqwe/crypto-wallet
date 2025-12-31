import React from "react";
import visual from "@/public/images/Visual.png";
import manImage from "@/public/images/man.png";
import chartImage from "@/public/images/cart.png";
import { BellRingIcon } from "lucide-react";
import bitcoinImage from "@/public/images/10.1 Bitcoin 1.png";
import ExploreCard from "./ExploreCard";
const ExploreCards = () => {
  const cardsDetails = [
    {
      image: visual,
      title: "Push Notifications",
      des: "Stay on top of your activity with instant alerts for all transactions.",
      icons: <BellRingIcon />,
    },
    {
      image: bitcoinImage,
      title: "Effortless Transactions",
      des: "Send and receive Bitcoin with a user-friendly interface.",
      icons: <BellRingIcon />,
    },
    {
      image: manImage,
      title: `"I'have been working on a new electronic cash system that's fully peer-to-peer, with not trusted third party."`,
      des: "",
      author: "Satoshi Nakamoto",
      icons: undefined,
    },
    {
      image: chartImage,
      title: "Real-Time Portfolio Insights",
      des: "Track your Bitcoin balance abd transaction history with live updates.",
      icons: <BellRingIcon />,
    },
  ];
  return (
    <div className="w-full h-full  text-white relative">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center ">
        {cardsDetails.map((card, index) => {
          return <ExploreCard key={index} card={card} />;
        })}
      </ul>
    </div>
  );
};

export default ExploreCards;
