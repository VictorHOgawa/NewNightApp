import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Container, Logo } from "./styles";

export function Loading() {
  const main = useRef(null);
  const tl = useRef<GSAPTimeline>();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({ repeat: -1, yoyo: true }).to(".Logo", {
        opacity: 0.5,
        scale: 1.2,
        duration: 0.6,
      });
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <Container ref={main}>
      <>
        <Logo
          className="Logo"
          src="/Global/FullLogo.svg"
          width={150}
          height={150}
          alt=""
        />
      </>
    </Container>
  );
}
