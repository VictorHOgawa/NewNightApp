import { GlobalTitle } from "@/components/Global/Title";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card } from "../Card";

export function Sliders() {
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
      <Swiper slidesPerView={2} spaceBetween={0}>
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
