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
import { Stack } from "react-bootstrap";

interface EventProps {
  photo_location: string;
  name: string;
  local: string;
  date: Date;
  id: string;
  city: string;
  state: string;
}

export function Card({
  photo_location,
  name,
  local,
  date,
  id,
  city,
  state,
  ...rest
}: EventProps) {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/event/${id}`)} {...rest}>
      <SliderImg src={photo_location} width={400} height={200} alt="" />
      <EventBody>
        <EventTitle>{name}</EventTitle>
        <EventFooter>
          <EventPlace>
            {local} <br />
            {city} - {state}
          </EventPlace>
          <Calendar date={date} type="event" />
        </EventFooter>
      </EventBody>
    </Container>
  );
}
