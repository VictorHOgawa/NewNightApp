import { GlobalTitle } from "@/components/Global/Title";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import { Card } from "../Card";

export function PlaceSlider() {
  const [width, setWidth] = useState(500);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const Places = [
    {
      location: "/Places/Place1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: true,
    },
    {
      location: "/Places/Place2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: false,
    },
    {
      location: "/Places/Place1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: true,
    },
    {
      location: "/Places/Place2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: false,
    },
    {
      location: "/Places/Place1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: true,
    },
    {
      location: "/Places/Place2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: false,
    },
    {
      location: "/Places/Place1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: true,
    },
    {
      location: "/Places/Place2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: false,
    },
    {
      location: "/Places/Place1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: true,
    },
    {
      location: "/Places/Place2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: false,
    },
    {
      location: "/Places/Place1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: true,
    },
    {
      location: "/Places/Place2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: false,
    },
  ];
  return (
    <Container>
      <GlobalTitle title="Lugares para Curtir" />
      <br />
      <Swiper
        slidesPerView={width < 768 ? 2 : width >= 768 && width < 1024 ? 4 : 6}
        spaceBetween={1}
      >
        {Places.map((item) => (
          <SwiperSlide>
            <Card
              location={item.location}
              name={item.name}
              place={item.place}
              current={item.current}
            />
          </SwiperSlide>
        ))}
      </Swiper>{" "}
    </Container>
  );
}
