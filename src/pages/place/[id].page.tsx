import { GlobalButton } from "@/components/Global/Button";
import { Header } from "@/components/Global/Header";
import { StaticImage } from "@/components/Global/StaticImg";
import { GlobalTitle } from "@/components/Global/Title";
import { Buttons } from "@/components/Pages/Place/Buttons";
import { Description } from "@/components/Pages/Place/Description";
import { Individual } from "@/components/Pages/Place/Individual";
import { Music } from "@/components/Pages/Place/Music";
import { getAPI } from "@/lib/axios";
import Theme from "@/styles/themes";
import "moment/locale/pt-br";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Banner, Container, DetailImg, FirstContainer, Nav } from "./styles";

export default function Place() {
  const router = useRouter();
  const { id } = useRouter().query as any;
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState<any>();

  async function getPlaceDetails() {
    const connect = await getAPI(`/places/${id}`);
    console.log("connect: ", connect);
    if (connect.status === 200) {
      setPlace(connect.body.place);
      return setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      getPlaceDetails();
    }
  }, [id]);

  const [step, setStep] = useState(1);
  const [type, setType] = useState("");
  const [width, setWidth] = useState(100);
  const [isOpen, setIsOpen] = useState(false);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // useEffect(() => {
  //   function formatTime() {
  //     const currentDay = parseInt(moment().format("d")) - 1;
  //     const currentTime = moment().format("HH:mm");

  //     const currentOpenTime = place.openTime.find((day: any) => {
  //       return day.day === currentDay;
  //     });

  //     if (currentOpenTime) {
  //       if (
  //         moment(currentTime, "HH:mm").isSameOrAfter(
  //           moment(currentOpenTime.open_time, "HH:mm")
  //         ) &&
  //         moment(currentTime, "HH:mm").isSameOrBefore(
  //           moment(currentOpenTime.close_time, "HH:mm")
  //         )
  //       ) {
  //         console.log("hora aberta");
  //         setIsOpen(true);
  //       }
  //     }
  //   }

  //   formatTime();
  // }, []);
  return (
    <Container>
      {loading ? (
        <></>
      ) : (
        <>
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
              <div style={{ width: "95%", marginLeft: "2.5%" }}>
                <Swiper slidesPerView={1}>
                  {place.photo.map((item: any) => (
                    <SwiperSlide>
                      <DetailImg
                        src={item.photo_location}
                        width={1000}
                        height={400}
                        alt=""
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <br />
              <br />
              <GlobalTitle
                title={place.name}
                marginLeft={width < 768 ? "2.5%" : "5%"}
              />
            </Stack>
          </FirstContainer>
          <br />
          {width < 768 ? (
            <>
              <Buttons
                instagram={place.instagram}
                whatsapp={place.whatsapp}
                maps={place.location}
              />
              <br />
              <Individual
                date={place.date}
                address={place.address}
                city={place.city}
                openTime={place.openTime}
              />
              <br />
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
                  date={place.date}
                  address={place.address}
                  city={place.city}
                  openTime={place.openTime}
                />
                <br />
                <Buttons
                  instagram={place.instagram}
                  whatsapp={place.whatsapp}
                  maps={place.location}
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
          <br />
          {width >= 768 ? (
            <>
              <Nav
                direction="horizontal"
                gap={2}
                style={{ alignSelf: "center" }}
              >
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
          {place.music ? (
            <>
              <Music music={place.music} />
            </>
          ) : (
            <></>
          )}
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
            place.description
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
