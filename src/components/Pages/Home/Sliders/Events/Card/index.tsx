import { useState } from "react";
import {
  Container,
  EventBody,
  EventFooter,
  EventPlace,
  EventTitle,
  SliderImg,
} from "./styles";
import { Calendar } from "@/components/Global/Calendar";
import { useRouter } from "next/router";

interface EventProps {
  location: string;
  name: string;
  place: string;
  date: Date;
  id: string;
}

export function Card({ location, name, place, date, id }: EventProps) {
  const router = useRouter();

  // const [events, setEvents] = useState<Props>({
  //   location: "/Events/Event1.svg",
  //   name: "Balada do Marco Aurélio",
  //   place: "Sinop - MT",
  //   date: new Date(),
  // });

  return (
    <Container onClick={() => router.push(`/event/${id}`)}>
      <SliderImg src={location} width={400} height={200} alt="" />
      <EventBody>
        <EventTitle>{name}</EventTitle>
        <EventFooter>
          <EventPlace>{place}</EventPlace>
          <Calendar date={date} />
        </EventFooter>
      </EventBody>
    </Container>
  );
}
