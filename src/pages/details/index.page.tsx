import { Header } from "@/components/Global/Header";
import { Banner, Container, DetailImg, FirstContainer, Nav } from "./styles";
import { GlobalTitle } from "@/components/Global/Title";
import { Buttons } from "@/components/Pages/Details/Buttons";
import { Individual } from "@/components/Pages/Details/Individual";
import { Stack } from "react-bootstrap";
import { Tabs } from "@/components/Global/Tabs";
import { Description } from "@/components/Pages/Details/Description";
import { Music } from "@/components/Pages/Details/Music";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";
import { StaticImage } from "@/components/Global/StaticImg";
import { Important } from "@/components/Pages/Details/Important";
import { Back } from "@/components/Global/Back";
import { useEffect, useState } from "react";
import { StepOne } from "@/components/Pages/Details/Tickets/Steps/1";
import { StepTwo } from "@/components/Pages/Details/Tickets/Steps/2";
import { useRouter } from "next/router";

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
  ticketSlot: {
    id: string;
    name: string;
    ticket: { id: string; name: string; value: number }[];
  };
  product: {
    id: string;
    name: string;
    value: number;
    type: string;
  }[];
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
    ticketSlot: {
      id: "id",
      name: "Lote Promocional",
      ticket: [
        {
          name: "Área 1",
          value: 1,
          id: "1",
        },
        {
          name: "Área 2",
          value: 2,
          id: "2",
        },
        {
          name: "Área 3",
          value: 3,
          id: "3",
        },
      ],
    },
    product: [
      {
        id: "id1",
        name: "Smirnoff",
        value: 1,
        type: "VODKA",
      },
      {
        id: "id2",
        name: "Lote Promocional",
        value: 1,
        type: "WHISKEY",
      },
      {
        id: "id3",
        name: "Lote Promocional",
        value: 1,
        type: "CERVEJA",
      },
      {
        id: "id4",
        name: "Lote Promocional",
        value: 1,
        type: "COMBOS",
      },
      {
        id: "id5",
        name: "Lote Promocional",
        value: 1,
        type: "ENERGÉTICOS",
      },
      {
        id: "id6",
        name: "Lote Promocional",
        value: 1,
        type: "OUTROS",
      },
    ],
  });

  const router = useRouter();
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");
  const [width, setWidth] = useState(100);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <Container>
      <Header />
      <FirstContainer>
        <Stack
          style={{
            display: "flex",
            flexDirection: width < 768 ? "column" : "column-reverse",
            width: width < 768 ? "100%" : "50%",
            justifyContent: "center",
          }}
        >
          <br />
          <DetailImg src={event.location} width={1000} height={400} alt="" />
          <br />
          <br />
          <GlobalTitle
            title={event.name}
            marginLeft={width < 768 ? "2.5%" : "5%"}
          />
        </Stack>
        <br />

        {width < 768 ? (
          <>
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
            />
            <br />
            {step === 1 ? (
              <>
                <Stack
                  direction="horizontal"
                  gap={3}
                  style={{ marginLeft: "4%" }}
                >
                  <Tabs active={true} />
                  <Tabs active={false} />
                  <Tabs active={false} />
                </Stack>
                <StepOne
                  id={event.ticketSlot.id}
                  name={event.ticketSlot.name}
                  ticket={event.ticketSlot.ticket}
                />
              </>
            ) : (
              <>
                <Stack
                  direction="horizontal"
                  gap={3}
                  style={{ marginLeft: "4%" }}
                >
                  <Tabs active={true} />
                  <Tabs active={true} />
                  <Tabs active={false} />
                </Stack>
                <StepTwo
                  product={event.product}
                  type={type}
                  setType={setType}
                />
              </>
            )}
            <br />
            <Nav direction="horizontal" gap={2} style={{ alignSelf: "center" }}>
              <GlobalButton
                content="Voltar"
                background={`${Theme.color.secondary_60}`}
                color={`${Theme.color.gray_10}`}
                width="auto"
                disabled={step === 1 ? true : false}
                onClick={
                  step === 2 && type !== ""
                    ? () => setType("")
                    : () => setStep(step - 1)
                }
              />
              <GlobalButton
                content={step === 1 || type !== "" ? "Próximo" : "Finalizar"}
                background={`${Theme.color.confirmation}`}
                color={`${Theme.color.gray_10}`}
                width="auto"
                onClick={
                  type !== ""
                    ? () => setType("")
                    : step === 2 && type === ""
                    ? () => router.push("/checkout")
                    : () => setStep(step + 1)
                }
              />
            </Nav>
          </>
        ) : (
          <>
            <Stack
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "center",
              }}
            >
              <br />
              <Individual
                date={event.date}
                place={event.place}
                city={event.city}
              />
              <Buttons
                instagram={event.instagram}
                whatsapp={event.whatsapp}
                maps={event.geo}
              />
              <br />
              {step === 1 ? (
                <>
                  <Stack
                    direction="horizontal"
                    gap={3}
                    style={{ marginLeft: "7.5%" }}
                  >
                    <Tabs active={true} />
                    <Tabs active={false} />
                    <Tabs active={false} />
                  </Stack>
                  <StepOne
                    id={event.ticketSlot.id}
                    name={event.ticketSlot.name}
                    ticket={event.ticketSlot.ticket}
                  />
                </>
              ) : (
                <>
                  <Stack
                    direction="horizontal"
                    gap={3}
                    style={{ marginLeft: "4%" }}
                  >
                    <Tabs active={true} />
                    <Tabs active={true} />
                    <Tabs active={false} />
                  </Stack>
                  <StepTwo
                    product={event.product}
                    type={type}
                    setType={setType}
                  />
                </>
              )}
              <br />
              <Nav
                direction="horizontal"
                gap={2}
                style={{ alignSelf: "center" }}
              >
                <GlobalButton
                  content="Voltar"
                  background={`${Theme.color.secondary_60}`}
                  color={`${Theme.color.gray_10}`}
                  width="auto"
                  disabled={step === 1 ? true : false}
                  onClick={
                    step === 2 && type !== ""
                      ? () => setType("")
                      : () => setStep(step - 1)
                  }
                />
                <GlobalButton
                  content={step === 1 || type !== "" ? "Próximo" : "Finalizar"}
                  background={`${Theme.color.confirmation}`}
                  color={`${Theme.color.gray_10}`}
                  width="auto"
                  onClick={
                    type !== ""
                      ? () => setType("")
                      : step === 2 && type === ""
                      ? () => router.push("/checkout")
                      : () => setStep(step + 1)
                  }
                />
              </Nav>
            </Stack>
          </>
        )}
        <br />
      </FirstContainer>
      <br />
      <Banner />
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
