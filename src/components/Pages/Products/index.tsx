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
  QrCodeImage,
  Copy,
} from "./styles";
import { Modal, Overlay, Stack, Tooltip } from "react-bootstrap";
import Theme from "@/styles/themes";
import { GlobalButton } from "@/components/Global/Button";
import { More } from "@/components/Global/More";
import { useState, useEffect, useRef } from "react";
import { Back } from "@/components/Global/Back";
import { useRouter } from "next/router";
import { authDeleteAPI, authGetAPI } from "@/lib/axios";
import moment from "moment";
import "moment/locale/pt-br";
import QRCode from "react-qr-code";
import { AnyRecord } from "dns";

interface ProductProps {
  events: any;
  reload: any;
}

export function ProductCards({ events, reload }: ProductProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  const [qrCode, setQrCode] = useState<any>({ id: "", type: "" });
  const [qrCodeImage, setQrCodeImage] = useState<any>();
  const [showQrCodeImage, setShowQrCodeImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [openTransfer, setOpenTransfer] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const target = useRef(null);
  const [eventCurrentIndex, setEventCurrentIndex] = useState(1);

  console.log("events: ", events);
  console.log("currentIndex: ", currentIndex);
  const handlePay = async (item: any, index: number) => {
    setCurrentIndex(index);
    if (item.status === "ACTIVE") {
      setId(item.id);
      setType("product");
      setShow(true);
    }
    if (item.status === "INACTIVE") {
      setLoading(true);
      const connect = await authGetAPI(`/user/product/payment/${item.id}`);
      if (connect.status !== 200) {
        setLoading(false);
        return alert(connect.body);
      }
      setQrCodeImage(connect.body.payment);
      setShowQrCodeImage(true);
      return setLoading(false);
    }
  };

  const handleModify = async (item: any, index: number, eventIndex: number) => {
    setCurrentIndex(index);
    setEventCurrentIndex(eventIndex);
    if (item.status === "ACTIVE") {
      return setOpenTransfer(true);
    }
    if (item.status === "INACTIVE" || "DISABLED") {
      setLoading1(true);
      const connect = await authDeleteAPI(`/user/product/${item.id}`);
      if (connect.status === 200) {
        reload();
        return setLoading1(false);
      }
    }
  };
  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(
      events[eventCurrentIndex].products[currentIndex].transfer_code
    );
    setTimeout(() => setCopied(false), 1000);
  };

  const handleCopy1 = () => {
    setCopied1(true);
    navigator.clipboard.writeText(JSON.stringify(qrCode));
    setTimeout(() => setCopied1(false), 1000);
  };

  const handleCopy2 = () => {
    setCopied2(true);
    navigator.clipboard.writeText(qrCodeImage.payload);
    setTimeout(() => setCopied2(false), 1000);
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
        {events.map((item: any, eventIndex: number) => (
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
                  {item.products.map((item: any, index: number) => (
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
                            content={
                              item.status === "ACTIVE"
                                ? "Transferir"
                                : "Excluir"
                            }
                            background={`${Theme.color.primary_40}`}
                            color={`${Theme.color.gray_10}`}
                            width="auto"
                            fontSize={10}
                            height="auto"
                            onClick={() =>
                              handleModify(item, index, eventIndex)
                            }
                            loading={loading1 && currentIndex === index}
                          />
                          <GlobalButton
                            content={
                              item.status === "ACTIVE" ? "QrCode" : "Pagamento"
                            }
                            background={`${Theme.color.confirmation}`}
                            color={`${Theme.color.background}`}
                            width="auto"
                            fontSize={12}
                            height="auto"
                            style={{ fontWeight: "bold" }}
                            onClick={() => handlePay(item, index)}
                            loading={loading && currentIndex === index}
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
            <Modal
              show={showQrCodeImage}
              onHide={() => setShowQrCodeImage(false)}
              centered
            >
              {qrCodeImage ? (
                <Modal.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <QrCodeImage
                    src={`data:image/png;base64, ${qrCodeImage.encodedImage}`}
                  />
                  <Copy ref={target} onClick={handleCopy2}>
                    Copiar
                  </Copy>
                  <Overlay
                    target={target.current}
                    show={copied2}
                    placement="bottom"
                  >
                    {(props) => <Tooltip {...props}>Código Copiado</Tooltip>}
                  </Overlay>
                  <GlobalButton
                    content="Voltar"
                    background={Theme.color.primary_80}
                    color={Theme.color.gray_10}
                    width="auto"
                    height="auto"
                    onClick={() => setShowQrCodeImage(false)}
                    style={{ marginTop: "5%" }}
                  />
                </Modal.Body>
              ) : (
                <></>
              )}
            </Modal>
            <Modal
              show={openTransfer}
              onHide={() => setOpenTransfer(false)}
              centered
            >
              <Modal.Body
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Copy ref={target} onClick={handleCopy}>
                  Copiar
                </Copy>
                <Overlay
                  target={target.current}
                  show={copied}
                  placement="bottom"
                >
                  {(props) => <Tooltip {...props}>Código Copiado</Tooltip>}
                </Overlay>
                <GlobalButton
                  content="Voltar"
                  background={Theme.color.primary_80}
                  color={Theme.color.gray_10}
                  width="auto"
                  height="auto"
                  onClick={() => setOpenTransfer(false)}
                  style={{ marginTop: "5%" }}
                />
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
          <Copy ref={target} onClick={handleCopy1}>
            Copiar
          </Copy>
          <Overlay target={target.current} show={copied1} placement="bottom">
            {(props) => <Tooltip {...props}>Código Copiado</Tooltip>}
          </Overlay>
          <GlobalButton
            content="Voltar"
            background={Theme.color.primary_80}
            color={Theme.color.gray_10}
            width="auto"
            height="auto"
            onClick={() => setShow(false)}
            style={{ marginTop: "5%" }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
