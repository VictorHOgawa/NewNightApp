import { Container, Form, Label, Logo } from "./styles";

export function LoginContainer() {
  return (
    <Container>
      <Logo src="/Global/FullLogo.svg" width={500} height={250} alt="" />
      <br />
      <Label>CPF</Label>
      <Form />
      <br />
      <Label>SENHA</Label>
      <Form />
    </Container>
  );
}
