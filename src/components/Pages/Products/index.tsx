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
  ProductImage,
  Top,
  XLogo,
} from "./styles";
import { Modal, Stack } from "react-bootstrap";
import { Calendar } from "@/components/Global/Calendar";
import Theme from "@/styles/themes";
import { GlobalButton } from "@/components/Global/Button";
import { More } from "@/components/Global/More";
import { useState } from "react";
import { Header } from "@/components/Global/Header";
import { Back } from "@/components/Global/Back";
import { useRouter } from "next/router";

export function ProductCards() {
  const router = useRouter();
  const Products = [1, 2, 3];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [add, setAdd] = useState(false);
  const handleAdd = () => setAdd(true);
  const handleRemove = () => setAdd(false);

  return (
    <Container>
      <GlobalTitle title="Meus Produtos" marginTop="10%" />
      <br />
      <Stack gap={0}>
        {Products.map((item) => (
          <>
            <Card>
              <Details>
                <ProductImage
                  src="/Events/Event1.svg"
                  width={80}
                  height={80}
                  alt=""
                />
                <Dets gap={2}>
                  <Text
                    style={{
                      marginLeft: "10%",
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    Nome do Evento
                  </Text>
                  <Text>
                    <Icons
                      src="/Global/Icons/Clock.svg"
                      width={20}
                      height={20}
                      alt=""
                    />{" "}
                    {""}
                    <strong>12 de julho de 2023</strong> {""} às {""}
                    21:00
                  </Text>
                  <Text>
                    <Icons
                      src="/Global/Icons/LocationPin.svg"
                      width={20}
                      height={20}
                      alt=""
                    />{" "}
                    {""}
                    <strong>Cerveja de Garrafa</strong> {""} Sinop/MT
                  </Text>
                </Dets>
                <Area>
                  Área:{" "}
                  <strong style={{ color: `${Theme.color.primary_60}` }}>
                    Pista
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
                <GlobalTitle title="Evento X" marginTop="10%" />
                <br />
                <Stack gap={0}>
                  {Products.map((item) => (
                    <>
                      <Card>
                        <Details>
                          <ProductImage
                            src="/Events/Event1.svg"
                            width={80}
                            height={80}
                            alt=""
                          />
                          <Dets gap={2}>
                            <Text
                              style={{
                                marginLeft: "10%",
                                fontWeight: "bold",
                                fontSize: 15,
                              }}
                            >
                              Nome do Produto
                            </Text>
                            <Text>
                              <Icons
                                src="/Global/Icons/Clock.svg"
                                width={20}
                                height={20}
                                alt=""
                              />{" "}
                              {""}
                              <strong>12 de julho de 2023</strong> {""} às {""}
                              21:00
                            </Text>
                            <Text>
                              <Icons
                                src="/Global/Icons/LocationPin.svg"
                                width={20}
                                height={20}
                                alt=""
                              />{" "}
                              {""}
                              <strong>Cerveja de Garrafa</strong> {""} Sinop/MT
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
      <More onClick={handleAdd} />
      <Modal show={add} onHide={handleRemove}>
        <Modal.Body>Test</Modal.Body>
      </Modal>
    </Container>
  );
}
