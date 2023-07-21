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
        slidesPerView={width < 768 ? 2 : width >= 768 && width < 1024 ? 5 : 7}
        spaceBetween={width < 768 ? 0 : width >= 768 && width < 1024 ? 10 : 20}
      >
        {Events.map((item) => (
          <SwiperSlide>
            <Card
              location={item.location}
              name={item.name}
              place={item.place}
              weekDay={item.weekDay}
              day={item.day}
              month={item.month}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
