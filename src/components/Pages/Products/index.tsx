import { GlobalTitle } from "@/components/Global/Title";
import {
  Button,
  Card,
  Container,
  Details,
  Dets,
  Icon,
  Icons,
  Match,
  Text,
  ProductImage,
  Top,
  XLogo,
} from "./styles";
import { Modal, Stack } from "react-bootstrap";
import { Calendar } from "@/components/Global/Calendar";
import Theme from "@/styles/themes";
import { GlobalButton } from "@/components/Global/Button";
import { More } from "@/components/Global/More";
import { useState, useEffect } from "react";
import { Header } from "@/components/Global/Header";
import { Back } from "@/components/Global/Back";
import { useRouter } from "next/router";
import { authGetAPI } from "@/lib/axios";
import moment from "moment";
import "moment/locale/pt-br";
import QRCode from "react-qr-code";

interface ProductProps {
  events: any;
}

export function ProductCards({ events }: ProductProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [qrCode, setQrCode] = useState<any>({ id: "", type: "" });

  const handlePay = (item: any) => {
    console.log("item.id: ", item.id);
    setId(item.id);
    setType("product");
    setShow(true);
  };

  useEffect(() => {
    setQrCode({
      id: id,
      type: type,
    });
  }, [id, type]);

  return (
    <Container>
      <GlobalTitle title="Meus Produtos" marginTop="10%" />
      <br />
      <Stack gap={0}>
        {events.map((item: any) => (
          <>
            <Card>
              <Details>
                <ProductImage src={item.photo} width={80} height={80} alt="" />
                <Dets gap={1}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                      lineHeight: 1,
                    }}
                  >
                    {item.eventName}
                  </Text>
                  <Text>
                    <Icons
                      src="/Global/Icons/Clock.svg"
                      width={20}
                      height={20}
                      alt=""
                    />{" "}
                    {""}
                    <strong>{moment(item.eventDate).format("LL")}</strong> {""}{" "}
                    às {""}
                    {moment(item.eventDate).format("LT")}
                  </Text>
                  <Text>
                    <Icons
                      src="/Global/Icons/LocationPin.svg"
                      width={20}
                      height={20}
                      alt=""
                    />{" "}
                    {""}
                    <strong>{item.eventLocal}</strong> {""} {item.city.name} /{" "}
                    {item.city.state}
                  </Text>
                </Dets>
              </Details>
              <Stack
                gap={2}
                direction="horizontal"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <GlobalButton
                  content="Produtos"
                  background={`${Theme.color.confirmation}`}
                  color={`${Theme.color.background}`}
                  width="auto"
                  fontSize={12}
                  height="auto"
                  style={{ fontWeight: "bold" }}
                  onClick={handleOpen}
                />
                <Match
                  src="/Purchased/Match.svg"
                  width={100}
                  height={100}
                  alt=""
                />
              </Stack>
            </Card>
            <br />
            <Modal show={open} onHide={handleClose} centered>
              <Modal.Body style={{ background: `${Theme.color.background}` }}>
                <Top>
                  <Back onClick={handleClose} />
                  <XLogo
                    src="/Global/logoHorizontal.svg"
                    width={1000}
                    height={300}
                    alt=""
                  />
                </Top>
                <GlobalTitle title={item.eventName} marginTop="10%" />
                <br />
                <Stack gap={0}>
                  {item.products.map((item: any) => (
                    <>
                      <Card>
                        <Details>
                          <ProductImage
                            src={item.photo_location}
                            width={80}
                            height={80}
                            alt=""
                          />
                          <Dets gap={1}>
                            <Text
                              style={{
                                fontWeight: "bold",
                                fontSize: 15,
                                lineHeight: 1,
                              }}
                            >
                              {item.name}
                            </Text>
                          </Dets>
                        </Details>
                        <Stack
                          gap={2}
                          direction="horizontal"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <GlobalButton
                            content="Excluir"
                            background={`${Theme.color.primary_40}`}
                            color={`${Theme.color.gray_10}`}
                            width="auto"
                            fontSize={10}
                            height="auto"
                          />
                          <GlobalButton
                            content="Pagamento"
                            background={`${Theme.color.confirmation}`}
                            color={`${Theme.color.background}`}
                            width="auto"
                            fontSize={12}
                            height="auto"
                            style={{ fontWeight: "bold" }}
                            onClick={() => handlePay(item)}
                          />
                          <Match
                            src="/Purchased/Match.svg"
                            width={100}
                            height={100}
                            alt=""
                          />
                        </Stack>
                      </Card>
                      <br />
                    </>
                  ))}
                </Stack>
              </Modal.Body>
            </Modal>
          </>
        ))}
      </Stack>
      <a
        style={{ textDecoration: "none", alignSelf: "center" }}
        href="https://www.youtube.com/embed/enYuqLBiisw"
        target="blank"
        rel="noreferrer"
      >
        <Button>
          <Icon src="/Checkout/Video.svg" width={20} height={20} alt="" />{" "}
          Dúvidas? Veja esse Rápido Vídeo
        </Button>
      </a>
      <More type={"product"} />
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <QRCode value={JSON.stringify(qrCode)} />
          <br />
          <GlobalButton
            content="Voltar"
            background={Theme.color.primary_80}
            color={Theme.color.gray_10}
            width="auto"
            height="auto"
            onClick={() => setShow(false)}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
