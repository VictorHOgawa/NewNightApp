import { GlobalTitle } from "@/components/Global/Title";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "../Card";
import { useEffect, useState } from "react";

export function EventSlider() {
  const [width, setWidth] = useState(100);

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
      name: "Balada do Marco Aurélio asd asd asdasdasads",
      place: "Sinop - MT",
      date: new Date(),
      id: "a",
    },
    {
      location: "/Events/Event2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      date: new Date(),
      id: "b",
    },
    {
      location: "/Events/Event1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      date: new Date(),
      id: "c",
    },
    {
      location: "/Events/Event2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      date: new Date(),
      id: "d",
    },
    {
      location: "/Events/Event1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      date: new Date(),
      id: "e",
    },
    {
      location: "/Events/Event2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      date: new Date(),
      id: "f",
    },
    {
      location: "/Events/Event1.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      date: new Date(),
      id: "g",
    },
    {
      location: "/Events/Event2.svg",
      name: "Balada do Marco Aurélio",
      place: "Sinop - MT",
      date: new Date(),
      id: "h",
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
            <Card
              location={item.location}
              name={item.name}
              place={item.place}
              date={item.date}
              id={item.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
