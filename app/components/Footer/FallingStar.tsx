"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMemo, useRef } from "react";

const STAR_COUNT = 10;

const FallingStar = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: gsap.utils.random(1.2, 2.2),
        angle: gsap.utils.random(115, 130),
        distance: gsap.utils.random(600, 900),
        color: Math.random() > 0.5 ? "from-white" : "from-gray-400",
      })),
    []
  );

  useGSAP(
    () => {
      const elements = gsap.utils.toArray<HTMLElement>(".star");

      elements.forEach((star, i) => {
        const animate = () => {
          gsap.fromTo(
            star,
            {
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0.6,
            },
            {
              x: stars[i].distance,
              y: stars[i].distance,
              opacity: 1,
              scale: 1,
              duration: stars[i].duration,
              onComplete: () => {
                gsap.set(star, {
                  x: 0,
                  y: 0,
                  opacity: 0,
                  left: `${Math.random() * 100}%`,
                  top: `${gsap.utils.random(-30, -10)}%`,
                });
                gsap.delayedCall(gsap.utils.random(1, 4), animate);
              },
            }
          );
        };

        gsap.delayedCall(stars[i].delay, animate);
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="absolute top-0 inset-0 overflow-hidden pointer-events-none"
    >
      {stars.map((star, i) => (
        <div
          key={i}
          className="star absolute"
          style={{
            left: `${star.left}%`,
            top: "-20%",
            transform: `rotate(${star.angle}deg)`,
          }}
        >
          <span
            className={`block w-[1.5px] z-20 h-40 bg-gradient-to-b ${star.color} to-transparent blur-[0.3px]`}
          />
        </div>
      ))}
    </div>
  );
};

export default FallingStar;
