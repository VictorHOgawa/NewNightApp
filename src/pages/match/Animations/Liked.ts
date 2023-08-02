import { useLayoutEffect, useRef } from "react";
import { Power2, gsap } from "gsap";

export const LikedAnimation = () => {
  const main = useRef(null);
  const likedTL = useRef<gsap.core.Timeline | null>(null);
  let ctx = gsap.context(() => {
    likedTL.current = gsap
      .timeline({
        defaults: {
          duration: 0.5,
        },
      })
      .fromTo(".fullCard", { x: 0 }, { x: 400, opacity: 0 })
      .fromTo(".fullCard", { x: 400 }, { x: 0, opacity: 1, duration: 0.00001 })
      .fromTo(".indDetails", { x: 0, opacity: 1 }, { x: 400, opacity: 0 }, 0.5)
      .fromTo(".indDetails", { x: 400, opacity: 0 }, { x: 0, opacity: 1 }, 0.5);
  }, main);
  return { main, likedTL };
};
