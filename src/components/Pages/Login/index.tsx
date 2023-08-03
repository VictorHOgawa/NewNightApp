import { Stack } from "react-bootstrap";
import { Container, Forgot, Form, Label, Logo } from "./styles";
import { GlobalButton } from "@/components/Global/Button";
import Theme from "@/styles/themes";

export function LoginContainer() {
  return (
    <Container>
      <Label>CPF</Label>
      <Form />
      <br />
      <Label>SENHA</Label>
      <Form />
      <Forgot>Esqueci a Senha.</Forgot>
      <Stack
        gap={2}
        style={{
          alignSelf: "center",
          display: "flex",
          width: "50%",
        }}
      >
        <GlobalButton
          content="Entrar"
          background={`${Theme.color.confirmation}`}
          color={`${Theme.color.gray_100}`}
          width="100%"
          height="auto"
        />
        <GlobalButton
          content="Cadastro"
          background={`${Theme.color.primary_60}`}
          color={`${Theme.color.gray_100}`}
          width="100%"
          height="auto"
          disabled
        />
      </Stack>
    </Container>
  );
}
