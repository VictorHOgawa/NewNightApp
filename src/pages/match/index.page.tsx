import { Cards } from "@/components/Pages/Match/Cards";
import { Back, Background, Card, Logo, Top } from "./styles";
import { useState } from "react";
import { Container, Name, Arrow, Photo } from "./styles";
import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Match() {
  const [rotate, setRotate] = useState("0deg");
  const [reversed, setReversed] = useState(false);
  const [paused, setPaused] = useState(true);
  const main = useRef(null);
  const itemRef = useRef(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline({
          defaults: {
            duration: 0.5,
          },
          paused: paused,
        })
        .to(
          ".photo",
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
          ".footer",
          {
            opacity: 0,
            duration: 0.1,
          },
          0
        );
    }, main);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    reversed === true ? tl.current.play() : tl.current.reverse();
  }, [reversed]);

  return (
    <Container ref={main}>
      <Background
        src="/Match/MatchBackground.svg"
        width={1000}
        height={2000}
        alt=""
      />
      <Top>
        <Back
          src="/Global/Icons/Back.svg"
          width={20}
          height={20}
          alt=""
          style={{ top: 100 }}
        />
        <Logo
          src="/Match/matchLogo.svg"
          width={1000}
          height={400}
          alt=""
          className="logo"
        />
      </Top>
      <Card>
        <Photo
          src="/Match/1.svg"
          width={800}
          height={1600}
          alt=""
          className="photo"
          ref={itemRef}
        />
        <Name className="footer">Test</Name>
        <Arrow
          src="/Match/Open.svg"
          width={40}
          height={40}
          alt=""
          style={{ rotate: rotate }}
          onClick={() => setReversed(!reversed)}
          className="footer"
        />
      </Card>{" "}
      {/* <Cards /> */}
    </Container>
  );
}
