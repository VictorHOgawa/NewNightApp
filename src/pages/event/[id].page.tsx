import { GlobalButton } from "@/components/Global/Button";
import { Header } from "@/components/Global/Header";
import { LoadingIn } from "@/components/Global/Loading/In";
import { LoadingOut } from "@/components/Global/Loading/Out";
import { StaticImage } from "@/components/Global/StaticImg";
import { Tabs } from "@/components/Global/Tabs";
import { GlobalTitle } from "@/components/Global/Title";
import { Buttons } from "@/components/Pages/Event/Buttons";
import { Description } from "@/components/Pages/Event/Description";
import { Individual } from "@/components/Pages/Event/Individual";
import { StepOne } from "@/components/Pages/Event/Tickets/Steps/1";
import { StepTwo } from "@/components/Pages/Event/Tickets/Steps/2";
import { Video } from "@/components/Pages/Event/Video";
import { useCart } from "@/context/cart";
import { getAPI, loginVerifyAPI } from "@/lib/axios";
import Theme from "@/styles/themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import {
  Banner,
  Container,
  DetailImg,
  FirstContainer,
  Label,
  Nav,
} from "./styles";

export default function Event() {
  const router = useRouter();
  const { cart } = useCart();
  const { id } = useRouter().query as any;
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");
  const [eventDetails, setEventDetails] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(100);
  const [logged, setLogged] = useState(false);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  async function getEventDetails() {
    const connect = await getAPI(`/event/${id}`);
    if (connect.status !== 200) {
      return alert(connect.body);
    }
    setEventDetails(connect.body);
    return setLoading(false);
  }

  useEffect(() => {
    if (id) {
      getEventDetails();
    }
  }, [id]);

  async function handleVerify() {
    const verify = await loginVerifyAPI();
    if (verify === 200) {
      setLogged(true);
    }
  }

  useEffect(() => {
    handleVerify();
  }, []);

  const handleNext = () => {
    if (eventDetails.products.length === 0) {
    }
    if (type !== "") {
      return setType("");
    }
    if (step === 1) {
      return setStep(step + 1);
    }
    if (
      step === 2 &&
      type === "" &&
      cart.ticket.ticket.length === 0 &&
      cart.product.length === 0
    ) {
      return alert("Selecione um (ou mais) Produto(s)");
    }
    if (
      (step === 2 && type === "" && cart.ticket.ticket.length !== 0) ||
      cart.product.length !== 0
    ) {
      if (logged) {
        return router.push("/checkout");
      } else {
        alert("Realize o Login antes de Prosseguir");
        return router.push("/login?&page=checkout");
      }
    }
  };

  return (
    <Container>
      {loading ? (
        <LoadingIn />
      ) : (
        <>
          <LoadingOut />
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
              {width >= 768 ? (
                <>
                  <Individual
                    date={eventDetails.date}
                    local={eventDetails.local}
                    city={eventDetails.city.name}
                    state={eventDetails.city.state}
                  />
                  <br />
                  <Buttons
                    instagram={eventDetails.instagram}
                    whatsapp={eventDetails.whatsapp}
                    maps={eventDetails.googleLink}
                  />
                </>
              ) : (
                <></>
              )}
              <br />
              <DetailImg
                src={eventDetails.photo_location}
                width={1000}
                height={400}
                alt=""
              />
              <br />
              <GlobalTitle
                title={eventDetails.name}
                marginLeft={width < 768 ? "2.5%" : "5%"}
              />
            </Stack>
            <br />
            {width < 768 ? (
              <>
                <Buttons
                  instagram={eventDetails.instagram}
                  whatsapp={eventDetails.whatsapp}
                  maps={eventDetails.googleLink}
                />
                <br />
                <Individual
                  date={eventDetails.date}
                  local={eventDetails.local}
                  city={eventDetails.city.name}
                  state={eventDetails.city.state}
                />
                <br />

                {step === 1 && eventDetails.ticketSlots.length === 0 ? (
                  <Label>Nenhum Ingresso Disponível</Label>
                ) : step === 1 && eventDetails.ticketSlots.length !== 0 ? (
                  <>
                    <Stack
                      direction="horizontal"
                      gap={3}
                      style={{ marginLeft: "4%", marginTop: "5%" }}
                    >
                      <Tabs active={true} />
                      <Tabs active={false} />
                      <Tabs active={false} />
                    </Stack>
                    <StepOne
                      ticket={eventDetails.ticketSlots}
                      id={eventDetails.ticketSlots[0].id}
                    />
                  </>
                ) : step === 2 && eventDetails.products.length === 0 ? (
                  <Label>Nenhum Produto Disponível</Label>
                ) : (
                  <>
                    <Stack
                      direction="horizontal"
                      gap={3}
                      style={{ marginLeft: "4%", marginTop: "5%" }}
                    >
                      <Tabs active={true} />
                      <Tabs active={true} />
                      <Tabs active={false} />
                    </Stack>
                    <StepTwo
                      product={eventDetails.products}
                      type={type}
                      setType={setType}
                    />
                  </>
                )}

                <br />
                <Nav
                  direction="horizontal"
                  gap={3}
                  style={{ alignSelf: "center" }}
                >
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
                    content={
                      step === 1 || type !== "" ? "Próximo" : "Finalizar"
                    }
                    background={`${Theme.color.next}`}
                    color={`${Theme.color.gray_10}`}
                    width="45%"
                    height="auto"
                    fontSize={18}
                    onClick={handleNext}
                    disabled={
                      eventDetails.ticketSlots.length === 0 &&
                      eventDetails.products.length === 0
                        ? true
                        : false
                    }
                  />
                </Nav>
              </>
            ) : (
              <>
                <Stack
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                  }}
                >
                  <br />
                  <br />

                  {step === 1 && eventDetails.ticketSlots.length === 0 ? (
                    <Label>Nenhum Ingresso Disponível</Label>
                  ) : step === 1 && eventDetails.ticketSlots.length !== 0 ? (
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
                        id={eventDetails.ticketSlots[0].id}
                        ticket={eventDetails.ticketSlots}
                      />
                    </>
                  ) : step === 2 && eventDetails.products.length === 0 ? (
                    <Label>Nenhum Produto Disponível</Label>
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
                        product={eventDetails.products}
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
                      content={
                        step === 1 || type !== "" ? "Próximo" : "Finalizar"
                      }
                      background={`${Theme.color.confirmation}`}
                      color={`${Theme.color.gray_10}`}
                      width="45%"
                      height="auto"
                      fontSize={18}
                      onClick={handleNext}
                      disabled={
                        eventDetails.ticketSlots.length === 0 &&
                        eventDetails.products.length === 0
                          ? true
                          : false
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
          <Description description={eventDetails.description[0]} />
          <br />
          <br />
          <Video video={eventDetails.video} />
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
          {eventDetails.description.length === 1 ? (
            <></>
          ) : (
            eventDetails.description
              .slice(1)
              .map((item: { name: string; description: string }) => (
                <>
                  <Description description={item} />
                  <br />
                  <br />
                </>
              ))
          )}
        </>
      )}
    </Container>
  );
}
