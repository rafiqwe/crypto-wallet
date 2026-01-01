import React, { useMemo } from "react";

const FooterStars = () => {
  const starCount = 150;

  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: Math.random() > 0.5 ? "text-gray-800" : "text-gray-500",
      size: Math.random() > 0.5 ? "text-xl" : "text-sm",
    }));
  }, []);

  return (
    <div className="relative h-96 w-[96%]  bg-black">
      {stars.map((star, index) => (
        <span
          key={index}
          className={`absolute ${star.color} ${star.size} font-bold`}
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
          }}
        >
          .
        </span>
      ))}
    </div>
  );
};

export default FooterStars;
