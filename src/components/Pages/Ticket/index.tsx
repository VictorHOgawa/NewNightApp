import { GlobalTitle } from "@/components/Global/Title";
import {
  Area,
  Button,
  Card,
  Container,
  Details,
  Dets,
  Icon,
  Icons,
  Match,
  Text,
  TicketImage,
} from "./styles";
import { Modal, Stack } from "react-bootstrap";
import { Calendar } from "@/components/Global/Calendar";
import Theme from "@/styles/themes";
import { GlobalButton } from "@/components/Global/Button";
import { More } from "@/components/Global/More";
import { useEffect, useState } from "react";
import { authGetAPI } from "@/lib/axios";
import moment from "moment";
import "moment/locale/pt-br";
import QRCode from "react-qr-code";
import { stringify } from "querystring";

interface TicketProps {
  tickets: any;
}

export function TicketCards({ tickets }: TicketProps) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [qrCode, setQrCode] = useState<any>({ id: "", type: "" });
  const handlePay = (item: any) => {
    if (item.status === "ACTIVE") {
      console.log("entrou");
      setId(item.id);
      setType("ticket");
      setShow(true);
    }
  };

  useEffect(() => {
    setQrCode({
      id: id,
      type: type,
    });
  }, [id, type]);
  return (
    <Container>
      <GlobalTitle title="Meus Ingressos" marginTop="15%" />
      <br />
      <Stack gap={0}>
        {tickets.map((item: any) => (
          <>
            <Card>
              <Details>
                <TicketImage
                  src={item.event.photo_location}
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
                    {item.event.name}
                  </Text>
                  <Text>
                    <Icons
                      src="/Global/Icons/Clock.svg"
                      width={20}
                      height={20}
                      alt=""
                    />{" "}
                    {""}
                    <strong>{moment(item.event.date).format("LL")}</strong> {""}{" "}
                    às {""}
                    {moment(item.event.date).format("LT")}
                  </Text>
                  <Text>
                    <Icons
                      src="/Global/Icons/LocationPin.svg"
                      width={20}
                      height={20}
                      alt=""
                    />{" "}
                    {""}
                    <strong>{item.event.local}</strong> {""}
                    {item.event.city.name} / {item.event.city.state}
                  </Text>
                </Dets>
                <Area>
                  Área:{" "}
                  <strong style={{ color: `${Theme.color.primary_60}` }}>
                    {item.ticket.name}
                  </strong>
                </Area>
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
                  content={item.status === "ACTIVE" ? "Transferir" : "Excluir"}
                  background={`${Theme.color.primary_40}`}
                  color={`${Theme.color.gray_10}`}
                  width="auto"
                  fontSize={10}
                  height="auto"
                />
                <GlobalButton
                  content={item.status === "ACTIVE" ? "QrCode" : "Pagamento"}
                  background={`${Theme.color.confirmation}`}
                  color={`${Theme.color.background}`}
                  width="auto"
                  fontSize={10}
                  height="auto"
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
      <a
        style={{ alignSelf: "center", textDecoration: "none" }}
        href="https://www.youtube.com/embed/enYuqLBiisw"
        target="blank"
        rel="noreferrer"
      >
        <Button>
          <Icon src="/Checkout/Video.svg" width={20} height={20} alt="" />{" "}
          Dúvidas? Veja esse Rápido Vídeo
        </Button>
      </a>
      <More type={"ticket"} />
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <QRCode value={stringify(qrCode)} />
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
