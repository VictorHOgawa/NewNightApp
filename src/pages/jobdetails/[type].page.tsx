import { Ad } from "@/components/Global/Ad";
import { Back } from "@/components/Global/Back";
import { GlobalButton } from "@/components/Global/Button";
import { Header } from "@/components/Global/Header";
import { XLogo, XTop } from "@/components/Global/Header/styles";
import { LoadingFull } from "@/components/Global/Loading/Full";
import { More } from "@/components/Global/More";
import { GlobalTitle } from "@/components/Global/Title";
import Theme from "@/styles/themes";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal, Stack } from "react-bootstrap";
import {
  Container,
  Content,
  Help,
  Icon,
  Img,
  Info,
  Input,
  JobCard,
  Text,
  Values,
} from "./styles";

export default function JobDetails() {
  const { type } = useRouter().query as any;
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <LoadingFull />
      <Header />
      <Ad />
      <br />
      <br />
      <Content>
        <GlobalTitle title={"Jobs - " + type} />
        <JobCard>
          <Stack direction="horizontal" style={{ alignItems: "center" }}>
            <Img src="/Events/Event1.svg" width={50} height={50} alt="" />
            <Stack style={{ marginLeft: "5%" }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                Nome do Evento
              </Text>
              <Text>
                <Icon
                  src="/Global/Icons/Clock.svg"
                  width={15}
                  height={15}
                  alt=""
                />
                {""}
                <Text style={{ fontWeight: "bold" }}>
                  {""} 15 de Julho de 2023
                </Text>{" "}
                às 21:00
              </Text>
              <Text>
                <Icon
                  src="/Global/Icons/LocationPin.svg"
                  width={15}
                  height={15}
                  alt=""
                />
                <Text style={{ fontWeight: "bold" }}>
                  {""} Cerveja de Garrafa
                </Text>{" "}
                Sinop/MT
              </Text>
            </Stack>
          </Stack>
          <GlobalButton
            content={type === "Promoters" ? "Pegar Código" : "Ler QrCode"}
            background={`${Theme.color.confirmation}`}
            color={`${Theme.color.background}`}
            height="auto"
            width="40%"
            onClick={type === "Promoters" ? () => setOpen(true) : () => {}}
            style={{ alignSelf: "center" }}
          />
        </JobCard>
      </Content>
      <Help>
        <Icon src="/Checkout/Video.svg" width={12} height={12} alt="" />
        {""}Dúvidas? Veja esse Rápido Vídeo
      </Help>

      <More
        type={
          type === "Promoters"
            ? "promoter"
            : type === "Portaria"
            ? "portaria"
            : ""
        }
      />
      <Modal show={open} onHide={() => setOpen(false)} centered>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            background: `${Theme.color.primary_20}`,
          }}
        >
          <XTop>
            <Back />
            <XLogo
              src="/Global/logoHorizontal.svg"
              width={1000}
              height={300}
              alt=""
            />
          </XTop>
          <br />
          <GlobalTitle
            title="Benefício do Seu Cupom:"
            background={`${Theme.color.background}`}
          />
          <Stack gap={1} style={{ marginTop: "2%" }}>
            <Info>
              <Text>Quantidade Disponível</Text>
              <Values>150 Cupons</Values>
            </Info>
            <Info>
              <Text>Desconto Disponível</Text>
              <Values>20%</Values>
            </Info>
            <Info>
              <Text>Data de Expiração</Text>
              <Values>14/09</Values>
            </Info>
          </Stack>
          <br />
          <br />
          <GlobalTitle
            title="Insira o Código que Desejar"
            background={`${Theme.color.background}`}
          />
          <Input placeholder="Exemplo: Carol20" />
          <br />
          <br />
          <GlobalButton
            content="Salvar e Seguir"
            background={`${Theme.color.confirmation}`}
            color={`${Theme.color.secondary_100}`}
            width="60%"
            height="auto"
            style={{ alignSelf: "center", marginTop: "5%" }}
            onClick={() => setOpen(false)}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}
