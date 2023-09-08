import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Container, Logo, Main } from "./styles";

export function LoadingFull() {
  const main = useRef(null);
  const tl = useRef<GSAPTimeline>();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({ repeat: 1, yoyo: true }).to(".Logo", {
        opacity: 0.5,
        scale: 1.2,
        duration: 0.5,
      });
    }, main);
    gsap.to(".Main", {
      delay: 0.8,
      opacity: 0,
      display: "none",
    });

    return () => ctx.revert();
  }, []);
  return (
    <Main ref={main}>
      <Container className="Main">
        <>
          <Logo
            className="Logo Main"
            src="/Global/FullLogo.svg"
            width={150}
            height={150}
            alt=""
          />
        </>
      </Container>
    </Main>
  );
}
