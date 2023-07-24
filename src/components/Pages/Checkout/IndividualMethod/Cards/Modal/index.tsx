import {
  Back,
  Body,
  Card,
  Container,
  Form,
  Text,
  Title,
  TitleLine,
} from "./styles";
import { Col, Stack } from "react-bootstrap";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";

interface ModalProps {
  show: any;
  close: any;
}
export function CardModal({ show, close }: ModalProps) {
  return (
    <Container show={show} onHide={close} centered>
      <Body>
        <Back
          src="/Global/Icons/Back.svg"
          width={20}
          height={20}
          alt=""
          onClick={close}
        />
        <Title>Cartão de crédito</Title>
        <Card
          src="/Checkout/NightAppCard.svg"
          width={1000}
          height={600}
          alt=""
        />
        <br />
        <TitleLine>
          <Text>Nome do Cartão</Text>
        </TitleLine>
        <Form />
        <br />
        <TitleLine>
          <Text>Número do Cartão</Text>
        </TitleLine>
        <Form />
        <Stack
          gap={1}
          direction="horizontal"
          style={{
            display: "flex",
            width: "95%",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <Col>
            <TitleLine>
              <Text>Expiração</Text>
            </TitleLine>
            <Form />{" "}
          </Col>
          <Col xs={{ span: 4, offset: 2 }}>
            <TitleLine>
              <Text>CCV</Text>
            </TitleLine>
            <Form />
          </Col>
        </Stack>
        <Stack
          gap={5}
          direction="horizontal"
          style={{
            display: "flex",
            alignSelf: "center",
            width: "95%",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <GlobalButton
            content="Ajuda no Preenchimento"
            background={`${Theme.color.background}`}
            color={`${Theme.color.primary_60}`}
            width="40%"
            height="6vh"
            fontSize="10"
          />
          <GlobalButton
            content="Próximo"
            background={`${Theme.color.confirmation}`}
            color={`${Theme.color.background}`}
            width="40%"
            height="6vh"
            fontSize="15"
          />
        </Stack>
      </Body>
    </Container>
  );
}
