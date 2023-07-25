import { GlobalTitle } from "@/components/Global/Title";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "../Card";
import { useEffect, useState } from "react";

export function EventSlider() {
  const [width, setWidth] = useState(500);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const Events = [
    {
      location: "/Events/Event1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      weekDay: "Sáb",
      day: "12",
      month: "JUL",
    },
    {
      location: "/Events/Event2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      weekDay: "Sáb",
      day: "12",
      month: "JUL",
    },
    {
      location: "/Events/Event1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      weekDay: "Sáb",
      day: "12",
      month: "JUL",
    },
    {
      location: "/Events/Event2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      weekDay: "Sáb",
      day: "12",
      month: "JUL",
    },
    {
      location: "/Events/Event1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      weekDay: "Sáb",
      day: "12",
      month: "JUL",
    },
    {
      location: "/Events/Event2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      weekDay: "Sáb",
      day: "12",
      month: "JUL",
    },
    {
      location: "/Events/Event1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      weekDay: "Sáb",
      day: "12",
      month: "JUL",
    },
    {
      location: "/Events/Event2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      weekDay: "Sáb",
      day: "12",
      month: "JUL",
    },
  ];
  return (
    <Container>
      <GlobalTitle title="Eventos e Festas" />
      <br />
      <Swiper
        spaceBetween={
          width < 768
            ? -100
            : width >= 768 && width < 1024
            ? -425
            : width >= 1024 && width < 1360
            ? -650
            : -925
        }
      >
        {Events.map((item) => (
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
