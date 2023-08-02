import { Cards } from "@/components/Pages/Match/Cards";
import {
  Arrow1,
  Arrow2,
  Back,
  Background,
  Behind,
  Buttons,
  Card,
  Container,
  Description,
  Footer1,
  Footer2,
  FooterFooter,
  FooterHeader,
  Icon,
  Location,
  Logo,
  Name1,
  Name2,
  Photo,
  Slider,
  Tags,
  Top,
} from "./styles";
import { useCallback, useState } from "react";
import { useLayoutEffect, useRef, useEffect } from "react";
import { Power2, gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Stack } from "react-bootstrap";
import { useRouter } from "next/router";
import { MainAnimation } from "./Animations/Main";
import { LikedAnimation } from "./Animations/Liked";
import px2vw from "@/utils/size";
import { People } from "@/utils/peaple";

export default function Match() {
  function useStateRef(defaultValue: any) {
    const [state, setState] = useState(defaultValue);
    const ref = useRef(state);

    const dispatch: any = useCallback((value: any) => {
      ref.current = typeof value === "function" ? value(ref.current) : value;
      setState(ref.current);
    }, []);

    return [state, dispatch, ref];
  }

  const [count, setCount, countRef] = useStateRef(false);
  const [gsapCount, setGsapCount] = useState(false);

  const router = useRouter();
  const [people, setPeople] = useState(People);
  const [shown, setShown] = useState(people[0]);
  const [selectedPhoto, setSelectedPhoto] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [reversed, setReversed] = useState(false);
  const [likeAnimation, setLikeAnimation] = useState(false);
  const itemRef = useRef(null);
  let teste = false;
  // const { main, mainTL } = MainAnimation();
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
            onReverseComplete: () => {
              countRef.current ? handleLiked() : null;
            },
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
        .fromTo(
          ".slider",
          {
            x: "100%",
          },
          {
            x: 0,
          },
          0
        );
    }, main);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    reversed === true ? mainTL.current?.play() : mainTL.current?.reverse();
  }, [reversed]);

  const likedTL = useRef<gsap.core.Timeline | null>(null);
  const [likedClosed, setLikedClosed] = useState(false);
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     likedTL.current = gsap
  //       .timeline({
  //         defaults: {
  //           duration: 0.5,
  //         },
  //       })
  //       .fromTo(".fullCard", { x: 0 }, { x: 400, opacity: 0 }, 1)
  //       .fromTo(
  //         ".fullCard",
  //         { x: 400 },
  //         { x: 0, opacity: 1, duration: 0.000001 }
  //       );
  //   }, main);
  //   return () => ctx.revert();
  // }, []);

  // useEffect(() => {
  //   likedClosed === true ? likedTL.current?.play() : likedTL.current?.reverse();
  // }, [likedClosed]);

  const handleLiked = () => {
    let ctx = gsap.context(() => {
      likedTL.current = gsap
        .timeline({
          defaults: {
            duration: 0.5,
          },
        })
        .fromTo(
          ".fullCard",
          { x: 0 },
          {
            x: 400,
            opacity: 0,
            onComplete: () => {
              console.log("entrou no completou");
              setShown(people[currentIndex + 1]);
              setSelectedPhoto(1);
            },
          }
        )
        .fromTo(
          ".fullCard",
          { x: 400 },
          {
            x: 0,
            opacity: 1,
            duration: 0.00001,
            delay: 0.5,
            onComplete: () => {
              console.log("entrou no outro completou");
              setCurrentIndex(currentIndex + 1);
            },
          }
        )
        .fromTo(
          ".indDetails",
          { x: 0, opacity: 1 },
          {
            x: -400,
            opacity: 0,
          },
          0.5
        )
        .fromTo(
          ".indDetails",
          { x: -400, opacity: 0 },
          { x: 0, opacity: 1 },
          0.5
        );

      // .fromTo(".behind", { opacity: 0 }, { opacity: 1 }, 0)
      // .fromTo(".behind", { opacity: 1 }, { opacity: 0 }, 0);
    }, main);
    setCount(false);
  };
  //
  useEffect(() => {
    if (countRef.current) return setReversed(!reversed);
  }, [count]);

  const handleLikedOpen = () => {
    setCount(true);
    console.log(
      "countRef.current dentro da função de dentro:",
      countRef.current
    );
  };
  // useEffect(() => {
  //   clicked === true ? setShown(people[currentIndex + 1]) : null;

  //   setShown(people[currentIndex + 1]);
  //   setCurrentIndex(currentIndex + 1);
  // }, []);
  const dislikedTL = useRef<gsap.core.Timeline | null>(null);
  const [dislikedClosed, setDislikedClosed] = useState(false);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     dislikedTL.current = gsap
  //       .timeline({
  //         defaults: {
  //           duration: 0.5,
  //         },
  //       })
  //       .fromTo(".fullCard", { x: 0 }, { x: -400 });
  //   }, main);
  //   return () => ctx.revert();
  // }, []);

  // useEffect(() => {
  //   dislikedClosed === true
  //     ? dislikedTL.current?.play()
  //     : dislikedTL.current?.reverse();
  // }, [dislikedClosed]);

  const handleDisliked = () => {
    let ctx = gsap.context(() => {
      dislikedTL.current = gsap
        .timeline({
          defaults: {
            duration: 0.5,
          },
        })
        .fromTo(".fullCard", { x: 0 }, { x: -400, opacity: 0 })
        .fromTo(
          ".fullCard",
          { x: -400 },
          { x: 0, opacity: 1, duration: 0.00001 }
        )
        .fromTo(
          ".indDetails",
          { x: 0, opacity: 1 },
          { x: 400, opacity: 0 },
          0.5
        )
        .fromTo(
          ".indDetails",
          { x: 400, opacity: 0 },
          { x: 0, opacity: 1 },
          0.5
        );
    }, main);
    setShown(people[currentIndex + 1]);
    setCurrentIndex(currentIndex + 1);
    setSelectedPhoto(1);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setReversed(!reversed);
  };

  const handleBack = () => {
    open === true ? setReversed(!reversed) : router.back();
  };
  return (
    <Container ref={main}>
      <>
        <>
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
              onClick={handleBack}
            />
            <Logo
              src="/Match/matchLogo.svg"
              width={1000}
              height={400}
              alt=""
              className="logo"
            />
          </Top>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card onClick={handleOpen} className="fullCard">
              <Photo
                src={shown.photos[selectedPhoto - 1].location}
                width={800}
                height={1600}
                alt=""
                className="photo"
                ref={itemRef}
              />
              <Stack gap={1} style={{ alignSelf: "flex-end" }}>
                <Name1 className="details">{shown.name}</Name1>
                <Name1
                  className="details"
                  style={{ fontSize: `${px2vw(18, 320)}` }}
                >
                  {shown.instagram ? shown.instagram : ""}
                </Name1>
              </Stack>
              <Arrow1
                src="/Match/Open.svg"
                width={40}
                height={40}
                alt=""
                className="details"
              />
            </Card>
            {/* {open === true ? (
            <></>
          ) : (
            <> */}
            <Behind className="behind">
              <Photo
                src={
                  people[currentIndex + 1].photos[selectedPhoto - 1].location
                }
                width={800}
                height={1600}
                alt=""
                className="photo"
                ref={itemRef}
              />
              <Stack gap={1} style={{ alignSelf: "flex-end" }}>
                <Name1 className="details">{shown.name}</Name1>
                <Name1
                  className="details"
                  style={{ fontSize: `${px2vw(18, 320)}` }}
                >
                  {shown.instagram ? shown.instagram : ""}
                </Name1>
              </Stack>
              <Arrow1
                src="/Match/Open.svg"
                width={40}
                height={40}
                alt=""
                className="details"
              />
            </Behind>
            {/* </>
          )} */}
          </div>
          <Footer1 className="footer">
            <Buttons onClick={handleDisliked}>1</Buttons>
            <Buttons>2</Buttons>
            <Buttons onClick={handleLiked}>3</Buttons>
          </Footer1>
          <Slider className="slider">
            <Swiper slidesPerView={4} spaceBetween={0}>
              {shown.photos.map((item, index) => (
                <SwiperSlide style={{ width: 100, height: 100 }}>
                  <Image
                    src={item.location}
                    width={500}
                    height={500}
                    alt=""
                    style={{ width: 60, height: "auto", borderRadius: 10 }}
                    onClick={() => setSelectedPhoto(index + 1)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Slider>
        </>

        <Footer2 className="footer2">
          <FooterHeader>
            <Stack direction="horizontal">
              <Stack gap={1}>
                <Name2 className="indDetails">{shown.name}</Name2>
                <Location className="indDetails">
                  <Icon
                    src="/Global/Icons/LocationPin.svg"
                    width={20}
                    height={20}
                    alt=""
                  />{" "}
                  {""}
                  {shown.currentPlace}
                </Location>
              </Stack>
              <Arrow2
                src="/Match/Open.svg"
                width={40}
                height={40}
                alt=""
                onClick={handleOpen}
              />
            </Stack>
            <Stack
              direction="horizontal"
              gap={2}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
                marginTop: "2%",
              }}
            >
              {shown.recent.map((item) => (
                <Tags className="indDetails">{item}</Tags>
              ))}
            </Stack>
          </FooterHeader>
          <Description className="indDetails">{shown.description}</Description>
          <FooterFooter>
            <Buttons onClick={handleDisliked}>1</Buttons>
            <Buttons>2</Buttons>
            <Buttons onClick={handleLikedOpen}>3</Buttons>
          </FooterFooter>
        </Footer2>
      </>
    </Container>
  );
}
