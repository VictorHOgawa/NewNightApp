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

interface DetailsProps {
  location: string;
  name: string;
  geo: string;
  instagram: string;
  whatsapp: string;
  date: string;
  place: string;
  weekDay: string;
  day: string;
  month: string;
  description: string;
  music: string;
  important: string;
}
export default function Details({
  location,
  name,
  geo,
  instagram,
  whatsapp,
  date,
  place,
  weekDay,
  day,
  month,
  description,
  music,
  important,
}: DetailsProps) {
  return (
    <Container>
      <Header />
      <Back />
      <DetailImg src={location} width={1000} height={400} alt="" />
      <GlobalTitle title={name} />
      <br />
      <Buttons instagram={instagram} whatsapp={whatsapp} maps={geo} />
      <br />
      <Individual
        date={date}
        place={place}
        weekDay={weekDay}
        day={day}
        month={month}
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
      <Description description={description} />
      <br />
      <br />
      <Music music={music} />
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
      <Important important={important} />
    </Container>
  );
}
