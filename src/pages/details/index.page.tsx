import { Header } from "@/components/Global/Header";
import { Container, DetailImg } from "./styles";
import { GlobalTitle } from "@/components/Global/Title";
import { Buttons } from "@/components/Pages/Details/Buttons";
import { Individual } from "@/components/Pages/Details/Individual";
import { Stack } from "react-bootstrap";
import { Tabs } from "@/components/Global/Tabs";
import { Tickets } from "@/components/Pages/Details/Tickets";
import { Description } from "@/components/Pages/Details/Description";
import { Music } from "@/components/Pages/Details/Music";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";
import { StaticImage } from "@/components/Global/StaticImg";
import { Important } from "@/components/Pages/Details/Important";
import { Back } from "@/components/Global/Back";
import { useState } from "react";

interface DetailsProps {
  location: string;
  name: string;
  geo: string;
  instagram: string;
  whatsapp: string;
  date: Date;
  time: string;
  place: string;
  city: string;
  weekDay: string;
  day: string;
  month: string;
  description: { name: string; description: string }[];
  music: string;
}
export default function Details() {
  const [event, setEvent] = useState<DetailsProps>({
    location: "/Events/Event1.svg",
    name: "teste",
    geo: "",
    instagram: "",
    whatsapp: "",
    date: new Date(),
    time: "21:00h",
    place: "Cerveja de Garrafa",
    city: "Sinop / MT",
    weekDay: "Segunda",
    day: "29",
    month: "JUL",
    description: [
      {
        name: "Titulo 1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        name: "Título 2",
        description:
          " has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ",
      },
      {
        name: "Título 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsume specimen book.",
      },
    ],
    music: "https://www.youtube.com/embed/enYuqLBiisw",
  });
  return (
    <Container>
      <Header />
      <DetailImg src={event.location} width={1000} height={400} alt="" />
      <br />
      <br />
      <GlobalTitle title={event.name} />

      <br />
      <Buttons
        instagram={event.instagram}
        whatsapp={event.whatsapp}
        maps={event.geo}
      />
      <br />
      <Individual
        date={event.date}
        place={event.place}
        city={event.city}
        weekDay={event.weekDay}
        day={event.day}
        month={event.month}
      />
      <br />
      <Stack direction="horizontal" gap={3} style={{ marginLeft: "4%" }}>
        <Tabs active={true} />
        <Tabs active={false} />
        <Tabs active={false} />
      </Stack>
      <Tickets />
      <br />
      <br />
      <Description description={event.description[0]} />
      <br />
      <br />
      <Music music={event.music} />
      <br />

      <Stack direction="horizontal" gap={2} style={{ alignSelf: "center" }}>
        <GlobalButton
          background={`${Theme.color.confirmation}`}
          color={`${Theme.color.background}`}
          content="Escolher Meus Ingressos"
          width="auto"
        >
          <StaticImage
            src="/Global/Icons/TicketIcon.svg"
            width={20}
            height={20}
            alt=""
          />
        </GlobalButton>
        <GlobalButton
          background={`${Theme.color.primary_80}`}
          width="auto"
          content=""
        >
          <StaticImage
            src="/Global/Icons/Send.svg"
            width={20}
            height={20}
            alt=""
          />
        </GlobalButton>
      </Stack>
      <br />
      <br />
      {event.description.length === 1 ? (
        <></>
      ) : (
        event.description.slice(1).map((item) => (
          <>
            <Description description={item} />
            <br />
            <br />
          </>
        ))
      )}
    </Container>
  );
}
