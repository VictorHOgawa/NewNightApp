import { Header } from "@/components/Global/Header";
import { Container } from "./styles";
import { Back } from "@/components/Global/Back";
import { Purchased } from "@/components/Pages/Profile/Purchased";
import { Info } from "@/components/Pages/Profile/Info";
import { Support } from "@/components/Global/Support";
import { ButtonGroup, Stack } from "react-bootstrap";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";

export default function Profile() {
  return (
    <Container>
      <Header page="main" />
      <br />
      <Stack
        direction="horizontal"
        gap={2}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10%",
          marginTop: "-5%",
        }}
      >
        <GlobalButton
          content="Entrar"
          background={`${Theme.color.primary_80}`}
          color={`${Theme.color.gray_10}`}
          width="45%"
          height="auto"
          fontSize={18}
        />
        <GlobalButton
          content="Se Cadastrar"
          background={`${Theme.color.primary_80}`}
          color={`${Theme.color.gray_10}`}
          width="45%"
          height="auto"
          fontSize={18}
        />
      </Stack>
      <br />
      <Purchased />
      <br />
      <br />
      <Info />
      <br />
      <Support />
    </Container>
  );
}
