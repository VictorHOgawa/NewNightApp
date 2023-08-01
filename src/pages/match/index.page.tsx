import { Cards } from "@/components/Pages/Match/Cards";
import { Arrow1, Arrow2, Back, Background, Buttons, Card, Container, Footer1, Footer2,  FooterFooter,  FooterHeader, Logo, Name1, Name2, Photo, Slider, Top } from "./styles";
import { useState } from "react";
import { useLayoutEffect, useRef, useEffect } from "react";
import { gsap } from "gsap";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import Image from "next/image";

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
        .fromTo(
          ".footer2", {y: 250}, {y: 0}, 0 )
        .fromTo(
          ".slider", {x: "100%"}, {x: 0}, 0 );
    }, 
    main)
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    reversed === true ? tl.current?.play() : tl.current?.reverse();
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
      <Card onClick={() => setReversed(!reversed)}>
        <Photo
          src="/Match/1.svg"
          width={800}
          height={1600}
          alt=""
          className="photo"
          ref={itemRef}
        />
        <Name1 className="details">Test</Name1>
        <Arrow1
          src="/Match/Open.svg"
          width={40}
          height={40}
          alt=""
          style={{ rotate: rotate }}
          className="details"
        />
      </Card>
      <Footer1 className="footer">
      <Buttons>1</Buttons>
      <Buttons>2</Buttons>
      <Buttons>3</Buttons>
      </Footer1>
      <Slider className="slider">
        <Swiper slidesPerView={4} spaceBetween={0}>
        <SwiperSlide style={{ width: 100, height: 100}}>
          <Image src="/Match/1.svg" width={500} height={500} alt="" style={{width: 60, height: "auto", borderRadius: 10}} />
          </SwiperSlide>
          <SwiperSlide style={{ width: 100, height: 100}}>
          <Image src="/Match/1.svg" width={500} height={500} alt="" style={{width: 60, height: "auto", borderRadius: 10}} />
          </SwiperSlide>
          <SwiperSlide style={{ width: 100, height: 100}}>
          <Image src="/Match/1.svg" width={500} height={500} alt="" style={{width: 60, height: "auto", borderRadius: 10}} />
          </SwiperSlide>
          <SwiperSlide style={{ width: 100, height: 100}}>
          <Image src="/Match/1.svg" width={500} height={500} alt="" style={{width: 60, height: "auto", borderRadius: 10}} />
          </SwiperSlide>
          <SwiperSlide style={{ width: 100, height: 100}}>
          <Image src="/Match/1.svg" width={500} height={500} alt="" style={{width: 60, height: "auto", borderRadius: 10}} />
          </SwiperSlide>
          <SwiperSlide style={{ width: 100, height: 100}}>
          <Image src="/Match/1.svg" width={500} height={500} alt="" style={{width: 60, height: "auto", borderRadius: 10}} />
          </SwiperSlide>
          <SwiperSlide style={{ width: 100, height: 100}}>
          <Image src="/Match/1.svg" width={500} height={500} alt="" style={{width: 60, height: "auto", borderRadius: 10}} />
          </SwiperSlide>
          <SwiperSlide style={{ width: 100, height: 100}}>
          <Image src="/Match/1.svg" width={500} height={500} alt="" style={{width: 60, height: "auto", borderRadius: 10}} />
          </SwiperSlide>

        </Swiper>
      </Slider>
      <Footer2 className="footer2">
        <FooterHeader style={{display: 'flex', justifyContent: "space-between"}} >
        <Name2>Test2</Name2>
        <Arrow2
          src="/Match/Open.svg"
          width={40}
          height={40}
          alt=""
          style={{ rotate: rotate }}
          onClick={() => setReversed(!reversed)}
          />
          </FooterHeader>
          <FooterFooter>

          <Buttons>1</Buttons>
      <Buttons>2</Buttons>
      <Buttons>3</Buttons>
          </FooterFooter>
      </Footer2>
    </Container>
  );
}
