import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Container, Logo, Main } from "./styles";

export function LoadingOut() {
  const main = useRef(null);
  const tl = useRef<GSAPTimeline>();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".Main", {
        delay: 0.5,
        opacity: 0,
        display: "none",
      });
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <Main ref={main}>
      <Container className="Main">
        <>
          <Logo
            className="Main"
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
