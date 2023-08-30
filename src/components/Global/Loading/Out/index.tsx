import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Container, Logo, Main } from "./styles";

export function LoadingOut() {
  const main = useRef(null);
  const tl = useRef<GSAPTimeline>();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".Main", {
        delay: 1,
        opacity: 0,
        duration: 2,
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
