import { useState } from "react";
import { Container, Name, Arrow, Photo } from "./styles";
import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";

export function Cards() {
  const [rotate, setRotate] = useState("0deg");
  const [reversed, setReversed] = useState(false);
  const main = useRef(null);
  const itemRef = useRef(null);
  const tl = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline().to(".photo", {
        y: -85,
        scale: 1.11,
      });
    }, main);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <Container ref={main}>
      <Photo
        src="/Match/1.svg"
        width={800}
        height={1600}
        alt=""
        className="photo"
        ref={itemRef}
      />
      <Name>Test</Name>
      <Arrow
        src="/Match/Open.svg"
        width={40}
        height={40}
        alt=""
        style={{ rotate: rotate }}
        onClick={() => setReversed(!reversed)}
      />
    </Container>
  );
}
