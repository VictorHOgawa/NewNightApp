import { Header } from "@/components/Global/Header";
import { Banner, Container, DetailImg, FirstContainer, Nav } from "./styles";
import { GlobalTitle } from "@/components/Global/Title";
import { Buttons } from "@/components/Pages/Place/Buttons";
import { Individual } from "@/components/Pages/Place/Individual";
import { Stack } from "react-bootstrap";
import { Tabs } from "@/components/Global/Tabs";
import { Description } from "@/components/Pages/Place/Description";
import { Music } from "@/components/Pages/Place/Music";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";
import { StaticImage } from "@/components/Global/StaticImg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface PlaceProps {
  location: string;
  name: string;
  geo: string;
  instagram: string;
  whatsapp: string;
  open: boolean;
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
export default function Place() {
  const [place, setPlace] = useState<PlaceProps>({
    location: "/Places/Place1.svg",
    name: "teste",
    geo: "",
    instagram: "",
    whatsapp: "",
    open: true,
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
          <DetailImg src={place.location} width={1000} height={400} alt="" />
          <br />
          <br />
          <GlobalTitle
            title={place.name}
            marginLeft={width < 768 ? "2.5%" : "5%"}
          />
        </Stack>
        <br />
        {width < 768 ? (
          <>
            <Buttons
              instagram={place.instagram}
              whatsapp={place.whatsapp}
              maps={place.geo}
            />
            <br />
            <Individual
              open={place.open}
              date={place.date}
              place={place.place}
              city={place.city}
            />
            <br />
            <br />
            <Nav direction="horizontal" gap={3} style={{ alignSelf: "center" }}>
              <GlobalButton
                content="Voltar"
                background={`${Theme.color.secondary_60}`}
                color={`${Theme.color.gray_10}`}
                width="45%"
                height="auto"
                fontSize={18}
                disabled={step === 1 ? true : false}
                onClick={
                  step === 2 && type !== ""
                    ? () => setType("")
                    : () => setStep(step - 1)
                }
              />
              <GlobalButton
                content={step === 1 || type !== "" ? "Próximo" : "Finalizar"}
                background={`${Theme.color.next}`}
                color={`${Theme.color.gray_10}`}
                width="45%"
                height="auto"
                fontSize={18}
                onClick={
                  type !== ""
                    ? () => setType("")
                    : step === 2 && type === ""
                    ? () => router.push("/checkout")
                    : () => setStep(step + 1)
                }
              />
            </Nav>
            <Banner />
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
              <Individual
                open={place.open}
                date={place.date}
                place={place.place}
                city={place.city}
              />
              <br />
              <Buttons
                instagram={place.instagram}
                whatsapp={place.whatsapp}
                maps={place.geo}
              />

              <GlobalTitle
                title="Sobre o Bar"
                marginLeft={"5%"}
                marginTop={"10%"}
              />
              <GlobalButton
                content="Cardápio"
                background={`${Theme.color.next}`}
                color={`${Theme.color.gray_10}`}
                width={"90%"}
                height="auto"
                fontSize={30}
                style={{ alignSelf: "center", marginTop: "5%" }}
              />
            </Stack>
          </>
        )}
        <br />
      </FirstContainer>
      <br />
      {width >= 768 ? (
        <>
          <Nav direction="horizontal" gap={2} style={{ alignSelf: "center" }}>
            <GlobalButton
              content="Voltar"
              background={`${Theme.color.secondary_60}`}
              color={`${Theme.color.gray_10}`}
              width="35%"
              height="auto"
              fontSize={18}
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
              width="35%"
              height="auto"
              fontSize={18}
              onClick={
                type !== ""
                  ? () => setType("")
                  : step === 2 && type === ""
                  ? () => router.push("/checkout")
                  : () => setStep(step + 1)
              }
            />
          </Nav>
          <Banner />
        </>
      ) : (
        <>
          <GlobalTitle
            title="Sobre o Bar"
            marginLeft={width < 768 ? "2.5%" : "15%"}
            marginTop={width < 768 ? 0 : "5%"}
          />
          <GlobalButton
            content="Cardápio"
            background={`${Theme.color.next}`}
            color={`${Theme.color.gray_10}`}
            width={width < 768 ? "90%" : "50%"}
            height="auto"
            fontSize={30}
            style={{ alignSelf: "center", marginTop: "2%" }}
          />
        </>
      )}

      <br />
      <br />
      <Description description={place.description[0]} />
      <br />
      <br />
      <Music music={place.music} />
      <br />
      <Stack direction="horizontal" gap={2} style={{ alignSelf: "center" }}>
        <GlobalButton
          background={`${Theme.color.confirmation}`}
          color={`${Theme.color.background}`}
          content="Escolher Meus Produtos"
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
      {place.description.length === 1 ? (
        <></>
      ) : (
        place.description.slice(1).map((item) => (
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
