import { GlobalTitle } from "@/components/Global/Title";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import { Card } from "../Card";

export function PlaceSlider() {
  const [width, setWidth] = useState(100);

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
      name: "Balada do Marco Aurélio asdasd asd asds",
      place: "Sinop - MT",
      current: true,
      id: "a",
    },
    {
      location: "/Places/Place2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: false,
      id: "b",
    },
    {
      location: "/Places/Place1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: true,
      id: "c",
    },
    {
      location: "/Places/Place2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: false,
      id: "d",
    },
    {
      location: "/Places/Place1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: true,
      id: "e",
    },
    {
      location: "/Places/Place2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: false,
      id: "f",
    },
    {
      location: "/Places/Place1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: true,
      id: "g",
    },
    {
      location: "/Places/Place2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: false,
      id: "h",
    },
    {
      location: "/Places/Place1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: true,
      id: "i",
    },
    {
      location: "/Places/Place2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: false,
      id: "j",
    },
    {
      location: "/Places/Place1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: true,
      id: "k",
    },
    {
      location: "/Places/Place2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      current: false,
      id: "l",
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
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>{" "}
    </Container>
  );
}
