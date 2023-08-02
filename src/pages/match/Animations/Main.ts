import { useLayoutEffect, useRef } from "react";
import { Power2, gsap } from "gsap";

export const MainAnimation = () => {
  const main = useRef(null);
  const mainTL = useRef<gsap.core.Timeline | null>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      mainTL.current = gsap
        .timeline({
          defaults: {
            duration: 0.5,
          },
        })
        .to(
          ".fullCard",
          {
            y: -85,
            scale: 1.11,
          },
          0
        )
        .to(
          ".logo",
          {
            opacity: 0,
            duration: 0.1,
          },
          0
        )
        .to(
          ".details",
          {
            opacity: 0,
            duration: 0.1,
          },
          0
        )
        .to(
          ".footer",
          {
            duration: 0.5,
            y: 150,
          },
          0
        )
        .fromTo(".footer2", { y: 300 }, { y: 0 }, 0)
        .fromTo(".slider", { x: "100%" }, { x: 0, onComplete: () => {} }, 0);
    }, main);
    return () => ctx.revert();
  }, []);

  return { main, mainTL };
};
